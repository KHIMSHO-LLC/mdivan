import type { Metadata } from "next";
import { getDictionary } from "../../get-dictionary";
import type { Locale } from "../../i18n-config";
import { pageMeta, JsonLd } from "@/lib/seo";
import { Hero, Film } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Advantage } from "@/components/home/Advantage";
import { Steps } from "@/components/home/Steps";
import { Quotes } from "@/components/home/Quotes";
import { Team } from "@/components/home/Team";
import { Faq } from "@/components/home/Faq";
import { ContactSplit } from "@/components/ContactSplit";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return pageMeta({ lang, title: dict.meta.title, description: dict.meta.description });
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((it: any) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faq} />
      <Hero dict={dict} lang={lang} />
      <Film dict={dict} />
      <Services dict={dict} lang={lang} />
      <Advantage dict={dict} />
      <Steps dict={dict} />
      <Quotes dict={dict} />
      <Team dict={dict} />
      <Faq dict={dict} />
      <ContactSplit dict={dict} lang={lang} />
    </>
  );
}
