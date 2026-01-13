import { ContactForm } from "@/components/ContactForm";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import type { Metadata } from "next";

export default async function ApplyPage({
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
                name: dict.contact.split.candidates.title,
                item: `https://mdivan.com/${lang}/apply`,
              },
            ],
          }),
        }}
      />
      <ContactForm
        dict={dict}
        forcedMode="job"
        title={dict.contact.split.candidates.title}
        subtitle={dict.contact.split.candidates.desc}
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
    title: `${dict.contact.split.candidates.title} - MDIVAN`,
    description: dict.contact.split.candidates.desc,
    alternates: {
      canonical: `/${lang}/apply`,
    },
    openGraph: {
      title: `${dict.contact.split.candidates.title} - MDIVAN`,
      description: dict.contact.split.candidates.desc,
      url: `https://mdivan.com/${lang}/apply`,
    },
  };
}
