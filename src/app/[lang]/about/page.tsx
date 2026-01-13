import type { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { AboutBody } from "./AboutBody";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://mdivan.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: dict.navigation.about,
                item: `https://mdivan.com/${lang}/about`,
              },
            ],
          }),
        }}
      />
      <AboutBody dict={dict} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: `${dict.navigation.about} - MDIVAN`,
    description: dict.about.missionDesc,
    alternates: {
      canonical: `/${lang}/about`,
    },
    openGraph: {
      title: `${dict.navigation.about} - MDIVAN`,
      description: dict.about.missionDesc,
      url: `https://mdivan.com/${lang}/about`,
    },
  };
}
