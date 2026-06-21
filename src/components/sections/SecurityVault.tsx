"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── How It Works Steps ── */
const steps = [
  {
    number: "01",
    title: "Cosmos goes to Attorney/Inventor\u2019s device",
    description:
      "One-time installation. Cosmos Program Module + SLM download from our private cloud server to the end user device. SLM model size is only 2.5 GB for 4 billion parameters and is perfect for iterative reasoning. Reduces Hallucination.",
  },
  {
    number: "02",
    title: "Sandbox Creation (Protection of IP)",
    description:
      "Isolated encrypted sandbox in a specified Installer Directory. No external process can access it. Sandbox gets killed once the drafting process is complete. This protects our own IP plus ensures patent data security.",
  },
  {
    number: "03",
    title: "On-Device Drafting",
    description:
      "Inventor docs loaded as input. SLM as brain is used for iterative review, read, reason and write process to extract, parse, and convert inventor data into patent-ready format \u2014 entirely on-device. No API calls are ever made to any external AI model\u2019s API Server. 100% Private, Secure and Confidential Patent Drafting Process.",
  },
  {
    number: "04",
    title: "Output & Clean-Up",
    description:
      "Patent document outputted. Control Component permanently deletes the entire sandbox \u2014 zero trace.",
  },
];

/* ── Our Solution Cards ── */
const solutionCards = [
  {
    icon: "lock",
    title: "On-Device Processing and No API calls.",
    points: [
      "Data processed in encrypted memory. Never stored, never logged, never trained on.",
      "No API-Calling to external AI models",
    ],
  },
  {
    icon: "shield",
    title: "No Hallucination due to SLM",
    points: [
      "We use SLM as brain for agentic calling for repetitive reasoning and review. Zero Hallucination Guaranteed.",
    ],
  },
  {
    icon: "server",
    title: "Provision for Private Cloud Deployment",
    points: [
      "Deploy entirely within your own infrastructure. Your data never leaves the premises.",
      "On Device Processing is the second service we provide for Confidentiality and Privacy of Patents.",
    ],
  },
  {
    icon: "privilege",
    title: "Privilege Preserved",
    points: [
      "Outputs are work product under attorney direction. Privilege intact.",
    ],
  },
];

function SolutionIcon({ type }: { type: string }) {
  const cls = "w-5 h-5";
  switch (type) {
    case "lock":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      );
    case "shield":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "server":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "privilege":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SecurityVault() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FDFBF7]"
    >
      {/* Hairline ledger ruling — extremely subtle */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,26,26,0.025) 1px, transparent 1px)",
          backgroundSize: "100% 32px",
        }}
      />
      {/* Single low-opacity gold glow, top-center */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[420px] opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse at center, #C5A44E 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* ═══════════════════════════════════════════════ */}
        {/* SECTION 1: HOW COSMOS WORKS                    */}
        {/* ═══════════════════════════════════════════════ */}
        <div className="py-24 md:py-32">
          {/* Title */}
          <div className="text-center mb-20 px-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-7"
            >
              <span className="hidden sm:block h-px w-12 bg-[#C5A44E]/50" />
              <p className="font-mono text-[11px] tracking-[0.4em] text-[#8B7355] uppercase">
                The Vault
              </p>
              <span className="hidden sm:block h-px w-12 bg-[#C5A44E]/50" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-3xl md:text-5xl lg:text-[3.4rem] font-semibold text-[#1A1A1A] tracking-tight leading-[1.1] mb-7 max-w-4xl mx-auto"
            >
              How Cosmos is the world&apos;s most private artificial intelligence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-sans text-[#5A5A5A] text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Your invention never leaves your device. Our technology goes to the user&apos;s device, drafts the patent, and leaves. We never collect, store, or transmit any data.
            </motion.p>
          </div>

          {/* Steps — ledger entries */}
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="relative">
              {/* Vertical rule connecting steps */}
              <div className="absolute left-[27px] md:left-[31px] top-3 bottom-3 w-px bg-[#1A1A1A]/10" />

              <div className="flex flex-col gap-3">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex gap-6 md:gap-9 py-6 border-b border-[#E8E4DD] last:border-b-0"
                  >
                    {/* Step number marker */}
                    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FDFBF7] border border-[#1A1A1A]/15 flex items-center justify-center z-10 transition-colors duration-500 group-hover:border-[#C5A44E]">
                      <span className="font-mono font-medium text-[#8B7355] text-base md:text-lg tracking-tight transition-colors duration-500 group-hover:text-[#C5A44E]">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-1.5 md:pt-2.5">
                      <h3 className="font-serif text-[#1A1A1A] font-semibold text-lg md:text-xl mb-2.5 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="font-sans text-[#5A5A5A] text-sm md:text-[15px] leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* SECTION 2: OUR SOLUTION                        */}
        {/* ═══════════════════════════════════════════════ */}
        <div className="py-24 md:py-32 border-t border-[#E8E4DD] bg-[#F3EFE8]">
          {/* Title */}
          <div className="max-w-5xl mx-auto px-6 md:px-8 mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[11px] tracking-[0.4em] text-[#8B7355] mb-5 uppercase"
            >
              Our Solution
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-[1.1] mb-5"
            >
              Built on zero-knowledge architecture.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans text-[#5A5A5A] text-base md:text-lg max-w-3xl leading-relaxed"
            >
              Our proprietary method drafts patents on inventor/attorney device with no API Calls to any external AI model. We deliver privacy and data security alongside intelligent patent drafting.
            </motion.p>
          </div>

          {/* Solution Cards — 2x2 ledger grid */}
          <div className="max-w-5xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E4DD] border border-[#E8E4DD]">
            {solutionCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 md:p-10 bg-[#FDFBF7] transition-colors duration-500 hover:bg-[#F3F1EC]"
              >
                {/* Top hairline accent that grows on hover */}
                <span className="absolute top-0 left-0 h-px w-10 bg-[#C5A44E] transition-all duration-500 group-hover:w-full" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="mt-0.5 w-10 h-10 rounded-sm border border-[#1A1A1A]/12 flex items-center justify-center text-[#8B7355] transition-colors duration-500 group-hover:text-[#C5A44E] group-hover:border-[#C5A44E]/40">
                    <SolutionIcon type={card.icon} />
                  </div>
                  <h3 className="font-serif text-[#1A1A1A] font-semibold text-lg md:text-xl leading-snug tracking-tight pt-1">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-3 pl-14">
                  {card.points.map((point, j) => (
                    <li key={j} className="font-sans text-[#5A5A5A] text-sm leading-relaxed flex items-start gap-3">
                      <span className="mt-[7px] flex-shrink-0 h-1 w-1 rounded-full bg-[#C5A44E]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-5xl mx-auto px-6 md:px-8 mt-16"
          >
            <div className="flex items-center gap-5">
              <span className="h-px flex-1 bg-[#1A1A1A]/10" />
              <p className="font-serif text-xl md:text-2xl italic text-[#8B7355] text-center">
                This is not a feature. This is our foundation.
              </p>
              <span className="h-px flex-1 bg-[#1A1A1A]/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
