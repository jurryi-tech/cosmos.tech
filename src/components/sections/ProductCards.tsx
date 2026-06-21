"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Product card data ── */
const products = [
  {
    title: "AI Patent Drafter",
    docType: "Specification",
    docNo: "USPTO / 37 C.F.R. § 1.71",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="4" width="26" height="36" rx="3" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <line x1="14" y1="14" x2="28" y2="14" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="14" y1="20" x2="28" y2="20" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="14" y1="26" x2="22" y2="26" stroke="#1A1A1A" strokeWidth="1.5" />
        <path d="M32 28l4-4 4 4-4 4z" fill="#C5A44E" opacity="0.7" />
        <path d="M36 20l2-2 2 2-2 2z" fill="#C5A44E" opacity="0.45" />
        <path d="M40 30l1.5-1.5 1.5 1.5-1.5 1.5z" fill="#C5A44E" opacity="0.3" />
      </svg>
    ),
    description:
      "Generate complete patent specifications from invention disclosures. Multi-jurisdiction formatting. Claims, descriptions, abstracts — all in one pass.",
    features: ["One-click drafting", "Multi-jurisdiction", "Claims optimization"],
    badges: ["USPTO", "IPO", "EPO"],
  },
  {
    title: "Office Action Response Generator",
    docType: "Response",
    docNo: "Examiner Correspondence",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 4L4 16v16l20 12 20-12V16L24 4z" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <polyline points="16,22 22,28 34,16" stroke="#C5A44E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    description:
      "Analyze office actions, identify weaknesses in the examiner's arguments, and generate strategic responses with predicted success rates.",
    features: ["AI analysis", "Strategy selection", "Success prediction"],
    badges: [],
  },
  {
    title: "Claim Amendment Engine",
    docType: "Amendment",
    docNo: "Prosecution History",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="4" y="8" width="40" height="32" rx="3" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <line x1="24" y1="8" x2="24" y2="40" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
        <line x1="10" y1="16" x2="20" y2="16" stroke="#8B7355" strokeWidth="1.5" />
        <line x1="10" y1="22" x2="18" y2="22" stroke="#8B7355" strokeWidth="1.5" />
        <line x1="28" y1="16" x2="38" y2="16" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="28" y1="22" x2="36" y2="22" stroke="#1A1A1A" strokeWidth="1.5" />
        <line x1="28" y1="28" x2="40" y2="28" stroke="#C5A44E" strokeWidth="1.5" />
      </svg>
    ),
    description:
      "Intelligent claim narrowing and broadening suggestions based on prosecution-history analytics. Art Unit-specific optimization.",
    features: ["Prosecution analytics", "Art Unit data", "Claim optimization"],
    badges: [],
  },
  {
    title: "Examiner Intelligence",
    docType: "Dossier",
    docNo: "8,400+ Profiles",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="14" r="8" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <path d="M10 42c0-8 6-14 14-14s14 6 14 14" stroke="#1A1A1A" strokeWidth="2" fill="none" />
        <rect x="32" y="8" width="10" height="7" rx="1" stroke="#C5A44E" strokeWidth="1" fill="none" />
        <line x1="34" y1="10.5" x2="40" y2="10.5" stroke="#C5A44E" strokeWidth="0.8" />
        <line x1="34" y1="13" x2="38" y2="13" stroke="#C5A44E" strokeWidth="0.8" />
      </svg>
    ),
    description:
      "Deep profiles on 8,400+ patent examiners. Allowance rates, favorite rejections, response patterns, interview success rates.",
    features: ["8,400+ examiners", "Allowance patterns", "Interview data"],
    badges: [],
  },
];

/* ── Product Card component — premium document artifact ── */
function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <motion.article
      className="group relative flex-shrink-0 w-[400px] bg-white flex flex-col border border-[#E8E4DD]"
      style={{
        boxShadow:
          "0 1px 2px rgba(26,26,26,0.04), 0 10px 30px -18px rgba(26,26,26,0.18)",
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
    >
      {/* Hairline gold rule at the top edge — the firm's letterhead */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C5A44E]/70 to-transparent" />

      {/* Document header band */}
      <div className="flex items-start justify-between px-8 pt-7 pb-5 border-b border-[#E8E4DD]">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#8B7355]">
            Deliverable
          </span>
          <span className="font-serif text-[15px] italic text-[#2C2C2C]">
            {product.docType}
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#1A1A1A]/35 tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-6 px-8 py-8 flex-1">
        {/* Icon — engraved into a cream plate */}
        <div className="w-16 h-16 bg-[#F3EFE8] border border-[#E8E4DD] flex items-center justify-center">
          {product.icon}
        </div>

        {/* Title */}
        <h3 className="font-serif text-[1.45rem] leading-snug text-[#1A1A1A]">
          {product.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-[14px] leading-relaxed text-[#5A5A5A] flex-1">
          {product.description}
        </p>

        {/* Key features — itemized like a docket */}
        <ul className="flex flex-col gap-2.5 border-t border-[#E8E4DD] pt-5">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 font-mono text-[11px] tracking-[0.04em] text-[#2C2C2C]"
            >
              <span className="inline-block w-1 h-1 rounded-full bg-[#C5A44E]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer — jurisdiction filing line */}
      <div className="flex items-center justify-between px-8 py-5 border-t border-[#E8E4DD] bg-[#FDFBF7]">
        <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8B7355]">
          {product.docNo}
        </span>
        {product.badges.length > 0 && (
          <div className="flex gap-2">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] font-medium border border-[#C5A44E]/40 text-[#8B7355]"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* ── Main Section ── */
export default function ProductCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top 80px",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="product-cards"
      className="bg-[#FDFBF7] overflow-hidden"
    >
      {/* Section header */}
      <div className="pt-24 pb-14 px-8 md:px-16">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] tracking-[0.3em] text-[#8B7355] uppercase">
            The Platform
          </span>
          <span className="h-px w-16 bg-[#C5A44E]/50" />
        </motion.div>
        <motion.h2
          className="font-serif text-4xl md:text-5xl text-[#1A1A1A] max-w-2xl leading-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Intelligent Drafting Tools
        </motion.h2>
        <motion.p
          className="font-sans text-[15px] text-[#5A5A5A] max-w-xl mt-5 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          A suite of instruments built for the discipline of prosecution — each
          rendering a precise, filing-ready work product.
        </motion.p>
      </div>

      {/* Cards — horizontal scroll on desktop, vertical stack on mobile */}
      {isMobile ? (
        <div className="flex flex-col gap-8 px-6 pb-24">
          {products.map((product, i) => (
            <div key={product.title} className="w-full">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      ) : (
        <div className="h-screen flex items-center">
          <div
            ref={trackRef}
            className="flex gap-10 pl-16 pr-[calc(100vw-400px)]"
          >
            {products.map((product, i) => (
              <ProductCard key={product.title} product={product} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
