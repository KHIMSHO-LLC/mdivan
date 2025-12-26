"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ServicesCarousel = ({ dict }: { dict: any }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: dict.services.items.ea.title,
      description: dict.services.items.ea.description,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
      featured: true,
    },
    {
      title: dict.services.items.ba.title,
      description: dict.services.items.ba.description,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      featured: false,
    },
    {
      title: dict.services.items.pa.title,
      description: dict.services.items.pa.description,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
      featured: false,
    },
    {
      title: dict.services.items.om.title,
      description: dict.services.items.om.description,
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      featured: false,
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        if (
          current.scrollLeft + current.clientWidth >=
          current.scrollWidth - 10
        ) {
          current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#FAFAFA]" id="services">
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
            {dict.services.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-sans text-[var(--primary)] max-w-2xl">
            {dict.services.heading}
          </h2>
        </motion.div>

        <div className="relative group/carousel">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[450px] h-[500px] rounded-3xl overflow-hidden relative group cursor-pointer ${
                  service.featured ? "md:w-[600px]" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-sans font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
