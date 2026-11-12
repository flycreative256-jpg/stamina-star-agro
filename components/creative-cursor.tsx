"use client";

import { useEffect, useRef, useState } from "react";

type TrailPoint = {
  x: number;
  y: number;
  life: number;
  color: string;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
  decay: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
};

type CursorMode = "default" | "interactive" | "product" | "hidden";

export function CreativeCursor() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<CursorMode>("hidden");
  const [label, setLabel] = useState("");
  const [accent, setAccent] = useState("#FF7A1A");
  const [pressed, setPressed] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  const mouseRef = useRef({ x: -100, y: -100 });
  const lensPosRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef<TrailPoint[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const activeColorRef = useRef("#FF7A1A");
  const lastSpawnRef = useRef({ x: 0, y: 0, time: 0 });
  const cursorActiveRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    let rafId = 0;

    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const spawnBubble = (x: number, y: number, color: string) => {
      if (particlesRef.current.length > 42) return;
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 1.0,
        vy: Math.random() * 0.7 + 0.2,
        radius: Math.random() * 2.5 + 1.6,
        alpha: 0.75,
        color,
        decay: 0.025,
      });
    };

    const spawnClickSplash = (x: number, y: number, color: string) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 6,
        maxRadius: 46,
        alpha: 0.75,
        color,
      });

      const count = 12;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
        const speed = Math.random() * 3.6 + 2.2;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.9,
          radius: Math.random() * 3.2 + 2.0,
          alpha: 0.95,
          color: i % 2 === 0 ? color : "#FFC928",
          decay: 0.03,
        });
      }
    };

    const loop = () => {
      const target = mouseRef.current;
      lensPosRef.current.x += (target.x - lensPosRef.current.x) * 0.2;
      lensPosRef.current.y += (target.y - lensPosRef.current.y) * 0.2;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-25%, -15%)`;
      }
      if (lensRef.current) {
        lensRef.current.style.transform = `translate3d(${lensPosRef.current.x}px, ${lensPosRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (pillRef.current) {
        pillRef.current.style.transform = `translate3d(${lensPosRef.current.x + 22}px, ${lensPosRef.current.y + 22}px, 0)`;
      }

      const ctx = canvas?.getContext("2d");
      if (ctx && canvas) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        const trail = trailRef.current;
        for (let i = trail.length - 1; i >= 0; i--) {
          trail[i].life -= 0.045;
          if (trail[i].life <= 0) trail.splice(i, 1);
        }

        if (trail.length > 2) {
          for (let i = 1; i < trail.length; i++) {
            const prev = trail[i - 1];
            const curr = trail[i];
            const progress = i / trail.length;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.strokeStyle = curr.color;
            ctx.globalAlpha = curr.life * 0.48 * progress;
            ctx.lineWidth = Math.max(1, progress * 5.5);
            ctx.lineCap = "round";
            ctx.stroke();
            ctx.restore();
          }
        }

        const ripples = ripplesRef.current;
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];
          r.radius += (r.maxRadius - r.radius) * 0.14;
          r.alpha -= 0.032;
          if (r.alpha <= 0.02) {
            ripples.splice(i, 1);
            continue;
          }
          ctx.save();
          ctx.globalAlpha = r.alpha;
          ctx.strokeStyle = r.color;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        const list = particlesRef.current;
        for (let i = list.length - 1; i >= 0; i--) {
          const p = list[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.05;
          p.alpha -= p.decay;
          p.radius *= 0.985;

          if (p.alpha <= 0.02 || p.radius <= 0.35) {
            list.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "rgba(255,255,255,0.8)";
          ctx.beginPath();
          ctx.arc(
            p.x - p.radius * 0.28,
            p.y - p.radius * 0.28,
            p.radius * 0.28,
            0,
            Math.PI * 2
          );
          ctx.fill();
          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      if (!cursorActiveRef.current) {
        cursorActiveRef.current = true;
        document.documentElement.classList.add("has-creative-cursor");
      }

      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (lensPosRef.current.x < 0) {
        lensPosRef.current = { x: e.clientX, y: e.clientY };
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("input, textarea, select, iframe")) {
        setMode("hidden");
        return;
      }

      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
        color: activeColorRef.current,
      });
      if (trailRef.current.length > 18) trailRef.current.shift();

      const now = performance.now();
      const dx = e.clientX - lastSpawnRef.current.x;
      const dy = e.clientY - lastSpawnRef.current.y;
      if (Math.hypot(dx, dy) > 18 && now - lastSpawnRef.current.time > 34) {
        spawnBubble(e.clientX, e.clientY, activeColorRef.current);
        lastSpawnRef.current = { x: e.clientX, y: e.clientY, time: now };
      }

      const productEl = target.closest<HTMLElement>("[data-cursor-flavour]");
      if (productEl) {
        const flavour = productEl.dataset.cursorFlavour || "Explore";
        const color = productEl.dataset.cursorColor || "#FF7A1A";
        activeColorRef.current = color;
        setMode("product");
        setLabel(flavour);
        setAccent(color);
        return;
      }

      const interactiveEl = target.closest("a, button, [role='button']");
      if (interactiveEl) {
        activeColorRef.current = "#FF7A1A";
        setMode("interactive");
        setLabel("");
        setAccent("#FF7A1A");
        return;
      }

      activeColorRef.current = "#FFC928";
      setMode("default");
      setLabel("");
      setAccent("#FF7A1A");
    };

    const onDown = (e: MouseEvent) => {
      setPressed(true);
      const target = e.target as HTMLElement | null;
      if (!target?.closest("input, textarea, select, iframe")) {
        spawnClickSplash(e.clientX, e.clientY, activeColorRef.current);
      }
    };

    const onUp = () => setPressed(false);
    const onLeave = () => setMode("hidden");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("has-creative-cursor");
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [mounted]);

  if (!mounted) return null;

  const isHidden = mode === "hidden";
  const isProduct = mode === "product";
  const isInteractive = mode === "interactive";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Sparkle Citrus Glint on Links/Buttons (Zero Circle!) */}
      <div
        ref={lensRef}
        className={`absolute top-0 left-0 will-change-transform transition-opacity duration-150 ${
          !isHidden && isInteractive ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="-translate-x-5 -translate-y-5 animate-pulse"
        >
          <path
            d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
            fill="#FFC928"
            stroke="#FF7A1A"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Offset Floating Liquid Glass "Taste [Flavour]" Badge */}
      <div
        ref={pillRef}
        className={`absolute top-0 left-0 will-change-transform transition-opacity duration-200 ${
          !isHidden && isProduct ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="px-3.5 py-1.5 rounded-full backdrop-blur-xl bg-white/92 border border-white shadow-xl flex items-center gap-2 whitespace-nowrap"
          style={{
            boxShadow: `0 12px 28px -6px ${accent}66, inset 0 1px 1px rgba(255,255,255,0.98)`,
          }}
        >
          <span
            className="text-[10px] font-black uppercase tracking-wider"
            style={{ color: accent }}
          >
            Taste {label}
          </span>
        </div>
      </div>

      {/* Leaf-Crowned Glossy Juice-Droplet Pointer (No Circle) */}
      <div
        ref={coreRef}
        className={`absolute top-0 left-0 will-change-transform transition-opacity duration-150 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
      >
        <svg
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          className="transition-transform duration-150 drop-shadow-md"
          style={{
            transform: `rotate(-20deg) scale(${pressed ? 0.8 : isInteractive ? 1.15 : 1})`,
          }}
        >
          {/* Fresh Green Leaf Sprout */}
          <path
            d="M12.5 5.5C13.5 2.4 16.4 1 19.6 1.5C18.8 4.6 16.2 6.2 12.5 5.5Z"
            fill="#55B747"
            stroke="#FFFFFF"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          {/* Glossy Fruit Juice Droplet */}
          <path
            d="M11 4.5C11 4.5 3.5 12.8 3.5 18C3.5 22 6.8 24.8 11 24.8C15.2 24.8 18.5 22 18.5 18C18.5 12.8 11 4.5 11 4.5Z"
            fill={accent}
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Glossy Highlight */}
          <path
            d="M7.5 16.8C7.4 19 8.6 20.8 10.4 21.3"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
