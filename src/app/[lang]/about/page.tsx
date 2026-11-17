import type { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { pageMeta } from "@/lib/seo";
import { AboutBody } from "./AboutBody";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return pageMeta({ lang, path: "/about", title: `${dict.navigation.about} | MDIVAN`, description: dict.about.missionDesc });
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <AboutBody dict={dict} lang={lang} />;
}
