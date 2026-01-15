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
    // Best Practice: List of models to try in order of preference (Balancing quality, speed, and quotas)
    // Based on your available models list
    const MODEL_CANDIDATES = [
      "gemini-2.5-flash-lite", // 1. Lite (Fastest, Best Quota for Free Tier)
      "gemini-2.0-flash-001", // 2. Stable 2.0 Flash (Jan 2025) - Best balance
      "gemini-flash-latest", // 3. Generic alias for latest stable Flash
      "gemini-2.0-flash", // 4. Generic alias for 2.0 Flash
    ];

    // 3. Pick a Topic
    const topic = SEO_TOPICS[Math.floor(Math.random() * SEO_TOPICS.length)];

    // 4. Generate Content via Gemini (With Fallback Strategy)
    const prompt = `
      You are an expert content writer for MDIVAN.
      Write a professional blog post about: "${topic}".
      
      Requirements:
      - Length: ~500 words/language.
      - Structure: HTML tags only.
      - Languages: English (en) and Spanish (es).
      - STRICT JSON OUTPUT: You MUST output valid JSON. All keys must be double-quoted. No trailing commas.
      
      Output Schema:
      {
        "title": { "en": "Title", "es": "Título" },
        "excerpt": { "en": "Summary", "es": "Resumen" },
        "content": { "en": "HTML...", "es": "HTML..." },
        "slug": "url-slug"
      }
    `;

    let finalPost = null;
    let lastError = null;

    // Try models sequentially
    for (const modelName of MODEL_CANDIDATES) {
      try {
        console.log(`Attempting to generate blog with model: ${modelName}`);
        const model = genAI.getGenerativeModel({
          model: modelName,
          generationConfig: { responseMimeType: "application/json" }, // Force JSON mode
        });

        // Timeout logic: If Gemini takes > 9 seconds, we might timeout Vercel (10s limit).
        // Note: We can't easily enforce timeout here without abort controller, but using Flash models helps.

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        if (!text) throw new Error("Empty response from AI");

        // Advanced JSON Extraction & Cleaning
        let cleanJson = text;
        const firstBrace = cleanJson.indexOf("{");
        const lastBrace = cleanJson.lastIndexOf("}");

        if (firstBrace !== -1 && lastBrace !== -1) {
          cleanJson = cleanJson.substring(firstBrace, lastBrace + 1);
        }

        // Sanitize: formatting, newlines, bad chars
        cleanJson = cleanJson
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .replace(/[\u0000-\u0019]+/g, ""); // Remove control chars

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

    // Inject new post
    // Improved Logic: Use regex to find the closing bracket "];"
    // We capture optional whitespace and optional trailing comma before it.
    // This allows us to safely append ", NewPost" without creating double commas (,,).
    const newPostString = formatBlogPostForInjection(finalPost);

    // Regex finds: optional comma (,), optional whitespace (\s), then ];
    // We replace it with: , (to ensure separation), NewPost, ];
    const updatedContent = content.replace(
      /(,\s*)?];\s*$/,
      `,\n${newPostString}\n];`
    );

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
