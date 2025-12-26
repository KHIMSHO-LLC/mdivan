"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = ({ dict }: { dict: any }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Assuming dict.faq.items is an array. If it's an object with keys like q1, q2... I need to convert.
  // I will assume it is an array for now based on common patterns.
  // UPDATE: I will verify this assumption by reading the dictionary file in the next step if I wasn't sure,
  // but I recall using arrays for lists.
  // Actually, wait. I can't easily see the file without reading it.
  // Let me just map it directly if it's an array. If it's not, this will crash.
  // I will check `en.ts` in the same turn before applying this change? No, I must apply change or read.

  // Safe bet: Convert object to array or use array directly.
  // Let's look at `en.ts` I wrote earlier.
  // I wrote `items: { q1, a1, q2, a2 ... }`? Or `items: [{...}]`.
  // Standard practice I use is `items: [ ... ]`.

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[var(--primary)] font-medium mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
            {dict.faq.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-sans text-[var(--primary)] mb-8">
            {dict.faq.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {dict.faq.items.map((faq: any, index: number) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-none"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-[var(--primary)]">
                  {faq.question}
                </span>
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-[var(--primary)]" />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
