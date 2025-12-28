import { ContactForm } from "@/components/ContactForm";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function ApplyPage({
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
        forcedMode="job"
        title={dict.contact.split.candidates.title}
        subtitle={dict.contact.split.candidates.desc}
      />
    </main>
  );
}
