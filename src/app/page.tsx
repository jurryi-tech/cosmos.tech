"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const PatentBackground = dynamic(() => import("@/components/ui/PatentBackground"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });
const Preloader = dynamic(() => import("@/components/sections/Preloader"), { ssr: false });
const Header = dynamic(() => import("@/components/sections/Header"), { ssr: false });
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
const JurisdictionTriptych = dynamic(() => import("@/components/sections/JurisdictionTriptych"), { ssr: false });
const EligibilityTools = dynamic(() => import("@/components/sections/EligibilityTools"), { ssr: false });
const ClaimsEngine = dynamic(() => import("@/components/sections/ClaimsEngine"), { ssr: false });
const OfficeActionTheater = dynamic(() => import("@/components/sections/OfficeActionTheater"), { ssr: false });
const SecurityVault = dynamic(() => import("@/components/sections/SecurityVault"), { ssr: false });
const ProductCards = dynamic(() => import("@/components/sections/ProductCards"), { ssr: false });
const PatentDrawings = dynamic(() => import("@/components/sections/PatentDrawings"), { ssr: false });

const CTASection = dynamic(() => import("@/components/sections/CTASection"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: false });

function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: any;

    async function init() {
      try {
        const Lenis = (await import("lenis")).default;
        const gsapMod = (await import("gsap")).default;
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsapMod.registerPlugin(ScrollTrigger);

        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        lenisInstance.on("scroll", ScrollTrigger.update);

        gsapMod.ticker.add((time: number) => {
          lenisInstance.raf(time * 1000);
        });
        gsapMod.ticker.lagSmoothing(0);
      } catch (e) {
        console.warn("Lenis init failed:", e);
      }
    }

    init();

    return () => {
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <LenisProvider>
      <CustomCursor />
      <PatentBackground />
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <div style={{ opacity: preloaderDone ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <Header />
        <Hero />
        <JurisdictionTriptych />
        <EligibilityTools />
        <ClaimsEngine />
        <OfficeActionTheater />
        <SecurityVault />
        <ProductCards />
        <PatentDrawings />
        <CTASection />
        <Footer />
      </div>
    </LenisProvider>
  );
}
