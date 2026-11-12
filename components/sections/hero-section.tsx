"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Pause,
  Play,
} from "lucide-react";
import {
  VegLeafMarkIcon,
  ChilledBottleIcon,
  HygieneSealShieldIcon,
} from "@/components/icons/stamina-icons";
import { motion, AnimatePresence } from "motion/react";
import { products } from "@/data/products";

const AUTO_CYCLE_MS = 6000;

export function HeroSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cursor, setCursor] = useState({ x: 65, y: 45 });

  const currentProduct = products[selectedIdx] || products[0];

  // Calm auto-cycle through all 4 products when not hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % products.length);
    }, AUTO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const marqueeItems = [
    { label: "STAMINA Mango", accent: "#FF7A1A" },
    { label: "250 ml PET Bottle", accent: "#173D2A" },
    { label: "STAMINA Litchi", accent: "#E63956" },
    { label: "100% Vegetarian", accent: "#55B747" },
    { label: "STAMINA Pink Guava", accent: "#E83D6F" },
    { label: "FSSAI Certified Brand", accent: "#173D2A" },
    { label: "STAMINA Pomegranate", accent: "#B81835" },
    { label: "STAR AGRO FOODS", accent: "#FF7A1A" },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className={`relative lg:min-h-[calc(100vh-16px)] flex flex-col justify-between overflow-hidden transition-colors duration-[1100ms] ease-out tone-${currentProduct.slug} pt-8 sm:pt-12 lg:-mt-20 lg:pt-28 pb-6 sm:pb-8`}
      style={{
        backgroundColor: currentProduct.palette.background,
      }}
    >
      {/* Subtle Cursor-Following Flavour Glow across the Hero */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(620px circle at ${cursor.x}% ${cursor.y}%, ${currentProduct.palette.glow}, transparent 70%)`,
          opacity: 0.42,
        }}
      />

      {/* Soft Ambient Gradient Corners */}
      <div
        className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full blur-3xl opacity-35 pointer-events-none transition-colors duration-[1100ms]"
        style={{ backgroundColor: currentProduct.palette.primary }}
      />
      <div
        className="absolute -bottom-32 -left-20 w-[440px] h-[440px] rounded-full blur-3xl opacity-25 pointer-events-none transition-colors duration-[1100ms]"
        style={{ backgroundColor: currentProduct.palette.accent }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean, Generous Editorial Copy */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 liquid-pill px-4 py-2 rounded-full"
            >
              <Sparkles size={13} className="text-[#FF7A1A]" />
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#173D2A]">
                STAR AGRO FOODS &bull; STAMINA™
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-[64px] font-black text-[#111F17] tracking-tight leading-[1.04]">
                Refresh Your World{" "}
                <span className="block">
                  with{" "}
                  <span
                    className="transition-colors duration-700"
                    style={{ color: currentProduct.palette.accent }}
                  >
                    STAMINA.
                  </span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#28382F] max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                Discover refreshing fruit flavours crafted to bring delicious moments to every sip.
              </p>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1"
            >
              <a
                href="#juices"
                className="liquid-shine group w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-3 bg-[#173D2A] hover:bg-[#0F281B] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-[#173D2A]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Explore Our Juices</span>
                <ArrowRight
                  size={17}
                  className="text-[#FFC928] transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/distributorship"
                className="liquid-shine group w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2 liquid-pill text-[#111F17] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Sparkles
                  size={15}
                  className="text-[#FF7A1A] transition-transform duration-300 group-hover:rotate-12"
                />
                <span>Become a Distributor</span>
              </Link>
            </motion.div>

            {/* Clean Inline Specs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5 text-xs font-bold text-[#173D2A]/90 pt-1">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <VegLeafMarkIcon size={16} />
                100% Vegetarian
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <ChilledBottleIcon size={17} className="text-[#FF7A1A]" />
                250 ml PET Bottle
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <HygieneSealShieldIcon size={17} className="text-[#173D2A]" />
                FSSAI Certified Brand
              </span>
            </div>
          </div>

          {/* Right Column: Clean 4-Product Expanding Liquid Glass Accordion */}
          <div
            className="lg:col-span-7 flex flex-col gap-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Desktop / Tablet: Side-by-side 4 expanding slices (zero overlapping pile) */}
            <div className="hidden sm:flex items-stretch gap-3 h-[460px] xl:h-[500px] w-full">
              {products.map((product, idx) => {
                const isActive = idx === selectedIdx;

                return (
                  <motion.div
                    key={product.id}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    onClick={() => setSelectedIdx(idx)}
                    initial={{ opacity: 0, y: -48, scale: 0.86 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      flexGrow: isActive ? 3.4 : 0.85,
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: idx * 0.09 },
                      y: { duration: 0.85, delay: idx * 0.09, ease: [0.34, 1.56, 0.64, 1] },
                      scale: { duration: 0.85, delay: idx * 0.09, ease: [0.34, 1.56, 0.64, 1] },
                      flexGrow: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                    }}
                    style={{ flexBasis: 0 }}
                    className={`relative rounded-[28px] overflow-hidden cursor-pointer transition-shadow duration-500 ${
                      isActive
                        ? "liquid-glass-strong p-1.5 shadow-2xl"
                        : "liquid-glass p-1 opacity-85 hover:opacity-100 shadow-md"
                    }`}
                  >
                    <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover object-center transition-transform duration-[900ms] ease-out ${
                          isActive ? "scale-100" : "scale-110 brightness-95"
                        }`}
                      />

                      {/* Gradient Scrim */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                          isActive
                            ? "bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-100"
                            : "bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-90"
                        }`}
                      />

                      {/* Vertical Label on Inactive Collapsed Slice */}
                      {!isActive && (
                        <div className="absolute inset-x-0 bottom-5 flex flex-col items-center justify-end pointer-events-none">
                          <span className="text-xs font-extrabold uppercase tracking-widest text-white [writing-mode:vertical-rl] rotate-180">
                            {product.flavour}
                          </span>
                        </div>
                      )}

                      {/* Expanded Active Product Info */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.45, delay: 0.1 }}
                            className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white flex items-end justify-between gap-4"
                          >
                            <div className="space-y-1">
                              <span
                                className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full text-white"
                                style={{ backgroundColor: product.palette.accent }}
                              >
                                {product.flavour} &bull; 250 ml
                              </span>
                              <h3 className="text-xl xl:text-2xl font-black leading-tight">
                                {product.name}
                              </h3>
                              <p className="text-xs text-white/85 line-clamp-1 max-w-xs">
                                {product.tagline}
                              </p>
                            </div>

                            <Link
                              href={`/products/${product.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="shrink-0 inline-flex items-center gap-1.5 bg-white/95 hover:bg-[#FFC928] text-[#173D2A] text-xs font-extrabold px-4 py-2.5 rounded-full shadow-md transition-colors"
                            >
                              <span>View</span>
                              <ArrowRight size={13} />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile: Clean Single Active Stage */}
            <div className="sm:hidden relative aspect-[3/4] max-w-[340px] mx-auto w-full liquid-glass-strong rounded-[28px] p-2 shadow-xl">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentProduct.id}
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    initial={{ opacity: 0.3, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.3 }}
                    transition={{ duration: 0.55 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FFC928] block">
                      {currentProduct.flavour} &bull; 250 ml
                    </span>
                    <h3 className="text-base font-extrabold leading-tight truncate">
                      {currentProduct.name}
                    </h3>
                  </div>
                  <Link
                    href={`/products/${currentProduct.slug}`}
                    className="shrink-0 bg-white text-[#173D2A] text-xs font-bold px-3.5 py-2 rounded-full shadow-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Flavour Selector + Auto-Play Toggle */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-between gap-3 pt-1 w-full">
              <div className="grid grid-cols-2 sm:inline-flex sm:flex-wrap items-center justify-center gap-1.5 liquid-glass p-1.5 rounded-2xl sm:rounded-full w-full sm:w-auto">
                {products.map((p, idx) => {
                  const isActive = idx === selectedIdx;
                  return (
                    <button
                      key={p.id}
                      onMouseEnter={() => setSelectedIdx(idx)}
                      onClick={() => setSelectedIdx(idx)}
                      type="button"
                      aria-pressed={isActive}
                      className={`relative px-3.5 py-2 sm:py-1.5 rounded-xl sm:rounded-full text-xs font-bold transition-colors duration-400 flex items-center justify-center gap-2 cursor-pointer z-10 ${
                        isActive ? "text-white" : "text-[#111F17] hover:text-[#173D2A]"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="hero-flavour-dock"
                          transition={{ type: "spring", stiffness: 180, damping: 26 }}
                          className="absolute inset-0 rounded-xl sm:rounded-full bg-[#173D2A] shadow-sm -z-10"
                        />
                      )}
                      <span>{p.flavour}</span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setIsPaused((p) => !p)}
                aria-label={isPaused ? "Resume auto rotation" : "Pause auto rotation"}
                className="liquid-pill inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold text-[#173D2A] cursor-pointer self-center sm:self-auto"
              >
                {isPaused ? <Play size={12} /> : <Pause size={12} />}
                <span>{isPaused ? "Paused" : "Auto"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Slow Edge-Faded Marquee Strip */}
      <div className="w-full relative z-20 pt-4 pb-2 marquee-mask overflow-hidden">
        <div className="marquee-track items-center">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="flex items-center mx-6 sm:mx-10 whitespace-nowrap"
            >
              <span
                className="text-sm sm:text-base font-extrabold tracking-wide"
                style={{ color: item.accent }}
              >
                {item.label}
              </span>
              <span className="ml-6 sm:ml-10 text-[#173D2A]/25 text-xs font-black">
                &bull;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
