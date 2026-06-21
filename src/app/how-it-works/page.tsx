"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const Header = dynamic(() => import("@/components/sections/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: false });

/* ------------------------------------------------------------------ */
/*  OPERATION STEPS DATA                                               */
/* ------------------------------------------------------------------ */

const steps = [
  {
    num: "01",
    title: "Cosmos goes to Attorney/Inventor\u2019s device",
    desc: "Cosmos Program Module + SLM download from our private cloud server to the end user device. Our Patent Language Model is a 4-billion parameter (3.6B non-embedding) model, fine-tuned exclusively on millions of granted patents and prosecution records. At just ~2.5 GB in its optimized 4-bit quantized form, it downloads in minutes and runs comfortably on any modern laptop with 8 GB RAM \u2014 no GPU required.",
    highlight: "100A",
  },
  {
    num: "02",
    title: "Sandbox Creation (Protection of IP)",
    desc: "The installer script automatically creates a sealed Sandbox Environment inside a specified Installer Directory on the device \u2014 an isolated, encrypted workspace whose directory structure cannot be accessed, modified, or disturbed by any external process. The sandbox protects both our proprietary technology and ensures complete patent data security.",
    highlight: "112A",
  },
  {
    num: "03",
    title: "On-Device Drafting",
    desc: "Inventor documents are loaded as input into the sandbox. Our proprietary SLM \u2014 the brain of the operation \u2014 extracts, parses, processes, and converts the invention disclosure into a prosecution-ready patent document entirely on-device. No API calls are ever made to any external AI model\u2019s server. 100% Private, Secure, and Confidential Patent Drafting with zero risk of data being used as training data.",
    highlight: "100C",
  },
  {
    num: "04",
    title: "Output & Clean-Up",
    desc: "Once the Control Component confirms the patent-ready output has been successfully delivered to the External Directory, it permanently deletes the entire sandbox environment \u2014 leaving zero trace. At no point does any invention data leave the end user device.",
    highlight: "116",
  },
];

/* ------------------------------------------------------------------ */
/*  ARCHITECTURE DIAGRAM — exact replica of PPTX                       */
/* ------------------------------------------------------------------ */

function ArchitectureDiagram({ activeStep }: { activeStep: number }) {
  const hl = steps[activeStep]?.highlight || "";
  const TNR = "'Times New Roman', Times, Georgia, serif";

  return (
    <svg viewBox="0 0 960 720" className="w-full h-auto" style={{ maxHeight: "75vh" }}>
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <marker id="arrBlk" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <path d="M0,0 L10,3.5 L0,7" fill="#000" />
        </marker>
        <marker id="arrBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <path d="M0,0 L10,3.5 L0,7" fill="#4472C4" />
        </marker>
        <marker id="arrRed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <path d="M0,0 L10,3.5 L0,7" fill="#FF0000" />
        </marker>
      </defs>

      {/* Background */}
      <rect width="960" height="720" fill="white" />

      {/* ========== SERVER RACK IMAGE (Left) ========== */}
      <image href="/server-rack.png" x="0" y="55" width="200" height="320" preserveAspectRatio="xMidYMid meet" />
      {/* 102 label */}
      <text x="100" y="50" textAnchor="middle" fontFamily={TNR} fontSize="14" fill="#000">102</text>
      <line x1="100" y1="52" x2="60" y2="72" stroke="#000" strokeWidth="1" markerEnd="url(#arrBlk)" />

      {/* ========== EQUALS SIGN (rack = box) ========== */}
      <line x1="175" y1="195" x2="220" y2="195" stroke="#4472C4" strokeWidth="2.5" />
      <line x1="175" y1="205" x2="220" y2="205" stroke="#4472C4" strokeWidth="2.5" />

      {/* ========== SERVER 102 BOX ========== */}
      <rect x="230" y="120" width="210" height="230" rx="0" fill="white" stroke="#000" strokeWidth="2" />
      <text x="335" y="145" textAnchor="middle" fontFamily={TNR} fontSize="14" fill="#000">
        Server <tspan textDecoration="underline">102</tspan>
      </text>

      {/* Access Token Verifier 104 */}
      <rect x="250" y="160" width="170" height="45" rx="0" fill="white" stroke="#000" strokeWidth="1.5" />
      <text x="335" y="186" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#000">
        Access Token Verifier <tspan textDecoration="underline">104</tspan>
      </text>

      {/* Cosmos Program Module 106 */}
      <rect
        x="250" y="215" width="170" height="45" rx="0"
        fill={hl === "100A" ? "#00FFFF" : "#00FFFF"} stroke="#000" strokeWidth="1.5"
      />
      <text x="335" y="233" textAnchor="middle" fontFamily={TNR} fontSize="11" fontWeight="bold" fill="#000">
        <tspan style={{ backgroundColor: "#00FFFF" }}>Cosmos</tspan>
      </text>
      <text x="335" y="247" textAnchor="middle" fontFamily={TNR} fontSize="11" fill="#000">
        Program Module
      </text>
      <text x="335" y="258" textAnchor="middle" fontFamily={TNR} fontSize="11" fontWeight="bold" fill="#000">
        <tspan textDecoration="underline">106</tspan>
      </text>

      {/* Small Language Model (SLM) 108 */}
      <rect
        x="255" y="275" width="165" height="45" rx="0"
        fill="white" stroke="#000" strokeWidth="1.5"
      />
      <text x="338" y="293" textAnchor="middle" fontFamily={TNR} fontSize="11" fill="#000">
        Small Language Model
      </text>
      <text x="338" y="308" textAnchor="middle" fontFamily={TNR} fontSize="11" fill="#000">
        (SLM) <tspan textDecoration="underline">108</tspan>
      </text>

      {/* ========== STRAIGHT ARROW: Server → Internet ========== */}
      <line x1="440" y1="240" x2="490" y2="240" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrBlk)" />

      {/* ========== INTERNET CLOUD ========== */}
      <path
        d="M510,260 Q490,260 490,245 Q490,228 505,226 Q508,212 525,212 Q542,212 546,222 Q560,218 564,232 Q576,232 576,245 Q576,260 560,260 Z"
        fill="white" stroke="#000" strokeWidth="1.5"
      />
      <text x="533" y="245" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#000">Internet</text>

      {/* ========== STRAIGHT ARROW: Internet → Device ========== */}
      <line x1="576" y1="238" x2="628" y2="238" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrBlk)" />

      {/* ========== 100A — BLUE CURVED ARC (top: server arcing over to device top-right) ========== */}
      {/* Starts from top of Server 102 box, arcs high over, ends at top-right corner of End User Device */}
      <path
        d="M380,120 C380,10 750,10 810,60"
        fill="none" stroke="#4472C4" strokeWidth="2.5"
      />
      {/* Arrowhead pointing down-right into device */}
      <polygon points="805,53 815,63 807,67" fill="#4472C4" />
      {/* 100A label — red text centered above the arc */}
      <text x="560" y="25" textAnchor="middle" fontFamily={TNR} fontSize="15" fill="#FF0000" fontWeight="bold">100A</text>

      {/* ========== 100B — RED CURVED ARC (bottom: server → through internet → device left) ========== */}
      {/* Starts from bottom of Server box, curves down below Internet cloud, into left side of device */}
      <path
        d="M380,350 C420,460 580,460 630,350"
        fill="none" stroke="#FF0000" strokeWidth="2.5"
      />
      {/* Arrowhead pointing up-right into device */}
      <polygon points="625,344 635,350 627,358" fill="#FF0000" />
      {/* 100B label — red text centered below the arc */}
      <text x="490" y="440" textAnchor="middle" fontFamily={TNR} fontSize="15" fill="#FF0000" fontWeight="bold">100B</text>

      {/* ========== END USER DEVICE 110 (Right) ========== */}
      <rect
        x="630" y="60" width="290" height="430" rx="0"
        fill="white" stroke="#000" strokeWidth="2"
      />
      {/* End User Device label (top, outside box) */}
      <text x="775" y="80" textAnchor="middle" fontFamily={TNR} fontSize="14" fill="#000">
        End User Device <tspan textDecoration="underline">110</tspan>
      </text>

      {/* Installer Directory 112 */}
      <rect
        x="645" y="90" width="260" height="265" rx="0"
        fill="white" stroke="#000" strokeWidth="1.5"
      />
      <text x="775" y="110" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#000">
        Installer Directory <tspan textDecoration="underline">112</tspan>
      </text>

      {/* Sandbox Environment 112A */}
      <rect
        x="655" y="118" width="240" height="220" rx="0"
        fill={hl === "112A" ? "#fefce8" : "white"}
        stroke="#000" strokeWidth={hl === "112A" ? 2.5 : 1.5}
      />
      <text x="775" y="138" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#000">
        Sandbox Environment <tspan textDecoration="underline">112A</tspan>
      </text>

      {/* Drafting Operation 100C */}
      <rect
        x="670" y="148" width="210" height="50" rx="0"
        fill={hl === "100C" ? "#FFFF00" : "#FFFF00"}
        stroke="#000" strokeWidth="1.5"
      />
      <text x="775" y="170" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#FF0000" fontWeight="bold">
        Drafting Operation
      </text>
      <text x="775" y="186" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#FF0000" fontWeight="bold" textDecoration="underline">
        100C
      </text>

      {/* Small Language Model (SLM) 108 — inside device */}
      <rect
        x="670" y="208" width="210" height="50" rx="0"
        fill={hl === "100C" ? "#f0f9ff" : "white"}
        stroke="#000" strokeWidth="1.5"
      />
      <text x="775" y="230" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#000">
        Small Language Model
      </text>
      <text x="775" y="246" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#000">
        (SLM) <tspan textDecoration="underline">108</tspan>
      </text>

      {/* Separator line between SLM and Control Component */}
      <line x1="775" y1="260" x2="775" y2="270" stroke="#000" strokeWidth="1" />

      {/* Control Component 114 */}
      <rect
        x="670" y="270" width="210" height="40" rx="0"
        fill={hl === "116" ? "#fff1f1" : "white"}
        stroke="#000" strokeWidth="1.5"
      />
      <text x="775" y="295" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#000">
        Control Component <tspan textDecoration="underline">114</tspan>
      </text>

      {/* External Directory 116 */}
      <rect
        x="645" y="370" width="260" height="105" rx="0"
        fill={hl === "116" ? "#fefce8" : "white"}
        stroke="#000" strokeWidth="1.5"
      />
      <text x="775" y="390" textAnchor="middle" fontFamily={TNR} fontSize="12" fill="#000">
        External Directory <tspan textDecoration="underline">116</tspan>
      </text>

      {/* Output 116A */}
      <rect x="665" y="400" width="120" height="30" rx="0" fill="white" stroke="#000" strokeWidth="1" />
      <text x="725" y="420" textAnchor="middle" fontFamily={TNR} fontSize="11" fill="#000">
        Output <tspan textDecoration="underline">116A</tspan>
      </text>

      {/* Input 116B */}
      <rect x="665" y="438" width="120" height="30" rx="0" fill="white" stroke="#000" strokeWidth="1" />
      <text x="725" y="458" textAnchor="middle" fontFamily={TNR} fontSize="11" fill="#000">
        Input <tspan textDecoration="underline">116B</tspan>
      </text>

      {/* ========== 100C — BLUE ELBOW: Drafting Operation right → right edge of Device box → down ========== */}
      {/* Horizontal from right of Drafting Operation (x=880) to right edge of Device outer box (x=920) */}
      <line x1="880" y1="173" x2="930" y2="173" stroke="#4472C4" strokeWidth="2" />
      {/* Vertical blue line going down the right edge of Device box, from Drafting Operation down to Output 116A */}
      <line x1="930" y1="173" x2="930" y2="415" stroke="#4472C4" strokeWidth="2" />
      {/* Blue arrow pointing LEFT into Output 116A */}
      <line x1="930" y1="415" x2="790" y2="415" stroke="#4472C4" strokeWidth="2" markerEnd="url(#arrBlue)" />

      {/* ========== 100D — RED VERTICAL ARROW: continues down from blue elbow ========== */}
      {/* Red line starts where blue elbow ends (at Output level) and goes straight down */}
      <line
        x1="930" y1="415" x2="930" y2="620"
        stroke="#FF0000" strokeWidth="2.5" markerEnd="url(#arrRed)"
      />
      {/* 100D label — to the right of the red arrow */}
      <text x="942" y="580" fontFamily={TNR} fontSize="15" fill="#FF0000" fontWeight="bold">100D</text>

      {/* ========== EQUALS SIGN (device = monitor) ========== */}
      <line x1="710" y1="492" x2="710" y2="502" stroke="#4472C4" strokeWidth="2" />
      <line x1="700" y1="498" x2="720" y2="498" stroke="#4472C4" strokeWidth="2" />
      <line x1="700" y1="505" x2="720" y2="505" stroke="#4472C4" strokeWidth="2" />

      {/* ========== MONITOR IMAGE (Bottom right) ========== */}
      <image href="/monitor-device.png" x="590" y="510" width="240" height="200" preserveAspectRatio="xMidYMid meet" />
      {/* 110 label with arrow */}
      <text x="610" y="565" fontFamily={TNR} fontSize="14" fill="#000">110</text>
      <line x1="620" y1="567" x2="660" y2="590" stroke="#000" strokeWidth="1" markerEnd="url(#arrBlk)" />

      {/* ========== YELLOW CALLOUT BOX (Bottom left) ========== */}
      <rect x="10" y="420" width="430" height="70" rx="0" fill="#FFFDE7" stroke="#FFFF00" strokeWidth="2" />
      {/* Red text */}
      <text x="225" y="442" textAnchor="middle" fontFamily={TNR} fontSize="11.5" fill="#FF0000" fontWeight="bold" fontStyle="italic">
        This can be a private cloud server, such as Google Cloud Server
      </text>
      <text x="225" y="460" textAnchor="middle" fontFamily={TNR} fontSize="11.5" fill="#FF0000" fontWeight="bold" fontStyle="italic">
        or Physical Inference Server within premises of in-house Attorney
      </text>
      <text x="225" y="478" textAnchor="middle" fontFamily={TNR} fontSize="11.5" fill="#FF0000" fontWeight="bold" fontStyle="italic">
        Enterprise.
      </text>
      {/* Connector line from callout to server */}
      <line x1="120" y1="390" x2="120" y2="420" stroke="#FF0000" strokeWidth="1" />

      {/* ========== ANIMATED DATA PACKETS ========== */}
      {/* Step 1: 100A — packets flowing along the blue arc (server over top to device) */}
      {activeStep === 0 && (
        <>
          <circle r="5" fill="#4472C4" filter="url(#glow)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="0s"
              path="M380,120 C380,10 750,10 810,60" />
          </circle>
          <circle r="5" fill="#C5A44E" filter="url(#glow)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="1s"
              path="M380,120 C380,10 750,10 810,60" />
          </circle>
          <circle r="4" fill="#4472C4" filter="url(#glow)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="2s"
              path="M380,120 C380,10 750,10 810,60" />
          </circle>
        </>
      )}
      {/* Step 2: 112A — particles circling inside sandbox */}
      {activeStep === 1 && (
        <>
          <circle r="4" fill="#C5A44E" filter="url(#glow)">
            <animateMotion dur="2s" repeatCount="indefinite" begin="0s"
              path="M665,150 L885,150 L885,330 L665,330 Z" />
          </circle>
          <circle r="4" fill="#4472C4" filter="url(#glow)">
            <animateMotion dur="2s" repeatCount="indefinite" begin="1s"
              path="M665,150 L885,150 L885,330 L665,330 Z" />
          </circle>
        </>
      )}
      {/* Step 3: 100C — packet flows along blue elbow: Drafting → right edge → down → into Output */}
      {activeStep === 2 && (
        <>
          <circle r="5" fill="#4472C4" filter="url(#glow)">
            <animateMotion dur="2.5s" repeatCount="indefinite" begin="0s"
              path="M880,173 L930,173 L930,415 L790,415" />
          </circle>
          <circle r="5" fill="#C5A44E" filter="url(#glow)">
            <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s"
              path="M880,173 L930,173 L930,415 L790,415" />
          </circle>
        </>
      )}
      {/* Step 4: 100D — packet flows down red arrow + sandbox deletion flash */}
      {activeStep === 3 && (
        <>
          <circle r="5" fill="#FF0000" filter="url(#glow)">
            <animateMotion dur="2s" repeatCount="indefinite" begin="0s"
              path="M930,415 L930,620" />
          </circle>
          <circle r="5" fill="#C5A44E" filter="url(#glow)">
            <animateMotion dur="2s" repeatCount="indefinite" begin="0.7s"
              path="M930,415 L930,620" />
          </circle>
          {/* Red flash on sandbox = deletion */}
          <rect x="655" y="118" width="240" height="220" rx="0" fill="#FF0000" opacity="0">
            <animate attributeName="opacity" values="0;0.12;0.06;0" dur="2.5s" repeatCount="indefinite" />
          </rect>
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  STEP CARD                                                          */
/* ------------------------------------------------------------------ */

function StepCard({ step, index, isActive, onClick }: {
  step: typeof steps[0]; index: number; isActive: boolean; onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
        isActive
          ? "border-[#C5A44E] bg-white shadow-lg shadow-[#C5A44E]/5"
          : "border-[#E8E4DD] bg-white/60 hover:border-[#C5A44E]/30 hover:bg-white"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-sm font-bold transition-colors duration-300 ${
          isActive ? "bg-[#C5A44E] text-white" : "bg-[#F3EFE8] text-[#8B7355]"
        }`}>
          {step.num}
        </div>
        <div className="flex-1">
          <h3 className={`font-serif text-base font-bold transition-colors duration-300 ${
            isActive ? "text-[#1A1A1A]" : "text-[#5A5A5A]"
          }`}>
            {step.title}
          </h3>
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-sm leading-relaxed text-[#5A5A5A] font-serif"
              >
                {step.desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPARISON TABLE                                                    */
/* ------------------------------------------------------------------ */

function ComparisonRow({ label, cosmos, others }: { label: string; cosmos: string; others: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-b border-[#E8E4DD] py-4 text-sm font-serif">
      <span className="font-medium text-[#1A1A1A]">{label}</span>
      <span className="text-center font-semibold text-[#C5A44E]">{cosmos}</span>
      <span className="text-center text-[#8B7355]">{others}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 15000);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Header />

      {/* ============ HERO ============ */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <motion.p
            className="font-mono text-xs tracking-[0.35em] uppercase text-[#C5A44E] mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How Cosmos Works
          </motion.p>
          <motion.h1
            className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] text-[#1A1A1A] max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your invention never leaves your device.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-[#5A5A5A] max-w-[720px] font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cosmos operates on a fundamentally different principle from every AI patent tool
            in the market &mdash; instead of asking attorneys to upload confidential invention
            disclosures to external servers, our technology travels to the user&apos;s device.
          </motion.p>
        </div>
      </section>

      {/* ============ MAIN DIAGRAM + STEPS ============ */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col xl:flex-row gap-10">
            {/* Diagram */}
            <div className="xl:w-[60%] xl:sticky xl:top-24 xl:self-start">
              <div className="rounded-2xl border border-[#E8E4DD] bg-white p-4 shadow-sm overflow-hidden">
                <ArchitectureDiagram activeStep={activeStep} />
              </div>
              {/* Progress bar */}
              <div className="mt-4 flex gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleStepClick(i)}
                    className="flex-1 h-1.5 rounded-full overflow-hidden bg-[#E8E4DD] transition-all"
                  >
                    <motion.div
                      className="h-full rounded-full bg-[#C5A44E]"
                      initial={{ width: "0%" }}
                      animate={{ width: activeStep === i ? "100%" : activeStep > i ? "100%" : "0%" }}
                      transition={{ duration: activeStep === i && autoPlay ? 5 : 0.3 }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="xl:w-[40%] flex flex-col gap-4">
              {steps.map((step, i) => (
                <StepCard
                  key={step.num}
                  step={step}
                  index={i}
                  isActive={activeStep === i}
                  onClick={() => handleStepClick(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ KEY DIFFERENTIATORS ============ */}
      <section className="px-6 lg:px-12 py-20 bg-white border-t border-[#E8E4DD]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-12 text-center">
            Why This Architecture Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <rect x="8" y="14" width="24" height="18" rx="3" fill="none" stroke="#C5A44E" strokeWidth="2" />
                    <path d="M14,14 V10 Q14,4 20,4 Q26,4 26,10 V14" fill="none" stroke="#C5A44E" strokeWidth="2" />
                    <circle cx="20" cy="24" r="2.5" fill="#C5A44E" />
                  </svg>
                ),
                title: "Zero Data Exfiltration",
                desc: "No invention data ever leaves your device. No API calls to external servers. No cloud processing. The entire drafting pipeline runs locally in an encrypted sandbox.",
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <circle cx="20" cy="20" r="14" fill="none" stroke="#C5A44E" strokeWidth="2" />
                    <path d="M20,10 L20,20 L28,24" fill="none" stroke="#C5A44E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: "Self-Destructing Workspace",
                desc: "Once the patent document is generated, the Control Component permanently deletes the entire sandbox environment. Zero trace. No residual data. No forensic recovery possible.",
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <rect x="6" y="8" width="28" height="20" rx="3" fill="none" stroke="#C5A44E" strokeWidth="2" />
                    <line x1="6" y1="14" x2="34" y2="14" stroke="#C5A44E" strokeWidth="1" />
                    <rect x="12" y="28" width="16" height="6" rx="1" fill="none" stroke="#C5A44E" strokeWidth="1.5" />
                  </svg>
                ),
                title: "Runs on Any Laptop",
                desc: "Our 4-bit quantized SLM is just ~2.5 GB. It runs on any modern laptop with 8 GB RAM \u2014 no GPU, no special hardware, no Docker containers. Download, draft, done.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-xl border border-[#E8E4DD] bg-[#FDFBF7] p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 font-serif">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5A5A5A] font-serif">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARISON ============ */}
      <section className="px-6 lg:px-12 py-20 border-t border-[#E8E4DD]">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-4 text-center">
            Cosmos vs. Every Other AI Patent Tool
          </h2>
          <p className="text-center text-[#5A5A5A] mb-10 font-serif">
            Every competitor processes your inventions on their servers. We don&apos;t.
          </p>
          <div className="rounded-xl border border-[#E8E4DD] bg-white p-8">
            <div className="grid grid-cols-3 gap-4 border-b-2 border-[#1A1A1A] pb-3 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8B7355]">Metric</span>
              <span className="text-center text-xs font-mono uppercase tracking-wider text-[#C5A44E]">Cosmos</span>
              <span className="text-center text-xs font-mono uppercase tracking-wider text-[#8B7355]">Others</span>
            </div>
            <ComparisonRow label="Data leaves device?" cosmos="Never" others="Always" />
            <ComparisonRow label="Processing location" cosmos="On-device" others="Cloud servers" />
            <ComparisonRow label="API calls to external AI" cosmos="Zero" others="Every request" />
            <ComparisonRow label="Training data risk" cosmos="None" others="Unclear/TOS" />
            <ComparisonRow label="Sandbox isolation" cosmos="Encrypted sandbox" others="None" />
            <ComparisonRow label="Post-session data" cosmos="Auto-deleted" others="Retained" />
            <ComparisonRow label="GPU required" cosmos="No" others="N/A (cloud)" />
            <ComparisonRow label="Works offline" cosmos="Yes (after download)" others="No" />
          </div>
        </div>
      </section>

      {/* ============ TECHNICAL SPECS ============ */}
      <section className="px-6 lg:px-12 py-20 bg-[#1A1A1A]">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="font-serif text-3xl font-bold text-[#FDFBF7] mb-10 text-center">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Model Parameters", value: "4 billion (3.6B non-embedding)" },
              { label: "Model Size (4-bit quantized)", value: "~2.5 GB" },
              { label: "Training Data", value: "Millions of granted patents & prosecution records" },
              { label: "Minimum RAM", value: "8 GB" },
              { label: "GPU Required", value: "No" },
              { label: "Download Time", value: "Minutes on standard broadband" },
              { label: "Supported Platforms", value: "Windows, macOS, Linux" },
              { label: "Internet After Download", value: "Not required" },
              { label: "Sandbox Encryption", value: "AES-256, isolated process" },
              { label: "Data Retention", value: "Zero \u2014 auto-deleted post-session" },
            ].map((spec, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between border-b border-white/10 py-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-sm text-white/60 font-serif">{spec.label}</span>
                <span className="text-sm font-semibold text-[#C5A44E] font-mono">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="px-6 lg:px-12 py-24 text-center border-t border-[#E8E4DD]">
        <div className="mx-auto max-w-[600px]">
          <p className="font-serif text-2xl font-bold text-[#1A1A1A] mb-4 italic leading-relaxed">
            &ldquo;The technology arrives, drafts, and disappears.&rdquo;
          </p>
          <p className="text-[#5A5A5A] mb-8 font-serif">
            We never collect, store, access, or transmit any information.
          </p>
          <a
            href="mailto:contact@cosmos.com?subject=Demo%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo.%0A%0AThank%20you."
            className="inline-block bg-[#1A1A1A] text-white px-8 py-3.5 rounded-md text-sm font-medium font-serif transition-colors hover:bg-[#C5A44E]"
          >
            Request a Demo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
