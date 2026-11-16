import { Hero } from "@/components/home/Hero";
import { NameEntry } from "@/components/home/NameEntry";
import { Roles } from "@/components/home/Roles";
import { Numbers } from "@/components/home/Numbers";
import { Clock } from "@/components/home/Clock";
import { Steps } from "@/components/home/Steps";
import { Quote } from "@/components/home/Quote";
import { Film } from "@/components/home/Film";
import { Team } from "@/components/home/Team";
import { Faq } from "@/components/home/Faq";
import { ContactClose } from "@/components/ContactClose";
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema]),
        }}
      />
      <Hero dict={dict} lang={lang} />
      <NameEntry dict={dict} />
      <Roles dict={dict} lang={lang} />
      <Numbers dict={dict} />
      <Clock dict={dict} lang={lang} />
      <Steps dict={dict} />
      <Quote dict={dict} />
      <Film dict={dict} />
      <Team dict={dict} />
      <Faq dict={dict} />
      <ContactClose dict={dict} lang={lang} />
    </main>
  );
}
