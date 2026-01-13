import { ContactForm } from "@/components/ContactForm";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import type { Metadata } from "next";

export default async function HireTalentPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main className="min-h-screen pt-20">
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
                name: dict.contact.split.companies.title,
                item: `https://mdivan.com/${lang}/hire-talent`,
              },
            ],
          }),
        }}
      />
      <ContactForm
        dict={dict}
        forcedMode="hiring"
        title={dict.contact.split.companies.title}
        subtitle={dict.contact.split.companies.desc}
      />
    </main>
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
    title: `${dict.contact.split.companies.title} - MDIVAN`,
    description: dict.contact.split.companies.desc,
    alternates: {
      canonical: `/${lang}/hire-talent`,
    },
    openGraph: {
      title: `${dict.contact.split.companies.title} - MDIVAN`,
      description: dict.contact.split.companies.desc,
      url: `https://mdivan.com/${lang}/hire-talent`,
    },
  };
}
