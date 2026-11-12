import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/config/site";

export default function TermsPage() {
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
            COMMERCIAL GUIDELINES
          </span>
          <h1 className="text-3xl font-black text-[#17251D]">
            Terms of Supply & Commercial Distribution
          </h1>
          <p className="text-sm text-[#4E6056] leading-relaxed">
            Welcome to the commercial terms overview for <strong>{siteConfig.company}</strong> and its fruit juice brand <strong>{siteConfig.brand}</strong>.
          </p>
          <h2 className="text-lg font-bold text-[#17251D]">1. Product Portfolio</h2>
          <p className="text-xs text-[#4E6056] leading-relaxed">
            STAR AGRO FOODS supplies fruit juices and fruit-based beverages under the STAMINA brand. All commercial supplies of STAMINA are subject to product availability and regional distributor confirmation.
          </p>
          <h2 className="text-lg font-bold text-[#17251D]">2. Minimum Order Quantities (MOQ)</h2>
          <p className="text-xs text-[#4E6056] leading-relaxed">
            Channel orders are fulfilled in full carton increments. Delivery schedules, freight charges, and unload terms are detailed in official purchase invoices.
          </p>
          <h2 className="text-lg font-bold text-[#17251D]">3. Quality & Batch Verification</h2>
          <p className="text-xs text-[#4E6056] leading-relaxed">
            Products must be inspected by the distributor upon delivery. Storage must adhere to recommended conditions: cool, dry storage away from direct sunlight.
          </p>
          <h2 className="text-lg font-bold text-[#17251D]">4. Exclusivity & Territory Terms</h2>
          <p className="text-xs text-[#4E6056] leading-relaxed">
            Distributor agreements are formalized under written channel partner contracts specifying assigned pin codes or districts.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

