"use client";

import { CheckCircle2, Check, X } from "lucide-react";
import { motion } from "framer-motion";

export const ComparisonSection = ({ dict }: { dict: any }) => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-[var(--primary)] font-medium mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
            {dict.comparison.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-sans text-[var(--primary)]">
            {dict.comparison.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Other Firms */}
          <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl font-serif text-gray-900 mb-8">
              {dict.comparison.others}
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 text-gray-400">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Unverified Candidates
                  </h4>
                  <p className="text-gray-500 mt-2 leading-relaxed">
                    Flooded with unqualified applications that waste your
                    valuable hiring time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-gray-400">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Slow Process
                  </h4>
                  <p className="text-gray-500 mt-2 leading-relaxed">
                    Screening hundreds of resumes and scheduling interviews
                    takes weeks or months.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-gray-400">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    High Turnover
                  </h4>
                  <p className="text-gray-500 mt-2 leading-relaxed">
                    Lack of cultural fit and vetting leads to frequent employee
                    turnover.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* With MDIVAN */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            {/* Subtle green glow or border if needed */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]/10"></div>

            <h3 className="text-2xl font-serif text-[var(--primary)] mb-8">
              {dict.comparison.us}
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 text-[var(--primary)]">
                  <CheckCircle2 className="w-6 h-6 fill-[var(--primary)] text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--primary)] text-lg">
                    {dict.comparison.features.vetting}
                  </h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Every candidate is rigorously interviewed and
                    skilled-checked before you meet them.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-[var(--primary)]">
                  <CheckCircle2 className="w-6 h-6 fill-[var(--primary)] text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--primary)] text-lg">
                    {dict.comparison.features.speed}
                  </h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Hire qualified candidates in days, not months. We respect
                    your urgency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-[var(--primary)]">
                  <CheckCircle2 className="w-6 h-6 fill-[var(--primary)] text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--primary)] text-lg">
                    {dict.comparison.features.replacement}
                  </h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Security in your hire. If it doesn't work out, we find a
                    replacement at no cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
