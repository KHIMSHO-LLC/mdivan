"use client";

import { ArrowRight, Calendar, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  return (
    <section
      className="py-24 bg-[var(--primary)] relative overflow-hidden"
      id="contact"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <span className="text-white/80 font-medium mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                Contact us
              </span>
              <h2 className="text-4xl md:text-5xl font-sans text-white mb-6">
                Ready to find your <br />
                perfect match?
              </h2>
              <p className="text-white/70 max-w-md">
                Whether you're hiring top talent or looking for your next career
                move, we're here to help.
              </p>
            </div>

            <form
              action="https://formsubmit.co/hello@mdivan.com"
              method="POST"
              className="space-y-4"
            >
              {/* FormSubmit Configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New Submission from MDIVAN Website"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    name="date"
                    placeholder="Preferred Date (Optional)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5 group-focus-within:text-white transition-colors" />
                </div>
                <div className="relative">
                  <select
                    name="looking_for"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                  >
                    <option
                      value=""
                      className="bg-[var(--primary)] text-gray-300"
                    >
                      I am looking for...
                    </option>
                    <option value="hiring" className="bg-[var(--primary)]">
                      Staff (Hiring)
                    </option>
                    <option value="job" className="bg-[var(--primary)]">
                      Job (Candidate)
                    </option>
                  </select>
                </div>
              </div>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your needs..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all resize-none"
              ></textarea>

              <button className="group w-full md:w-auto flex items-center justify-center gap-3 bg-white text-[var(--primary)] px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-neutral-100 hover:scale-[1.02] shadow-xl hover:shadow-2xl">
                Send Message
                <div className="bg-[var(--primary)] text-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </form>

            <div className="mt-12 flex flex-col md:flex-row gap-8 py-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">
                    Email us at
                  </p>
                  <a
                    href="mailto:hello@mdivan.com"
                    className="text-white font-medium hover:underline"
                  >
                    hello@mdivan.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">
                    Call us
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-white font-medium hover:underline"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[700px] w-full hidden lg:block"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                alt="Contact Team"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Floating Info Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white/20 bg-gray-300 flex items-center justify-center overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-semibold">24/7 Support</p>
                    <p className="text-white/60 text-sm">
                      Always here to help you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
