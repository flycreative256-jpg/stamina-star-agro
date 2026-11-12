"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  TrendingUp,
  Truck,
  ShieldCheck,
  BadgePercent,
  HelpCircle,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Providers } from "@/components/providers";
import { EnquiryForm } from "@/components/enquiry-form";
import { siteConfig } from "@/config/site";

const distributorFaqs = [
  {
    q: "What is the Minimum Order Quantity (MOQ) for new distributors?",
    a: "MOQ varies by territory tier (Tier 1 vs Tier 2/3 districts). Typical introductory orders begin at 100 to 250 master cartons across mixed STAMINA flavours. Connect with our sales manager for custom starter quotas.",
  },
  {
    q: "Do you offer exclusive regional territory rights?",
    a: "Yes. STAR AGRO FOODS grants defined pin-code or district-level exclusivity to active distributors demonstrating strong retail coverage and agreed monthly sales targets.",
  },
  {
    q: "What packaging format is supplied?",
    a: "STAMINA fruit juices are supplied in 250 ml food-grade PET bottles, packed in heavy-duty corrugated master cartons suitable for long-distance transit across Indian roads.",
  },
  {
    q: "What promotional and marketing support does STAR AGRO FOODS provide?",
    a: "We equip authorized distributors with point-of-sale danglers, retail display stands, sampling kits, and regional digital promotional campaigns to drive shopkeeper pull.",
  },
  {
    q: "What are the commercial payment terms?",
    a: "Initial orders are processed on an advance / RTGS basis. Credit facilities or bank guarantee mechanisms can be evaluated after 3 months of consistent order history.",
  },
];

function DistributorshipContent() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#17251D]">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 bg-[#173D2A] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#FFC928_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#FFC928] text-xs font-black uppercase tracking-widest mb-4 border border-white/15">
              B2B CHANNEL PARTNERSHIPS
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
              Grow Your Business with STAMINA.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Interested in bringing STAMINA products to your market? Connect with our team to explore distribution and business opportunities across India.
            </p>
          </div>
        </section>

        {/* Distributor Value Proposition Grid */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-[#FFFDF8] border border-[#E8DECC] space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A1A]/10 text-[#FF7A1A] flex items-center justify-center">
                  <TrendingUp size={24} />
                </div>
                <h4 className="text-base font-bold text-[#17251D]">High Retail Velocity</h4>
                <p className="text-xs text-[#4E6056] leading-relaxed">
                  Attractive shelf appeal and genuine fruit taste generate rapid repeat purchase in neighborhood kiranas and modern stores.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FFFDF8] border border-[#E8DECC] space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#55B747]/10 text-[#55B747] flex items-center justify-center">
                  <BadgePercent size={24} />
                </div>
                <h4 className="text-base font-bold text-[#17251D]">Rewarding Margins</h4>
                <p className="text-xs text-[#4E6056] leading-relaxed">
                  Structured trade schemes and competitive distributor margins designed for sustainable commercial return on capital.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FFFDF8] border border-[#E8DECC] space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FFC928]/20 text-[#173D2A] flex items-center justify-center">
                  <Truck size={24} />
                </div>
                <h4 className="text-base font-bold text-[#17251D]">Prompt Dispatch</h4>
                <p className="text-xs text-[#4E6056] leading-relaxed">
                  Centralized bottling in Maharashtra ensuring predictable dispatch timelines and reliable batch fulfillment.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FFFDF8] border border-[#E8DECC] space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#173D2A]/10 text-[#173D2A] flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-base font-bold text-[#17251D]">Territory Protection</h4>
                <p className="text-xs text-[#4E6056] leading-relaxed">
                  Guaranteed territory boundaries to safeguard your retail network from unauthorized cross-selling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Distributor Application Form Section */}
        <section className="py-16 sm:py-24 bg-[#FFF9ED]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <EnquiryForm
              type="distributor"
              product={prefilledProduct}
              title="Official Distributor Application Form"
              subtitle="Please provide accurate business details. Our commercial sales leadership will review your coverage area and get in touch within 24 business hours."
            />
          </div>
        </section>

        {/* Distributor FAQs */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#FF7A1A]">
                CHANNEL FAQ
              </span>
              <h2 className="text-3xl font-black text-[#17251D]">
                Frequently Asked Distributor Questions
              </h2>
            </div>

            <div className="space-y-4">
              {distributorFaqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-[#FFFDF8] border border-[#E8DECC] rounded-2xl p-6 space-y-2"
                >
                  <h4 className="text-sm font-bold text-[#17251D] flex items-start gap-2">
                    <HelpCircle size={18} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-[#4E6056] leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Connect Box */}
            <div className="mt-12 p-8 rounded-3xl bg-[#173D2A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-lg font-bold text-[#FFC928]">
                  Prefer Direct Telephone Conversation?
                </h4>
                <p className="text-xs text-white/80">
                  Speak directly with our National Channel Coordinator.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {siteConfig.whatsapp && (
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20STAR%20AGRO%20FOODS,%20I%20want%20to%20discuss%20STAMINA%20distributorship.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-5 py-3 rounded-full hover:bg-[#20bd5a] transition-all"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Chat</span>
                  </a>
                )}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-5 py-3 rounded-full border border-white/20 transition-all"
                >
                  <PhoneCall size={16} />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

export default function DistributorshipPage() {
  return (
    <Providers>
      <SmoothScroll />
      <Suspense fallback={<div className="p-12 text-center text-sm">Loading Distributorship Portal…</div>}>
        <DistributorshipContent />
      </Suspense>
    </Providers>
  );
}
