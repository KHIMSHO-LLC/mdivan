import type { Metadata } from "next";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { PageHead } from "@/components/PageHead";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return pageMeta({ lang, path: "/privacy-policy", title: `${dict.privacyPolicy.title} | MDIVAN`, description: dict.privacyPolicy.intro[0] });
}

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const { privacyPolicy } = dict;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://mdivan.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: dict.privacyPolicy.title,
                item: `https://mdivan.com/${lang}/privacy-policy`,
              },
            ],
          }),
        }}
      />
      <PageHead title={privacyPolicy.title} />
      <section className="section">
        <div className="wrap">
          <div className="prose-mdivan">
          {privacyPolicy.intro.map((p: string, i: number) => (
            <p key={i} className="mb-6">
              {p}
            </p>
          ))}

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {privacyPolicy.collection.title}
          </h2>
          <p className="mb-4">{privacyPolicy.collection.desc}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {privacyPolicy.collection.items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {privacyPolicy.reasons.title}
          </h2>
          <p className="mb-4">{privacyPolicy.reasons.desc}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {privacyPolicy.reasons.items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {privacyPolicy.safeguarding.title}
          </h2>
          <p className="mb-6">{privacyPolicy.safeguarding.desc}</p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {privacyPolicy.cookies.title}
          </h2>
          {privacyPolicy.cookies.content.map((p: string, i: number) => (
            <p key={i} className="mb-4">
              {p}
            </p>
          ))}

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {privacyPolicy.links.title}
          </h2>
          <p className="mb-6">{privacyPolicy.links.desc}</p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {privacyPolicy.restricting.title}
          </h2>
          <p className="mb-4">{privacyPolicy.restricting.desc}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {privacyPolicy.restricting.items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mb-6">{privacyPolicy.restricting.closing}</p>
          </div>
        </div>
      </section>
    </>
  );
}
