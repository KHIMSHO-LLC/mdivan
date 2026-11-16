export const Steps = ({ dict }: { dict: any }) => {
  const s = dict.home.steps;
  const starts = [1, 3, 5, 7];
  return (
    <section className="steps" id="how-it-works" aria-label={s.title}>
      {s.items.map((it: any, i: number) => {
        const Tag = i === 0 ? "h2" : "p";
        return (
          <div
            key={i}
            className={`step reveal ${i === s.items.length - 1 ? "step--last" : ""}`}
            style={{ ["--start" as any]: starts[i], ["--i" as any]: i }}
          >
            <Tag className="step__line">{it.line}</Tag>
            <p className="step__text">{it.text}</p>
          </div>
        );
      })}
    </section>
  );
};
