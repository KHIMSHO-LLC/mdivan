import Link from "next/link";

export const Roles = ({ dict, lang }: { dict: any; lang: string }) => {
  const r = dict.home.roles;
  const s = dict.services.items;
  const groups = [
    { name: r.business, keys: ["ea", "ba", "om", "sd"] },
    { name: r.home, keys: ["pa"] },
  ];
  return (
    <section className="menu-band" id="roles">
      <div className="menu-sheet reveal">
        <h2>{r.title}</h2>
        {groups.map((g) => (
          <div className="menu-group" key={g.name}>
            <h3>{g.name}</h3>
            {g.keys.map((k) => (
              <Link key={k} href={`/${lang}/services/${s[k].slug}`} className="menu-item">
                <span className="menu-item__row">
                  <span className="menu-item__name">{s[k].title}</span>
                  <span className="menu-item__dots" aria-hidden="true" />
                  <span className="menu-item__tag">{r.tags[k]}</span>
                </span>
                <span className="menu-item__desc block">{s[k].description}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
