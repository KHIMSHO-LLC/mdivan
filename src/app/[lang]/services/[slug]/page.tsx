import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ContactClose } from "@/components/ContactClose";
import { PageHead } from "@/components/PageHead";
import { Film } from "@/components/home/Film";

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

  const es = lang === "es";
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHead
        title={service.title}
        lead={service.description}
        action={{ href: `/${lang}/hire-talent`, label: dict.home.hero.cta }}
        back={{ href: `/${lang}#roles`, label: es ? "Todos los perfiles" : "All roles" }}
      />
      <section className="role-body">
        <p className="role-body__lead reveal">{service.fullDescription}</p>
        <div className="role-body__list reveal" style={{ ["--d" as any]: 1 }}>
          <h2>{es ? "Lo que hacen" : "What they handle"}</h2>
          <ul>
            {service.benefits?.map((b: string) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>
      <Film dict={dict} />
      <ContactClose dict={dict} lang={lang} />
    </main>
  );
}
