import { Hero } from "@/components/Hero";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { TeamSection } from "@/components/TeamSection";
import { FAQ } from "@/components/FAQ";
import { ContactSplitter } from "@/components/ContactSplitter";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item: any) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Recruitment",
    provider: {
      "@type": "RecruitmentAgency",
      name: "MDIVAN",
    },
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Recruitment Services",
      itemListElement: Object.values(dict.services.items).map(
        (service: any) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })
      ),
    },
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema]),
        }}
      />
      <Hero dict={dict} />
      <ServicesCarousel dict={dict} />
      <ComparisonSection dict={dict} />
      <TestimonialsSection dict={dict} />
      <TeamSection dict={dict} />
      <HowItWorks dict={dict} />
      <FAQ dict={dict} />
      <ContactSplitter dict={dict} lang={lang} />
    </main>
  );
}
