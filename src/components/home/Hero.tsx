import Image from "next/image";
import Link from "next/link";
import day from "../../../public/media/gran-via-day.jpg";
import night from "../../../public/media/gran-via-night.jpg";
import { to } from "@/lib/site";

export const Hero = ({ dict, lang }: { dict: any; lang: string }) => {
  const h = dict.hero;
  return (
    <section className="hero navy glow" aria-labelledby="hero-title">
      {/* Floating photographs around the headline (desktop only). */}
      <div className="float float--1" aria-hidden="true">
        <Image src="/nia.jpg" alt="" width={230} height={307} sizes="230px" priority />
      </div>
      <div className="float float--2" aria-hidden="true">
        <Image src={day} alt="" sizes="210px" />
      </div>
      <div className="float float--3" aria-hidden="true">
        <Image src="/george.png" alt="" width={220} height={275} sizes="220px" />
      </div>
      <div className="float float--4" aria-hidden="true">
        <Image src={night} alt="" sizes="250px" />
      </div>

      <div className="wrap">
        <div className="hero__inner">
          <h1 id="hero-title" className="h-hero">
            {h.titleA}
            <br />
            <span className="orange">{h.titleB}</span>
          </h1>
          <p className="hero__lead">{h.description}</p>
          <div className="actions">
            <Link href={to(lang, "/hire-talent")} className="btn btn--orange">
              {h.cta} <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href={to(lang, "/apply")} className="btn btn--line">
              {dict.contact.split.candidates.cta}
            </Link>
          </div>
          <p className="eyebrow hero__trust">{h.trust}</p>
        </div>
      </div>
    </section>
  );
};

export const Film = ({ dict }: { dict: any }) => (
  <div className="film">
    <div className="wrap">
      <figure className="media reveal">
        <Image src={day} alt={dict.ui.madridAlt} placeholder="blur" sizes="(min-width: 1240px) 1240px, 100vw" />
        <figcaption className="media__tag">{dict.ui.based}</figcaption>
      </figure>
    </div>
  </div>
);
