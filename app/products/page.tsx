"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { VegLeafMarkIcon } from "@/components/icons/stamina-icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Providers } from "@/components/providers";
import { products, type Product } from "@/data/products";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.slug === activeFilter);

  return (
    <Providers>
      <SmoothScroll />
      <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#17251D]">
        <SiteHeader />

        <main className="flex-1">
          {/* Header Banner */}
          <section className="relative py-20 sm:py-28 bg-[#173D2A] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#FFC928_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#FFC928] text-xs font-black uppercase tracking-widest mb-4 border border-white/15">
                STAR AGRO FOODS JUICE PORTFOLIO
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
                Our STAMINA Juice Range.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Explore our confirmed lineup of delicious, fruit-based drinks. Bottled in premium 250 ml PET packaging designed for pure tropical refreshment.
              </p>
            </div>
          </section>

          {/* Catalog & Filter Section */}
          <section className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filter Tabs */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-md sm:max-w-none mx-auto">
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`col-span-2 sm:col-span-1 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer text-center ${
                    activeFilter === "all"
                      ? "bg-[#173D2A] text-white shadow-md"
                      : "bg-white text-[#17251D] border border-[#173D2A]/15 hover:bg-[#FFF9ED]"
                  }`}
                >
                  All Juices ({products.length})
                </button>
                {products.map((p) => {
                  const isSelected = activeFilter === p.slug;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveFilter(p.slug)}
                      className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isSelected
                          ? "bg-[#173D2A] text-white shadow-md"
                          : "bg-white text-[#17251D] border border-[#173D2A]/15 hover:bg-[#FFF9ED]"
                      }`}
                    >
                      <span>{p.flavour}</span>
                    </button>
                  );
                })}
              </div>

              {/* Product Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-3xl p-6 border border-[#E8DECC] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Badge Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white shadow-xs"
                          style={{ backgroundColor: product.palette.accent }}
                        >
                          {product.badge || product.flavour}
                        </span>
                        <span className="text-[11px] font-bold text-[#173D2A] bg-[#FFF9ED] border border-[#173D2A]/10 px-2.5 py-1 rounded-full">
                          250 ml PET
                        </span>
                      </div>

                      {/* Photo */}
                      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#FAF6EE] mb-5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
                        />
                      </div>

                      {/* Details */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase text-[#FF7A1A] tracking-wider block">
                          {product.flavour} Drink
                        </span>
                        <h3 className="text-xl font-extrabold text-[#17251D] leading-snug group-hover:text-[#FF7A1A] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-[#4E6056] leading-relaxed line-clamp-3">
                          {product.description}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {product.tastingNotes.map((note) => (
                            <span
                              key={note}
                              className="text-[10px] bg-[#FFF9ED] border border-[#E8DECC] text-[#17251D] px-2 py-0.5 rounded-md"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 space-y-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="w-full flex items-center justify-center gap-2 bg-[#173D2A] hover:bg-[#0F281B] text-white text-xs font-bold py-3 rounded-full transition-all shadow-sm"
                      >
                        <Eye size={14} />
                        <span>View Details</span>
                      </Link>

                      <Link
                        href={`/distributorship?product=${encodeURIComponent(product.name)}`}
                        className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-[#FFF9ED] text-[#17251D] border border-[#173D2A]/15 text-xs font-bold py-2.5 rounded-full transition-all text-center"
                      >
                        <span>Enquire for Distribution</span>
                        <ArrowRight size={13} className="text-[#FF7A1A]" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Flavour Comparison Table */}
              <div className="mt-20 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DECC] shadow-lg">
                <div className="mb-6 space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-[#17251D]">
                    STAMINA Flavour Comparison & Specifications
                  </h3>
                  <p className="text-xs text-[#4E6056]">
                    Summary of confirmed attributes across our fruit-based range.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-[#17251D]">
                    <thead>
                      <tr className="border-b border-[#E8DECC] bg-[#FFF9ED] text-[11px] font-black uppercase text-[#173D2A]">
                        <th className="p-3.5">Product</th>
                        <th className="p-3.5">Key Flavour Notes</th>
                        <th className="p-3.5">Confirmed Size</th>
                        <th className="p-3.5">Vegetarian Mark</th>
                        <th className="p-3.5">Packaging</th>
                        <th className="p-3.5">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DECC]">
                      {products.map((p) => (
                        <tr key={p.id} className="hover:bg-[#FFFDF8] transition-colors">
                          <td className="p-3.5 font-bold">
                            {p.name}
                          </td>
                          <td className="p-3.5 text-[#4E6056]">
                            {p.tastingNotes.join(" • ")}
                          </td>
                          <td className="p-3.5 font-semibold">250 ml PET</td>
                          <td className="p-3.5">
                            <span className="inline-flex items-center gap-1.5 text-[#55B747] font-bold">
                              <VegLeafMarkIcon size={15} />
                              Vegetarian
                            </span>
                          </td>
                          <td className="p-3.5 text-[#4E6056]">
                            Airtight Sealed PET
                          </td>
                          <td className="p-3.5">
                            <Link
                              href={`/products/${p.slug}`}
                              className="text-[#FF7A1A] hover:underline font-bold inline-flex items-center gap-1"
                            >
                              <span>Details</span>
                              <ArrowRight size={12} />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-[#FFF9ED] text-[11px] text-[#4E6056] italic">
                  * Nutritional breakdown tables and full quantitative ingredient percentages are currently editable placeholders pending final certified laboratory reports from STAR AGRO FOODS.
                </div>
              </div>

              {/* B2B Callout Banner */}
              <div className="mt-16 bg-[#173D2A] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Looking to Stock STAMINA in Your Region?
                  </h3>
                  <p className="text-sm text-white/80 max-w-xl">
                    Connect with our commercial distribution desk to receive our wholesale price list, minimum order quantities, and freight schedules.
                  </p>
                </div>
                <Link
                  href="/distributorship"
                  className="bg-[#FF7A1A] hover:bg-[#E6660B] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 shrink-0"
                >
                  Become a Channel Partner
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
