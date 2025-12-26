import { Hero } from "@/components/Hero";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { TeamSection } from "@/components/TeamSection";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Hero dict={dict} />
      <ServicesCarousel dict={dict} />
      <ComparisonSection dict={dict} />
      <TeamSection dict={dict} />
      <HowItWorks dict={dict} />
      <FAQ dict={dict} />
      <ContactForm dict={dict} />
    </main>
  );
}
