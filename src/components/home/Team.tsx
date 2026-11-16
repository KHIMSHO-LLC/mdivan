import Image from "next/image";
import tbilisi from "../../../public/media/tbilisi.jpg";

export const Team = ({ dict }: { dict: any }) => {
  const t = dict.home.team;
  const people = [
    { ...dict.team.members.nia, image: "/nia.jpg" },
    { ...dict.team.members.giorgi, image: "/george.png" },
  ];
  return (
    <section className="team" id="team">
      <dl className="team__facts reveal">
        {t.facts.map((f: any) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>
              {f.value.includes("@") ? <a href={`mailto:${f.value}`}>{f.value}</a> : f.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="team__lead">
        <h2 className="reveal">{t.title}</h2>
        <p className="reveal" style={{ ["--d" as any]: 1 }}>
          {t.body}
        </p>
      </div>
      <figure className="team__place reveal">
        <Image
          src={tbilisi}
          alt="A cobbled street in Tbilisi's old town with a brick church tower"
          sizes="(min-width: 800px) 30vw, 100vw"
        />
        <figcaption className="caption">{t.caption}</figcaption>
      </figure>
      <div className="team__people">
        {people.map((p, i) => (
          <a
            key={p.name}
            href={p.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="person reveal"
            style={{ ["--d" as any]: i + 1 }}
          >
            <div className="person__img">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width: 800px) 30vw, 100vw"
              />
            </div>
            <div className="person__meta">
              <div>
                <p className="person__name">{p.name}</p>
                <p className="person__role">{p.role}</p>
              </div>
              <span className="person__link">{t.linkedin} ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
