"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Locale } from "@/i18n-config";

export const HeaderClient = ({ lang, dict }: { lang: Locale; dict: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.navigation.services, href: `/${lang}#services` },
    { name: dict.navigation.howItWorks, href: `/${lang}#how-it-works` },
    { name: dict.navigation.team, href: `/${lang}#team` },
    { name: dict.navigation.about, href: `/${lang}/about` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white/80 backdrop-blur-md border-b border-gray-100 py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 font-sans font-bold text-2xl text-[var(--primary)]"
        >
          <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="font-sans tracking-tight">MDIVAN</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm font-bold text-gray-600 hover:text-[var(--primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Switcher */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/en"
              className={`hover:text-[var(--primary)] transition-colors ${
                lang === "en" ? "text-[var(--primary)]" : "text-gray-400"
              }`}
            >
              EN
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/es"
              className={`hover:text-[var(--primary)] transition-colors ${
                lang === "es" ? "text-[var(--primary)]" : "text-gray-400"
              }`}
            >
              ES
            </Link>
          </div>
          <Link
            href={`/${lang}#contact`}
            className="flex items-center gap-2 bg-[var(--primary)] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#15342d] transition-colors"
          >
            {dict.navigation.contact}
            <div className="bg-white/20 rounded-full p-1">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--primary)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-left text-base font-medium text-gray-700 hover:text-[var(--primary)]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 text-sm font-medium py-2">
                <Link
                  href="/en"
                  className={`hover:text-[var(--primary)] transition-colors ${
                    lang === "en" ? "text-[var(--primary)]" : "text-gray-400"
                  }`}
                >
                  English
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/es"
                  className={`hover:text-[var(--primary)] transition-colors ${
                    lang === "es" ? "text-[var(--primary)]" : "text-gray-400"
                  }`}
                >
                  Español
                </Link>
              </div>
              <Link
                href={`/${lang}#contact`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-5 py-3 rounded-full text-base font-medium mt-2"
              >
                {dict.navigation.contact}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
