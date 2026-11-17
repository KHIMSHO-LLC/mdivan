/** Native <details> accordion: works with keyboard and screen readers without script. */
export const Faq = ({ dict }: { dict: any }) => {
  const f = dict.faq;
  return (
    <section className="section paper" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="head">
          <p className="eyebrow reveal">{f.badge}</p>
          <h2 id="faq-title" className="h2 reveal" style={{ ["--d" as any]: 1 }}>
            {f.title}
          </h2>
        </div>
        <div className="faq">
          {f.items.map((it: any) => (
            <details key={it.question}>
              <summary>{it.question}</summary>
              <p>{it.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
