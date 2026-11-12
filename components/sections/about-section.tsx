"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section
      id="about-star-agro"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative Liquid Aurora Blobs */}
      <div className="animate-liquid-morph absolute -top-20 -right-20 w-[420px] h-[420px] bg-[#FFC928]/15 blur-3xl pointer-events-none" />
      <div className="animate-liquid-morph absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-[#55B747]/12 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clean Editorial Image Frame (No floating popup cards) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="liquid-glass-strong liquid-shine relative z-10 rounded-[32px] p-2.5 shadow-xl group">
                <div className="relative rounded-[24px] overflow-hidden">
                  <img
                    src="/media/stamina-lineup.jpg"
                    alt="STAMINA Fruit Juice Lineup by STAR AGRO FOODS"
                    className="w-full h-auto object-cover object-center transform group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#FFC928]">
                        STAR AGRO FOODS
                      </p>
                      <p className="text-base sm:text-lg font-extrabold mt-0.5">
                        The STAMINA Fruit Juice Family
                      </p>
                    </div>
                    <span className="text-[11px] font-bold bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full shrink-0">
                      250 ml PET
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 liquid-pill px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest text-[#FF7A1A]">
                  WHO WE ARE
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173D2A]">
                  <ShieldCheck size={15} className="text-[#55B747]" />
                  FSSAI Registered Brand
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#111F17] tracking-tight leading-tight">
                Bringing Refreshment to Every Moment.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#28382F] font-medium leading-relaxed">
              At <strong>STAR AGRO FOODS</strong>, we believe every refreshing moment deserves great flavour. Through our <strong>STAMINA</strong> range, we bring fruit-inspired beverages designed for everyday enjoyment.
            </p>

            <p className="text-sm text-[#28382F] leading-relaxed">
              Rooted in the agricultural heartland of Maharashtra, STAR AGRO FOODS operates modern food-grade bottling processes to deliver consistent taste, dependable hygiene, and joyful tropical flavours right into the hands of Indian consumers.
            </p>

            {/* Clean Inline Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="liquid-glass flex items-start gap-3 p-4 rounded-2xl">
                <CheckCircle2 size={18} className="text-[#55B747] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111F17]">Fruit-Centric Recipes</h4>
                  <p className="text-xs text-[#28382F] mt-0.5">
                    Carefully chosen concentrates & fruit purees.
                  </p>
                </div>
              </div>

              <div className="liquid-glass flex items-start gap-3 p-4 rounded-2xl">
                <CheckCircle2 size={18} className="text-[#55B747] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111F17]">Distributor-Friendly</h4>
                  <p className="text-xs text-[#28382F] mt-0.5">
                    Fast retail turnover with strong trade margins.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="liquid-shine group inline-flex items-center gap-2 bg-[#173D2A] hover:bg-[#0F281B] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span>Read Our Story</span>
                <ArrowRight
                  size={16}
                  className="text-[#FFC928] transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/quality"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#173D2A] hover:text-[#FF7A1A] transition-colors px-4 py-2"
              >
                <span>Explore Quality & Standards</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <p className="text-[11px] text-neutral-400 italic pt-2">
              * Note: Specific historical milestones, corporate awards, and additional laboratory disclosures are currently editable placeholders pending final client verification.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
