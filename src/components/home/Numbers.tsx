export const Numbers = ({ dict }: { dict: any }) => {
  const n = dict.home.numbers;
  return (
    <section className="numbers" id="features">
      <h2 className="reveal">{n.title}</h2>
      <div className="numbers__grid">
        {n.items.map((it: any, i: number) => (
          <div key={it.value} className="reveal" style={{ ["--d" as any]: i + 1 }}>
            <p className="numbers__value num">{it.value}</p>
            <p className="numbers__text">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
