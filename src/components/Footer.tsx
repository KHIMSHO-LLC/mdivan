import Link from "next/link";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { EMAIL, INSTAGRAM, LINKEDIN, PHONE, PHONE_HREF, to } from "@/lib/site";

const CREDITS = [
  { what: "Gran Vía by day", who: "David Adam Kess", licence: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/w/index.php?curid=34547282" },
  { what: "Gran Vía at night", who: "Javier Perez Montes", licence: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/w/index.php?curid=162586986" },
];

export const Footer = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang);
  const n = dict.navigation;
  const f = dict.footer;
  const u = dict.ui;
  const services = Object.values(dict.services.items) as any[];

  return (
    <footer>
      <div className="stripes-band" aria-hidden="true">
        <div className="stripes" />
      </div>
      <div className="site-footer navy">
        <div className="wrap">
          <p className="footer__mark" aria-hidden="true">MDIVAN</p>
          <div className="footer__cols">
            <div>
              <h2 className="eyebrow">{u.explore}</h2>
              <ul>
                <li><Link href={to(lang, "/about")}>{n.about}</Link></li>
                <li><Link href={to(lang, "/#how-it-works")}>{n.howItWorks}</Link></li>
                <li><Link href={to(lang, "/blog")}>{n.blog}</Link></li>
                <li><Link href={to(lang, "/apply")}>{n.careers}</Link></li>
                <li><Link href={to(lang, "/contact")}>{n.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">{n.services}</h2>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}><Link href={to(lang, `/services/${s.slug}`)}>{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">{u.write}</h2>
              <ul>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li><a href={PHONE_HREF} className="num">{PHONE}</a></li>
                <li>{f.address}</li>
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">{u.follow}</h2>
              <ul>
                <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>

          <p className="footer__credits">
            {u.credits}:{" "}
            {CREDITS.map((c, i) => (
              <span key={c.href}>
                <a href={c.href} target="_blank" rel="noopener noreferrer">{c.what}</a> {lang === "es" ? "por" : "by"} {c.who}, {c.licence}
                {i < CREDITS.length - 1 ? " · " : "."}
              </span>
            ))}
          </p>

          <div className="footer__legal">
            <span>© {new Date().getFullYear()} MDIVAN. {f.rights}</span>
            <span style={{ display: "flex", gap: 24 }}>
              <Link href={to(lang, "/privacy-policy")}>{n.privacy}</Link>
              <Link href={to(lang, "/terms-of-service")}>{n.terms}</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
