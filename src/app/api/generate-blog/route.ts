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
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    // 3. Pick a Topic
    const topic = SEO_TOPICS[Math.floor(Math.random() * SEO_TOPICS.length)];

    // 4. Generate Content via Gemini
    const prompt = `
      You are an expert content writer for MDIVAN, an elite recruitment agency connecting C-suite leaders with top Business Associates and Executive Assistants in Europe and America (USA).
      
      Write a professional, SEO-optimized blog post about: "${topic}".
      
      Requirements:
      - Tone: Professional, authoritative, yet accessible. Aim for HBR (Harvard Business Review) style.
      - Length: Approx 600-800 words per language.
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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean JSON (sometimes Gemini wraps in ```json ... ```)
    const cleanJson = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    const blogPost = JSON.parse(cleanJson);

    // Add metadata
    const finalPost = {
      ...blogPost,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      readTime: "5 min read",
      author: {
        name: "MDIVAN Insights",
        role: "Future of Work Experts",
        image: "/icon.png", // Using brand logo
      },
    };

    // 5. Commit to GitHub (Self-Update)
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const owner = process.env.GITHUB_OWNER || "giorgikhimshiashvili"; // Default fallback
    const repo = "mdivan"; // Assuming repo name
    const path = "src/lib/blog-data.ts";

    // Get current file
    const file = await octokit.request(
      `GET /repos/${owner}/${repo}/contents/${path}`
    );
    const content = Buffer.from(file.data.content, "base64").toString();
    const sha = file.data.sha;

    // Inject new post (Before the last closing bracket "];")
    // We assume the file ends with "];"
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
    console.error("Blog Generation Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
