import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ContactSplitter } from "@/components/ContactSplitter";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  meta: {
    title: string;
    description: string;
  };
}

async function getService(lang: Locale, slug: string) {
  const dict = await getDictionary(lang);
  // @ts-ignore
  const service = Object.values(dict.services.items).find(
    (item: any) => item.slug === slug
  ) as ServiceItem | undefined;
  return { service, dict };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const { service } = await getService(lang as Locale, slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.meta?.title || service.title,
    description: service.meta?.description || service.description,
    openGraph: {
      title: service.meta?.title || service.title,
      description: service.meta?.description || service.description,
    },
  };
}

export async function generateStaticParams() {
  const dict = await getDictionary("en");
  return Object.values(dict.services.items).map((item: any) => ({
    slug: item.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { lang, slug } = await params;
  const { service, dict } = await getService(lang as Locale, slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "RecruitmentAgency",
      name: "MDIVAN",
    },
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
  };

  return (
    <main className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <div className="container mx-auto px-4 mb-12">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center text-gray-500 hover:text-[var(--primary)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--primary)] mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">
                About the Role
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </p>
            </div>

            {/* Benefits Box */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                What to Expect
              </h3>
              <ul className="space-y-4">
                {service.benefits?.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactSplitter dict={dict} lang={lang as Locale} />
    </main>
  );
}
