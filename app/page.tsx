"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Providers } from "@/components/providers";

import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { FlavourExperience } from "@/components/sections/flavour-experience";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { QualityPreviewSection } from "@/components/sections/quality-preview-section";
import { DistributorCtaSection } from "@/components/sections/distributor-cta-section";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSelectProduct = (productName: string) => {
    setSelectedProduct(productName);
    const element = document.getElementById("distributor");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Providers>
      <SmoothScroll />
      <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#17251D]">
        {/* Navigation */}
        <SiteHeader />

        <main className="flex-1">
          {/* Section 1: Cinematic Hero */}
          <HeroSection />

          {/* Section 2: Welcome to STAR AGRO FOODS */}
          <AboutSection />

          {/* Section 3: Explore Our Juices */}
          <ProductShowcase onSelectProductForEnquiry={handleSelectProduct} />

          {/* Section 4: Interactive Flavour Experience */}
          <FlavourExperience />

          {/* Section 5: Why Choose STAMINA? */}
          <WhyChooseSection />

          {/* Section 6: Quality & Manufacturing Preview */}
          <QualityPreviewSection />

          {/* Section 7: Distributor & Business Opportunities */}
          <DistributorCtaSection prefilledProduct={selectedProduct} />
        </main>

        {/* Section 8: Contact & Footer */}
        <SiteFooter />

        {/* Floating WhatsApp Action */}
        <WhatsAppButton />
      </div>
    </Providers>
  );
}
