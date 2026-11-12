"use client";

import { Sparkles, TrendingUp, Truck, ShieldCheck, BadgePercent } from "lucide-react";
import { motion } from "motion/react";
import { EnquiryForm } from "@/components/enquiry-form";

const distributorPerks = [
  {
    icon: TrendingUp,
    title: "High Retail Velocity",
    description:
      "STAMINA's vibrant bottle aesthetics and accessible pricing drive strong repeat impulse purchases in retail outlets.",
  },
  {
    icon: BadgePercent,
    title: "Attractive Channel Margins",
    description:
      "Healthy commercial margins designed to support sustainable growth for distributors, super stockists, and retail networks.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Logistics",
    description:
      "Centrally operated manufacturing facility in Maharashtra enabling consistent replenishment cycles and timely dispatch.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Commercial Support",
    description:
      "Direct point of contact with STAR AGRO FOODS sales leadership, promotional posters, and point-of-sale display assets.",
  },
];

export function DistributorCtaSection({
  prefilledProduct,
}: {
  prefilledProduct?: string;
}) {
  return (
    <section id="distributor" className="py-24 sm:py-32 bg-[#FFF9ED] relative overflow-hidden">
      {/* Morphing Liquid Glows */}
      <div className="animate-liquid-morph absolute top-1/4 -left-16 w-96 h-96 bg-[#FFC928]/20 blur-3xl pointer-events-none" />
      <div className="animate-liquid-morph absolute bottom-1/4 -right-16 w-96 h-96 bg-[#FF7A1A]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: B2B Opportunity Pitch */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 liquid-pill px-4 py-1.5 rounded-full">
                <Sparkles size={14} className="text-[#FF7A1A]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#173D2A]">
                  B2B CHANNEL ALLIANCE
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#17251D] tracking-tight leading-tight">
                Grow Your Business with STAMINA.
              </h2>

              <p className="text-base sm:text-lg text-[#4E6056] leading-relaxed">
                Interested in bringing STAMINA products to your market? Connect with our team to explore distribution and business opportunities.
              </p>
            </div>

            {/* Liquid Glass Perks Grid with Hover Lift */}
            <div className="space-y-3.5 pt-2">
              {distributorPerks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={perk.title}
                    whileHover={{ x: 6, y: -2 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className="liquid-glass liquid-shine group flex items-start gap-4 p-4 rounded-2xl transition-shadow hover:shadow-xl cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#173D2A] text-[#FFC928] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#17251D]">
                        {perk.title}
                      </h4>
                      <p className="text-xs text-[#4E6056] mt-0.5 leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="liquid-glass-dark bg-[#173D2A]/95 p-5 rounded-3xl text-white space-y-1">
              <p className="text-xs font-extrabold text-[#FFC928] uppercase tracking-wider">
                Direct Distribution Helpline
              </p>
              <p className="text-xs text-white/80">
                For bulk institutional contracts, tenders, or modern trade agreements:
              </p>
              <p className="text-sm font-black pt-1">
                distributor@staragrofoods.com &bull; +91 98220 12345
              </p>
            </div>
          </div>

          {/* Right Column: Integrated Live Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              type="distributor"
              product={prefilledProduct || ""}
              title="Apply for Distributorship"
              subtitle="Submit your business details below. Our commercial sales desk will evaluate territory availability and reach out directly."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
