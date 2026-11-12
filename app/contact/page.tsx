"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Providers } from "@/components/providers";
import { EnquiryForm } from "@/components/enquiry-form";
import { siteConfig } from "@/config/site";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") === "distributor" ? "distributor" : "contact";
  const [formType, setFormType] = useState<"contact" | "distributor">(defaultType);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#17251D]">
      <SiteHeader />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-20 sm:py-28 bg-[#173D2A] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#FFC928_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#FFC928] text-xs font-black uppercase tracking-widest mb-4 border border-white/15">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
              Contact STAR AGRO FOODS.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Whether you are an established FMCG distributor, institutional buyer, or consumer looking for STAMINA fruit drinks in your city, we are here to assist.
            </p>
          </div>
        </section>

        {/* Contact Info & Interactive Form Section */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Commercial Details */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <span className="text-xs font-black uppercase tracking-widest text-[#FF7A1A]">
                    REACH OUR TEAM
                  </span>
                  <h2 className="text-3xl font-black text-[#17251D]">
                    Direct Corporate Information
                  </h2>
                  <p className="text-sm text-[#4E6056] leading-relaxed">
                    Our administrative and factory offices operate Monday through Saturday.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="p-5 rounded-3xl bg-white border border-[#E8DECC] shadow-xs flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#FFF9ED] text-[#173D2A] flex items-center justify-center shrink-0 border border-[#173D2A]/10">
                      <MapPin size={22} className="text-[#FF7A1A]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#17251D]">
                        Head Office & Plant
                      </h4>
                      <p className="text-xs text-[#4E6056] leading-relaxed">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="p-5 rounded-3xl bg-white border border-[#E8DECC] shadow-xs flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#FFF9ED] text-[#173D2A] flex items-center justify-center shrink-0 border border-[#173D2A]/10">
                      <Phone size={22} className="text-[#55B747]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#17251D]">
                        Customer & Distributor Desk
                      </h4>
                      <p className="text-xs text-[#4E6056]">
                        <a
                          href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                          className="font-bold text-[#17251D] hover:text-[#FF7A1A] transition-colors"
                        >
                          {siteConfig.phoneDisplay}
                        </a>
                      </p>
                      <p className="text-[11px] text-neutral-400">
                        {siteConfig.workingHours}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-5 rounded-3xl bg-white border border-[#E8DECC] shadow-xs flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#FFF9ED] text-[#173D2A] flex items-center justify-center shrink-0 border border-[#173D2A]/10">
                      <Mail size={22} className="text-[#FFC928]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#17251D]">
                        Official Email Channels
                      </h4>
                      <p className="text-xs text-[#4E6056]">
                        General:{" "}
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="font-bold text-[#17251D] hover:underline"
                        >
                          {siteConfig.email}
                        </a>
                      </p>
                      <p className="text-xs text-[#4E6056]">
                        Distributorship:{" "}
                        <a
                          href={`mailto:${siteConfig.distributorEmail}`}
                          className="font-bold text-[#17251D] hover:underline"
                        >
                          {siteConfig.distributorEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Action */}
                {siteConfig.whatsapp && (
                  <div className="p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 space-y-3">
                    <div className="flex items-center gap-2 text-[#20bd5a]">
                      <MessageCircle size={22} />
                      <h4 className="text-sm font-bold text-[#17251D]">
                        Instant Messaging on WhatsApp
                      </h4>
                    </div>
                    <p className="text-xs text-[#4E6056] leading-relaxed">
                      Connect immediately with our regional sales desk for distributor catalogs, batch availability, and quick inquiries.
                    </p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20STAR%20AGRO%20FOODS,%20I%20have%20an%20enquiry%20regarding%20STAMINA%20fruit%20drinks.`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md"
                    >
                      <MessageCircle size={15} />
                      <span>Start WhatsApp Chat</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Tabbed Interactive Form */}
              <div className="lg:col-span-7">
                {/* Form Type Switcher */}
                <div className="flex items-center gap-2 mb-6 bg-white p-1.5 rounded-full border border-[#E8DECC] w-full max-w-sm mx-auto lg:mx-0">
                  <button
                    type="button"
                    onClick={() => setFormType("distributor")}
                    className={`flex-1 py-2 px-4 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                      formType === "distributor"
                        ? "bg-[#173D2A] text-white shadow-sm"
                        : "text-[#17251D] hover:bg-[#FFF9ED]"
                    }`}
                  >
                    Distributor Enquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType("contact")}
                    className={`flex-1 py-2 px-4 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                      formType === "contact"
                        ? "bg-[#173D2A] text-white shadow-sm"
                        : "text-[#17251D] hover:bg-[#FFF9ED]"
                    }`}
                  >
                    General Enquiry
                  </button>
                </div>

                <EnquiryForm
                  type={formType}
                  title={
                    formType === "distributor"
                      ? "Channel Partner & Trade Inquiry"
                      : "General Contact & Consumer Desk"
                  }
                  subtitle={
                    formType === "distributor"
                      ? "Submit your proposed coverage area and firm details. Our commercial sales lead will contact you directly."
                      : "Send your query to the STAR AGRO FOODS management team. We respond within 24 business hours."
                  }
                />
              </div>
            </div>

            {/* Google Maps Integration Section */}
            <div className="mt-20 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DECC] shadow-lg">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-[#FF7A1A]">
                  LOCATION MAP
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#17251D]">
                  Visit STAR AGRO FOODS in Maharashtra, India
                </h3>
                <p className="text-xs text-[#4E6056]">
                  Plant & Corporate Office: {siteConfig.address}
                </p>
              </div>

              <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden border border-[#E8DECC] bg-neutral-100">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="STAR AGRO FOODS Location Map"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#4E6056]">
                <span>All facility tours must be scheduled in advance with management.</span>
                <span className="italic">* Contact details and map embed coordinates are configurable.</span>
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

export default function ContactPage() {
  return (
    <Providers>
      <SmoothScroll />
      <Suspense fallback={<div className="p-12 text-center text-sm">Loading Contact Page…</div>}>
        <ContactPageContent />
      </Suspense>
    </Providers>
  );
}
