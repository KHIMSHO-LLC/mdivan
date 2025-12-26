"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Heart, Globe, Zap, Users, Shield } from "lucide-react";

export const AboutContent = ({ dict }: { dict: any }) => {
  const values = [
    {
      icon: Heart,
      title: dict.about.values.items.impact.title,
      description: dict.about.values.items.impact.desc,
    },
    {
      icon: Shield,
      title: dict.about.values.items.transparency.title,
      description: dict.about.values.items.transparency.desc,
    },
    {
      icon: Zap,
      title: dict.about.values.items.quality.title,
      description: dict.about.values.items.quality.desc,
    },
    {
      icon: Users,
      title: dict.about.values.items.partnership.title,
      description: dict.about.values.items.partnership.desc,
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[var(--primary)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              {dict.about.missionBadge}
            </span>
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-8 leading-tight">
              {dict.about.missionTitle}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              {dict.about.missionDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                alt="MDIVAN Team"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-sans font-bold text-[var(--primary)] mb-6">
                  {dict.about.imageTitle}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {dict.about.imageDesc}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: dict.about.services.leadership.title,
                    desc: dict.about.services.leadership.desc,
                  },
                  {
                    title: dict.about.services.associates.title,
                    desc: dict.about.services.associates.desc,
                  },
                  {
                    title: dict.about.services.consulting.title,
                    desc: dict.about.services.consulting.desc,
                  },
                  {
                    title: dict.about.services.network.title,
                    desc: dict.about.services.network.desc,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--primary)]">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-sans font-bold text-[var(--primary)] mb-6">
              {dict.about.values.title}
            </h2>
            <p className="text-gray-600 text-lg">{dict.about.values.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/5 flex items-center justify-center text-[var(--primary)] mb-6">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                  {val.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[var(--primary)] rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-full h-full bg-white/5 opacity-50 pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">
                  {dict.about.join.title}
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  {dict.about.join.desc}
                </p>

                <h3 className="text-xl font-bold mb-6">
                  {dict.about.join.get}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {dict.about.join.perks.map((perk: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-white/90 text-sm md:text-base">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="mb-4 text-white/70">
                    {dict.about.join.referral}
                  </p>
                  <a
                    href="mailto:hello@mdivan.com"
                    className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                  >
                    {dict.about.join.cta}
                  </a>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-l from-[var(--primary)] to-transparent z-10"></div>
                <div className="h-full w-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                    alt="Team Culture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
