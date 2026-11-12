import Link from "next/link";
import { ArrowUpRight, MessageCircle, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#173D2A] text-white pt-16 pb-12 border-t border-[#173D2A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 p-2 rounded-xl shadow-md inline-block">
                <img
                  src="/media/stamina-logo.png"
                  alt="STAMINA Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black tracking-widest text-[#FFC928] uppercase">
                  {siteConfig.company}
                </span>
                <span className="text-[11px] text-white/70">
                  Fruit Juices & Fruit-Based Beverages
                </span>
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              Bringing vibrant refreshment, genuine tropical flavour, and joyful moments to everyday life across India through the STAMINA juice collection.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {siteConfig.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20STAR%20AGRO%20FOODS,%20I%20am%20interested%20in%20STAMINA%20fruit%20drinks.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#55B747] hover:bg-[#469e3a] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-sm"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
              )}
              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
                >
                  <InstagramIcon size={15} className="text-[#FFC928]" />
                  <span>Instagram</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 sm:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFC928]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-[#FFC928] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#FFC928] transition-colors">
                  Our Juices
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFC928] transition-colors">
                  About STAR AGRO FOODS
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-[#FFC928] transition-colors">
                  Quality & Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/distributorship" className="hover:text-[#FFC928] transition-colors">
                  Distributor Enquiries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFC928] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Juices Range Column */}
          <div className="lg:col-span-2 sm:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFC928]">
              STAMINA Juices
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-[#FFC928] transition-colors flex items-center justify-between group"
                  >
                    <span>{product.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <span className="text-[11px] text-white/50 block">
                  Pack Size: 250 ml PET (Confirmed)
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 sm:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFC928]">
              Corporate Desk
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {siteConfig.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#FF7A1A] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs hover:text-[#FFC928] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#FF7A1A] shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="text-xs hover:text-[#FFC928] transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-[11px] text-[#FFC928]">
                  <ShieldCheck size={14} />
                  <span>FSSAI Registered Brand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {currentYear} <strong>{siteConfig.company}</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-white/40">
              STAMINA is an exclusive fruit juice brand of STAR AGRO FOODS. STAR AGRO FOODS and PINCH BOTTLING COMPANY are separate business entities.
            </p>
          </div>

          <div className="flex items-center gap-6 text-white/70">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Supply
            </Link>
            <Link href="/distributorship" className="text-[#FFC928] hover:underline font-semibold">
              Distributor Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
