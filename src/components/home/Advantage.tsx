const Yes = () => (
  <span className="mark mark--yes">
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
);
const No = () => (
  <span className="mark mark--no">
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
  </span>
);

export const Advantage = ({ dict }: { dict: any }) => {
  const c = dict.comparison;
  return (
    <section className="section navy glow" aria-labelledby="adv-title">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow reveal">{c.badge}</p>
          <h2 id="adv-title" className="h2 reveal" style={{ ["--d" as any]: 1 }}>
            {c.title}
          </h2>
        </div>
        <div className="adv" role="table" aria-label={c.title}>
          <div className="adv__row adv__row--head" role="row">
            <span role="columnheader"><span className="sr-only">{c.title}</span></span>
            <span role="columnheader">{c.us}</span>
            <span role="columnheader">{c.others}</span>
          </div>
          {Object.values(c.features).map((f: any, i) => (
            <div key={f} className="adv__row reveal" role="row" style={{ ["--d" as any]: i }}>
              <span className="adv__label" role="rowheader">{f}</span>
              <span className="adv__cell" role="cell" aria-label={`${c.us}: ✓`}><Yes /></span>
              <span className="adv__cell" role="cell" aria-label={`${c.others}: ✕`}><No /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
