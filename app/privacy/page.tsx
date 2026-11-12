import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#17251D]">
      <SiteHeader />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#173D2A] hover:text-[#FF7A1A] mb-8 bg-white px-4 py-2 rounded-full border border-[#173D2A]/10 shadow-xs"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DECC] shadow-md space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF7A1A]">
            LEGAL INFORMATION
          </span>
          <h1 className="text-3xl font-black text-[#17251D]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#4E6056] leading-relaxed">
            At <strong>{siteConfig.company}</strong>, we respect the privacy of every distributor, commercial partner, and customer who interacts with our brand <strong>{siteConfig.brand}</strong>.
          </p>
          <h2 className="text-lg font-bold text-[#17251D]">1. Information We Collect</h2>
          <p className="text-xs text-[#4E6056] leading-relaxed">
            When you submit a distributor application or general inquiry via our website, we collect your name, business name, phone number, email address, city, and state solely for the purpose of communicating business terms and evaluating territory distribution.
          </p>
          <h2 className="text-lg font-bold text-[#17251D]">2. How We Use Information</h2>
          <p className="text-xs text-[#4E6056] leading-relaxed">
            We use your provided commercial details strictly for commercial negotiations, product delivery coordination, and customer support. We do not sell, rent, or lease commercial partner databases to any third parties.
          </p>
          <h2 className="text-lg font-bold text-[#17251D]">3. Brand Separation Notice</h2>
          <p className="text-xs text-[#4E6056] leading-relaxed">
            STAR AGRO FOODS and PINCH BOTTLING COMPANY operate as separate business entities. Inquiries submitted on this website pertain exclusively to STAR AGRO FOODS and its STAMINA juice products.
          </p>
          <h2 className="text-lg font-bold text-[#17251D]">4. Contact Us</h2>
          <p className="text-xs text-[#4E6056] leading-relaxed">
            For privacy inquiries, please reach out to <a href={`mailto:${siteConfig.email}`} className="text-[#FF7A1A] underline">{siteConfig.email}</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

