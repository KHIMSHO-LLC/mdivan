import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { pageMeta, JsonLd } from "@/lib/seo";
import { to } from "@/lib/site";
import { PageHead } from "@/components/PageHead";
import { Steps } from "@/components/home/Steps";
import { ContactSplit } from "@/components/ContactSplit";

type Props = { params: Promise<{ lang: string; slug: string }> };

async function getService(lang: Locale, slug: string) {
  const dict = await getDictionary(lang);
  const all = Object.values(dict.services.items) as any[];
  return { dict, all, service: all.find((s) => s.slug === slug) };
}

export async function generateStaticParams() {
  const dict = await getDictionary("en");
  return Object.values(dict.services.items).map((s: any) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const { service } = await getService(lang as Locale, slug);
  if (!service) return { title: "Not found" };
  return pageMeta({ lang, path: `/services/${slug}`, title: service.meta.title, description: service.meta.description });
}

export default async function ServicePage({ params }: Props) {
  const { lang, slug } = await params;
  const { dict, all, service } = await getService(lang as Locale, slug);
  if (!service) notFound();
  const u = dict.ui;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@type": "RecruitmentAgency", name: "MDIVAN" },
        }}
      />
      <PageHead
        back={{ href: to(lang, "/#services"), label: u.allRoles }}
        eyebrow={dict.services.title}
        title={service.title}
        lead={service.description}
      >
        <Link href={to(lang, "/hire-talent")} className="btn btn--orange">
          {dict.contact.split.companies.cta} <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </PageHead>

      <section className="section">
        <div className="wrap two" style={{ alignItems: "start" }}>
          <p className="h3 reveal" style={{ fontWeight: 500 }}>{service.fullDescription}</p>
          <div className="reveal" style={{ ["--d" as any]: 1 }}>
            <h2 className="eyebrow">{u.whatTheyHandle}</h2>
            <ul className="role-list" style={{ marginTop: 20 }}>
              {service.benefits.map((b: string) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h2 className="eyebrow" style={{ marginTop: 48 }}>{u.otherRoles}</h2>
            <div className="chips">
              {all
                .filter((s) => s.slug !== slug)
                .map((s) => (
                  <Link key={s.slug} href={to(lang, `/services/${s.slug}`)} className="chip">
                    {s.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <div className="paper">
        <Steps dict={dict} />
      </div>
      <ContactSplit dict={dict} lang={lang} />
    </>
  );
}
