import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

const PAGES: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, freq: "weekly" },
  { path: "/hire-talent", priority: 0.9, freq: "monthly" },
  { path: "/about", priority: 0.7, freq: "monthly" },
  { path: "/services/executive-assistant", priority: 0.7, freq: "monthly" },
  { path: "/services/business-associate", priority: 0.7, freq: "monthly" },
  { path: "/services/personal-assistant", priority: 0.7, freq: "monthly" },
  { path: "/services/operations-manager", priority: 0.7, freq: "monthly" },
  { path: "/services/software-developer", priority: 0.7, freq: "monthly" },
  { path: "/apply", priority: 0.8, freq: "monthly" },
  { path: "/blog", priority: 0.6, freq: "weekly" },
  { path: "/contact", priority: 0.5, freq: "yearly" },
  { path: "/privacy-policy", priority: 0.2, freq: "yearly" },
  { path: "/terms-of-service", priority: 0.2, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = Array.from(new Set(blogPosts.map((p) => p.slug)));
  const all = [
    ...PAGES,
    ...slugs.map((s) => ({ path: `/blog/${s}`, priority: 0.5, freq: "yearly" as const })),
  ];
  return all.flatMap(({ path, priority, freq }) =>
    (["en", "es"] as const).map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: freq,
      priority,
      alternates: {
        languages: { en: `${SITE_URL}/en${path}`, es: `${SITE_URL}/es${path}`, "x-default": `${SITE_URL}/es${path}` },
      },
    }))
  );
}
