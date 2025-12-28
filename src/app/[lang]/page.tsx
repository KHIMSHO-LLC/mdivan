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

  return (
    <main className="min-h-screen">
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
