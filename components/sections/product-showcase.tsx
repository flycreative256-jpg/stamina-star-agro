"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { CitrusSliceIcon } from "@/components/icons/stamina-icons";
import { motion } from "motion/react";
import { products, type Product } from "@/data/products";

function ProductCard({
  product,
  index,
  onSelectProductForEnquiry,
}: {
  product: Product;
  index: number;
  onSelectProductForEnquiry?: (productName: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursor({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -10, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="h-full group relative liquid-glass-strong liquid-shine rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:shadow-[0_28px_60px_-15px_rgba(23,61,42,0.24)]"
      style={{
        backgroundColor: hovered ? product.palette.cardBg : undefined,
      }}
    >
      {/* Dynamic Cursor-Following Liquid Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 0.16 : 0,
          background: `radial-gradient(280px circle at ${cursor.x}% ${cursor.y}%, ${product.palette.glow}, transparent 75%)`,
        }}
      />

      {/* Ambient Flavour Halo Bloom on Hover */}
      <div
        className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none group-hover:scale-125"
        style={{ backgroundColor: product.palette.glow }}
      />

      <div className="relative z-10">
        {/* Clean Header Row */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span
            className="text-xs font-extrabold uppercase tracking-wider"
            style={{ color: product.palette.accent }}
          >
            {product.flavour}
          </span>
          <span className="text-[11px] font-bold text-[#173D2A]/80">
            250 ml PET
          </span>
        </div>

        {/* Clean Product Photograph Stage (No cluttered floating overlays on bottle) */}
        <div className="relative aspect-[3/4] w-full rounded-[22px] overflow-hidden bg-[#FAF6EE] mb-5 shadow-inner transition-all duration-500 group-hover:shadow-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transform transition-all duration-700 ease-out group-hover:scale-108"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Copy & Details */}
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-[#111F17] group-hover:text-[#173D2A] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-[13px] text-[#2B3B32] leading-relaxed line-clamp-2 font-medium">
            {product.description}
          </p>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="relative z-10 pt-6 space-y-2">
        <Link
          href={`/products/${product.slug}`}
          className="liquid-shine w-full flex items-center justify-center gap-2 bg-[#173D2A] hover:bg-[#0F281B] text-white text-xs font-bold py-3 rounded-full transition-all shadow-sm group-hover:shadow-lg"
        >
          <Eye size={14} className="text-[#FFC928]" />
          <span>View Details</span>
        </Link>

        <a
          href="#distributor"
          onClick={() => {
            if (onSelectProductForEnquiry) {
              onSelectProductForEnquiry(product.name);
            }
          }}
          className="group/btn w-full flex items-center justify-center gap-1.5 liquid-pill text-[#17251D] hover:bg-white text-xs font-bold py-2.5 rounded-full transition-all text-center"
        >
          <span>Enquire Now</span>
          <ArrowRight
            size={13}
            className="text-[#FF7A1A] transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </a>
      </div>
    </motion.div>
  );
}

export function ProductShowcase({
  onSelectProductForEnquiry,
}: {
  onSelectProductForEnquiry?: (productName: string) => void;
}) {
  return (
    <section id="juices" className="py-24 sm:py-32 bg-[#FFF9ED] relative overflow-hidden">
      {/* Liquid Aurora Accent */}
      <div className="animate-liquid-morph absolute top-16 left-1/2 -translate-x-1/2 w-[560px] h-[300px] bg-[#FFC928]/12 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 liquid-pill px-4 py-1.5 rounded-full">
            <CitrusSliceIcon size={15} className="text-[#FF7A1A]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#173D2A]">
              STAMINA PRODUCT COLLECTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#17251D] tracking-tight">
            Find Your Favourite Flavour.
          </h2>

          <p className="text-base text-[#4E6056] leading-relaxed">
            Every bottle of STAMINA is formulated with delicious fruit character, sealed for pure refreshment whenever you need an invigorating lift.
          </p>
        </div>

        {/* Clean Responsive Grid (1-col mobile, 2-col tablet, 4-col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelectProductForEnquiry={onSelectProductForEnquiry}
            />
          ))}
        </div>

        {/* Footnote about SKUs */}
        <div className="mt-10 text-center text-xs text-[#4E6056]">
          <p className="inline-block liquid-pill px-5 py-2 rounded-full">
            Confirmed commercial format: <strong>250 ml PET Bottles</strong>. Additional pack sizes available on enquiry.
          </p>
        </div>
      </div>
    </section>
  );
}
