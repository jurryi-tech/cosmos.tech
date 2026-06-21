"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function GoldParticles() {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 6 + 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#C5A44E] animate-float-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: 0.15 + Math.random() * 0.2,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
            opacity: 0.15;
          }
          75% {
            transform: translateY(-40px) translateX(5px);
            opacity: 0.3;
          }
        }
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>
    </div>
  );
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
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] bg-[#1A1A1A] flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Gold particles */}
      <GoldParticles />

      {/* Patent watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <p className="font-mono text-[12vw] font-bold text-white opacity-[0.02] whitespace-nowrap">
          PATENT
        </p>
      </div>

      {/* Content */}
      <div className="cta-content relative z-10 text-center max-w-3xl mx-auto">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#C5A44E] mb-6">
          THE FUTURE OF PATENT PROSECUTION
        </p>

        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.1] mb-6">
          Ready to Transform Your Patent Practice?
        </h2>

        <p className="text-[18px] text-[#999] mb-10 max-w-xl mx-auto leading-relaxed">
          Join the firms that are already drafting faster, responding smarter,
          and winning more patents with Cosmos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <motion.a
            href="mailto:contact@cosmos.com?subject=Demo%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo.%0A%0AThank%20you."
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-[#C5A44E] text-black font-medium text-base px-10 py-4 rounded-lg hover:bg-[#D4B55E] transition-colors duration-200"
          >
            Request Access
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.98 }}
            className="inline-block border border-white text-white font-medium text-base px-10 py-4 rounded-lg transition-colors duration-200"
          >
            Schedule a Demo
          </motion.a>
        </div>

        <p className="text-sm text-[#666]">
          No credit card required. 14-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
