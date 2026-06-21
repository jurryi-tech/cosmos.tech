"use client";

import { useEffect, useRef, Suspense, lazy } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const PatentGlobe = dynamic(() => import("@/components/three/PatentGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border border-[#C5A44E]/30 rounded-full animate-spin border-t-[#C5A44E]" />
    </div>
  ),
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Stat counter component ── */
function AnimatedStat({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      delay: 2.0,
      ease: "power2.out",
      onUpdate: () => {
        const display =
          value % 1 !== 0 ? obj.val.toFixed(1) : Math.round(obj.val).toString();
        el.textContent = `${prefix || ""}${display}${suffix || ""}`;
      },
    });
  }, [value, suffix, prefix]);

  return (
    <div className="flex flex-col items-start gap-1">
      <span
        ref={numRef}
        className="font-serif font-bold text-[28px] text-[#1A1A1A]"
      >
        {prefix || ""}0{suffix || ""}
      </span>
      <span className="font-mono text-[11px] tracking-[0.05em] text-[#8B7355]">
        {label}
      </span>
    </div>
  );
}

/* ── Gold separator ── */
function GoldSeparator() {
  return (
    <div className="mx-6 w-[1px] h-[30px] bg-[#C5A44E] opacity-40" />
  );
}

/* ── Hero ── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const preHeadlineRef = useRef<HTMLDivElement>(null);
  const lineDrawRef = useRef<HTMLDivElement>(null);
  const headLine1Ref = useRef<HTMLDivElement>(null);
  const headLine2Ref = useRef<HTMLDivElement>(null);
  const subHeadRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* 1 ── Thin line draws in from left */
      tl.fromTo(
        lineDrawRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.5 }
      );

      /* 2 ── Pre-headline chars stagger in */
      if (preHeadlineRef.current) {
        const chars = preHeadlineRef.current.querySelectorAll(".pre-char");
        tl.fromTo(
          chars,
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.02 },
          "-=0.15"
        );
      }

      /* 3 ── Headline line 1: mask reveal */
      tl.fromTo(
        headLine1Ref.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.8, ease: "power3.out" },
        "+=0.15"
      );

      /* 4 ── Headline line 2: mask reveal delayed */
      tl.fromTo(
        headLine2Ref.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1.0, ease: "power3.out" },
        "-=0.5"
      );

      /* 5 ── Sub-headline fade up */
      tl.fromTo(
        subHeadRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );

      /* 6 ── Stats fade up */
      tl.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

      /* 7 ── CTA buttons fade up */
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

      /* 8 ── Scroll cue fade in */
      tl.fromTo(
        scrollCueRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.1"
      );

      /* Scroll cue bounce */
      gsap.to(".scroll-cue-circle", {
        y: 6,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Split pre-headline text into individual chars */
  const preText = "INTELLIGENT PATENT DRAFTING";
  const preChars = preText.split("").map((ch, i) => (
    <span key={i} className="pre-char inline-block opacity-0">
      {ch === " " ? "\u00A0" : ch}
    </span>
  ));

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F3EFE8 0%, #FDFBF7 60%)",
      }}
    >
      <div className="relative flex min-h-screen w-full max-w-[1440px] mx-auto">
        {/* ── LEFT SIDE ── */}
        <div className="relative z-10 flex w-full lg:w-[45%] flex-col justify-center pl-[8%] pr-6 py-32 lg:py-0">
          {/* Pre-headline */}
          <div className="flex items-center gap-4 mb-8">
            <div
              ref={lineDrawRef}
              className="h-[1px] w-[60px] bg-[#8B7355] origin-left"
              style={{ transform: "scaleX(0)" }}
            />
            <div
              ref={preHeadlineRef}
              className="font-mono text-[11px] tracking-[0.3em] text-[#8B7355] uppercase"
            >
              {preChars}
            </div>
          </div>

          {/* Main headline line 1 */}
          <div
            ref={headLine1Ref}
            className="relative mb-1"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <h1
              className="font-serif font-normal text-[#1A1A1A] leading-[1.05]"
              style={{ fontSize: "clamp(3.2rem, 5.5vw, 5.8rem)" }}
            >
              Draft. Defend.
            </h1>
            {/* Gold edge line */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#C5A44E]" />
          </div>

          {/* Main headline line 2 */}
          <div
            ref={headLine2Ref}
            className="relative mb-10"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <h1
              className="font-serif font-bold text-[#C5A44E] leading-[1.05]"
              style={{
                fontSize: "clamp(3.2rem, 5.5vw, 5.8rem)",
                textShadow: "0 0 40px rgba(197,164,78,0.15)",
              }}
            >
              Grant.
            </h1>
            {/* Gold edge line */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#C5A44E]" />
          </div>

          {/* Sub-headline */}
          <p
            ref={subHeadRef}
            className="font-sans text-[18px] font-normal leading-[1.7] text-[#5A5A5A] max-w-[520px] mb-12 opacity-0"
          >
            Patents pre-built to withstand rejections — 35 U.S.C. §101, §102, §103, §112
            and European Articles 52, 54, 56, 83 addressed from the first draft.
            Private, on-device drafting where your invention never leaves your computer.
          </p>

          {/* Stat Trio */}
          <div
            ref={statsRef}
            className="flex items-center flex-wrap gap-y-4 mb-12 opacity-0"
          >
            <AnimatedStat value={5} suffix="" label="rejection grounds pre-addressed" />
            <GoldSeparator />
            <AnimatedStat value={100} suffix="%" label="on-device · zero data leaks" />
            <GoldSeparator />
            <div className="flex flex-col items-start gap-1">
              <span className="font-serif font-bold text-[28px] text-[#1A1A1A]">
                1 week → 25 min
              </span>
              <span className="font-mono text-[11px] tracking-[0.05em] text-[#8B7355]">
                drafting time reduced
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex items-center gap-8 opacity-0">
            {/* Primary CTA */}
            <motion.a
              href="mailto:contact@cosmos.com?subject=Demo%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo.%0A%0AThank%20you."
              className="relative overflow-hidden bg-[#1A1A1A] text-[#FDFBF7] px-10 py-[18px] rounded-md text-sm font-medium inline-block"
              whileHover="hover"
            >
              <motion.span
                className="relative z-10"
                variants={{
                  hover: { color: "#FDFBF7" },
                }}
              >
                Request Access
              </motion.span>
              {/* Hover bg */}
              <motion.div
                className="absolute inset-0 bg-[#C5A44E]"
                initial={{ opacity: 0 }}
                variants={{
                  hover: {
                    opacity: 1,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 8px rgba(197,164,78,0.3)",
                  },
                }}
                transition={{ duration: 0.25 }}
              />
              {/* Diagonal light streak */}
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                }}
                initial={{ x: "-100%" }}
                variants={{
                  hover: { x: "100%" },
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/how-it-works"
              className="relative text-sm font-medium text-[#1A1A1A] group"
              whileHover="hover"
            >
              <span>See How It Works ↓</span>
              <motion.svg
                className="absolute -bottom-1 left-0 w-full h-[3px]"
                viewBox="0 0 200 3"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,1.5 L200,1.5"
                  stroke="#1A1A1A"
                  strokeWidth="1"
                  fill="none"
                  variants={{
                    hover: {
                      d: "M0,1.5 Q25,0 50,1.5 Q75,3 100,1.5 Q125,0 150,1.5 Q175,3 200,1.5",
                      stroke: "#C5A44E",
                    },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.svg>
            </motion.a>
          </div>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div className="hidden lg:block w-[55%] relative">
          <div
            className="three-canvas-container w-full h-screen sticky top-0"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(197,164,78,0.06) 0%, transparent 70%)",
            }}
          >
            <PatentGlobe />
          </div>
        </div>
      </div>

      {/* ── SCROLL CUE ── */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0"
      >
        <div className="scroll-cue-circle flex items-center justify-center h-[28px] w-[28px] rounded-full border border-[#C5A44E]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="#C5A44E"
            strokeWidth="1.2"
          >
            <path d="M2 4L6 8L10 4" />
          </svg>
        </div>
        <span
          className="font-mono text-[9px] tracking-[0.2em] text-[#1A1A1A] opacity-30 uppercase"
          style={{ writingMode: "vertical-lr" }}
        >
          Explore
        </span>
      </div>
    </section>
  );
}
