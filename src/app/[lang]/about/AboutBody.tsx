import Image from "next/image";
import Link from "next/link";
import night from "../../../../public/media/gran-via-night.jpg";
import { EMAIL, to } from "@/lib/site";
import { PageHead } from "@/components/PageHead";
import { Team } from "@/components/home/Team";
import { ContactSplit } from "@/components/ContactSplit";

export const AboutBody = ({ dict, lang }: { dict: any; lang: string }) => {
  const a = dict.about;
  const services = ["leadership", "associates", "developers", "network"].map((k) => a.services[k]);
  const values = ["impact", "transparency", "quality", "partnership"].map((k) => a.values.items[k]);

  return (
    <>
      <PageHead eyebrow={a.missionBadge} title={a.missionTitle} lead={a.missionDesc}>
        <Link href={to(lang, "/hire-talent")} className="btn btn--orange">
          {dict.hero.cta} <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </PageHead>

      <section className="section" aria-labelledby="what-title">
        <div className="wrap two">
          <figure className="media reveal" style={{ aspectRatio: "4 / 5" }}>
            <Image src={night} alt={dict.ui.madridNightAlt} placeholder="blur" fill sizes="(min-width: 900px) 50vw, 100vw" />
            <figcaption className="media__tag">{dict.ui.based}</figcaption>
          </figure>
          <div>
            <h2 id="what-title" className="h2 reveal">{a.imageTitle}</h2>
            <p className="lead reveal" style={{ ["--d" as any]: 1, marginTop: 24 }}>{a.imageDesc}</p>
            <ul className="list-rows" style={{ marginTop: 40 }}>
              {services.map((s: any, i: number) => (
                <li key={s.title} className="reveal" style={{ ["--d" as any]: i }}>
                  <h3 className="h4">{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section paper" aria-labelledby="values-title">
        <div className="wrap">
          <div className="head">
            <h2 id="values-title" className="h2 reveal">{a.values.title}</h2>
            <p className="lead reveal" style={{ ["--d" as any]: 1 }}>{a.values.desc}</p>
          </div>
          <ul className="values">
            {values.map((v: any, i: number) => (
              <li key={v.title} className="value reveal" style={{ ["--d" as any]: i }}>
                <span className="eyebrow" style={{ color: "inherit", opacity: 0.8 }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="h3">{v.title}</h3>
                  <p style={{ marginTop: 12 }}>{v.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Team dict={dict} />

      <section className="section navy glow" aria-labelledby="join-title">
        <div className="wrap two" style={{ alignItems: "start" }}>
          <div>
            <h2 id="join-title" className="h2 reveal">{a.join.title}</h2>
            <p className="lead reveal" style={{ ["--d" as any]: 1, marginTop: 24 }}>{a.join.desc}</p>
            <div className="actions reveal" style={{ ["--d" as any]: 2 }}>
              <Link href={to(lang, "/apply")} className="btn btn--orange">
                {dict.contact.split.candidates.cta} <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a href={`mailto:${EMAIL}`} className="btn btn--line">
                {a.join.cta}
              </a>
            </div>
            <p className="eyebrow reveal" style={{ ["--d" as any]: 3, marginTop: 24 }}>{a.join.referral}</p>
          </div>
          <div className="reveal" style={{ ["--d" as any]: 1 }}>
            <h3 className="h4">{a.join.get}</h3>
            <ul className="perks" style={{ marginTop: 20 }}>
              {a.join.perks.map((p: string) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSplit dict={dict} lang={lang} />
    </>
  );
};
