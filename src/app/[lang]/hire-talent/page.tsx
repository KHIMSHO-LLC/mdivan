import type { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { pageMeta } from "@/lib/seo";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/site";
import { PageHead } from "@/components/PageHead";
import { FormBody } from "@/components/ContactForm";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return pageMeta({ lang, path: "/hire-talent", title: `${dict.contact.split.companies.title} | MDIVAN`, description: dict.contact.split.companies.desc });
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return (
    <>
      <PageHead eyebrow={dict.contact.badge} title={dict.contact.split.companies.title} lead={dict.contact.split.companies.desc}>
        <a href={`mailto:${EMAIL}`} className="btn btn--orange">
          {EMAIL}
        </a>
        <a href={PHONE_HREF} className="btn btn--line num">
          {PHONE}
        </a>
      </PageHead>
      <FormBody dict={dict} lang={lang} forcedMode={"hiring"} />
    </>
  );
}
