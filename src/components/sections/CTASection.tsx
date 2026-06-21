"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] bg-[#1A1A1A] flex items-center justify-center px-6 py-28 overflow-hidden"
    >
      {/* Restrained gold framing — a single hairline rule, top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A44E]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A44E]/40 to-transparent" />

      {/* Subtle, single low-opacity gold wash — no neon, no particles */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 38%, rgba(197,164,78,0.07), transparent 70%)",
        }}
      />

      {/* Engraved watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <p className="font-serif text-[13vw] tracking-[0.05em] text-white opacity-[0.025] whitespace-nowrap">
          PATENT
        </p>
      </div>

      {/* Content */}
      <div className="cta-content relative z-10 text-center max-w-3xl mx-auto">
        {/* Eyebrow with flanking rules */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-10 bg-[#C5A44E]/40" />
          <p className="font-mono text-[11px] tracking-[0.32em] uppercase text-[#C5A44E]">
            On-Device Patent Drafting
          </p>
          <span className="h-px w-10 bg-[#C5A44E]/40" />
        </div>

        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] text-[#FDFBF7] leading-[1.12] mb-7">
          See Cosmos on Your Own Cases
        </h2>

        <p className="font-sans text-[17px] text-[#A8A39A] mb-12 max-w-xl mx-auto leading-relaxed">
          Cosmos drafts specifications, responses, and amendments on your device.
          Nothing leaves your machine. Request access to try it on your own work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <motion.a
            href="mailto:contact@cosmos.com?subject=Demo%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo.%0A%0AThank%20you."
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="inline-block bg-[#C5A44E] text-[#1A1A1A] font-medium text-[15px] tracking-wide px-10 py-4 hover:bg-[#d4b766] transition-colors duration-200"
          >
            Request Access
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="inline-block border border-[#FDFBF7]/30 text-[#FDFBF7] font-medium text-[15px] tracking-wide px-10 py-4 hover:border-[#C5A44E] hover:text-[#C5A44E] transition-colors duration-200"
          >
            Schedule a Demo
          </motion.a>
        </div>

        <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#FDFBF7]/35">
          Runs on your device · No cloud · 8 GB RAM, no GPU required
        </p>
      </div>
    </section>
  );
}
