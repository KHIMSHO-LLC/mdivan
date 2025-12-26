import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { AboutContent } from "./AboutContent";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <AboutContent dict={dict} />;
}
