import Link from "next/link";
import { to } from "@/lib/site";

const TONES = ["card--navy", "card--orange", "card--sky", "", "card--navy"];

export const Services = ({ dict, lang }: { dict: any; lang: string }) => {
  const items = Object.values(dict.services.items) as any[];
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow reveal">{dict.services.title}</p>
          <h2 id="services-title" className="h2 reveal" style={{ ["--d" as any]: 1 }}>
            {dict.services.heading}
          </h2>
        </div>
        <ul className="cards">
          {items.map((s, i) => (
            <li key={s.slug}>
              <Link href={to(lang, `/services/${s.slug}`)} className={`card ${TONES[i]} reveal`} style={{ ["--d" as any]: i % 3 }}>
                <span className="card__tag">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="h3" style={{ display: "block" }}>{s.title}</span>
                  <p>{s.description}</p>
                  <span className="more" style={{ marginTop: 20 }}>
                    {dict.ui.learnMore} <span aria-hidden="true">→</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
