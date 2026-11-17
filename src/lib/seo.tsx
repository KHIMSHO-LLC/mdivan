import type { Metadata } from "next";
import { SITE_URL, to } from "./site";

/** Title, description, canonical, hreflang (en, es, x-default), Open Graph and Twitter for one page. */
export function pageMeta({
  lang,
  path = "/",
  title,
  description,
}: {
  lang: string;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const image = { url: `/og/${lang}.png`, width: 1200, height: 630, alt: title };
  return {
    title,
    description,
    alternates: {
      canonical: to(lang, path),
      languages: { en: to("en", path), es: to("es", path), "x-default": to("es", path) },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${to(lang, path)}`,
      siteName: "mdivan",
      locale: lang === "es" ? "es_ES" : "en_GB",
      alternateLocale: lang === "es" ? "en_GB" : "es_ES",
      type: "website",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
});

export const JsonLd = ({ data }: { data: unknown }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);
