const TONES = ["quote--orange", "quote--navy", "quote--sky"];

export const Quotes = ({ dict }: { dict: any }) => {
  const t = dict.testimonials;
  return (
    <section className="section paper" aria-labelledby="quotes-title">
      <div className="wrap">
        <div className="head head--center">
          <p className="eyebrow reveal">{t.badge}</p>
          <h2 id="quotes-title" className="h2 reveal" style={{ ["--d" as any]: 1 }}>
            {t.title}
          </h2>
        </div>
        <div className="quotes">
          {t.items.map((q: any, i: number) => (
            <figure key={q.author} className={`quote ${TONES[i % 3]} reveal`} style={{ ["--d" as any]: i }}>
              <blockquote>
                <p>“{q.quote}”</p>
              </blockquote>
              <figcaption>
                <strong>{q.author}</strong>
                <span>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
