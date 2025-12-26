"use client";

import { Search, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const HowItWorks = ({ dict }: { dict: any }) => {
  const steps = [
    {
      icon: Search,
      title: dict.howItWorks.steps.discovery.title,
      description: dict.howItWorks.steps.discovery.description,
    },
    {
      icon: Lightbulb,
      title: dict.howItWorks.steps.vetting.title,
      description: dict.howItWorks.steps.vetting.description,
    },
    {
      icon: TrendingUp,
      title: dict.howItWorks.steps.placement.title,
      description: dict.howItWorks.steps.placement.description,
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--primary)] font-medium mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
              {dict.howItWorks.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-sans text-[var(--primary)] mb-8">
              {dict.howItWorks.title}
            </h2>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--primary)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-[var(--primary)]/5 absolute -top-10 -right-10 w-[400px]"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Collaboration"
                fill
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
