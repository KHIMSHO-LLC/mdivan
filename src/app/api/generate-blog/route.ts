import { GoogleGenerativeAI } from "@google/generative-ai";
import { Octokit } from "octokit";
import { NextResponse } from "next/server";
import { SEO_TOPICS, formatBlogPostForInjection } from "@/lib/blog-manager";

// Prevent this route from being cached
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    // 1. Verify Secret (Basic security for Cron)
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Setup Gemini
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

    // Best Practice: List of models to try in order of preference (Balancing quality, speed, and quotas)
    // Based on your available models list
    const MODEL_CANDIDATES = [
      "gemini-2.0-flash-001", // Stable 2.0 Flash (Jan 2025) - Best balance
      "gemini-2.5-flash-lite", // Stable 2.5 Lite (July 2025) - High speed, low cost/quota usage
      "gemini-flash-latest", // Generic alias for latest stable Flash
      "gemini-2.0-flash", // Generic alias for 2.0 Flash
    ];

    // 3. Pick a Topic
    const topic = SEO_TOPICS[Math.floor(Math.random() * SEO_TOPICS.length)];

    // 4. Generate Content via Gemini (With Fallback Strategy)
    const prompt = `
      You are an expert content writer for MDIVAN, an elite recruitment agency connecting C-suite leaders with top Business Associates and Executive Assistants in Europe and America (USA).
      
      Write a professional, SEO-optimized blog post about: "${topic}".
      
      Requirements:
      - Tone: Professional, authoritative, yet accessible. Aim for HBR (Harvard Business Review) style.
      - Length: Approx 500 words per language. (Keep it concise to ensure generation speed).
      - Structure: Use HTML tags for formatting (<h2>, <h3>, <p>, <ul>, <li>). Do NOT use markdown.
      - Languages: Provide BOTH English (en) and Spanish (es) versions.
      - E-E-A-T: Include real-world examples or hypothetical case studies.
      - Call to Action: End with a subtle push to hire talent via MDIVAN.
      
      Output JSON format ONLY:
      {
        "title": { "en": "Draft Title", "es": "Título en Español" },
        "excerpt": { "en": "Summary...", "es": "Resumen..." },
        "content": { "en": "HTML content...", "es": "Contenido HTML..." },
        "slug": "english-url-friendly-slug"
      }
    `;

    let finalPost = null;
    let lastError = null;

    // Try models sequentially
    for (const modelName of MODEL_CANDIDATES) {
      try {
        console.log(`Attempting to generate blog with model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });

        // Timeout logic: If Gemini takes > 9 seconds, we might timeout Vercel (10s limit).
        // Note: We can't easily enforce timeout here without abort controller, but using Flash models helps.

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        if (!text) throw new Error("Empty response from AI");

        // Clean JSON
        const cleanJson = text
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        const blogPost = JSON.parse(cleanJson);

        // Add metadata
        finalPost = {
          ...blogPost,
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          readTime: "4 min read",
          author: {
            name: "MDIVAN Insights",
            role: "Future of Work Experts",
            image: "/icon.png",
          },
        };

        // If we got here, it worked! Break the loop.
        console.log(`Success with model: ${modelName}`);
        break;
      } catch (error: any) {
        console.error(`Failed with model ${modelName}:`, error.message);
        lastError = error;
        // Continue to next model...
      }
    }

    if (!finalPost) {
      throw new Error(`All models failed. Last error: ${lastError?.message}`);
    }

    // 5. Commit to GitHub (Self-Update)
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const owner = process.env.GITHUB_OWNER || "giorgikhimshiashvili";
    const repo = "mdivan";
    const path = "src/lib/blog-data.ts";

    // Get current file
    const file = await octokit.request(
      `GET /repos/${owner}/${repo}/contents/${path}`
    );
    const content = Buffer.from(file.data.content, "base64").toString();
    const sha = file.data.sha;

    // Inject new post (Before the last closing bracket "];")
    const newPostString = formatBlogPostForInjection(finalPost);
    const updatedContent = content.replace("];", `,${newPostString}\n];`);

    // push update
    await octokit.request(`PUT /repos/${owner}/${repo}/contents/${path}`, {
      message: `feat(blog): automated post "${finalPost.title}"`,
      content: Buffer.from(updatedContent).toString("base64"),
      sha: sha,
    });

    return NextResponse.json({ success: true, post: finalPost });
  } catch (error: any) {
    console.error("Blog Generation Detailed Error:", error);
    return NextResponse.json(
      {
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}
