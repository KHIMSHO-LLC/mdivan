import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mdivan.com";
  const languages = ["en", "es"];
  const pages = ["", "about", "contact", "privacy-policy", "terms-of-service"];

  const sitemap: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${page ? `/${page}` : ""}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    });
  });

  return sitemap;
}
