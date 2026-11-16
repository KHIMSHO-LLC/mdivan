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
    title: `${dict.termsOfService.title} - MDIVAN`,
    description: dict.termsOfService.intro[0],
  };
}

export default async function TermsOfService({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const { termsOfService } = dict;

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
                name: dict.termsOfService.title,
                item: `https://mdivan.com/${lang}/terms-of-service`,
              },
            ],
          }),
        }}
      />
      <div className="wrap">
        <h1 className="page-head" style={{ paddingInline: 0 }}>
          {termsOfService.title}
        </h1>

        <div className="prose-mdivan">
          {termsOfService.intro.map((p: string, i: number) => (
            <p key={i}>
              {p}
            </p>
          ))}

          <h2>
            {termsOfService.services.title}
          </h2>
          {termsOfService.services.content.map((p: string, i: number) => (
            <p key={i}>
              {p}
            </p>
          ))}

          <h2>
            {termsOfService.ip.title}
          </h2>
          <p>{termsOfService.ip.content}</p>

          <h2>
            {termsOfService.restrictions.title}
          </h2>
          <p>{termsOfService.restrictions.desc}</p>
          <ul>
            {termsOfService.restrictions.items.map(
              (item: string, i: number) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>

          <h2>
            {termsOfService.clientResp.title}
          </h2>
          <p>{termsOfService.clientResp.content}</p>

          <h2>
            {termsOfService.liability.title}
          </h2>
          <p>{termsOfService.liability.content}</p>

          <h2>
            {termsOfService.indemnification.title}
          </h2>
          <p>{termsOfService.indemnification.content}</p>

          <h2>
            {termsOfService.governing.title}
          </h2>
          <p>{termsOfService.governing.content}</p>
        </div>
      </div>
    </main>
  );
}
