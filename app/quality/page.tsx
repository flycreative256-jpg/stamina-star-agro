"use client";

import Link from "next/link";
import {
  Factory,
  ThermometerSnowflake,
  Microscope,
  Check,
} from "lucide-react";
import {
  MangoFruitIcon,
  BlendingVesselIcon,
  AutomatedBottlingLineIcon,
  HygieneSealShieldIcon,
  ChilledBottleIcon,
  FruitNectarDropIcon,
} from "@/components/icons/stamina-icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Providers } from "@/components/providers";

const processSteps = [
  {
    step: "01",
    title: "Careful Fruit Puree & Concentrate Sourcing",
    description:
      "Raw concentrates and fruit purees are inspected upon arrival to verify freshness, natural brix levels, and tropical aroma integrity before entering the processing facility.",
    icon: MangoFruitIcon,
  },
  {
    step: "02",
    title: "Precision Blending & Formulation",
    description:
      "Formulation tanks blend fruit ingredients in cleanroom conditions using food-grade stainless steel mixing systems to achieve uniform flavour profile and smooth consistency.",
    icon: BlendingVesselIcon,
  },
  {
    step: "03",
    title: "Thermal Treatment & Microbiological Safety",
    description:
      "Gentle heat processing ensures complete microbiological stability while safeguarding delicate fruit esters, colour, and taste characteristics.",
    icon: ThermometerSnowflake,
  },
  {
    step: "04",
    title: "Automated Cleanroom Bottling & Capping",
    description:
      "Bottles undergo automated sanitization before high-speed filling and tamper-evident cap application to form an airtight seal free from human contact.",
    icon: AutomatedBottlingLineIcon,
  },
  {
    step: "05",
    title: "In-Line Optical & Fill-Level Verification",
    description:
      "Every finished bottle passes through automated inspection gates verifying fill consistency, label positioning, and cap torque tightness.",
    icon: HygieneSealShieldIcon,
  },
  {
    step: "06",
    title: "Hygienic Boxing & Palletized Logistics",
    description:
      "Coded cartons are packed and stored in clean, well-ventilated staging bays ready for dispatch across regional distribution routes in India.",
    icon: ChilledBottleIcon,
  },
];

export default function QualityPage() {
  return (
    <Providers>
      <SmoothScroll />
      <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#17251D]">
        <SiteHeader />

        <main className="flex-1">
          {/* Header Banner */}
          <section className="relative py-20 sm:py-28 bg-[#173D2A] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#55B747_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#FFC928] text-xs font-black uppercase tracking-widest mb-4 border border-white/15">
                STAR AGRO FOODS STANDARDS
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
                Quality & Manufacturing.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Discover our commitment to hygienic production, standardized blending, and food-grade packaging across every bottle of STAMINA.
              </p>
            </div>
          </section>

          {/* Philosophy & Overview */}
          <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-black uppercase tracking-widest text-[#FF7A1A]">
                    BOTTLING PHILOSOPHY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#17251D] leading-tight">
                    Every Sip Reflects Disciplined Standards.
                  </h2>
                  <p className="text-base text-[#4E6056] leading-relaxed">
                    At <strong>STAR AGRO FOODS</strong>, product quality begins with raw ingredient integrity. We collaborate with reputable fruit concentrate suppliers and enforce stringent clean-in-place (CIP) regimens throughout our bottling facility in Maharashtra.
                  </p>
                  <p className="text-sm text-[#4E6056] leading-relaxed">
                    Our goal is to ensure that a bottle of STAMINA Mango opened in Mumbai delivers the exact same fresh, mouth-filling sweetness as one opened in Nagpur or Pune.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-[#FFF9ED] border border-[#E8DECC]">
                      <div className="flex items-center gap-2 text-[#55B747] font-bold text-sm mb-1">
                        <HygieneSealShieldIcon size={18} />
                        <span>FSSAI Registered</span>
                      </div>
                      <p className="text-xs text-[#4E6056]">
                        Licensed food manufacturing protocols strictly adhered to.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FFF9ED] border border-[#E8DECC]">
                      <div className="flex items-center gap-2 text-[#173D2A] font-bold text-sm mb-1">
                        <FruitNectarDropIcon size={18} />
                        <span>Clean Water Processing</span>
                      </div>
                      <p className="text-xs text-[#4E6056]">
                        Multi-stage filtration and UV treatment before blending.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  {/* Facility Presentation Card */}
                  <div className="liquid-glass-dark rounded-3xl overflow-hidden shadow-2xl bg-[#173D2A] text-white p-6 sm:p-8 relative space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-white/15">
                      <div className="flex items-center gap-2.5">
                        <Factory size={22} className="text-[#FFC928]" />
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            Bottling &amp; Packaging Facility
                          </h4>
                          <p className="text-[10px] text-white/60">
                            STAR AGRO FOODS Industrial Unit
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-white/10 px-3 py-1 rounded-full text-[#FFC928] font-bold">
                        Maharashtra, India
                      </span>
                    </div>

                    <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0A1F14]">
                      <img
                        src="/media/hygiene-facility.jpg"
                        alt="Hygienic stainless steel fruit juice processing and automated PET bottling line"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <p className="text-xs text-white/75 italic text-center">
                      * Representative cleanroom bottling process visual. Official plant statistics and certified third-party audits will be published as official client verification is completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6-Stage Manufacturing Journey */}
          <section className="py-20 sm:py-28 bg-[#FFF9ED]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#173D2A]">
                  STEP-BY-STEP WORKFLOW
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#17251D]">
                  The STAMINA Production Journey
                </h2>
                <p className="text-sm text-[#4E6056]">
                  How every batch moves from selected fruit purees to sealed bottles ready for enjoyment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.step}
                      className="bg-white rounded-3xl p-8 border border-[#E8DECC] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-2xl font-black text-[#FF7A1A] font-mono">
                            {s.step}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-[#FFF9ED] text-[#173D2A] flex items-center justify-center border border-[#173D2A]/10">
                            <Icon size={20} />
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-[#17251D] mb-3">
                          {s.title}
                        </h3>

                        <p className="text-xs text-[#4E6056] leading-relaxed">
                          {s.description}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-bold text-[#55B747]">
                        <Check size={14} />
                        <span>Hygiene Verified</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Packaging & Safety Presentation */}
          <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#173D2A] rounded-3xl p-8 sm:p-14 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <span className="text-xs font-black uppercase tracking-widest text-[#FFC928]">
                      PACKAGING EXCELLENCE
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black leading-tight text-white">
                      Food-Grade 250 ml PET Bottles with Tamper-Evident Capping.
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                      We package STAMINA drinks in ergonomically grooved, recyclable PET bottles that resist transport impacts, maintain carbon-neutral recyclability pathways, and feature airtight security caps that safeguard taste until cracked open by the consumer.
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                    <Link
                      href="/distributorship"
                      className="bg-[#FF7A1A] hover:bg-[#E6660B] text-white font-bold text-sm px-8 py-4 rounded-full text-center shadow-lg transition-all"
                    >
                      Enquire for Distribution
                    </Link>
                    <Link
                      href="/products"
                      className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-8 py-3.5 rounded-full text-center border border-white/20 transition-colors"
                    >
                      Explore Juices
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
        <WhatsAppButton />
      </div>
    </Providers>
  );
}
