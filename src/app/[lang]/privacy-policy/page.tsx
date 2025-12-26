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
    <main className="min-h-screen pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-[var(--primary)] mb-8">
          {privacyPolicy.title}
        </h1>

        <div className="prose prose-lg text-gray-600">
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
    </main>
  );
}
