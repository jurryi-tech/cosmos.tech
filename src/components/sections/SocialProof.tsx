"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote:
      "Cosmos has fundamentally changed how our team approaches patent prosecution. What used to take our associates 15-20 hours per application now takes 2 hours of review time. The quality is indistinguishable from senior associate work.",
    attribution:
      "\u2014 David Harrington, Partner, IP Practice Group | AmLaw 50 Firm",
    stars: 5,
  },
  {
    quote:
      "The Indian patent drafting capability alone justified our investment. We were outsourcing all India filings \u2014 now we handle them in-house with Cosmos\u2019s one-click drafting. Section 3(k) compliance checking has been a game-changer.",
    attribution:
      "\u2014 Anand Subramanian, VP of Intellectual Property | Global Technology Company",
    stars: 5,
  },
  {
    quote:
      "The examiner intelligence feature is unlike anything else on the market. Knowing an examiner\u2019s patterns before you draft the response gives you a strategic advantage that translates directly to higher allowance rates.",
    attribution:
      "\u2014 Jonathan Blake, Managing Partner | Blake & Associates IP",
    stars: 5,
  },
];

const logos = [
  "Fortune 500",
  "AmLaw 100",
  "Global IP",
  "Tech Leader",
  "Pharma Giant",
  "Innovation Co",
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#C5A44E]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".sp-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".logo-badge", {
        scrollTrigger: {
          trigger: ".logo-bar",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FDFBF7] px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="sp-title text-center mb-16">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#C5A44E] mb-3">
            TRUSTED BY PATENT LEADERS
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-[#1A1A1A]">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-white rounded-xl p-8 shadow-sm border-l-[3px] border-[#C5A44E] flex flex-col"
            >
              <Stars count={t.stars} />
              <p className="font-serif italic text-[#333] text-[15px] leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-mono text-xs text-[#888] leading-relaxed">
                {t.attribution}
              </p>
            </div>
          ))}
        </div>

        {/* Logo Bar */}
        <div className="logo-bar text-center">
          <p className="text-sm text-gray-400 mb-8 font-mono tracking-wide">
            Trusted by teams at:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {logos.map((name, i) => (
              <div
                key={i}
                className="logo-badge bg-gray-100 text-gray-400 text-xs font-mono tracking-wide px-6 py-3 rounded-lg"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
