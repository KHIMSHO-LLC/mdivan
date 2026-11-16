import Link from "next/link";

export const Hero = ({ dict, lang }: { dict: any; lang: string }) => {
  const h = dict.home.hero;
  return (
    <section className="hero">
      <div className="hero__top" />
      <div className="hero__bottom" />
      {/* One headline on the waterline: the first line stands on the paper, the second hangs in the ink. */}
      <h1 className="hero__headline">
        <span className="line">
          <span>{h.line1}</span>
        </span>
        <span className="line line--under">
          <span>{h.line2}</span>
        </span>
      </h1>
      <div className="hero__foot">
        <p className="hero__sentence">{h.sentence}</p>
        <div className="hero__actions">
          <Link href={`/${lang}/hire-talent`} className="btn btn--paper">
            {h.cta} <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <Link href={`/${lang}/apply`} className="link">
            {h.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
};
