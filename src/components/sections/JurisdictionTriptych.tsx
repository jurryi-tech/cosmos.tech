"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

interface RejectionCard {
  id: string;
  title: string;
  quote: string;
  cosmos: string;
}

const usptoCards: RejectionCard[] = [
  {
    id: "101",
    title: "\u00a7 101: Subject Matter Eligibility",
    quote:
      "An abstract idea, law of nature, or natural phenomenon is not patentable subject matter under 35 U.S.C. \u00a7 101. The Alice/Mayo framework requires examiners to determine whether additional claim elements transform the nature of the claim into a patent-eligible application.",
    cosmos:
      "Cosmos\u2019s 101 Engine analyzes claim language against 14,000+ Alice rejections to identify abstract idea triggers before filing and restructures claims around specific technical implementations that satisfy Step 2B of the Alice framework.",
  },
  {
    id: "102",
    title: "\u00a7 102: Novelty",
    quote:
      "A claimed invention must be novel \u2014 not anticipated by any single prior art reference. Under \u00a7 102, if every element of a claim is disclosed in a single prior art document, the claim is unpatentable.",
    cosmos:
      "Cosmos\u2019s Prior Art Neural Network cross-references the invention disclosure against 147 million+ patent documents, scientific papers, and technical publications across USPTO, EPO, WIPO, and IPO databases in under 90 seconds.",
  },
  {
    id: "103",
    title: "\u00a7 103: Obviousness",
    quote:
      "An invention is unpatentable if the differences between it and the prior art would have been obvious to a person having ordinary skill in the art. Examiners combine multiple references to establish a prima facie case of obviousness under KSR International v. Teleflex.",
    cosmos:
      "Cosmos\u2019s Obviousness Prediction Model identifies the most likely reference combinations an examiner would use by analyzing prosecution patterns within the assigned Art Unit.",
  },
  {
    id: "112",
    title: "\u00a7 112: Specification Requirements",
    quote:
      "The specification must describe the invention in full, clear, concise, and exact terms to enable a person skilled in the art to make and use it.",
    cosmos:
      "Cosmos\u2019s Specification Analyzer ensures every claim term has explicit antecedent basis in the description, flags indefinite language patterns, verifies enablement coverage for all claim permutations.",
  },
];

const usptoStats = [
  { label: "Applications Filed", value: "648,291", highlight: false },
  { label: "First Action Allowance Rate", value: "24.8%", highlight: false },
  { label: "Average Prosecution Pendency", value: "23.4 months", highlight: false },
  { label: "Office Actions Issued", value: "1,847,000+", highlight: false },
  { label: "Most Active Art Unit", value: "2122 (AI/ML)", highlight: false },
  { label: "Average Claim Count", value: "18.4", highlight: false },
  { label: "RCE Filing Rate", value: "34.2%", highlight: false },
  { label: "Appeal Rate", value: "8.7%", highlight: false },
  { label: "Cosmos-Drafted Grant Rate", value: "84.3%", highlight: true },
];

const ipoExclusions = [
  { id: "3d", title: "\u00a7 3(d)", desc: "New form of known substance" },
  { id: "3k", title: "\u00a7 3(k)", desc: "Mathematical/business methods, computer programs per se" },
  { id: "3e", title: "\u00a7 3(e)", desc: "Mere admixture/aggregation" },
  { id: "3i", title: "\u00a7 3(i)", desc: "Treatment methods" },
];

const epoArticles = [
  {
    id: "52",
    title: "Article 52: Patentable Inventions",
    cosmos:
      "Cosmos\u2019s Article 52 Navigator maps claim elements against the exclusion lists in Article 52(2) and applies the \u201cas such\u201d doctrine of Article 52(3) to identify technical character arguments that survive examination.",
  },
  {
    id: "54",
    title: "Article 54: Novelty",
    cosmos:
      "Cosmos\u2019s global prior art search spans 140+ million documents across all EP member states, PCT publications, and national filings to ensure absolute novelty under the EPO\u2019s state-of-the-art standard.",
  },
  {
    id: "56",
    title: "Article 56: Inventive Step",
    cosmos:
      "Cosmos\u2019s PSA Module automatically identifies the closest prior art, formulates the objective technical problem, and evaluates whether the claimed solution would have been obvious \u2014 reduces Article 56 rejections by 62%.",
  },
  {
    id: "83",
    title: "Article 83: Disclosure / Sufficiency",
    cosmos:
      "Cosmos\u2019s Sufficiency Checker validates that the description enables a skilled person to reproduce the invention across the full scope of the claims, flagging gaps in experimental data or missing implementation details.",
  },
];

const epoGrantRates = [
  { sector: "Biotech", rate: 62 },
  { sector: "Pharma", rate: 71 },
  { sector: "Electrical", rate: 78 },
  { sector: "Mechanical", rate: 84 },
  { sector: "CompSci", rate: 51 },
  { sector: "AI/ML", rate: 43, cosmosRate: 74 },
  { sector: "Telecoms", rate: 73 },
];

/* ------------------------------------------------------------------ */
/*  SUB-COMPONENTS — LIGHT THEME                                       */
/* ------------------------------------------------------------------ */

function USPTOStatsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    const inner = el.querySelector(".ticker-inner") as HTMLElement;
    if (!inner) return;

    gsap.to(inner, {
      y: () => -(inner.scrollHeight - el.clientHeight),
      ease: "none",
      duration: 12,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      ref={tickerRef}
      className="relative h-[420px] overflow-hidden  border border-[#1A1A1A]/10 bg-white shadow-sm"
    >
      <div className="ticker-inner flex flex-col gap-2 p-3">
        {[...usptoStats, ...usptoStats].map((s, i) => (
          <div
            key={i}
            className={`flex items-center justify-between  px-4 py-3 text-sm transition-colors ${
              s.highlight
                ? "border border-[#C5A44E]/40 bg-[#C5A44E]/5"
                : "border border-[#1A1A1A]/6 bg-[#F3EFE8]/50"
            }`}
          >
            <span className="text-[#5A5A5A] font-medium text-xs">{s.label}</span>
            <span className={`font-mono font-bold text-sm ${s.highlight ? "text-[#C5A44E]" : "text-[#1A1A1A]"}`}>
              {s.value}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

function SankeyFlowDiagram() {
  return (
    <div className="w-full py-6">
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-center">
          <div className=" border-2 border-[#1A1A1A] bg-[#1A1A1A]/5 px-6 py-4 text-center">
            <p className="text-xs uppercase tracking-wider text-[#1A1A1A] font-medium">Applications Filed</p>
            <p className="mt-1 text-2xl font-bold text-[#1A1A1A]">66,440</p>
          </div>
        </div>

        <div className="hidden h-[2px] w-16 bg-gradient-to-r from-[#1A1A1A] to-[#C5A44E] lg:block" />
        <div className="block h-8 w-[2px] bg-gradient-to-b from-[#1A1A1A] to-[#C5A44E] lg:hidden" />

        <div className="flex flex-col items-center">
          <div className=" border-2 border-[#C5A44E] bg-[#C5A44E]/5 px-6 py-4 text-center">
            <p className="text-xs uppercase tracking-wider text-[#C5A44E] font-medium">Examined</p>
            <p className="mt-1 text-2xl font-bold text-[#1A1A1A]">48,200</p>
          </div>
          <div className="mt-2 flex gap-3 text-xs">
            <span className=" bg-red-50 border border-red-200 px-3 py-1 text-red-600">Abandoned: 11,200</span>
          </div>
        </div>

        <div className="hidden h-[2px] w-16 bg-gradient-to-r from-[#C5A44E] to-[#C5A44E] lg:block" />
        <div className="block h-8 w-[2px] bg-gradient-to-b from-[#C5A44E] to-[#C5A44E] lg:hidden" />

        <div className="flex flex-col items-center">
          <div className=" border-2 border-[#C5A44E] bg-[#C5A44E]/5 px-6 py-4 text-center">
            <p className="text-xs uppercase tracking-wider text-[#C5A44E] font-medium">Granted</p>
            <p className="mt-1 text-2xl font-bold text-[#1A1A1A]">29,840</p>
          </div>
          <div className="mt-2 flex gap-3 text-xs">
            <span className=" bg-orange-50 border border-orange-200 px-3 py-1 text-orange-600">Opposition: 4,120</span>
            <span className=" bg-gray-50 border border-gray-200 px-3 py-1 text-gray-500">Refused: 3,040</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pre-computed gear path for 10-tooth gear (cx=50, cy=50, outerRadius=28, toothDepth=8)
// to avoid floating-point hydration mismatches between server and client
function buildGearPath(teeth: number, outerR: number, toothD: number): string {
  const cx = 50, cy = 50;
  const toothAngle = (2 * Math.PI) / teeth;
  const tw = toothAngle * 0.35;
  let d = "";
  for (let i = 0; i < teeth; i++) {
    const a = i * toothAngle;
    const r1x = (cx + outerR * Math.cos(a - tw)).toFixed(2);
    const r1y = (cy + outerR * Math.sin(a - tw)).toFixed(2);
    const t1x = (cx + (outerR + toothD) * Math.cos(a - tw * 0.7)).toFixed(2);
    const t1y = (cy + (outerR + toothD) * Math.sin(a - tw * 0.7)).toFixed(2);
    const t2x = (cx + (outerR + toothD) * Math.cos(a + tw * 0.7)).toFixed(2);
    const t2y = (cy + (outerR + toothD) * Math.sin(a + tw * 0.7)).toFixed(2);
    const r2x = (cx + outerR * Math.cos(a + tw)).toFixed(2);
    const r2y = (cy + outerR * Math.sin(a + tw)).toFixed(2);
    const na = (i + 1) * toothAngle;
    const n1x = (cx + outerR * Math.cos(na - tw)).toFixed(2);
    const n1y = (cy + outerR * Math.sin(na - tw)).toFixed(2);
    if (i === 0) d += `M ${r1x} ${r1y} `;
    d += `L ${t1x} ${t1y} L ${t2x} ${t2y} L ${r2x} ${r2y} `;
    d += `A ${outerR} ${outerR} 0 0 1 ${n1x} ${n1y} `;
  }
  return d + "Z";
}

const GEAR_PATH_10 = buildGearPath(10, 28, 8);
const SPOKE_ANGLES = [0, 120, 240].map((deg) => (deg * Math.PI) / 180);

function GearSVG({ color, className }: { color: string; className: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path d={GEAR_PATH_10} fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="18" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="5" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1" />
      {SPOKE_ANGLES.map((rad, i) => (
        <line
          key={i}
          x1={(50 + 6 * Math.cos(rad)).toFixed(2)}
          y1={(50 + 6 * Math.sin(rad)).toFixed(2)}
          x2={(50 + 18 * Math.cos(rad)).toFixed(2)}
          y2={(50 + 18 * Math.sin(rad)).toFixed(2)}
          stroke={color} strokeWidth="2" strokeOpacity="0.25"
        />
      ))}
    </svg>
  );
}

function ProblemSolutionGears() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="relative" style={{ width: 130, height: 130 }}>
        <div className="absolute inset-0 animate-spin-slow">
          <GearSVG color="#003399" className="w-full h-full" />
        </div>
        <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-[#003399] pointer-events-none">
          Problem
        </span>
      </div>
      <div className="relative -ml-[18px]" style={{ width: 130, height: 130 }}>
        <div className="absolute inset-0 animate-spin-slow-reverse" style={{ animationDelay: "-1s" }}>
          <GearSVG color="#C5A44E" className="w-full h-full" />
        </div>
        <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-[#C5A44E] pointer-events-none">
          Solution
        </span>
      </div>
    </div>
  );
}

function EPOBarChart() {
  return (
    <div className="w-full space-y-3 py-4">
      {epoGrantRates.map((item) => (
        <div key={item.sector} className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#5A5A5A]">{item.sector}</span>
            <span className="font-mono text-[#1A1A1A] font-semibold">{item.rate}%</span>
          </div>
          <div className="relative h-5 w-full overflow-hidden  bg-[#1A1A1A]/8 border border-[#1A1A1A]/10">
            <div
              className="h-full  bg-gradient-to-r from-[#1A1A1A]/70 to-[#1A1A1A]/40"
              style={{ width: `${item.rate}%` }}
            />
            {item.cosmosRate && (
              <div
                className="absolute top-0 h-full  border-2 border-[#C5A44E] bg-[#C5A44E]/10"
                style={{ width: `${item.cosmosRate}%` }}
              >
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#C5A44E]">
                  Cosmos: {item.cosmosRate}%
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  JURISDICTION COLOR ACCENT BARS                                     */
/* ------------------------------------------------------------------ */

const jurisdictionStyles = {
  usa: {
    accentColor: "#1A1A1A",
    accentLight: "rgba(26,26,26,0.04)",
    accentBorder: "rgba(26,26,26,0.12)",
    headingColor: "#1A1A1A",
    tagColor: "#C5A44E",
    bg: "linear-gradient(180deg, #FDFBF7 0%, #F3F1EC 100%)",
  },
  india: {
    accentColor: "#1A1A1A",
    accentLight: "rgba(26,26,26,0.04)",
    accentBorder: "rgba(26,26,26,0.12)",
    headingColor: "#1A1A1A",
    tagColor: "#C5A44E",
    bg: "linear-gradient(180deg, #FDFBF7 0%, #F3F1EC 100%)",
  },
  europe: {
    accentColor: "#1A1A1A",
    accentLight: "rgba(26,26,26,0.04)",
    accentBorder: "rgba(26,26,26,0.12)",
    headingColor: "#1A1A1A",
    tagColor: "#C5A44E",
    bg: "linear-gradient(180deg, #FDFBF7 0%, #F3F1EC 100%)",
  },
};

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function JurisdictionTriptych() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelWrapperRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

    // Kill any existing ScrollTriggers for this section first
    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars.trigger === sectionRef.current) st.kill();
    });

    const section = sectionRef.current;
    const wrapper = panelWrapperRef.current;
    const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!section || !wrapper || panels.length < 3) return;

    // Small delay to ensure DOM is fully settled after React render
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.set(panels[0], { opacity: 1, xPercent: 0 });
        gsap.set(panels[1], { opacity: 0, xPercent: 100 });
        gsap.set(panels[2], { opacity: 0, xPercent: 100 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            pin: wrapper,
            pinSpacing: false,
            scrub: 1,
          },
        });

        tl.to(panels[0], { opacity: 0, xPercent: -50, duration: 1 }, 0)
          .to(panels[1], { opacity: 1, xPercent: 0, duration: 1 }, 0);

        tl.to(panels[1], { opacity: 0, xPercent: -50, duration: 1 }, 1.5)
          .to(panels[2], { opacity: 1, xPercent: 0, duration: 1 }, 1.5);

        panels.forEach((panel) => {
          const cards = panel.querySelectorAll(".anim-card");
          if (cards.length === 0) return;
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, section);

      // Store ctx on section for cleanup
      (section as any).__gsapCtx = ctx;
    }, 100);

    return () => {
      clearTimeout(timer);
      const ctx = (sectionRef.current as any)?.__gsapCtx;
      if (ctx) ctx.revert();
    };
  }, [mounted, isMobile]);

  const setPanelRef = (i: number) => (el: HTMLDivElement | null) => {
    panelsRef.current[i] = el;
  };

  /* shared card style */
  const cardBase = "border bg-white p-5 shadow-sm transition-all hover:shadow-md";

  /* ---------- MOBILE LAYOUT ---------- */
  if (isMobile) {
    return (
      <section className="relative" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <MobilePanelUSPTO cardBase={cardBase} />
        <MobilePanelIPO cardBase={cardBase} />
        <MobilePanelEPO cardBase={cardBase} />
      </section>
    );
  }

  /* ---------- DESKTOP LAYOUT ---------- */
  return (
    <section ref={sectionRef} className="relative min-h-[400vh]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <div ref={panelWrapperRef} className="relative h-screen w-full overflow-hidden">

        {/* ============ PANEL 1: USPTO ============ */}
        <div
          ref={setPanelRef(0)}
          className="absolute inset-0 flex items-start justify-center overflow-y-auto"
          style={{ background: jurisdictionStyles.usa.bg }}
        >
          {/* removed accent bar for immersive transition */}

          <div className="mx-auto flex w-full max-w-7xl gap-8 px-6 py-16 lg:px-12">
            <div className="flex-1 space-y-8">
              <div className="anim-card">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A44E]">
                  The American Patent Cathedral
                </p>
                <h2 className="mt-2 text-4xl font-black text-[#1A1A1A]">USPTO</h2>
                <p className="mt-1 text-lg text-[#5A5A5A]">
                  United States Patent and Trademark Office
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                {usptoCards.map((card) => (
                  <div
                    key={card.id}
                    className={`anim-card ${cardBase} border-[#1A1A1A]/10 hover:border-[#C5A44E]/25`}
                  >
                    <h3 className="text-base font-bold text-[#1A1A1A]">
                      {card.title}
                    </h3>
                    <blockquote className="mt-3 border-l-2 border-[#C5A44E]/40 pl-3 text-xs leading-relaxed text-[#5A5A5A] italic font-serif">
                      {card.quote}
                    </blockquote>
                    <p className="mt-3 text-xs leading-relaxed text-[#8B7355]">
                      {card.cosmos}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden w-72 shrink-0 pt-20 xl:block">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/40 font-mono">
                USPTO FY2025 Statistics
              </p>
              <USPTOStatsTicker />
            </div>
          </div>
        </div>

        {/* ============ PANEL 2: IPO ============ */}
        <div
          ref={setPanelRef(1)}
          className="absolute inset-0 flex items-start justify-center overflow-y-auto"
          style={{ background: jurisdictionStyles.india.bg }}
        >
          {/* removed accent bar */}

          <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-16 lg:px-12">
            <div className="anim-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A44E]">
                The Innovation Sanctum
              </p>
              <h2 className="mt-2 text-4xl font-black text-[#1A1A1A]">IPO</h2>
              <p className="mt-1 text-lg text-[#5A5A5A]">
                Indian Patent Office
              </p>
            </div>

            <p className="anim-card max-w-3xl text-sm leading-relaxed text-[#5A5A5A]">
              The Indian patent system operates under The Patents Act, 1970
              (amended 2005), which introduced product patents for
              pharmaceuticals and aligned India with TRIPS obligations while
              retaining uniquely stringent exclusions under Section 3.
            </p>

            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              {ipoExclusions.map((ex) => (
                <div
                  key={ex.id}
                  className={`anim-card ${cardBase} border-[#1A1A1A]/15 text-center hover:border-[#1A1A1A]/30`}
                >
                  <p className="text-2xl font-black text-[#1A1A1A]">
                    {ex.title}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-[#5A5A5A]">
                    {ex.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className={`anim-card ${cardBase} border-[#C5A44E]/20 border-l-4 border-l-[#C5A44E]`}>
              <p className="text-sm leading-relaxed text-[#3A3A3A]">
                Cosmos&apos;s India Drafting Agent generates complete patent
                specifications formatted per Indian Patent Office requirements:
                Form 1, Form 2, Form 3, Form 5, and Form 26. The{" "}
                <span className="font-bold text-[#C5A44E]">
                  One-Click Drafting
                </span>{" "}
                feature takes a plain-language invention disclosure and produces
                a filing-ready document package in under{" "}
                <span className="font-bold text-[#1A1A1A]">8 minutes</span>.
              </p>
            </div>

            <div className="anim-card">
              <SankeyFlowDiagram />
            </div>

            <div className={`anim-card flex items-center gap-5 ${cardBase} border-[#C5A44E]/15`}>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center  border-2 border-[#C5A44E] text-xl font-black text-[#C5A44E]">
                47%
              </div>
              <p className="text-sm text-[#5A5A5A]">
                Cosmos increases FER-to-Grant conversion by{" "}
                <span className="font-bold text-[#C5A44E]">47%</span> through
                predictive claim structuring.
              </p>
            </div>
          </div>
        </div>

        {/* ============ PANEL 3: EPO ============ */}
        <div
          ref={setPanelRef(2)}
          className="absolute inset-0 flex items-start justify-center overflow-y-auto"
          style={{ background: jurisdictionStyles.europe.bg }}
        >
          {/* removed accent bar */}

          <div className="mx-auto w-full max-w-7xl space-y-8 px-6 py-16 lg:px-12">
            <div className="anim-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A44E]">
                The Precision Chamber
              </p>
              <h2 className="mt-2 text-4xl font-black text-[#1A1A1A]">EPO</h2>
              <p className="mt-1 text-lg text-[#5A5A5A]">
                European Patent Office
              </p>
            </div>

            <div className="anim-card">
              <p className="mb-2 text-center text-xs uppercase tracking-widest text-[#5A5A5A]/60 font-mono">
                Problem-Solution Approach
              </p>
              <ProblemSolutionGears />
            </div>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              {epoArticles.map((art) => (
                <div
                  key={art.id}
                  className={`anim-card ${cardBase} border-[#1A1A1A]/10 hover:border-[#1A1A1A]/25`}
                >
                  <h3 className="text-base font-bold text-[#1A1A1A]">
                    {art.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#5A5A5A]">
                    {art.cosmos}
                  </p>
                </div>
              ))}
            </div>

            <div className="anim-card">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/50 font-mono">
                EPO Grant Rates by Sector
              </p>
              <EPOBarChart />
            </div>

            <div className={`anim-card ${cardBase} border-[#C5A44E]/20 border-l-4 border-l-[#C5A44E]`}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C5A44E] font-mono">
                Two-Part Claim Format
              </p>
              <div className="space-y-3 text-sm text-[#5A5A5A]">
                <p>
                  <span className="font-bold text-[#1A1A1A]">Preamble:</span>{" "}
                  &ldquo;A device for processing signals, comprising a
                  receiver and a processor...&rdquo;
                </p>
                <p className="text-center text-lg font-black tracking-widest text-[#C5A44E] font-serif italic">
                  &ldquo;characterized in that&rdquo;
                </p>
                <p>
                  <span className="font-bold text-[#1A1A1A]">
                    Characterizing Portion:
                  </span>{" "}
                  &ldquo;...the processor applies a neural network model trained
                  on frequency-domain features to classify the signal in real
                  time.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MOBILE PANELS — LIGHT THEME                                        */
/* ------------------------------------------------------------------ */

function MobilePanelUSPTO({ cardBase }: { cardBase: string }) {
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: jurisdictionStyles.usa.bg }}>
      {/* removed accent bar */}
      <div className="mx-auto max-w-lg space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A44E]">
            The American Patent Cathedral
          </p>
          <h2 className="mt-2 text-3xl font-black text-[#1A1A1A]">USPTO</h2>
          <p className="mt-1 text-base text-[#5A5A5A]">
            United States Patent and Trademark Office
          </p>
        </motion.div>

        {usptoCards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${cardBase} border-[#1A1A1A]/10`}
          >
            <h3 className="text-sm font-bold text-[#1A1A1A]">{card.title}</h3>
            <blockquote className="mt-3 border-l-2 border-[#C5A44E]/40 pl-3 text-xs leading-relaxed text-[#5A5A5A] italic font-serif">
              {card.quote}
            </blockquote>
            <p className="mt-3 text-xs leading-relaxed text-[#8B7355]">
              {card.cosmos}
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/40 font-mono">
            USPTO FY2025 Statistics
          </p>
          {usptoStats.map((s, i) => (
            <div
              key={i}
              className={`flex items-center justify-between  px-3 py-2 text-xs ${
                s.highlight
                  ? "border border-[#C5A44E]/40 bg-[#C5A44E]/5"
                  : "border border-[#1A1A1A]/6 bg-white"
              }`}
            >
              <span className="text-[#5A5A5A]">{s.label}</span>
              <span className={`font-mono font-bold ${s.highlight ? "text-[#C5A44E]" : "text-[#1A1A1A]"}`}>
                {s.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function MobilePanelIPO({ cardBase }: { cardBase: string }) {
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: jurisdictionStyles.india.bg }}>
      <div className="mx-auto max-w-lg space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A44E]">
            The Innovation Sanctum
          </p>
          <h2 className="mt-2 text-3xl font-black text-[#1A1A1A]">IPO</h2>
          <p className="mt-1 text-base text-[#5A5A5A]">Indian Patent Office</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-sm leading-relaxed text-[#5A5A5A]"
        >
          The Indian patent system operates under The Patents Act, 1970
          (amended 2005), which introduced product patents for pharmaceuticals
          and aligned India with TRIPS obligations while retaining uniquely
          stringent exclusions under Section 3.
        </motion.p>

        <div className="grid grid-cols-2 gap-3">
          {ipoExclusions.map((ex, i) => (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${cardBase} border-[#1A1A1A]/15 text-center`}
            >
              <p className="text-xl font-black text-[#1A1A1A]">{ex.title}</p>
              <p className="mt-1 text-[11px] leading-snug text-[#5A5A5A]">{ex.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`${cardBase} border-[#C5A44E]/20 border-l-4 border-l-[#C5A44E]`}
        >
          <p className="text-sm leading-relaxed text-[#3A3A3A]">
            Cosmos&apos;s India Drafting Agent generates complete patent
            specifications. The{" "}
            <span className="font-bold text-[#C5A44E]">One-Click Drafting</span>{" "}
            produces a filing-ready document package in under{" "}
            <span className="font-bold text-[#1A1A1A]">8 minutes</span>.
          </p>
        </motion.div>

        <SankeyFlowDiagram />
      </div>
    </div>
  );
}

function MobilePanelEPO({ cardBase }: { cardBase: string }) {
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: jurisdictionStyles.europe.bg }}>
      <div className="mx-auto max-w-lg space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A44E]">
            The Precision Chamber
          </p>
          <h2 className="mt-2 text-3xl font-black text-[#1A1A1A]">EPO</h2>
          <p className="mt-1 text-base text-[#5A5A5A]">European Patent Office</p>
        </motion.div>

        <ProblemSolutionGears />

        {epoArticles.map((art, i) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${cardBase} border-[#1A1A1A]/10`}
          >
            <h3 className="text-sm font-bold text-[#1A1A1A]">{art.title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-[#5A5A5A]">{art.cosmos}</p>
          </motion.div>
        ))}

        <EPOBarChart />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`${cardBase} border-[#C5A44E]/20 border-l-4 border-l-[#C5A44E]`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C5A44E] font-mono">
            Two-Part Claim Format
          </p>
          <div className="space-y-3 text-sm text-[#5A5A5A]">
            <p>
              <span className="font-bold text-[#1A1A1A]">Preamble:</span>{" "}
              &ldquo;A device for processing signals...&rdquo;
            </p>
            <p className="text-center text-lg font-black tracking-widest text-[#C5A44E] font-serif italic">
              &ldquo;characterized in that&rdquo;
            </p>
            <p>
              <span className="font-bold text-[#1A1A1A]">Characterizing Portion:</span>{" "}
              &ldquo;...the processor applies a neural network model...&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
