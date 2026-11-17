import Image from "next/image";

export const Team = ({ dict }: { dict: any }) => {
  const t = dict.team;
  const people = [
    { ...t.members.nia, image: "/nia.jpg" },
    { ...t.members.giorgi, image: "/george.png" },
  ];
  return (
    <section className="section" id="team" aria-labelledby="team-title">
      <div className="wrap team-grid">
        <div className="head">
          <p className="eyebrow reveal">{t.badge}</p>
          <h2 id="team-title" className="h2 reveal" style={{ ["--d" as any]: 1 }}>
            {t.title}
          </h2>
          <p className="lead reveal" style={{ ["--d" as any]: 2 }}>
            {t.description}
          </p>
        </div>
        <ul className="people">
          {people.map((p, i) => (
            <li key={p.name} className="person reveal" style={{ ["--d" as any]: i + 1 }}>
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="person__img">
                  <Image src={p.image} alt={p.name} fill sizes="(min-width: 900px) 25vw, 45vw" />
                </div>
                <p className="h4 person__name">{p.name}</p>
                <p className="person__role">{p.role}</p>
                <span className="more" style={{ fontSize: "0.9375rem", marginTop: 6 }}>
                  LinkedIn <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
