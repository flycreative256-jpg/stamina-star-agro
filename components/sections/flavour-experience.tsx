"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { VegLeafMarkIcon } from "@/components/icons/stamina-icons";
import { motion, AnimatePresence } from "motion/react";
import { products } from "@/data/products";

export function FlavourExperience() {
  const [activeFlavourIdx, setActiveFlavourIdx] = useState(0);
  const activeProduct = products[activeFlavourIdx] || products[0];

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: activeProduct.palette.background,
      }}
    >
      {/* Morphing Liquid Aurora Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="animate-liquid-morph -top-32 right-10 w-[520px] h-[520px] blur-3xl opacity-45 transition-colors duration-700 absolute"
          style={{ backgroundColor: activeProduct.palette.glow }}
        />
        <div
          className="animate-liquid-morph -bottom-32 left-10 w-[500px] h-[500px] blur-3xl opacity-30 transition-colors duration-700 absolute"
          style={{
            animationDelay: "-5s",
            backgroundColor: activeProduct.palette.primary,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 liquid-pill px-4 py-1.5 rounded-full">
            <Sparkles size={14} className="text-[#FF7A1A]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#173D2A]">
              INTERACTIVE FLAVOUR SUITE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111F17] tracking-tight">
            A Flavour for Every Refreshing Moment.
          </h2>

          <p className="text-base text-[#28382F] font-medium leading-relaxed">
            Switch between STAMINA&apos;s confirmed juice flavours to explore each fruit profile, aroma notes, and signature character.
          </p>

          {/* Liquid Glass Flavour Switcher Dock */}
          <div className="pt-4 flex justify-center">
            <div className="grid grid-cols-2 sm:inline-flex sm:flex-wrap items-center justify-center gap-1.5 liquid-glass p-1.5 rounded-2xl sm:rounded-full w-full sm:w-auto max-w-md sm:max-w-none">
              {products.map((item, idx) => {
                const isSelected = idx === activeFlavourIdx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFlavourIdx(idx)}
                    type="button"
                    aria-pressed={isSelected}
                    className={`relative px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-extrabold transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer z-10 ${
                      isSelected ? "text-white" : "text-[#17251D] hover:text-[#173D2A]"
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="flavour-suite-pill"
                        transition={{ type: "spring", stiffness: 360, damping: 28 }}
                        className="absolute inset-0 rounded-xl sm:rounded-full bg-[#173D2A] shadow-lg -z-10"
                      />
                    )}
                    <span>{item.flavour}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Liquid Glass Stage */}
        <div className="liquid-glass-strong rounded-[36px] p-6 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Product Visual Presentation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[3/4]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct.id}
                    initial={{ opacity: 0, scale: 0.92, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="liquid-glass-strong liquid-shine w-full h-full rounded-[32px] p-2 shadow-2xl relative group"
                  >
                    <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-white">
                      <img
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                      />

                      <div className="absolute top-3 left-3 liquid-glass-dark bg-[#173D2A]/85 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                        Confirmed 250 ml PET
                      </div>

                      <div className="absolute bottom-3 right-3 liquid-pill px-3 py-1.5 rounded-full text-[10px] font-extrabold text-[#17251D]">
                        STAR AGRO FOODS
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Detailed Flavour Storytelling */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span
                      className="text-xs font-black uppercase tracking-widest block"
                      style={{ color: activeProduct.palette.accent }}
                    >
                      {activeProduct.tagline}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-[#111F17]">
                      {activeProduct.name}
                    </h3>
                  </div>

                  <p className="text-base text-[#28382F] font-medium leading-relaxed">
                    {activeProduct.description}
                  </p>

                  {/* Tasting Profile Badges with Hover Lift */}
                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-xs font-bold text-[#17251D] uppercase tracking-wider">
                      Sensory Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.tastingNotes.map((note) => (
                        <motion.div
                          key={note}
                          whileHover={{ y: -3, scale: 1.03 }}
                          className="liquid-pill flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-semibold text-[#173D2A] cursor-default"
                        >
                          <CheckCircle size={14} className="text-[#55B747]" />
                          <span>{note}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Attribute Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="liquid-glass p-3.5 rounded-2xl transition-shadow hover:shadow-md"
                    >
                      <p className="text-[10px] font-bold uppercase text-[#4E6056]">
                        Bottle Size
                      </p>
                      <p className="text-xs font-extrabold text-[#17251D] mt-0.5">
                        250 ml PET
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -3 }}
                      className="liquid-glass p-3.5 rounded-2xl transition-shadow hover:shadow-md"
                    >
                      <p className="text-[10px] font-bold uppercase text-[#4E6056]">
                        Vegetarian
                      </p>
                      <p className="text-xs font-extrabold text-[#55B747] mt-0.5 flex items-center gap-1.5">
                        <VegLeafMarkIcon size={15} />
                        100% Vegetarian
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -3 }}
                      className="liquid-glass p-3.5 rounded-2xl transition-shadow hover:shadow-md col-span-2 sm:col-span-1"
                    >
                      <p className="text-[10px] font-bold uppercase text-[#4E6056]">
                        Brand
                      </p>
                      <p className="text-xs font-extrabold text-[#17251D] mt-0.5">
                        STAMINA Juice
                      </p>
                    </motion.div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <Link
                      href={`/products/${activeProduct.slug}`}
                      className="liquid-shine group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#173D2A] hover:bg-[#0F281B] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      <span>Full Product Profile</span>
                      <ArrowRight
                        size={14}
                        className="text-[#FFC928] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                      href={`/distributorship?product=${encodeURIComponent(activeProduct.name)}`}
                      className="liquid-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF7A1A] hover:bg-[#E6660B] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      <span>Distribute {activeProduct.flavour}</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
