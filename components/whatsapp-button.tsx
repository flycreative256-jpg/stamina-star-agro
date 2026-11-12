"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const whatsappUrl = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        "Hello STAR AGRO FOODS team, I would like to enquire about STAMINA fruit drinks and distribution opportunities."
      )}`
    : "/contact?type=distributor";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 bg-[#173D2A] text-white text-xs font-semibold rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with STAR AGRO FOODS
      </div>

      <a
        href={whatsappUrl}
        target={siteConfig.whatsapp ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Enquire via WhatsApp with STAR AGRO FOODS"
      >
        <MessageCircle size={22} className="fill-current text-white" />
        <span className="font-bold text-sm tracking-wide hidden sm:inline">
          Enquire on WhatsApp
        </span>
      </a>
    </div>
  );
}
