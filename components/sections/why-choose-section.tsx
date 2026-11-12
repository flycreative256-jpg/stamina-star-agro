"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  MangoFruitIcon,
  FruitNectarDropIcon,
  ChilledBottleIcon,
  EverydayGlassIcon,
  CitrusSliceIcon,
} from "@/components/icons/stamina-icons";

const pillars = [
  {
    icon: MangoFruitIcon,
    number: "01",
    title: "Delicious Fruit Flavours",
    description:
      "Crafted with fruit-forward recipes that showcase the genuine, luscious notes of tropical favourites like mango, pink guava, fragrant litchi, and ruby pomegranate.",
    color: "#FF7A1A",
    bg: "#FFF3DC",
    glow: "rgba(255, 122, 26, 0.35)",
  },
  {
    icon: FruitNectarDropIcon,
    number: "02",
    title: "Refreshing Taste",
    description:
      "Specially formulated for crisp, thirst-quenching satisfaction. Enjoyed chilled, every bottle delivers a balanced blend of natural fruit sweetness and uplifting refreshment.",
    color: "#55B747",
    bg: "#EAF7E7",
    glow: "rgba(85, 183, 71, 0.32)",
  },
  {
    icon: ChilledBottleIcon,
    number: "03",
    title: "Convenient Packaging",
    description:
      "Bottled in lightweight, durable 250 ml PET containers with tamper-evident sealed caps, designed for clean portability, easy grip, and effortless on-the-go enjoyment.",
    color: "#D99A00",
    bg: "#FFF9D9",
    glow: "rgba(255, 201, 40, 0.42)",
  },
  {
    icon: EverydayGlassIcon,
    number: "04",
    title: "Made for Everyday Moments",
    description:
      "From family gatherings and celebratory feasts to sports breaks and mid-day study pauses, STAMINA brings an energetic burst of flavour to any occasion.",
    color: "#B81835",
    bg: "#FDEEEF",
    glow: "rgba(184, 24, 53, 0.28)",
  },
];

function PillarCard({
  item,
  index,
}: {
  item: (typeof pillars)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const Icon = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative liquid-glass-strong liquid-shine rounded-[28px] p-7 sm:p-8 transition-all duration-400 flex flex-col justify-between overflow-hidden hover:shadow-2xl"
    >
      {/* Cursor-following Flavour Glow Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 0.22 : 0,
          background: `radial-gradient(260px circle at ${cursor.x}% ${cursor.y}%, ${item.glow}, transparent 75%)`,
        }}
      />

      <div className="relative z-10 space-y-5">
        <div className="flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-white transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6"
            style={{ backgroundColor: item.bg, color: item.color }}
          >
            <Icon size={24} />
          </div>
          <span
            className="text-2xl font-black opacity-20 group-hover:opacity-45 transition-opacity"
            style={{ color: item.color }}
          >
            {item.number}
          </span>
        </div>

        <div className="space-y-2.5">
          <h3 className="text-xl font-bold text-[#111F17]">
            {item.title}
          </h3>
          <p className="text-[13px] text-[#2B3B32] leading-relaxed font-medium">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function WhyChooseSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-[#FFFDF9] to-[#FFF9ED] relative overflow-hidden">
      <div className="animate-liquid-morph absolute top-12 -right-24 w-96 h-96 bg-[#FFC928]/12 blur-3xl pointer-events-none" />
      <div className="animate-liquid-morph absolute bottom-12 -left-24 w-96 h-96 bg-[#55B747]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 liquid-pill px-4 py-1.5 rounded-full">
            <CitrusSliceIcon size={15} className="text-[#FF7A1A]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#173D2A]">
              THE STAMINA STANDARD
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111F17] tracking-tight">
            Refreshment You Can Enjoy.
          </h2>

          <p className="text-base text-[#2B3B32] leading-relaxed font-medium">
            STAR AGRO FOODS is committed to creating accessible, delightful fruit-based beverages built around taste, convenience, and consistent quality.
          </p>
        </div>

        {/* 4 Clean Liquid Glass Cards with Mouse Color Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <PillarCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
