export const Faq = ({ dict }: { dict: any }) => (
  <section className="faq" id="faq">
    <h2 className="reveal">{dict.home.faq.title}</h2>
    <div className="faq__text">
      {dict.faq.items.map((f: any, i: number) => (
        <p key={i} className="reveal" style={{ ["--d" as any]: i % 4 }}>
          <strong>{f.question}</strong> {f.answer}
        </p>
      ))}
    </div>
  </section>
);
