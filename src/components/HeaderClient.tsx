"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";

export const HeaderClient = ({ lang, dict }: { lang: Locale; dict: any }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const other = lang === "en" ? "es" : "en";
  const switchHref = (to: string) =>
    pathname ? pathname.replace(/^\/(en|es)(?=\/|$)/, `/${to}`) : `/${to}`;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { name: dict.navigation.services, href: `/${lang}#roles` },
    { name: dict.navigation.howItWorks, href: `/${lang}#how-it-works` },
    { name: dict.navigation.team, href: `/${lang}#team` },
    { name: dict.navigation.about, href: `/${lang}/about` },
    { name: dict.navigation.blog, href: `/${lang}/blog` },
  ];

  return (
    <header className="site-header">
      <Link href={`/${lang}`} className="site-header__mark" aria-label="MDIVAN, home">
        MDIVAN
      </Link>

      <nav className="site-header__nav" aria-label="Main">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="link">
            {l.name}
          </Link>
        ))}
        <span className="site-header__lang site-header__lang--desk">
          <Link href={switchHref("en")} aria-current={lang === "en"} hrefLang="en">
            EN
          </Link>
          <Link href={switchHref("es")} aria-current={lang === "es"} hrefLang="es">
            ES
          </Link>
        </span>
        <Link href={`/${lang}/hire-talent`} className="btn">
          {dict.home.hero.cta}
        </Link>
      </nav>

      <button
        type="button"
        className="site-header__toggle"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      {open && (
        <div className="menu-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="flex items-center justify-between">
            <Link href={`/${lang}`} className="site-header__mark">
              MDIVAN
            </Link>
            <button
              type="button"
              className="site-header__toggle"
              style={{ display: "inline-flex" }}
              onClick={() => setOpen(false)}
            >
              {lang === "es" ? "Cerrar" : "Close"}
            </button>
          </div>
          <nav aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <Link href={`/${lang}/hire-talent`} className="btn btn--paper">
              {dict.home.hero.cta}
            </Link>
            <Link href={switchHref(other)} hrefLang={other} className="text-[var(--muted-on-ink)]">
              {other === "es" ? "Español" : "English"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
