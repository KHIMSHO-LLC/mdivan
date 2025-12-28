import { ContactForm } from "@/components/ContactForm";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function HireTalentPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main className="min-h-screen pt-20">
      <ContactForm
        dict={dict}
        forcedMode="hiring"
        title={dict.contact.split.companies.title}
        subtitle={dict.contact.split.companies.desc}
      />
    </main>
  );
}
