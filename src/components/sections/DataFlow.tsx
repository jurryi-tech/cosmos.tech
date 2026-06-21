"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Layer definitions ── */
const layer1 = [
  "NLP Tokenizer",
  "Entity Extractor",
  "Technical Domain Classifier",
  "Language Normalizer",
];
const layer2 = [
  "Prior Art Search Engine",
  "CPC Classifier",
  "Examiner Pattern Analyzer",
  "Rejection Risk Predictor",
  "Novelty Mapper",
];
const layer3 = [
  "Claim Architect",
  "Specification Writer",
  "Drawing Generator",
  "Prosecution Strategy Engine",
];
const layer4 = ["Patent Application Assembler"];

const layers = [layer1, layer2, layer3, layer4];

const metrics = [
  "Extracting technical features from the disclosure",
  "Searching prior-art databases",
  "Drafting claims and figures",
  "Assembling the application package",
];

const outputDocs = [
  { title: "Patent Specification", thickness: "h-48", icon: "spec" },
  { title: "Patent Drawing Sheet", thickness: "h-44", icon: "drawing" },
  { title: "Prosecution Strategy Brief", thickness: "h-40", icon: "strategy" },
];

export default function DataFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  /* refs for animated elements */
  const docCardRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineGroupRef = useRef<SVGSVGElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const outputCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const belowDashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      /* master timeline pinned to scroll */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: pin,
        },
      });

      /* ── Phase 1: Disclosure enters (0-15%) ── */
      // Document slides in from left
      tl.fromTo(
        docCardRef.current,
        { x: "-100vw", opacity: 0 },
        { x: "0%", opacity: 1, duration: 5, ease: "power2.out" },
        0
      );
      // Document moves toward portal
      tl.to(
        docCardRef.current,
        { x: "40vw", duration: 5, ease: "power1.in" },
        5
      );
      // Portal resolves into view
      tl.fromTo(
        portalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 4, ease: "power2.out" },
        3
      );
      // Document dissolves, particles appear
      tl.to(docCardRef.current, { opacity: 0, scale: 0.8, duration: 2 }, 10);
      tl.fromTo(
        particlesRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        10
      );
      tl.to(particlesRef.current, { opacity: 0, duration: 3 }, 13);
      tl.to(portalRef.current, { opacity: 0, duration: 2 }, 14);

      /* ── Phase 2: Processing Grid (15-60%) ── */
      tl.fromTo(
        gridRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 3 },
        15
      );

      // Light up nodes sequentially
      let nodeIndex = 0;
      layers.forEach((layer, li) => {
        layer.forEach((_, ni) => {
          const ref = nodeRefs.current[nodeIndex];
          if (ref) {
            tl.fromTo(
              ref,
              { opacity: 0, scale: 0.85, y: 6 },
              { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power2.out" },
              17 + nodeIndex * 1.2
            );
          }
          nodeIndex++;
        });
        // Show metric for this layer
        const metricRef = metricRefs.current[li];
        if (metricRef) {
          tl.fromTo(
            metricRef,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 2 },
            18 + li * layer.length * 1.2
          );
          tl.to(metricRef, { opacity: 0, duration: 1 }, 22 + li * layer.length * 1.2);
        }
      });

      // SVG lines fade in
      tl.fromTo(
        lineGroupRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 4 },
        19
      );

      // Fade out grid
      tl.to(gridRef.current, { opacity: 0, duration: 3 }, 55);

      /* ── Phase 3: Output documents (60-85%) ── */
      tl.fromTo(
        outputRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        58
      );
      outputCardRefs.current.forEach((ref, i) => {
        if (ref) {
          tl.fromTo(
            ref,
            { y: 80, opacity: 0, rotateX: 15 },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 4,
              ease: "power2.out",
            },
            60 + i * 3
          );
        }
      });

      // Fade out output docs
      tl.to(outputRef.current, { opacity: 0, duration: 3 }, 72);

      /* ── Phase 4: Dashboard (85-100%) ── */
      tl.fromTo(
        dashboardRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 5, ease: "power2.out" },
        76
      );
      tl.fromTo(
        belowDashRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 4 },
        82
      );
    }, section);

    return () => ctx.revert();
  }, []);

  /* Helper: generate node positions for the grid */
  let globalNodeIndex = 0;
  const layerYPositions = [60, 160, 260, 360];

  function getNodeX(layerLength: number, nodeInLayer: number): number {
    const spacing = 100 / (layerLength + 1);
    return spacing * (nodeInLayer + 1);
  }

  /* Build connection lines */
  const connections: { x1: number; y1: number; x2: number; y2: number }[] = [];
  let srcIdx = 0;
  for (let li = 0; li < layers.length - 1; li++) {
    const srcLayer = layers[li];
    const dstLayer = layers[li + 1];
    for (let si = 0; si < srcLayer.length; si++) {
      for (let di = 0; di < dstLayer.length; di++) {
        connections.push({
          x1: getNodeX(srcLayer.length, si),
          y1: layerYPositions[li] + 12,
          x2: getNodeX(dstLayer.length, di),
          y2: layerYPositions[li + 1] - 12,
        });
      }
    }
  }

  /* Particle positions */
  const particles = Array.from({ length: 18 }, (_, i) => ({
    x: 50 + (Math.random() - 0.5) * 30,
    y: 50 + (Math.random() - 0.5) * 30,
    delay: Math.random() * 0.5,
    size: 1.5 + Math.random() * 2,
  }));

  globalNodeIndex = 0;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[250vh]"
      style={{
        background: "linear-gradient(to bottom, #FDFBF7, #F3EFE8)",
      }}
    >
      {/* Section heading */}
      <div className="absolute top-0 left-0 w-full z-10 pt-14 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center px-6"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] mb-4 font-mono">
            Section III &mdash; The Pipeline
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] font-semibold tracking-tight">
            From Infrastructure to Insight
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-[#C5A44E]" />
        </motion.div>
      </div>

      {/* Pinned container */}
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden">
        {/* ── Phase 1: Disclosure Card ── */}
        <div
          ref={docCardRef}
          className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[340px] bg-[#FDFBF7] border border-[#E8E4DD] rounded-sm shadow-[0_1px_24px_rgba(26,26,26,0.06)] p-7 z-20"
          style={{ opacity: 0 }}
        >
          <div className="text-[10px] tracking-[0.35em] text-[#8B7355] uppercase mb-3 font-mono">
            Invention Disclosure
          </div>
          <div className="w-full h-px bg-[#E8E4DD] mb-5" />
          <p className="font-serif text-[15px] font-medium text-[#1A1A1A] leading-snug mb-5">
            Federated Learning System with Differential Privacy for
            Cross-Institutional Medical Imaging
          </p>
          <div className="flex flex-col gap-1.5 text-xs text-[#5A5A5A] font-sans">
            <span>
              <span className="text-[#8B7355] font-mono text-[10px] tracking-wider uppercase mr-1">Inventor</span> Dr. S. Mehta
            </span>
            <span>
              <span className="text-[#8B7355] font-mono text-[10px] tracking-wider uppercase mr-1">Date</span> March 8, 2026
            </span>
          </div>
        </div>

        {/* ── Portal Ring ── */}
        <div
          ref={portalRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ opacity: 0 }}
        >
          <div className="w-48 h-48 rounded-full border border-[#C5A44E] flex items-center justify-center relative">
            <div className="w-40 h-40 rounded-full border border-[#C5A44E]/30" />
            <div className="w-2 h-2 rounded-full bg-[#C5A44E] absolute" />
            <div className="absolute -bottom-12 text-center">
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#8B7355] font-mono whitespace-nowrap">
                Secure Ingestion Layer &nbsp;&middot;&nbsp; AES-256 &nbsp;&middot;&nbsp; Zero Retention
              </p>
            </div>
          </div>
        </div>

        {/* ── Particles ── */}
        <div
          ref={particlesRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-15"
          style={{ opacity: 0 }}
        >
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#C5A44E]"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
                y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 2.4,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* ── Phase 2: Processing Grid ── */}
        <div
          ref={gridRef}
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{ opacity: 0 }}
        >
          <div className="relative w-[90%] max-w-[900px] h-[440px]">
            {/* SVG connections */}
            <svg
              ref={lineGroupRef}
              className="absolute inset-0 w-full h-full"
              style={{ opacity: 0 }}
              viewBox="0 0 100 420"
              preserveAspectRatio="none"
            >
              {connections.map((c, i) => (
                <line
                  key={i}
                  x1={`${c.x1}%`}
                  y1={c.y1}
                  x2={`${c.x2}%`}
                  y2={c.y2}
                  stroke="#1A1A1A"
                  strokeWidth="0.15"
                  strokeOpacity="0.12"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            {/* Nodes */}
            {layers.map((layer, li) =>
              layer.map((name, ni) => {
                const idx = globalNodeIndex++;
                const isGolden = li === 3;
                if (isGolden) {
                  return (
                    <div
                      key={idx}
                      ref={(el) => {
                        nodeRefs.current[idx] = el;
                      }}
                      className="absolute z-10"
                      style={{
                        left: `${getNodeX(layer.length, ni)}%`,
                        top: layerYPositions[li],
                        transform: "translate(-50%, -50%)",
                        opacity: 0,
                      }}
                    >
                      <div className="flex flex-col items-center gap-2 px-6 py-3 rounded-sm bg-[#1A1A1A] border border-[#C5A44E] shadow-[0_2px_30px_rgba(197,164,78,0.18)]">
                        <span className="text-[9px] tracking-[0.3em] uppercase text-[#C5A44E] font-mono">
                          Output
                        </span>
                        <span className="font-serif text-[13px] font-medium text-[#FDFBF7] text-center leading-tight whitespace-nowrap">
                          {name}
                        </span>
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      nodeRefs.current[idx] = el;
                    }}
                    className="absolute flex flex-col items-center gap-2"
                    style={{
                      left: `${getNodeX(layer.length, ni)}%`,
                      top: layerYPositions[li],
                      transform: "translate(-50%, -50%)",
                      opacity: 0,
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full border border-[#1A1A1A] bg-[#FDFBF7] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#C5A44E]" />
                    </div>
                    <span className="text-[10px] text-center font-sans max-w-[110px] leading-tight text-[#2C2C2C] font-medium tracking-tight">
                      {name}
                    </span>
                  </div>
                );
              })
            )}

            {/* Floating Metrics */}
            {metrics.map((text, i) => (
              <div
                key={i}
                ref={(el) => {
                  metricRefs.current[i] = el;
                }}
                className="absolute left-1/2 -translate-x-1/2 text-center px-4 py-1.5 rounded-sm bg-[#FDFBF7]/90 backdrop-blur border border-[#E8E4DD]"
                style={{
                  top: layerYPositions[i] + 38,
                  opacity: 0,
                }}
              >
                <span className="text-[10px] text-[#5A5A5A] font-mono tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Phase 3: Output Documents ── */}
        <div
          ref={outputRef}
          className="absolute inset-0 flex items-center justify-center gap-8 z-20"
          style={{ opacity: 0 }}
        >
          {outputDocs.map((doc, i) => (
            <div
              key={i}
              ref={(el) => {
                outputCardRefs.current[i] = el;
              }}
              className={`w-[240px] ${doc.thickness} bg-[#FDFBF7] border border-[#E8E4DD] rounded-sm shadow-[0_2px_30px_rgba(26,26,26,0.07)] flex flex-col items-center justify-center p-6`}
              style={{ opacity: 0 }}
            >
              {/* Unique icon per document type */}
              {doc.icon === "spec" && (
                <svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" fill="none">
                  <rect x="8" y="4" width="28" height="38" rx="3" stroke="#1A1A1A" strokeWidth="1.5" />
                  <rect x="8" y="4" width="28" height="10" rx="3" fill="#C5A44E" opacity="0.15" />
                  <text x="22" y="12" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#C5A44E" fontFamily="monospace">SPEC</text>
                  <line x1="14" y1="20" x2="30" y2="20" stroke="#1A1A1A" strokeWidth="1" opacity="0.4" />
                  <line x1="14" y1="24" x2="28" y2="24" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                  <line x1="14" y1="28" x2="30" y2="28" stroke="#1A1A1A" strokeWidth="1" opacity="0.4" />
                  <line x1="14" y1="32" x2="24" y2="32" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                  <line x1="14" y1="36" x2="28" y2="36" stroke="#1A1A1A" strokeWidth="1" opacity="0.2" />
                  <rect x="32" y="6" width="8" height="8" rx="1" stroke="#C5A44E" strokeWidth="1" fill="#C5A44E" opacity="0.1" />
                </svg>
              )}
              {doc.icon === "drawing" && (
                <svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" fill="none">
                  <rect x="6" y="6" width="36" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
                  {/* Technical drawing: circuit/flowchart */}
                  <rect x="12" y="12" width="10" height="8" rx="1" stroke="#C5A44E" strokeWidth="1.2" />
                  <rect x="28" y="12" width="10" height="8" rx="1" stroke="#C5A44E" strokeWidth="1.2" />
                  <line x1="22" y1="16" x2="28" y2="16" stroke="#1A1A1A" strokeWidth="1" />
                  <circle cx="17" cy="30" r="5" stroke="#1A1A1A" strokeWidth="1" />
                  <line x1="22" y1="30" x2="28" y2="30" stroke="#1A1A1A" strokeWidth="1" />
                  <rect x="28" y="26" width="10" height="8" rx="1" stroke="#1A1A1A" strokeWidth="1" />
                  <line x1="33" y1="20" x2="33" y2="26" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="2 1" />
                  <text x="24" y="44" textAnchor="middle" fontSize="4" fill="#888" fontFamily="monospace">FIG. 1</text>
                </svg>
              )}
              {doc.icon === "strategy" && (
                <svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" fill="none">
                  <rect x="6" y="4" width="30" height="38" rx="3" stroke="#1A1A1A" strokeWidth="1.5" />
                  {/* Chess/strategy icon */}
                  <path d="M16 12 L20 8 L24 12" stroke="#C5A44E" strokeWidth="1.5" fill="none" />
                  <rect x="16" y="12" width="8" height="4" rx="1" fill="#C5A44E" opacity="0.2" stroke="#C5A44E" strokeWidth="1" />
                  {/* Checklist items */}
                  <rect x="12" y="22" width="4" height="4" rx="0.5" stroke="#8B7355" strokeWidth="1" />
                  <path d="M13 24 L14.5 25.5 L17 22.5" stroke="#8B7355" strokeWidth="0.8" />
                  <line x1="19" y1="24" x2="30" y2="24" stroke="#1A1A1A" strokeWidth="1" opacity="0.4" />
                  <rect x="12" y="29" width="4" height="4" rx="0.5" stroke="#8B7355" strokeWidth="1" />
                  <path d="M13 31 L14.5 32.5 L17 29.5" stroke="#8B7355" strokeWidth="0.8" />
                  <line x1="19" y1="31" x2="28" y2="31" stroke="#1A1A1A" strokeWidth="1" opacity="0.4" />
                  <rect x="12" y="36" width="4" height="4" rx="0.5" stroke="#C5A44E" strokeWidth="1" />
                  <line x1="19" y1="38" x2="30" y2="38" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                  {/* Status badge */}
                  <circle cx="38" cy="14" r="7" fill="#1A1A1A" />
                  <path d="M35 14 L37 16 L41 12" stroke="#C5A44E" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <p className="font-serif text-sm font-semibold text-[#1A1A1A] text-center">
                {doc.title}
              </p>
              <div className="mt-3 w-full space-y-1.5">
                {doc.icon === "spec" && (
                  <>
                    <div className="h-[2px] bg-[#E5E0D5] rounded-full" style={{ width: "95%" }} />
                    <div className="h-[2px] bg-[#E5E0D5] rounded-full" style={{ width: "85%" }} />
                    <div className="h-[2px] bg-[#C5A44E]/30 rounded-full" style={{ width: "90%" }} />
                    <div className="h-[2px] bg-[#E5E0D5] rounded-full" style={{ width: "75%" }} />
                    <div className="h-[2px] bg-[#E5E0D5] rounded-full" style={{ width: "88%" }} />
                  </>
                )}
                {doc.icon === "drawing" && (
                  <>
                    <div className="flex gap-2">
                      <div className="w-1/2 h-8 border border-[#E8E4DD] rounded bg-[#F3F1EC]" />
                      <div className="w-1/2 h-8 border border-[#E8E4DD] rounded bg-[#F3F1EC]" />
                    </div>
                    <div className="h-8 border border-[#E8E4DD] rounded bg-[#F3F1EC]" />
                  </>
                )}
                {doc.icon === "strategy" && (
                  <>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <div className="h-[2px] bg-[#E5E0D5] rounded-full flex-1" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <div className="h-[2px] bg-[#E5E0D5] rounded-full flex-1" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#C5A44E]" />
                      <div className="h-[2px] bg-[#C5A44E]/30 rounded-full flex-1" />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Phase 4: Dashboard ── */}
        <div
          ref={dashboardRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4"
          style={{ opacity: 0 }}
        >
          <div className="w-full max-w-[720px] bg-[#1A1A1A] rounded-sm border border-[#C5A44E]/25 shadow-[0_8px_50px_rgba(26,26,26,0.25)] overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5A5A5A]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#5A5A5A]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A44E]" />
              </div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C5A44E] font-mono">
                Cosmos Platform
              </span>
              <div className="w-12" />
            </div>

            {/* Dashboard body */}
            <div className="p-6 space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3">
                <span className="text-[#5A5A5A] text-xs">DOCKET</span>
                <span className="text-white">JT-25-0847</span>
              </div>
              <div>
                <span className="text-[#5A5A5A] text-xs block mb-1">APPLICATION</span>
                <span className="text-white text-sm">
                  Federated Learning System with Differential Privacy
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {[
                  { label: "Status", value: "DRAFT COMPLETE", check: true },
                  { label: "Claims", value: "22 (8 Independent)" },
                  { label: "Figures", value: "8" },
                  { label: "Jurisdiction", value: "USPTO + EPO + IPO" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-[10px] text-[#5A5A5A] uppercase">
                      {item.label}
                    </span>
                    <span className="text-[#C5A44E] text-xs flex items-center gap-1">
                      {item.value}
                      {item.check && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="#C5A44E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1 pt-2">
                <span className="text-[10px] text-[#5A5A5A] uppercase">
                  Draft Status
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-[#333] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#C5A44E] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[#C5A44E] text-sm font-semibold">
                    Draft ready
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 pt-3">
                {[
                  "View Spec",
                  "View Claims",
                  "Diagrams",
                  "File Now",
                  "Export DOCX",
                  "Export PDF",
                ].map((btn) => (
                  <button
                    key={btn}
                    className={`px-3 py-1.5 rounded-sm text-[11px] font-sans tracking-wide transition-colors ${
                      btn === "File Now"
                        ? "bg-[#C5A44E] text-[#1A1A1A] font-semibold hover:bg-[#d4b766]"
                        : "border border-white/15 text-[#999] hover:text-white hover:border-[#C5A44E]/50"
                    }`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Below dashboard text */}
          <div
            ref={belowDashRef}
            className="max-w-[640px] mt-10 text-center"
            style={{ opacity: 0 }}
          >
            <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed font-sans">
              From invention disclosure to a filing-ready draft. Claims are
              checked for antecedent basis and statutory support. The
              specification is formatted to patent office requirements. Likely
              rejection grounds are flagged for review before you file. The model
              runs on your device. Nothing leaves it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
