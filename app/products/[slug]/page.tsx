"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Package,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import { CitrusSliceIcon } from "@/components/icons/stamina-icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Providers } from "@/components/providers";
import { EnquiryForm } from "@/components/enquiry-form";
import { getProduct, products } from "@/data/products";
import { siteConfig } from "@/config/site";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProduct(slug);

  if (!product) {
    return notFound();
  }

  const [activeImage, setActiveImage] = useState(product.image);

  const relatedJuices = products.filter((p) => p.slug !== product.slug);

  return (
    <Providers>
      <SmoothScroll />
      <div
        className="min-h-screen flex flex-col transition-colors duration-700"
        style={{ backgroundColor: product.palette.background }}
      >
        <SiteHeader />

        <main className="flex-1">
          {/* Breadcrumb & Navigation Bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#173D2A] hover:text-[#FF7A1A] transition-colors bg-white/80 px-4 py-2 rounded-full border border-[#173D2A]/10 shadow-xs"
            >
              <ArrowLeft size={14} />
              <span>Back to All Juices</span>
            </Link>
          </div>

          {/* Product Hero Section */}
          <section className="py-8 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left: Product Visuals & Gallery */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Main Display Stage */}
                  <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                    <img
                      src={activeImage}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-all duration-500"
                    />

                    {/* Flavour badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                      <span
                        className="text-xs font-black uppercase tracking-wider"
                        style={{ color: product.palette.accent }}
                      >
                        {product.flavour}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-[#173D2A]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      Confirmed 250 ml PET
                    </div>
                  </div>

                  {/* Thumbnail Gallery Switcher */}
                  {product.gallery.length > 1 && (
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-[#17251D] uppercase tracking-wider">
                        Product Gallery ({product.gallery.length} Views)
                      </p>
                      <div className="flex items-center gap-3">
                        {product.gallery.map((img, idx) => (
                          <button
                            key={img}
                            type="button"
                            onClick={() => setActiveImage(img)}
                            className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                              activeImage === img
                                ? "border-[#173D2A] shadow-md scale-105"
                                : "border-white/60 opacity-70 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${product.name} view ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Specifications & Product Story */}
                <div className="lg:col-span-6 space-y-8 bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#E8DECC] shadow-xl">
                  {/* Brand & Flavour Identity */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-[#FFF9ED] px-3.5 py-1 rounded-full border border-[#FF7A1A]/20">
                      <CitrusSliceIcon size={14} className="text-[#FF7A1A]" />
                      <span className="text-[11px] font-black uppercase tracking-widest text-[#173D2A]">
                        STAR AGRO FOODS • STAMINA JUICES
                      </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#17251D] tracking-tight leading-tight">
                      {product.name}
                    </h1>

                    <p
                      className="text-base font-bold italic"
                      style={{ color: product.palette.accent }}
                    >
                      {product.tagline}
                    </p>
                  </div>

                  {/* Flavour Description */}
                  <p className="text-base text-[#4E6056] leading-relaxed">
                    {product.description}
                  </p>

                  {/* Tasting Highlights */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#17251D]">
                      Tasting Profile & Character
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.tastingNotes.map((note) => (
                        <div
                          key={note}
                          className="flex items-center gap-2 p-3 bg-[#FFF9ED] border border-[#E8DECC] rounded-xl text-xs font-semibold text-[#17251D]"
                        >
                          <CheckCircle2 size={16} className="text-[#55B747] shrink-0" />
                          <span>{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packaging & Verification Specifications */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#17251D]">
                      Packaging Specifications
                    </h3>

                    <div className="space-y-2 text-xs text-[#4E6056]">
                      <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <Package size={18} className="text-[#173D2A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#17251D]">Available Packaging Size:</strong>
                          <p className="mt-0.5">
                            250 ml PET Bottle (Confirmed). Sealed with tamper-evident safety cap.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <ShieldCheck size={18} className="text-[#55B747] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#17251D]">Vegetarian & Regulatory:</strong>
                          <p className="mt-0.5">
                            100% Vegetarian (FSSAI registered brand). Food-grade PET recyclable packaging.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <Droplets size={18} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#17251D]">Storage & Serving:</strong>
                          <p className="mt-0.5">
                            {product.details.storageInstruction}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ingredients & Nutrition Placeholder Notice */}
                  <div className="p-4 rounded-2xl bg-[#FFF9ED] border border-[#E8DECC] space-y-2">
                    <div className="flex items-center gap-2 text-[#FF7A1A]">
                      <AlertCircle size={16} />
                      <span className="text-xs font-extrabold uppercase tracking-wider">
                        Official Catalogue Placeholder
                      </span>
                    </div>
                    <p className="text-xs text-[#4E6056] leading-relaxed">
                      Detailed quantitative ingredient percentages and certified laboratory nutritional facts will be added directly upon official client release. Unverified health claims are strictly omitted.
                    </p>
                  </div>

                  {/* Primary CTA Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href="#enquire-section"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF7A1A] hover:bg-[#E6660B] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all"
                    >
                      <span>Enquire for Distribution</span>
                      <ArrowRight size={16} />
                    </a>

                    {siteConfig.whatsapp && (
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                          `Hello STAR AGRO FOODS, I am interested in distributing ${product.name}. Please share details.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-4 rounded-full shadow-md transition-all"
                      >
                        <MessageCircle size={18} />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Juices Section */}
          <section className="py-16 sm:py-24 bg-white/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-black text-[#17251D]">
                    Explore Other STAMINA Flavours
                  </h3>
                  <p className="text-xs text-[#4E6056] mt-0.5">
                    Discover the full tropical range from STAR AGRO FOODS.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="text-xs font-bold text-[#FF7A1A] hover:underline inline-flex items-center gap-1"
                >
                  <span>See All Juices</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedJuices.slice(0, 3).map((rj) => (
                  <Link
                    key={rj.id}
                    href={`/products/${rj.slug}`}
                    className="bg-white rounded-2xl p-5 border border-[#E8DECC] shadow-sm hover:shadow-xl transition-all group flex items-center gap-4"
                  >
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-neutral-50 shrink-0">
                      <img
                        src={rj.image}
                        alt={rj.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider block"
                        style={{ color: rj.palette.accent }}
                      >
                        {rj.flavour}
                      </span>
                      <h4 className="text-sm font-bold text-[#17251D] group-hover:text-[#FF7A1A] transition-colors leading-snug">
                        {rj.name}
                      </h4>
                      <p className="text-[11px] text-[#4E6056]">
                        250 ml PET Bottle
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Embedded Dedicated Enquiry Form */}
          <section id="enquire-section" className="py-20 sm:py-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <EnquiryForm
                type="product"
                product={product.name}
                title={`Enquire About ${product.name}`}
                subtitle={`Connect directly with STAR AGRO FOODS commercial desk regarding commercial terms, minimum order quantities, and regional availability for ${product.name}.`}
              />
            </div>
          </section>
        </main>

        <SiteFooter />
        <WhatsAppButton />
      </div>
    </Providers>
  );
}
