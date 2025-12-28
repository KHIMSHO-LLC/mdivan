"use client";

import Link from "next/link";
import { ArrowRight, Building2, User } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSplitter = ({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) => {
  return (
    <section className="py-24 bg-[#FAFAFA]" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[var(--primary)] font-medium mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
            {dict.contact.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-sans text-[var(--primary)] max-w-2xl">
            {dict.contact.title}
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Companies Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[var(--primary)] group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">
                {dict.contact.split.companies.title}
              </h3>
              <p className="text-gray-500 mb-8 text-lg">
                {dict.contact.split.companies.desc}
              </p>
              <div className="mt-auto">
                <Link
                  href={`/${lang}/hire-talent`}
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold group-hover:gap-4 transition-all"
                >
                  {dict.contact.split.companies.cta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-[0.03] rounded-bl-full pointer-events-none group-hover:opacity-[0.05] transition-opacity"></div>
          </motion.div>

          {/* Candidates Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden bg-[var(--primary)] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {dict.contact.split.candidates.title}
              </h3>
              <p className="text-white/70 mb-8 text-lg">
                {dict.contact.split.candidates.desc}
              </p>
              <div className="mt-auto">
                <Link
                  href={`/${lang}/apply`}
                  className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all"
                >
                  {dict.contact.split.candidates.cta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
