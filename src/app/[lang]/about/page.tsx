import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { AboutContent } from "./AboutContent";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return <AboutContent dict={dict} />;
}
