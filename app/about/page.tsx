"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Target, Compass, HeartHandshake, ShieldCheck, Award, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <Providers>
      <SmoothScroll />
      <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#17251D]">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 sm:py-28 bg-[#173D2A] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#FFC928_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#FFC928] text-xs font-black uppercase tracking-widest mb-4 border border-white/15">
                CORPORATE STORY
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
                Rooted in Passion. Powered by Flavour.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Discover the story behind <strong>STAR AGRO FOODS</strong> and the inception of <strong>STAMINA</strong> — an ambitious Indian fruit juice brand created for everyday joy.
              </p>
            </div>
          </section>

          {/* Company Overview & Brand Philosophy */}
          <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs font-black uppercase tracking-widest text-[#FF7A1A]">
                    WHO WE ARE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#17251D] leading-tight">
                    Every Refreshing Moment Deserves Great Fruit Flavour.
                  </h2>
                  <p className="text-base text-[#4E6056] leading-relaxed">
                    <strong>STAR AGRO FOODS</strong> is an Indian beverage enterprise dedicated to the formulation, bottling, and pan-India distribution of fruit juices and fruit-based drinks. Operating from the agricultural hub of Maharashtra, our facility translates India&apos;s rich tropical bounty into affordable, delicious refreshment.
                  </p>
                  <p className="text-sm text-[#4E6056] leading-relaxed">
                    Under the flagship brand <strong>STAMINA</strong>, we produce a distinctive lineup of ready-to-drink fruit beverages — from sunlit Mango and floral Litchi to lush Pink Guava and ruby Pomegranate. Every batch is packaged in hygienic 250 ml PET bottles designed for consumers of all ages.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#FFF9ED] border border-[#E8DECC] flex items-start gap-3">
                    <ShieldCheck size={20} className="text-[#55B747] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#17251D]">
                        Brand Exclusivity Notice
                      </h4>
                      <p className="text-[11px] text-[#4E6056] mt-0.5">
                        STAR AGRO FOODS exclusively manages STAMINA juice products. STAR AGRO FOODS and PINCH BOTTLING COMPANY are two separate commercial entities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
                    <img
                      src="/media/community.jpg"
                      alt="STAR AGRO FOODS Community & Sports Support"
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-4 bg-white border-t border-neutral-100">
                      <p className="text-xs font-bold text-[#17251D]">
                        Community Engagement & Sporting Spirit
                      </p>
                      <p className="text-[11px] text-[#4E6056] mt-0.5">
                        Supporting youth sports, active lifestyles, and community initiatives in Maharashtra.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-20 sm:py-28 bg-[#FFF9ED]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#173D2A]">
                  GUIDING PILLARS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#17251D]">
                  Our Vision & Mission
                </h2>
                <p className="text-sm text-[#4E6056]">
                  A steadfast commitment to product purity, taste satisfaction, and distributor prosperity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DECC] shadow-md space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFC928]/20 text-[#173D2A] flex items-center justify-center">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17251D]">Our Vision</h3>
                  <p className="text-sm text-[#4E6056] leading-relaxed">
                    To establish <strong>STAMINA</strong> as one of India&apos;s most widely recognized and cherished fruit beverage brands — celebrated for tropical taste, ethical manufacturing, and refreshing everyday moments in every household.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DECC] shadow-md space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#55B747]/20 text-[#173D2A] flex items-center justify-center">
                    <Compass size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17251D]">Our Mission</h3>
                  <p className="text-sm text-[#4E6056] leading-relaxed">
                    To carefully source fruit concentrates, implement rigorous hygienic bottling protocols, and foster a robust, mutually profitable distributor ecosystem that ensures fresh STAMINA juices reach consumers everywhere on time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#E8DECC] space-y-2">
                  <HeartHandshake size={24} className="text-[#FF7A1A]" />
                  <h4 className="text-base font-bold text-[#17251D]">Consumer Delight</h4>
                  <p className="text-xs text-[#4E6056] leading-relaxed">
                    Prioritizing authentic fruit profiles that deliver a burst of joy with every single sip.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#E8DECC] space-y-2">
                  <ShieldCheck size={24} className="text-[#55B747]" />
                  <h4 className="text-base font-bold text-[#17251D]">Uncompromised Hygiene</h4>
                  <p className="text-xs text-[#4E6056] leading-relaxed">
                    Enforcing sterile filling, optical inspection, and airtight capping at every production run.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#E8DECC] space-y-2">
                  <Users size={24} className="text-[#173D2A]" />
                  <h4 className="text-base font-bold text-[#17251D]">Channel Fairness</h4>
                  <p className="text-xs text-[#4E6056] leading-relaxed">
                    Building transparent, dependable, and highly remunerative distributor partnerships.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#E8DECC] space-y-2">
                  <Award size={24} className="text-[#FFC928]" />
                  <h4 className="text-base font-bold text-[#17251D]">Continuous Growth</h4>
                  <p className="text-xs text-[#4E6056] leading-relaxed">
                    Expanding across urban and rural markets with resilient supply chain mechanics.
                  </p>
                </div>
              </div>

              {/* Editable Placeholder Disclosure */}
              <div className="mt-12 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center text-xs text-neutral-500">
                <p>
                  * Historical establishment dates, corporate milestone years, and founder quotes are currently marked editable placeholders and will be updated as soon as official archival documentation is confirmed by STAR AGRO FOODS management.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Link
                  href="/products"
                  className="btn-primary text-sm px-8 py-3.5 inline-flex items-center gap-2"
                >
                  <span>Explore the STAMINA Range</span>
                  <ArrowRight size={16} className="text-[#FFC928]" />
                </Link>
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

