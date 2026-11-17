import Link from "next/link";
import { EMAIL, PHONE, PHONE_HREF, to } from "@/lib/site";

/** Closing section on every page: one card for companies, one for talent. */
export const ContactSplit = ({ dict, lang }: { dict: any; lang: string }) => {
  const c = dict.contact;
  return (
    <section className="section navy glow" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow reveal">{c.badge}</p>
          <h2 id="contact-title" className="h2 reveal" style={{ ["--d" as any]: 1 }}>
            {c.title}
          </h2>
          <p className="lead reveal" style={{ ["--d" as any]: 2 }}>
            {c.subtitle}
          </p>
        </div>
        <div className="split">
          <Link href={to(lang, "/hire-talent")} className="split__card split__card--orange reveal">
            <div>
              <h3 className="h3">{c.split.companies.title}</h3>
              <p>{c.split.companies.desc}</p>
            </div>
            <span className="more">
              {c.split.companies.cta} <span aria-hidden="true">→</span>
            </span>
          </Link>
          <Link href={to(lang, "/apply")} className="split__card reveal" style={{ ["--d" as any]: 1 }}>
            <div>
              <h3 className="h3">{c.split.candidates.title}</h3>
              <p>{c.split.candidates.desc}</p>
            </div>
            <span className="more">
              {c.split.candidates.cta} <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
        <p className="reach">
          <span>
            {c.emailUs} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </span>
          <span>
            {c.callUs} <a href={PHONE_HREF} className="num">{PHONE}</a>
          </span>
        </p>
      </div>
    </section>
  );
};
