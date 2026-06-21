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
  const cls = "w-6 h-6";
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
      className="relative w-full"
      style={{ background: "linear-gradient(180deg, #141414 0%, #1A1A1A 50%, #141414 100%)" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#C5A44E 1px, transparent 1px), linear-gradient(90deg, #C5A44E 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        {/* ═══════════════════════════════════════════════ */}
        {/* SECTION 1: HOW COSMOS WORKS                    */}
        {/* ═══════════════════════════════════════════════ */}
        <div className="py-24 md:py-32">
          {/* Title */}
          <div className="text-center mb-16 px-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[0.3em] text-[#C5A44E] mb-4 uppercase"
            >
              The Vault
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-6"
            >
              How Cosmos is the world&apos;s most private artificial intelligence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[#999] text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Your invention never leaves your device. Our technology goes to the user&apos;s device, drafts the patent, and leaves. We never collect, store, or transmit any data.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-[28px] md:left-[32px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C5A44E]/60 via-[#C5A44E]/30 to-transparent" />

              <div className="flex flex-col gap-12">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="flex gap-6 md:gap-8"
                  >
                    {/* Step number circle */}
                    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#C5A44E]/10 border-2 border-[#C5A44E] flex items-center justify-center z-10">
                      <span className="font-serif font-bold text-[#C5A44E] text-lg md:text-xl">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-2 md:pt-3">
                      <h3 className="text-white font-semibold text-lg md:text-xl mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#999] text-sm md:text-base leading-relaxed max-w-2xl">
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
        <div className="py-24 md:py-32 border-t border-[#2C2C2C]">
          {/* Title */}
          <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[0.3em] text-[#C5A44E] mb-4 uppercase"
            >
              Our Solution
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mb-4"
            >
              Built on zero-knowledge architecture.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#999] text-base md:text-lg max-w-4xl leading-relaxed"
            >
              Our proprietary method drafts patents on inventor/attorney device with no API Calls to any external AI model. We deliver privacy and data security alongside intelligent patent drafting.
            </motion.p>
          </div>

          {/* Solution Cards — 2x2 grid */}
          <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl p-6 md:p-8 border-l-4 border-[#C5A44E] bg-[#1E1E1E]/80 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A44E]/10 border border-[#C5A44E]/20 flex items-center justify-center text-[#C5A44E]">
                    <SolutionIcon type={card.icon} />
                  </div>
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-2 pl-14">
                  {card.points.map((point, j) => (
                    <li key={j} className="text-[#999] text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[#C5A44E] mt-1.5 flex-shrink-0">•</span>
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
            className="max-w-6xl mx-auto px-4 md:px-8 mt-16"
          >
            <p className="font-serif text-xl md:text-2xl italic text-[#C5A44E]">
              This is not a feature. This is our foundation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
