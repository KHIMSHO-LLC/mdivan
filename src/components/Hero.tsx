"use client";

import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="bg-[var(--primary)] text-white min-h-[90vh] flex items-center pt-20 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm font-medium opacity-90"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>Rated 4.9/5</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-sans font-medium leading-tight"
          >
            Connecting you with <br />
            <span className="italic">elite business talent</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-lg font-light"
          >
            We specialize in recruiting professional Business Associates and
            Executive Assistants. Find the reliable support your company
            deserves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <Link
              href="#contact"
              className="group flex items-center gap-3 bg-white text-[var(--primary)] pl-6 pr-2 py-2 rounded-full font-medium transition-transform hover:scale-105"
            >
              Get in touch
              <div className="bg-[var(--primary)] text-white p-2 rounded-full group-hover:bg-[var(--primary)]/90 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link
              href="#services"
              className="text-white hover:underline underline-offset-4"
            >
              Find Talent
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl z-10"
        >
          {/* Placeholder for the image of the lady in suit */}
          <div className="absolute inset-0 bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
              alt="Consultant"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Background decoration matching the rounded aesthetics if needed */}
    </section>
  );
};
