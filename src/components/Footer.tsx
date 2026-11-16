import Link from "next/link";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const CREDITS = [
  {
    what: "Georgian manuscript",
    who: "USEmbassyTbilisi",
    licence: "public domain",
    href: "https://commons.wikimedia.org/wiki/File:2005_%E2%80%93_Digitization_of_Georgian_Historical_Documents_of_the_11th_-16th_Centuries_-_14059837972.jpg",
  },
  {
    what: "Gran Vía at night",
    who: "Javier Perez Montes",
    licence: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/w/index.php?curid=162586986",
  },
  {
    what: "Gran Vía in snow (film)",
    who: "Nicolas Vigier",
    licence: "CC0",
    href: "https://commons.wikimedia.org/wiki/File:GranVia-nieve-04.webm",
  },
  {
    what: "Gran Vía by day",
    who: "David Adam Kess",
    licence: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/w/index.php?curid=34547282",
  },
  {
    what: "Tbilisi, old town",
    who: "Vyacheslav Argenberg",
    licence: "CC BY 4.0",
    href: "https://commons.wikimedia.org/w/index.php?curid=116473136",
  },
];

export const Footer = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang);
  const f = dict.home.footer;

  return (
    <footer className="site-footer">
      <div className="site-footer__cols">
        <ul>
          <li>MDIVAN</li>
          <li>{f.address}</li>
          <li>
            <a href="tel:+34694209020" className="num">
              +34 694 209 020
            </a>
          </li>
        </ul>
        <ul>
          <li>{f.pages}</li>
          <li>
            <Link href={`/${lang}/about`}>{dict.navigation.about}</Link>
          </li>
          <li>
            <Link href={`/${lang}/blog`}>{dict.navigation.blog}</Link>
          </li>
          <li>
            <Link href={`/${lang}/hire-talent`}>{dict.contact.split.companies.cta}</Link>
          </li>
          <li>
            <Link href={`/${lang}/apply`}>{dict.contact.split.candidates.cta}</Link>
          </li>
        </ul>
        <ul>
          <li>{f.follow}</li>
          <li>
            <a
              href="https://www.linkedin.com/company/mdivan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mdivan" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
        <ul>
          <li>{f.write}</li>
          <li>
            <a href="mailto:hello@mdivan.com">hello@mdivan.com</a>
          </li>
          <li>
            <Link href={`/${lang}/privacy-policy`}>{dict.navigation.privacy}</Link>
          </li>
          <li>
            <Link href={`/${lang}/terms-of-service`}>{dict.navigation.terms}</Link>
          </li>
        </ul>
      </div>

      <p className="site-footer__credits">
        {f.credits}:{" "}
        {CREDITS.map((c, i) => (
          <span key={c.href}>
            <a href={c.href} target="_blank" rel="noopener noreferrer">
              {c.what}
            </a>{" "}
            by {c.who}, {c.licence}
            {i < CREDITS.length - 1 ? " · " : "."}
          </span>
        ))}
      </p>

      <svg
        className="site-footer__mark"
        viewBox="0 0 1000 180"
        role="img"
        aria-label="MDIVAN"
        preserveAspectRatio="xMidYMax meet"
      >
        <text
          x="0"
          y="164"
          fontSize="226"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
        >
          MDIVAN
        </text>
      </svg>

      <div className="site-footer__legal">
        <span>
          © {new Date().getFullYear()} MDIVAN. {dict.footer.rights}
        </span>
        <span className="ka" lang="ka">
          მდივანი
        </span>
      </div>
    </footer>
  );
};
