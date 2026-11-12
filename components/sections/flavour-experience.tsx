"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { VegLeafMarkIcon } from "@/components/icons/stamina-icons";
import { products } from "@/data/products";

export function FlavourExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".stamina-stack-card");

        cards.forEach((card, i) => {
          const inner = card.querySelector<HTMLElement>(".stamina-card-inner");
          const dim = card.querySelector<HTMLElement>(".stamina-card-dim");
          const content = card.querySelector<HTMLElement>(".stamina-card-content");
          const media = card.querySelector<HTMLElement>(".stamina-card-media");
          const bits = [content, media].filter(Boolean) as HTMLElement[];

          if (bits.length > 0) {
            gsap.from(bits, {
              y: 34,
              opacity: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            });
          }

          // Squeeze & dim previous card smoothly as the next card stacks over it
          if (i < cards.length - 1 && inner && dim) {
            gsap
              .timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                  trigger: cards[i + 1],
                  start: "top bottom",
                  end: "top top",
                  scrub: 0.8,
                  invalidateOnRefresh: true,
                },
              })
              .to(inner, { scale: 0.93, y: -8 }, 0)
              .to(dim, { opacity: 0.42 }, 0);
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 bg-[#FFF9ED] relative overflow-x-clip"
    >
      {/* Ambient Background Accent */}
      <div className="animate-liquid-morph absolute top-24 right-0 w-[460px] h-[460px] bg-[#FFC928]/14 blur-3xl pointer-events-none" />
      <div className="animate-liquid-morph absolute bottom-24 left-0 w-[460px] h-[460px] bg-[#55B747]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 liquid-pill px-4 py-1.5 rounded-full">
            <Sparkles size={14} className="text-[#FF7A1A]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#173D2A]">
              INTERACTIVE FLAVOUR STACK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111F17] tracking-tight">
            A Flavour for Every Refreshing Moment.
          </h2>

          <p className="text-base text-[#28382F] font-medium leading-relaxed">
            Scroll through STAMINA&apos;s confirmed juice collection — each bottle crafted for pure fruit-forward enjoyment.
          </p>
        </div>

        {/* Sticky Scroll-Stacking Cards Container */}
        <div className="flex flex-col gap-8 sm:gap-10 pb-[4vh]">
          {products.map((product, idx) => (
            <article
              key={product.id}
              className="stamina-stack-card sticky"
              style={{
                top: `calc(84px + ${idx * 16}px)`,
                zIndex: idx + 1,
              }}
            >
              <div
                className="stamina-card-inner liquid-glass-strong relative overflow-hidden rounded-[28px] sm:rounded-[34px] p-6 sm:p-10 shadow-2xl border border-white/90"
                style={{
                  backgroundColor: product.palette.background,
                }}
              >
                {/* Flavour Corner Glow */}
                <div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-45 pointer-events-none"
                  style={{ backgroundColor: product.palette.glow }}
                />

                {/* Squeeze Dim Overlay */}
                <div className="stamina-card-dim absolute inset-0 bg-[#0F281B] opacity-0 pointer-events-none z-20 rounded-[28px] sm:rounded-[34px]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left: Editorial Flavour Story */}
                  <div className="stamina-card-content lg:col-span-7 space-y-5 order-2 lg:order-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className="text-xs font-black uppercase tracking-widest"
                        style={{ color: product.palette.accent }}
                      >
                        0{idx + 1} &bull; {product.tagline}
                      </span>
                      <span className="liquid-pill px-3 py-1 rounded-full text-[11px] font-bold text-[#173D2A]">
                        250 ml PET
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-black text-[#111F17] tracking-tight">
                      {product.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#28382F] font-medium leading-relaxed">
                      {product.description}
                    </p>

                    {/* Sensory Notes */}
                    <div className="flex flex-wrap gap-2">
                      {product.tastingNotes.map((note) => (
                        <div
                          key={note}
                          className="liquid-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#173D2A]"
                        >
                          <CheckCircle size={13} className="text-[#55B747]" />
                          <span>{note}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs + CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <Link
                        href={`/products/${product.slug}`}
                        className="liquid-shine group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#173D2A] hover:bg-[#0F281B] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        <span>Full Product Profile</span>
                        <ArrowRight
                          size={14}
                          className="text-[#FFC928] transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>

                      <Link
                        href={`/distributorship?product=${encodeURIComponent(product.name)}`}
                        className="liquid-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF7A1A] hover:bg-[#E6660B] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        <span>Distribute {product.flavour}</span>
                      </Link>

                      <span className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-[#55B747] px-2">
                        <VegLeafMarkIcon size={15} />
                        100% Vegetarian
                      </span>
                    </div>
                  </div>

                  {/* Right: Product Bottle Image */}
                  <div className="stamina-card-media lg:col-span-5 flex justify-center order-1 lg:order-2">
                    <div className="relative w-full max-w-[260px] sm:max-w-[300px] aspect-[3/4] rounded-[24px] overflow-hidden shadow-xl border-2 border-white bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
