"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
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
    { name: "Services", id: "services" },
    { name: "Features", id: "features" },
    { name: "Team", id: "team" },
    { name: "How it works", id: "how-it-works" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-3 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/#${link.id}`}
              className="text-sm font-medium text-gray-700 hover:text-[var(--primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="flex items-center gap-2 bg-[var(--primary)] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#15342d] transition-colors"
          >
            Get in touch
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`/#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-left text-base font-medium text-gray-700 hover:text-[var(--primary)]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-5 py-3 rounded-full text-base font-medium mt-2"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
