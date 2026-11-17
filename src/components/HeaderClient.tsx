"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n-config";
import { EMAIL, LINKEDIN, INSTAGRAM, to } from "@/lib/site";

export const HeaderClient = ({ lang, dict }: { lang: Locale; dict: any }) => {
  const n = dict.navigation;
  const u = dict.ui;
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? `/${lang}`;
  const btnRef = useRef<HTMLButtonElement>(null);
  const switchHref = (l: string) => pathname.replace(/^\/(en|es)(?=\/|$)/, `/${l}`);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { name: n.services, href: to(lang, "/#services") },
    { name: n.howItWorks, href: to(lang, "/#how-it-works") },
    { name: n.team, href: to(lang, "/#team") },
    { name: n.about, href: to(lang, "/about") },
    { name: n.blog, href: to(lang, "/blog") },
    { name: n.contact, href: to(lang, "/contact") },
  ];

  const Lang = () => (
    <span className="lang">
      <Link href={switchHref("en")} hrefLang="en" lang="en" aria-current={lang === "en"}>
        EN
      </Link>
      <Link href={switchHref("es")} hrefLang="es" lang="es" aria-current={lang === "es"}>
        ES
      </Link>
    </span>
  );

  return (
    <>
      <a href="#main" className="skip">
        {u.skip}
      </a>
      <header className="site-header">
        <div className="wrap">
          <Link href={to(lang)} className="logo">
            MDIVAN
          </Link>
          <div className="header-actions">
            <Lang />
            <Link href={to(lang, "/hire-talent")} className="btn btn--line btn--sm">
              {dict.contact.split.companies.cta}
            </Link>
            <span className="header-spacer" aria-hidden="true" />
          </div>
        </div>
      </header>

      <button
        ref={btnRef}
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? u.close : u.menu}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        ) : (
          <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        )}
      </button>

      {open && (
        <div id="site-menu" className="menu navy glow" role="dialog" aria-modal="true" aria-label={u.menu}>
          <div className="wrap">
            <div className="menu__top">
              <Link href={to(lang)} className="logo">
                MDIVAN
              </Link>
            </div>
            <nav aria-label={u.menu}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={pathname === l.href ? "page" : undefined}>
                  {l.name}
                </Link>
              ))}
            </nav>
            <div className="actions">
              <Link href={to(lang, "/hire-talent")} className="btn btn--orange">
                {dict.contact.split.companies.cta} <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link href={to(lang, "/apply")} className="btn btn--line">
                {dict.contact.split.candidates.cta}
              </Link>
            </div>
            <div className="menu__foot">
              <Lang />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
