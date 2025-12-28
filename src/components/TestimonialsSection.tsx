"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const TestimonialsSection = ({ dict }: { dict: any }) => {
  return (
    <section className="py-24 bg-[#FAFAFA]" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[var(--primary)] font-medium mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
            {dict.testimonials.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-sans text-[var(--primary)] max-w-2xl">
            {dict.testimonials.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.testimonials.items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                "{item.quote}"
              </p>
              <div>
                <h4 className="font-bold text-[var(--primary)]">
                  {item.author}
                </h4>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
