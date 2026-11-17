export const Steps = ({ dict }: { dict: any }) => {
  const h = dict.howItWorks;
  return (
    <section className="section" id="how-it-works" aria-labelledby="how-title">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow reveal">{h.badge}</p>
          <h2 id="how-title" className="h2 reveal" style={{ ["--d" as any]: 1 }}>
            {h.title}
          </h2>
        </div>
        <ol className="steps">
          {Object.values(h.steps).map((s: any, i) => (
            <li key={s.title} className={`step reveal${i === 1 ? " sky" : ""}`} style={{ ["--d" as any]: i }}>
              <span className="step__n num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
