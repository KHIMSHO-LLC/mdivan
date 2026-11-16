import Image from "next/image";
import { PageHead } from "@/components/PageHead";
import { ContactClose } from "@/components/ContactClose";
import { Film } from "@/components/home/Film";
import tbilisi from "../../../../public/media/tbilisi.jpg";
import manuscript from "../../../../public/media/georgian-manuscript.jpg";
import granVia from "../../../../public/media/gran-via-day.jpg";

export const AboutBody = ({ dict, lang }: { dict: any; lang: string }) => {
  const a = dict.about;
  const services = ["leadership", "associates", "developers", "network"].map((k) => a.services[k]);
  const values = ["impact", "transparency", "quality", "partnership"].map((k) => a.values.items[k]);

  return (
    <main>
      <PageHead
        title={dict.navigation.about}
        lead={a.missionTitle}
        action={{ href: `/${lang}/hire-talent`, label: dict.home.hero.cta }}
      />

      <section className="about-what">
        <figure className="reveal">
          <Image
            src={granVia}
            alt="Ornate early-20th-century buildings along Gran Vía, Madrid, in black and white"
            sizes="(min-width: 800px) 40vw, 100vw"
          />
        </figure>
        <div className="about-what__text">
          <h2 className="reveal">{a.imageTitle}</h2>
          <p className="reveal" style={{ ["--d" as any]: 1 }}>
            {a.imageDesc}
          </p>
          <ul className="about-list">
            {services.map((s: any, i: number) => (
              <li key={s.title} className="reveal" style={{ ["--d" as any]: i + 2 }}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="values">
        <h2 className="reveal">{a.values.title}</h2>
        <p className="reveal" style={{ ["--d" as any]: 1 }}>
          {a.values.desc}
        </p>
        <div className="values__grid">
          {values.map((v: any, i: number) => (
            <div key={v.title} className="reveal" style={{ ["--d" as any]: i % 2 }}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="values__pics">
          <figure className="reveal">
            <Image src={manuscript} alt="A long handwritten Georgian document on aged parchment" sizes="(min-width: 800px) 30vw, 50vw" />
            <figcaption className="caption">{dict.home.name.caption}</figcaption>
          </figure>
          <figure className="reveal" style={{ ["--d" as any]: 1 }}>
            <Image src={tbilisi} alt="A cobbled street in Tbilisi's old town with a brick church tower" sizes="(min-width: 800px) 40vw, 50vw" />
            <figcaption className="caption">{dict.home.team.caption}</figcaption>
          </figure>
        </div>
      </section>

      <Film dict={dict} />

      <section className="join">
        <div className="join__text">
          <h2 className="reveal">{a.join.title}</h2>
          <p className="reveal" style={{ ["--d" as any]: 1 }}>
            {a.join.desc}
          </p>
          <p className="join__refer reveal" style={{ ["--d" as any]: 2 }}>
            {a.join.referral}
          </p>
          <a href="mailto:hello@mdivan.com" className="btn btn--paper mt-4 reveal" style={{ ["--d" as any]: 3 }}>
            {a.join.cta} <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <div className="join__perks reveal" style={{ ["--d" as any]: 1 }}>
          <h3>{a.join.get}</h3>
          <ul>
            {a.join.perks.map((p: string) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <ContactClose dict={dict} lang={lang} />
    </main>
  );
};
