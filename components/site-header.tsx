"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Sparkles, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Juices" },
  { href: "/about", label: "About Us" },
  { href: "/quality", label: "Quality" },
  { href: "/distributorship", label: "Distributorship" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ light = false }: { light?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-3 pb-2 px-3 sm:px-6" : light ? "py-4 px-4 sm:px-8" : "py-3.5 px-4 sm:px-8"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 flex items-center justify-between ${
            scrolled
              ? "glass-header rounded-full px-4 sm:px-6 py-2.5 shadow-xl"
              : "liquid-glass rounded-full px-4 sm:px-6 py-2.5"
          }`}
        >
          {/* Logo & Corporate Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="STAMINA Fruit Drinks by STAR AGRO FOODS"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="relative overflow-hidden"
            >
              <img
                src="/media/stamina-logo.png"
                alt="STAMINA Logo"
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-xs"
              />
            </motion.div>
            <div className="hidden sm:flex flex-col border-l border-[#173D2A]/15 pl-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#173D2A]/80">
                STAR AGRO FOODS
              </span>
              <span className="text-[9px] font-bold text-[#FF7A1A] tracking-wider">
                FRUIT JUICES
              </span>
            </div>
          </Link>

          {/* Desktop Liquid Pill Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#173D2A]/[0.04] border border-white/60 shadow-inner"
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              const isHighlighted = hoveredHref ? hoveredHref === link.href : isActive;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors duration-200 z-10 ${
                    isActive
                      ? "text-white"
                      : isHighlighted
                      ? "text-[#173D2A]"
                      : "text-[#17251D]/80 hover:text-[#173D2A]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-[#173D2A] shadow-md -z-10"
                    />
                  )}
                  {!isActive && hoveredHref === link.href && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white/85 shadow-xs border border-white -z-10"
                    />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA with Liquid Shine */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/distributorship"
              className="liquid-shine group inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A1A] to-[#FF9633] hover:from-[#e6660b] hover:to-[#FF7A1A] text-white text-xs xl:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-[#FF7A1A]/25 hover:shadow-xl hover:shadow-[#FF7A1A]/40 hover:-translate-y-0.5 border border-white/30"
            >
              <Sparkles size={14} className="text-[#FFC928] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span>Become a Distributor</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-full text-[#173D2A] liquid-pill transition-transform active:scale-95"
            onClick={() => setIsOpen(true)}
            aria-label="Open Navigation Menu"
            aria-expanded={isOpen}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Liquid Glass Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-[#0F281B]/45 backdrop-blur-md lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed top-3 right-3 bottom-3 z-50 w-[calc(100%-24px)] max-w-sm liquid-glass-strong rounded-3xl shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#173D2A]/10">
                  <div>
                    <img
                      src="/media/stamina-logo.png"
                      alt="STAMINA Logo"
                      className="h-10 w-auto object-contain"
                    />
                    <p className="text-[10px] font-black tracking-widest text-[#173D2A]/70 mt-1 uppercase">
                      STAR AGRO FOODS
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 rounded-full liquid-pill text-[#173D2A] hover:scale-105 transition-transform"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="py-6 space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#FF7A1A] mb-3 px-3">
                    Navigation
                  </p>
                  {navLinks.map((link, idx) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname?.startsWith(link.href);
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-bold transition-all ${
                            isActive
                              ? "bg-[#173D2A] text-white shadow-md"
                              : "text-[#17251D] hover:bg-white/75"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ArrowRight size={16} className="opacity-70" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-5 border-t border-[#173D2A]/10 space-y-3">
                <Link
                  href="/distributorship"
                  className="liquid-shine flex items-center justify-center gap-2 w-full bg-[#FF7A1A] hover:bg-[#E6660B] text-white font-bold py-3.5 px-4 rounded-full text-center shadow-lg transition-transform"
                >
                  <Sparkles size={16} className="text-[#FFC928]" />
                  <span>Become a Distributor</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full liquid-pill text-[#173D2A] font-bold py-3 px-4 rounded-full text-center text-sm"
                >
                  <span>Enquire Now</span>
                </Link>

                {siteConfig.whatsapp && (
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20STAR%20AGRO%20FOODS,%20I%20am%20interested%20in%20STAMINA%20fruit%20drinks.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 text-xs font-semibold text-[#173D2A]/75 hover:text-[#55B747] pt-2"
                  >
                    <MessageCircle size={14} className="text-[#55B747]" />
                    <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
