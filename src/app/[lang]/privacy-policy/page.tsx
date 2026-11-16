import type { Metadata } from "next";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: `${dict.privacyPolicy.title} - MDIVAN`,
    description: dict.privacyPolicy.intro[0],
  };
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
    <main className="pb-32">
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
      <div className="wrap">
        <h1 className="page-head" style={{ paddingInline: 0 }}>
          {privacyPolicy.title}
        </h1>

        <div className="prose-mdivan">
          {privacyPolicy.intro.map((p: string, i: number) => (
            <p key={i}>
              {p}
            </p>
          ))}

          <h2>
            {privacyPolicy.collection.title}
          </h2>
          <p>{privacyPolicy.collection.desc}</p>
          <ul>
            {privacyPolicy.collection.items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>
            {privacyPolicy.reasons.title}
          </h2>
          <p>{privacyPolicy.reasons.desc}</p>
          <ul>
            {privacyPolicy.reasons.items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>
            {privacyPolicy.safeguarding.title}
          </h2>
          <p>{privacyPolicy.safeguarding.desc}</p>

          <h2>
            {privacyPolicy.cookies.title}
          </h2>
          {privacyPolicy.cookies.content.map((p: string, i: number) => (
            <p key={i}>
              {p}
            </p>
          ))}

          <h2>
            {privacyPolicy.links.title}
          </h2>
          <p>{privacyPolicy.links.desc}</p>

          <h2>
            {privacyPolicy.restricting.title}
          </h2>
          <p>{privacyPolicy.restricting.desc}</p>
          <ul>
            {privacyPolicy.restricting.items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>{privacyPolicy.restricting.closing}</p>
        </div>
      </div>
    </main>
  );
}
