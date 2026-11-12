"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import {
  BlendingVesselIcon,
  AutomatedBottlingLineIcon,
  HygieneSealShieldIcon,
  ChilledBottleIcon,
} from "@/components/icons/stamina-icons";

const hygieneStages = [
  {
    icon: BlendingVesselIcon,
    step: "01",
    title: "Controlled Blending & Formulation",
    description:
      "Fruit concentrates and purees are measured in food-grade stainless steel vessels to maintain the signature mouthfeel and aroma of every STAMINA flavour.",
  },
  {
    icon: AutomatedBottlingLineIcon,
    step: "02",
    title: "Automated Sterile Bottling",
    description:
      "Enclosed cleanroom filling lines sanitize and fill bottles without manual handling, protecting purity from mixing vessel to final bottle.",
  },
  {
    icon: ChilledBottleIcon,
    step: "03",
    title: "Food-Grade PET & Airtight Capping",
    description:
      "Packaged in recyclable 250 ml PET containers with tamper-evident security caps that lock in freshness and prevent contamination.",
  },
];

function QualityStageCard({
  stage,
  index,
}: {
  stage: (typeof hygieneStages)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const Icon = stage.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ x: 6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="liquid-glass-dark liquid-shine relative overflow-hidden flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
    >
      {/* Subtle Cursor-Following Emerald/Gold Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 0.25 : 0,
          background: `radial-gradient(220px circle at ${cursor.x}% ${cursor.y}%, rgba(255, 201, 40, 0.45), transparent 75%)`,
        }}
      />

      <div className="relative z-10 w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#FFC928] shrink-0">
        <Icon size={22} />
      </div>

      <div className="relative z-10 space-y-1">
        <span className="text-[10px] font-black tracking-widest text-[#FFC928]/90 block">
          STAGE {stage.step}
        </span>
        <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
          {stage.title}
        </h4>
        <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed pt-0.5">
          {stage.description}
        </p>
      </div>
    </motion.div>
  );
}

export function QualityPreviewSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#112E1F] text-white relative overflow-hidden">
      {/* Subtle Ambient Emerald & Gold Glow */}
      <div className="animate-liquid-morph absolute top-1/4 right-0 w-[520px] h-[520px] bg-[#55B747]/16 blur-3xl pointer-events-none" />
      <div className="animate-liquid-morph absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-[#FFC928]/12 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 liquid-glass-dark px-4 py-1.5 rounded-full">
            <HygieneSealShieldIcon size={15} className="text-[#FFC928]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#FFC928]">
              MANUFACTURING EXCELLENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Precision Bottling &amp; Pure Hygiene Standards.
          </h2>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed">
            At <strong>STAR AGRO FOODS</strong>, our bottling process adheres to disciplined hygiene routines, standardized blending protocols, and hermetic cap sealing to safeguard product purity and taste consistency.
          </p>
        </div>

        {/* Two-Column Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Real Cleanroom Facility Visual inside Liquid Glass Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6"
          >
            <div className="liquid-glass-dark liquid-shine rounded-[32px] p-3 shadow-2xl group">
              <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden bg-[#0A1F14]">
                <img
                  src="/media/hygiene-facility.jpg"
                  alt="Hygienic stainless steel fruit juice processing and automated PET bottling line"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091C12]/90 via-[#091C12]/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FFC928] block">
                      HYGIENIC PROCESSING LINE
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white">
                      Cleanroom Filling &amp; Sealed Capping
                    </p>
                  </div>
                  <span className="text-[11px] font-bold bg-white/15 backdrop-blur-md border border-white/25 text-white px-3 py-1 rounded-full">
                    Maharashtra, India
                  </span>
                </div>
              </div>

              {/* Clean Fact Strip Below Image */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3">
                <div className="bg-white/8 border border-white/10 rounded-2xl p-3 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
                  <span className="text-[10px] uppercase tracking-wider text-white/65 font-bold block">
                    Regulatory
                  </span>
                  <span className="text-xs font-extrabold text-[#FFC928]">
                    FSSAI Compliant
                  </span>
                </div>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-3 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
                  <span className="text-[10px] uppercase tracking-wider text-white/65 font-bold block">
                    Container
                  </span>
                  <span className="text-xs font-extrabold text-white">
                    Food-Grade PET
                  </span>
                </div>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-3 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
                  <span className="text-[10px] uppercase tracking-wider text-white/65 font-bold block">
                    Handling
                  </span>
                  <span className="text-xs font-extrabold text-[#55B747]">
                    Enclosed Line
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Hygiene Process Stages + CTA */}
          <div className="lg:col-span-6 space-y-4">
            {hygieneStages.map((stage, idx) => (
              <QualityStageCard key={stage.step} stage={stage} index={idx} />
            ))}

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/quality"
                className="liquid-shine group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFC928] hover:bg-[#ffd552] text-[#173D2A] font-black text-sm px-7 py-3.5 rounded-full shadow-xl transition-all hover:-translate-y-0.5"
              >
                <span>Read Full Manufacturing Story</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <p className="text-[11px] text-white/50 italic pt-1">
              * Representative hygienic bottling visual. Official STAR AGRO FOODS plant photography, capacity figures, and laboratory audit certificates will be published upon client release.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
