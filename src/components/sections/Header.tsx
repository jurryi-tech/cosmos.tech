"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = ["Platform", "Products", "Security", "Jurisdictions", "Pricing"];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "100vh top",
      onUpdate: (self) => {
        setScrolled(self.progress > 0.05);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        height: 72,
        background: scrolled ? "rgba(253,251,247,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-full items-center justify-between px-8 max-w-[1440px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1A1A1A] font-serif text-base font-bold text-[#FDFBF7]">
            C
          </span>
          <span className="font-mono text-sm tracking-[0.3em] text-[#1A1A1A] uppercase">
            COSMOS
          </span>
        </a>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="/how-it-works" className="text-sm font-medium text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors">
            How It Works
          </a>
          <a href="/company/security" className="text-sm font-medium text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors">
            Security
          </a>
          <a href="/company/about-us" className="text-sm font-medium text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors">
            About
          </a>
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="mailto:contact@cosmos.com?subject=Demo%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo.%0A%0AThank%20you."
            className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-[#C5A44E]"
          >
            Request Access
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-[1.5px] w-6 bg-[#1A1A1A] origin-center"
            animate={mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-[#1A1A1A]"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-[#1A1A1A] origin-center"
            animate={mobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden overflow-hidden bg-[rgba(253,251,247,0.98)] backdrop-blur-xl border-b border-black/5"
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <nav className="flex flex-col gap-4 px-8 py-6">
          <a href="/how-it-works" className="text-sm font-medium text-[#1A1A1A]">How It Works</a>
          <a href="/company/security" className="text-sm font-medium text-[#1A1A1A]">Security</a>
          <a href="/company/about-us" className="text-sm font-medium text-[#1A1A1A]">About</a>
          <a
            href="mailto:contact@cosmos.com?subject=Demo%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo.%0A%0AThank%20you."
            className="inline-block text-center bg-[#1A1A1A] text-white px-5 py-2.5 rounded-md text-sm font-medium"
          >
            Request Access
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
