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
  "Processing 847 technical terms | 23 key features identified",
  "Searching 147M+ documents | 12 relevant references found | 0 anticipatory references",
  "Generating 22 claims | 8 figures | Estimated grant probability: 87%",
  "Assembling complete application package",
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
      // Portal glows
      tl.fromTo(
        portalRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 4, ease: "back.out(1.7)" },
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
              { opacity: 0, scale: 0 },
              { opacity: 1, scale: 1, duration: 1.5, ease: "back.out(2)" },
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
  const particles = Array.from({ length: 24 }, (_, i) => ({
    x: 50 + (Math.random() - 0.5) * 30,
    y: 50 + (Math.random() - 0.5) * 30,
    delay: Math.random() * 0.5,
    size: 3 + Math.random() * 4,
  }));

  globalNodeIndex = 0;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[250vh]"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #F5F5F3)",
      }}
    >
      {/* Section heading */}
      <div className="absolute top-0 left-0 w-full z-10 pt-12 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#8B7E6A] mb-3 font-sans">
            Section III
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] font-bold">
            From Infrastructure to Insight
          </h2>
        </motion.div>
      </div>

      {/* Pinned container */}
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden">
        {/* ── Phase 1: Disclosure Card ── */}
        <div
          ref={docCardRef}
          className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[340px] bg-white border border-[#D4C5A9] rounded-lg shadow-lg p-6 z-20"
          style={{ opacity: 0 }}
        >
          <div className="text-[10px] tracking-[0.3em] text-[#8B7E6A] uppercase mb-3 font-sans">
            Invention Disclosure
          </div>
          <div className="w-full h-px bg-[#D4C5A9] mb-4" />
          <p className="font-serif text-sm font-semibold text-[#1A1A1A] leading-snug mb-3">
            Federated Learning System with Differential Privacy for
            Cross-Institutional Medical Imaging
          </p>
          <div className="flex flex-col gap-1 text-xs text-[#6B6B6B] font-sans">
            <span>
              <span className="text-[#8B7E6A]">Inventor:</span> Dr. S. Mehta
            </span>
            <span>
              <span className="text-[#8B7E6A]">Date:</span> March 8, 2026
            </span>
          </div>
        </div>

        {/* ── Portal Ring ── */}
        <div
          ref={portalRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ opacity: 0 }}
        >
          <div className="w-48 h-48 rounded-full border-[3px] border-[#C8A960] flex items-center justify-center relative">
            <div className="w-40 h-40 rounded-full border border-[#C8A960]/40" />
            <div className="absolute -bottom-10 text-center">
              <p className="text-[8px] tracking-[0.25em] uppercase text-[#C8A960] font-sans whitespace-nowrap">
                Cosmos Secure Ingestion Layer | AES-256 | Zero Retention
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
              className="absolute rounded-full bg-[#C8A960]"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
                y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
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
                  stroke="#C8A960"
                  strokeWidth="0.35"
                  strokeOpacity="0.55"
                />
              ))}
            </svg>

            {/* Nodes */}
            {layers.map((layer, li) =>
              layer.map((name, ni) => {
                const idx = globalNodeIndex++;
                const isGolden = li === 3;
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      nodeRefs.current[idx] = el;
                    }}
                    className="absolute flex flex-col items-center gap-1"
                    style={{
                      left: `${getNodeX(layer.length, ni)}%`,
                      top: layerYPositions[li],
                      transform: "translate(-50%, -50%)",
                      opacity: 0,
                    }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        isGolden
                          ? "bg-[#C8A960] border-[#C8A960] shadow-[0_0_16px_rgba(200,169,96,0.6)]"
                          : "bg-white border-[#C8A960] shadow-[0_0_8px_rgba(200,169,96,0.15)]"
                      }`}
                    >
                      {!isGolden && <div className="w-2.5 h-2.5 rounded-full bg-[#C8A960]/40" />}
                    </div>
                    <span
                      className={`text-[10px] text-center font-sans max-w-[120px] leading-tight ${
                        isGolden
                          ? "text-[#C8A960] font-bold text-[11px]"
                          : "text-[#4A4A4A] font-medium"
                      }`}
                    >
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
                className="absolute left-1/2 -translate-x-1/2 text-center px-4 py-2 rounded-full bg-[#1A1A1A]/90 backdrop-blur"
                style={{
                  top: layerYPositions[i] + 40,
                  opacity: 0,
                }}
              >
                <span className="text-[10px] text-[#C8A960] font-mono tracking-wide">
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
              className={`w-[240px] ${doc.thickness} bg-white border border-[#D4C5A9] rounded-lg shadow-xl flex flex-col items-center justify-center p-6`}
              style={{ opacity: 0 }}
            >
              {/* Unique icon per document type */}
              {doc.icon === "spec" && (
                <svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" fill="none">
                  <rect x="8" y="4" width="28" height="38" rx="3" stroke="#1A1A1A" strokeWidth="1.5" />
                  <rect x="8" y="4" width="28" height="10" rx="3" fill="#C8A960" opacity="0.15" />
                  <text x="22" y="12" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#C8A960" fontFamily="monospace">SPEC</text>
                  <line x1="14" y1="20" x2="30" y2="20" stroke="#1A1A1A" strokeWidth="1" opacity="0.4" />
                  <line x1="14" y1="24" x2="28" y2="24" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                  <line x1="14" y1="28" x2="30" y2="28" stroke="#1A1A1A" strokeWidth="1" opacity="0.4" />
                  <line x1="14" y1="32" x2="24" y2="32" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                  <line x1="14" y1="36" x2="28" y2="36" stroke="#1A1A1A" strokeWidth="1" opacity="0.2" />
                  <rect x="32" y="6" width="8" height="8" rx="1" stroke="#C8A960" strokeWidth="1" fill="#C8A960" opacity="0.1" />
                  <text x="36" y="12" textAnchor="middle" fontSize="5" fill="#C8A960" fontFamily="monospace">22</text>
                </svg>
              )}
              {doc.icon === "drawing" && (
                <svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" fill="none">
                  <rect x="6" y="6" width="36" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
                  {/* Technical drawing: circuit/flowchart */}
                  <rect x="12" y="12" width="10" height="8" rx="1" stroke="#C8A960" strokeWidth="1.2" />
                  <rect x="28" y="12" width="10" height="8" rx="1" stroke="#C8A960" strokeWidth="1.2" />
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
                  <path d="M16 12 L20 8 L24 12" stroke="#C8A960" strokeWidth="1.5" fill="none" />
                  <rect x="16" y="12" width="8" height="4" rx="1" fill="#C8A960" opacity="0.2" stroke="#C8A960" strokeWidth="1" />
                  {/* Checklist items */}
                  <rect x="12" y="22" width="4" height="4" rx="0.5" stroke="#50A050" strokeWidth="1" />
                  <path d="M13 24 L14.5 25.5 L17 22.5" stroke="#50A050" strokeWidth="0.8" />
                  <line x1="19" y1="24" x2="30" y2="24" stroke="#1A1A1A" strokeWidth="1" opacity="0.4" />
                  <rect x="12" y="29" width="4" height="4" rx="0.5" stroke="#50A050" strokeWidth="1" />
                  <path d="M13 31 L14.5 32.5 L17 29.5" stroke="#50A050" strokeWidth="0.8" />
                  <line x1="19" y1="31" x2="28" y2="31" stroke="#1A1A1A" strokeWidth="1" opacity="0.4" />
                  <rect x="12" y="36" width="4" height="4" rx="0.5" stroke="#C8A960" strokeWidth="1" />
                  <line x1="19" y1="38" x2="30" y2="38" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
                  {/* Percentage badge */}
                  <circle cx="38" cy="14" r="7" fill="#1A1A1A" />
                  <text x="38" y="16" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#C8A960" fontFamily="monospace">87%</text>
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
                    <div className="h-[2px] bg-[#C8A960]/30 rounded-full" style={{ width: "90%" }} />
                    <div className="h-[2px] bg-[#E5E0D5] rounded-full" style={{ width: "75%" }} />
                    <div className="h-[2px] bg-[#E5E0D5] rounded-full" style={{ width: "88%" }} />
                  </>
                )}
                {doc.icon === "drawing" && (
                  <>
                    <div className="flex gap-2">
                      <div className="w-1/2 h-8 border border-[#D4C5A9] rounded bg-[#FAF8F5]" />
                      <div className="w-1/2 h-8 border border-[#D4C5A9] rounded bg-[#FAF8F5]" />
                    </div>
                    <div className="h-8 border border-[#D4C5A9] rounded bg-[#FAF8F5]" />
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
                      <div className="w-2 h-2 rounded-full bg-[#C8A960]" />
                      <div className="h-[2px] bg-[#C8A960]/30 rounded-full flex-1" />
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
          <div className="w-full max-w-[720px] bg-[#1A1A1A] rounded-xl border border-[#333] shadow-2xl overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#333]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A960] font-sans">
                Cosmos Platform
              </span>
              <div className="w-12" />
            </div>

            {/* Dashboard body */}
            <div className="p-6 space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3">
                <span className="text-[#6B6B6B] text-xs">DOCKET</span>
                <span className="text-white">JT-25-0847</span>
              </div>
              <div>
                <span className="text-[#6B6B6B] text-xs block mb-1">APPLICATION</span>
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
                    <span className="text-[10px] text-[#6B6B6B] uppercase">
                      {item.label}
                    </span>
                    <span className="text-[#C8A960] text-xs flex items-center gap-1">
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
                            stroke="#27C93F"
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
                <span className="text-[10px] text-[#6B6B6B] uppercase">
                  Grant Probability
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-[#333] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#C8A960] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[#C8A960] text-sm font-semibold">
                    87%
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
                    className={`px-3 py-1.5 rounded text-[11px] font-sans tracking-wide transition-colors ${
                      btn === "File Now"
                        ? "bg-[#C8A960] text-[#1A1A1A] font-semibold hover:bg-[#D4B96E]"
                        : "border border-[#444] text-[#999] hover:text-white hover:border-[#666]"
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
            <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed font-sans">
              From invention disclosure to filing-ready patent application
              &mdash; across all major jurisdictions &mdash; in under 12
              minutes. Every claim pre-validated against historical prosecution
              data. Every specification compliant with local patent office
              requirements. Every rejection risk identified and mitigated before
              you file.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
