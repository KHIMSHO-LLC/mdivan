import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { AboutBody } from "./AboutBody";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return <AboutBody dict={dict} />;
}
