import { ContactForm } from "@/components/ContactForm";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: `${dict.navigation.contact} - MDIVAN`,
    description: dict.contact.subtitle,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen pt-20">
      <ContactForm dict={dict} />
    </main>
  );
}
