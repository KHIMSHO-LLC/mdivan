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
    <main className="min-h-screen pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-[var(--primary)] mb-8">
          {termsOfService.title}
        </h1>

        <div className="prose prose-lg text-gray-600">
          {termsOfService.intro.map((p: string, i: number) => (
            <p key={i} className="mb-6">
              {p}
            </p>
          ))}

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {termsOfService.services.title}
          </h2>
          {termsOfService.services.content.map((p: string, i: number) => (
            <p key={i} className="mb-4">
              {p}
            </p>
          ))}

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {termsOfService.ip.title}
          </h2>
          <p className="mb-6">{termsOfService.ip.content}</p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {termsOfService.restrictions.title}
          </h2>
          <p className="mb-4">{termsOfService.restrictions.desc}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {termsOfService.restrictions.items.map(
              (item: string, i: number) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {termsOfService.clientResp.title}
          </h2>
          <p className="mb-6">{termsOfService.clientResp.content}</p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {termsOfService.liability.title}
          </h2>
          <p className="mb-6">{termsOfService.liability.content}</p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {termsOfService.indemnification.title}
          </h2>
          <p className="mb-6">{termsOfService.indemnification.content}</p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            {termsOfService.governing.title}
          </h2>
          <p className="mb-6">{termsOfService.governing.content}</p>
        </div>
      </div>
    </main>
  );
}
