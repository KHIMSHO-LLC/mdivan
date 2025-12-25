"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes MDIVAN better than other agencies?",
    answer:
      "Unlike generalist agencies, we specialize exclusively in high-performance Business Associates and Executive Assistants. We don't just send resumes; we personally vet every candidate for soft skills, reliability, and professionalism.",
  },
  {
    question: "How quickly can I hire a Business Assistant?",
    answer:
      "We understand urgency. We typically present a curated shortlist of 3-5 pre-vetted candidates within 3 business days, allowing you to interview and hire in under a week.",
  },
  {
    question: "What if the candidate isn't a good fit?",
    answer:
      "We offer a comprehensive replacement guarantee. If your new hire doesn't work out within the first 90 days, we'll find you a new candidate at absolutely no extra cost.",
  },
  {
    question: "What are your recruitment fees?",
    answer:
      "We work on a contingency or retained basis depending on your needs. Contact us for a custom quote—we're transparent and competitive, with no hidden costs.",
  },
  {
    question: "Do you recruit for remote roles?",
    answer:
      "Yes! We have a vast network of candidates ready for on-site, hybrid, and fully remote positions to suit your company's operational model.",
  },
  {
    question: "How detailed is your vetting process?",
    answer:
      "Extremely. We conduct video interviews, background checks, and practical skills tests. We look for proactive problem solvers, not just people who fit a job description.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[var(--primary)] font-medium mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-sans text-[var(--primary)] mb-8">
            Answers to your most <br />
            common questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
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
