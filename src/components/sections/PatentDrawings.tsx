"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Shared constants ── */
const STROKE_COLOR = "#1A1A1A";
const GOLD = "#C5A44E";
const INK_MUTED = "#8B7355";
const HAIRLINE = "rgba(26,26,26,0.45)";

/* ── Helper: Reference numeral circle ── */
function RefNumeral({ x, y, num }: { x: number; y: number; num: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="10" fill="white" stroke={STROKE_COLOR} strokeWidth="1" />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontSize="9"
        fontFamily="'IBM Plex Mono', monospace"
        fill={STROKE_COLOR}
      >
        {num}
      </text>
    </g>
  );
}

/* ═══════════════════════════════════════════
   FIG. 1 — System Architecture
   ═══════════════════════════════════════════ */
function Fig1({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const paths = svg.querySelectorAll<SVGPathElement | SVGLineElement | SVGRectElement>(
      ".draw-path"
    );

    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        if (path instanceof SVGGeometryElement) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "center center",
              scrub: 1,
            },
          });
        }
      });
    }, svg);

    return () => ctx.revert();
  }, [containerRef]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 400"
      className="w-full max-w-4xl mx-auto"
      fill="none"
    >
      {/* Box 101 — User Device */}
      <rect className="draw-path" x="40" y="140" width="160" height="80" rx="4" stroke={STROKE_COLOR} strokeWidth="1.5" />
      <text x="120" y="185" textAnchor="middle" fontSize="13" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>User Device</text>
      <RefNumeral x={55} y={130} num="101" />
      <line className="draw-path" x1="55" y1="137" x2="55" y2="140" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* Box 102 — Cosmos AI Engine (larger, gold border) */}
      <rect className="draw-path" x="290" y="120" width="220" height="120" rx="4" stroke={GOLD} strokeWidth="2.5" />
      <text x="400" y="175" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Cosmos AI Engine</text>
      <text x="400" y="195" textAnchor="middle" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>[Central Processing]</text>
      <RefNumeral x={305} y={110} num="102" />
      <line className="draw-path" x1="305" y1="117" x2="305" y2="120" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* Box 103 — Patent Office API */}
      <rect className="draw-path" x="600" y="140" width="160" height="80" rx="4" stroke={STROKE_COLOR} strokeWidth="1.5" />
      <text x="680" y="185" textAnchor="middle" fontSize="13" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Patent Office API</text>
      <RefNumeral x={615} y={130} num="103" />
      <line className="draw-path" x1="615" y1="137" x2="615" y2="140" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* Box 104 — Prior Art Database */}
      <rect className="draw-path" x="320" y="310" width="160" height="70" rx="4" stroke={STROKE_COLOR} strokeWidth="1.5" />
      <text x="400" y="350" textAnchor="middle" fontSize="13" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Prior Art Database</text>
      <RefNumeral x={335} y={300} num="104" />
      <line className="draw-path" x1="335" y1="307" x2="335" y2="310" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* Arrow 101 → 102 */}
      <path className="draw-path" d="M200 180 L290 180" stroke={STROKE_COLOR} strokeWidth="1.5" markerEnd="url(#arrowhead)" />

      {/* Arrow 102 → 103 */}
      <path className="draw-path" d="M510 180 L600 180" stroke={STROKE_COLOR} strokeWidth="1.5" markerEnd="url(#arrowhead)" />

      {/* Arrow 102 ↔ 104 (bidirectional) */}
      <path className="draw-path" d="M385 240 L385 310" stroke={STROKE_COLOR} strokeWidth="1.5" markerEnd="url(#arrowhead)" />
      <path className="draw-path" d="M415 310 L415 240" stroke={STROKE_COLOR} strokeWidth="1.5" markerEnd="url(#arrowhead)" />

      {/* Arrowhead marker */}
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={STROKE_COLOR} />
        </marker>
      </defs>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   FIG. 2 — Data Flow Diagram
   ═══════════════════════════════════════════ */
function Fig2({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const paths = svg.querySelectorAll<SVGElement>(".draw-path");

    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        if (path instanceof SVGGeometryElement) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 60%",
              end: "center 30%",
              scrub: 1,
            },
          });
        }
      });
    }, svg);

    return () => ctx.revert();
  }, [containerRef]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 500"
      className="w-full max-w-4xl mx-auto"
      fill="none"
    >
      {/* 201 — Invention Disclosure (rectangle) */}
      <rect className="draw-path" x="60" y="200" width="140" height="60" stroke={STROKE_COLOR} strokeWidth="1.5" />
      <text x="130" y="233" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Invention</text>
      <text x="130" y="248" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Disclosure</text>
      <RefNumeral x={75} y={190} num="201" />
      <line className="draw-path" x1="75" y1="197" x2="75" y2="200" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* 202 — NLP Analysis (rounded rect) */}
      <rect className="draw-path" x="260" y="200" width="140" height="60" rx="20" stroke={STROKE_COLOR} strokeWidth="1.5" />
      <text x="330" y="235" textAnchor="middle" fontSize="12" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>NLP Analysis</text>
      <RefNumeral x={275} y={190} num="202" />
      <line className="draw-path" x1="275" y1="197" x2="275" y2="200" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* 203 — Novelty Check (diamond) */}
      <path className="draw-path" d="M530 200 L590 230 L530 260 L470 230 Z" stroke={STROKE_COLOR} strokeWidth="1.5" />
      <text x="530" y="233" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Novelty</text>
      <text x="530" y="246" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Check</text>
      <RefNumeral x={530} y={185} num="203" />
      <line className="draw-path" x1="530" y1="192" x2="530" y2="200" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* Arrow 201 → 202 */}
      <path className="draw-path" d="M200 230 L260 230" stroke={STROKE_COLOR} strokeWidth="1.5" markerEnd="url(#arrowhead2)" />

      {/* Arrow 202 → 203 */}
      <path className="draw-path" d="M400 230 L470 230" stroke={STROKE_COLOR} strokeWidth="1.5" markerEnd="url(#arrowhead2)" />

      {/* YES path: 203 → 204a Claim Generation */}
      <text x="615" y="215" fontSize="10" letterSpacing="1" fontFamily="'IBM Plex Mono', monospace" fill={GOLD}>YES</text>
      <path className="draw-path" d="M590 230 L650 230" stroke={GOLD} strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
      <rect className="draw-path" x="650" y="200" width="120" height="60" rx="20" stroke={GOLD} strokeWidth="1.5" />
      <text x="710" y="228" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Claim</text>
      <text x="710" y="243" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Generation</text>
      <RefNumeral x={665} y={190} num="204a" />

      {/* 204a → 205 Complete Application */}
      <path className="draw-path" d="M710 260 L710 320" stroke={GOLD} strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
      <rect className="draw-path" x="640" y="320" width="140" height="60" stroke={GOLD} strokeWidth="1.5" />
      <text x="710" y="348" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Complete</text>
      <text x="710" y="363" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Application</text>
      <RefNumeral x={655} y={310} num="205" />

      {/* NO path: 203 → 204b Redesign Suggestions */}
      <text x="540" y="290" fontSize="10" letterSpacing="1" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>NO</text>
      <path className="draw-path" d="M530 260 L530 340" stroke={INK_MUTED} strokeWidth="1.5" markerEnd="url(#arrowRed)" />
      <rect className="draw-path" x="460" y="340" width="140" height="60" rx="20" stroke={INK_MUTED} strokeWidth="1.5" />
      <text x="530" y="368" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Redesign</text>
      <text x="530" y="383" textAnchor="middle" fontSize="11" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Suggestions</text>
      <RefNumeral x={475} y={330} num="204b" />

      {/* Loop back from 204b to 201 */}
      <path className="draw-path" d="M460 370 L130 370 L130 260" stroke={INK_MUTED} strokeWidth="1.5" strokeDasharray="6 3" markerEnd="url(#arrowRed)" />

      <defs>
        <marker id="arrowhead2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={STROKE_COLOR} />
        </marker>
        <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={GOLD} />
        </marker>
        <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={INK_MUTED} />
        </marker>
      </defs>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   FIG. 3 — Neural Network Architecture
   ═══════════════════════════════════════════ */
function Fig3({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const paths = svg.querySelectorAll<SVGElement>(".draw-path");

    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        if (path instanceof SVGGeometryElement) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 40%",
              end: "bottom 60%",
              scrub: 1,
            },
          });
        }
      });
    }, svg);

    return () => ctx.revert();
  }, [containerRef]);

  /* Layer positions */
  const inputX = 80;
  const hidden1X = 260;
  const hidden2X = 440;
  const outputX = 620;

  const inputLabels = ["Claim Text", "Prior Art", "Examiner Data", "Jurisdiction"];
  const outputLabels = ["Grant Probability", "Risk Score", "Strategy"];

  const inputYs = [80, 160, 240, 320];
  const hidden1Ys = [60, 120, 180, 240, 300, 360];
  const hidden2Ys = [60, 120, 180, 240, 300, 360];
  const outputYs = [120, 200, 280];

  /* Build connection lines */
  const connections: { x1: number; y1: number; x2: number; y2: number }[] = [];

  // Input → Hidden 1
  inputYs.forEach((iy) => {
    hidden1Ys.forEach((hy) => {
      connections.push({ x1: inputX + 12, y1: iy, x2: hidden1X - 12, y2: hy });
    });
  });

  // Hidden 1 → Hidden 2
  hidden1Ys.forEach((h1y) => {
    hidden2Ys.forEach((h2y) => {
      connections.push({ x1: hidden1X + 12, y1: h1y, x2: hidden2X - 12, y2: h2y });
    });
  });

  // Hidden 2 → Output
  hidden2Ys.forEach((hy) => {
    outputYs.forEach((oy) => {
      connections.push({ x1: hidden2X + 12, y1: hy, x2: outputX - 12, y2: oy });
    });
  });

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 780 420"
      className="w-full max-w-4xl mx-auto"
      fill="none"
    >
      {/* Connection lines */}
      {connections.map((c, i) => (
        <line
          key={`conn-${i}`}
          className="draw-path"
          x1={c.x1}
          y1={c.y1}
          x2={c.x2}
          y2={c.y2}
          stroke={STROKE_COLOR}
          strokeWidth="0.5"
          opacity="0.3"
        />
      ))}

      {/* Input layer nodes */}
      {inputYs.map((y, i) => (
        <g key={`in-${i}`}>
          <circle cx={inputX} cy={y} r="12" fill="white" stroke={GOLD} strokeWidth="1.5" />
          <text x={inputX - 22} y={y + 4} textAnchor="end" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>
            {inputLabels[i]}
          </text>
        </g>
      ))}

      {/* Hidden layer 1 nodes */}
      {hidden1Ys.map((y, i) => (
        <circle key={`h1-${i}`} cx={hidden1X} cy={y} r="12" fill="white" stroke={STROKE_COLOR} strokeWidth="1.5" />
      ))}

      {/* Hidden layer 2 nodes */}
      {hidden2Ys.map((y, i) => (
        <circle key={`h2-${i}`} cx={hidden2X} cy={y} r="12" fill="white" stroke={STROKE_COLOR} strokeWidth="1.5" />
      ))}

      {/* Output layer nodes */}
      {outputYs.map((y, i) => (
        <g key={`out-${i}`}>
          <circle cx={outputX} cy={y} r="12" fill="white" stroke={GOLD} strokeWidth="1.5" />
          <text x={outputX + 22} y={y + 4} textAnchor="start" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>
            {outputLabels[i]}
          </text>
        </g>
      ))}

      {/* Layer labels */}
      <text x={inputX} y="400" textAnchor="middle" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>Input Layer</text>
      <text x={hidden1X} y="400" textAnchor="middle" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>Hidden Layer 1</text>
      <text x={hidden2X} y="400" textAnchor="middle" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>Hidden Layer 2</text>
      <text x={outputX} y="400" textAnchor="middle" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>Output Layer</text>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   FIG. 4 — Prior Art Analysis System
   ═══════════════════════════════════════════ */
function Fig4({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const paths = svg.querySelectorAll<SVGElement>(".draw-path");

    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        if (path instanceof SVGGeometryElement) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 50%",
              end: "center 40%",
              scrub: 1,
            },
          });
        }
      });
    }, svg);

    return () => ctx.revert();
  }, [containerRef]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 450"
      className="w-full max-w-4xl mx-auto"
      fill="none"
    >
      {/* Document stack (bottom documents) */}
      <rect className="draw-path" x="80" y="200" width="180" height="220" rx="3" stroke={STROKE_COLOR} strokeWidth="1" fill="#FDFBF7" />
      <rect className="draw-path" x="90" y="190" width="180" height="220" rx="3" stroke={STROKE_COLOR} strokeWidth="1" fill="#FDFBF7" />
      <rect className="draw-path" x="100" y="180" width="180" height="220" rx="3" stroke={STROKE_COLOR} strokeWidth="1.5" fill="#FDFBF7" />

      {/* Lines on top document */}
      <line className="draw-path" x1="120" y1="210" x2="260" y2="210" stroke={HAIRLINE} strokeWidth="1" />
      <line className="draw-path" x1="120" y1="225" x2="250" y2="225" stroke={HAIRLINE} strokeWidth="1" />
      <line className="draw-path" x1="120" y1="240" x2="240" y2="240" stroke={HAIRLINE} strokeWidth="1" />
      <line className="draw-path" x1="120" y1="255" x2="255" y2="255" stroke={HAIRLINE} strokeWidth="1" />
      <line className="draw-path" x1="120" y1="270" x2="230" y2="270" stroke={HAIRLINE} strokeWidth="1" />
      <line className="draw-path" x1="120" y1="285" x2="260" y2="285" stroke={HAIRLINE} strokeWidth="1" />
      <line className="draw-path" x1="120" y1="300" x2="245" y2="300" stroke={HAIRLINE} strokeWidth="1" />

      {/* Highlighted section on doc (prior art match) */}
      <rect x="118" y="248" width="144" height="24" fill={GOLD} opacity="0.15" rx="2" />

      {/* Document label */}
      <text x="190" y="370" textAnchor="middle" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>Patent Documents</text>
      <text x="190" y="385" textAnchor="middle" fontSize="10" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>147M+ Records</text>
      <RefNumeral x={115} y={170} num="401" />
      <line className="draw-path" x1="115" y1="177" x2="115" y2="180" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* Magnifying glass (main visual element) */}
      <circle className="draw-path" cx="420" cy="200" r="80" stroke={GOLD} strokeWidth="3" />
      <circle className="draw-path" cx="420" cy="200" r="72" stroke={STROKE_COLOR} strokeWidth="1" opacity="0.3" />
      {/* Glass handle */}
      <line className="draw-path" x1="477" y1="257" x2="530" y2="310" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />
      <line className="draw-path" x1="477" y1="257" x2="530" y2="310" stroke={STROKE_COLOR} strokeWidth="3" strokeLinecap="round" />

      {/* Inside magnifying glass — text being analyzed */}
      <line x1="375" y1="175" x2="460" y2="175" stroke={STROKE_COLOR} strokeWidth="1" opacity="0.4" />
      <line x1="375" y1="190" x2="450" y2="190" stroke={STROKE_COLOR} strokeWidth="1" opacity="0.4" />
      <line x1="375" y1="205" x2="465" y2="205" stroke={GOLD} strokeWidth="1.5" opacity="0.8" />
      <line x1="375" y1="220" x2="455" y2="220" stroke={STROKE_COLOR} strokeWidth="1" opacity="0.4" />
      <line x1="375" y1="235" x2="445" y2="235" stroke={STROKE_COLOR} strokeWidth="1" opacity="0.4" />

      {/* Semantic match highlight */}
      <rect x="372" y="199" width="96" height="12" fill={GOLD} opacity="0.15" rx="2" />

      <RefNumeral x={420} y={100} num="402" />
      <line className="draw-path" x1="420" y1="107" x2="420" y2="120" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* Arrow from docs to magnifying glass */}
      <path className="draw-path" d="M280 260 C320 260, 330 230, 340 210" stroke={STROKE_COLOR} strokeWidth="1.5" markerEnd="url(#arrowhead4)" />

      {/* Output results panel */}
      <rect className="draw-path" x="580" y="100" width="180" height="280" rx="5" stroke={STROKE_COLOR} strokeWidth="1.5" />

      {/* Panel header */}
      <rect x="580" y="100" width="180" height="30" rx="5" fill={GOLD} opacity="0.1" />
      <text x="670" y="120" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>Analysis Results</text>

      {/* Result items */}
      <circle cx="605" cy="155" r="5" fill={GOLD} opacity="0.9" />
      <text x="618" y="158" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>98.2% Match — US9,123,456</text>

      <circle cx="605" cy="185" r="5" fill={GOLD} opacity="0.7" />
      <text x="618" y="188" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>91.7% Match — EP3,456,789</text>

      <circle cx="605" cy="215" r="5" fill={GOLD} opacity="0.5" />
      <text x="618" y="218" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>78.3% Match — IN202011xxx</text>

      <circle cx="605" cy="245" r="5" fill={INK_MUTED} opacity="0.5" />
      <text x="618" y="248" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fill={STROKE_COLOR}>65.1% Match — WO2021/xxx</text>

      <circle cx="605" cy="275" r="5" fill={INK_MUTED} opacity="0.3" />
      <text x="618" y="278" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>42.8% Match — CN112xxx</text>

      {/* Novelty score */}
      <rect x="600" y="310" width="140" height="45" rx="3" fill={GOLD} opacity="0.08" stroke={GOLD} strokeWidth="1" />
      <text x="670" y="330" textAnchor="middle" fontSize="9" fontFamily="'IBM Plex Mono', monospace" fill={INK_MUTED}>NOVELTY SCORE</text>
      <text x="670" y="348" textAnchor="middle" fontSize="16" fontWeight="bold" fontFamily="'IBM Plex Mono', monospace" fill={GOLD}>72.4%</text>

      <RefNumeral x={595} y={90} num="403" />
      <line className="draw-path" x1="595" y1="97" x2="595" y2="100" stroke={STROKE_COLOR} strokeWidth="0.8" />

      {/* Arrow from magnifying glass to results */}
      <path className="draw-path" d="M500 200 L580 200" stroke={STROKE_COLOR} strokeWidth="1.5" markerEnd="url(#arrowhead4)" />

      {/* Arrow marker */}
      <defs>
        <marker id="arrowhead4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={STROKE_COLOR} />
        </marker>
      </defs>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   Figure wrapper
   ═══════════════════════════════════════════ */
function FigureFrame({
  figNum,
  title,
  description,
  children,
}: {
  figNum: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="w-full max-w-5xl mx-auto mb-28 md:mb-32"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* FIG label — drafting plate caption */}
      <div className="flex items-center justify-center gap-4 mb-7">
        <span className="h-px w-8 bg-[#1A1A1A]/20" />
        <p className="font-mono text-[12px] text-center text-[#1A1A1A] tracking-[0.2em]">
          <span className="font-semibold">FIG. {figNum}</span>
          <span className="text-[#8B7355]">&nbsp;&mdash;&nbsp;</span>
          <span className="text-[#5A5A5A] uppercase tracking-[0.18em]">{title}</span>
        </p>
        <span className="h-px w-8 bg-[#1A1A1A]/20" />
      </div>

      {/* Patent drafting plate — hairline double frame */}
      <div className="relative bg-[#FDFBF7] p-[5px] border border-[#1A1A1A]/15 rounded-[2px]">
        <div className="border border-[#1A1A1A]/10 rounded-[1px] p-6 md:p-12">
          {children}
        </div>
        {/* Plate corner ticks */}
        <span className="absolute top-1.5 left-1.5 h-2 w-2 border-l border-t border-[#1A1A1A]/25" />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 border-r border-t border-[#1A1A1A]/25" />
        <span className="absolute bottom-1.5 left-1.5 h-2 w-2 border-l border-b border-[#1A1A1A]/25" />
        <span className="absolute bottom-1.5 right-1.5 h-2 w-2 border-r border-b border-[#1A1A1A]/25" />
      </div>

      {/* Description — figure caption */}
      <p className="font-sans text-[13px] text-center text-[#5A5A5A] mt-6 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════ */
export default function PatentDrawings() {
  const fig1Ref = useRef<HTMLDivElement>(null);
  const fig2Ref = useRef<HTMLDivElement>(null);
  const fig3Ref = useRef<HTMLDivElement>(null);
  const fig4Ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="patent-drawings"
      className="relative min-h-[200vh] bg-[#FDFBF7] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,26,26,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.018) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Section header */}
      <div className="pt-32 pb-20 px-8 md:px-16 text-center">
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="hidden sm:block h-px w-12 bg-[#C5A44E]/50" />
          <p className="font-mono text-[11px] tracking-[0.4em] text-[#8B7355] uppercase">
            Patent Drawings
          </p>
          <span className="hidden sm:block h-px w-12 bg-[#C5A44E]/50" />
        </motion.div>
        <motion.h2
          className="font-serif text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          System Architecture Diagrams
        </motion.h2>
        <motion.p
          className="font-mono text-xs text-[#8B7355] tracking-[0.18em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          FIG. 1 &mdash; FIG. 4
        </motion.p>
      </div>

      {/* Figures */}
      <div className="px-6 md:px-16">
        <div ref={fig1Ref}>
          <FigureFrame
            figNum="1"
            title="System Architecture"
            description="Block diagram illustrating the interconnection between user devices (101), the Cosmos AI Engine (102), Patent Office APIs (103), and the Prior Art Database (104). Bidirectional data flow shown between the AI engine and prior art repository."
          >
            <Fig1 containerRef={fig1Ref} />
          </FigureFrame>
        </div>

        <div ref={fig2Ref}>
          <FigureFrame
            figNum="2"
            title="Data Flow Diagram"
            description="Flowchart depicting the patent application generation process from Invention Disclosure (201) through NLP Analysis (202), Novelty Check decision point (203), and branching to either Claim Generation (204a) leading to Complete Application (205), or Redesign Suggestions (204b) with feedback loop."
          >
            <Fig2 containerRef={fig2Ref} />
          </FigureFrame>
        </div>

        <div ref={fig3Ref}>
          <FigureFrame
            figNum="3"
            title="Neural Network Architecture"
            description="Simplified representation of the deep learning model architecture with four input features (Claim Text, Prior Art, Examiner Data, Jurisdiction), two hidden layers of six neurons each, and three output predictions (Grant Probability, Risk Score, Strategy)."
          >
            <Fig3 containerRef={fig3Ref} />
          </FigureFrame>
        </div>

        <div ref={fig4Ref}>
          <FigureFrame
            figNum="4"
            title="Prior Art Analysis System"
            description="Illustration of the AI-powered prior art search and analysis pipeline. The system examines 147M+ patent documents, academic papers, and technical publications using semantic matching to identify relevant prior art references across 12 languages."
          >
            <Fig4 containerRef={fig4Ref} />
          </FigureFrame>
        </div>
      </div>

      {/* Compliance note */}
      <motion.div
        className="max-w-3xl mx-auto px-8 pb-32 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-10 bg-[#1A1A1A]/10" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#8B7355] uppercase">Compliance</span>
          <span className="h-px w-10 bg-[#1A1A1A]/10" />
        </div>
        <p className="font-sans text-[13px] text-[#5A5A5A] leading-relaxed">
          All patent drawings generated by Cosmos&apos;s AI Drawing Engine conform to 37 CFR &sect; 1.84
          requirements for patent figures, including proper line weights, reference numerals, and lead lines.
        </p>
      </motion.div>
    </section>
  );
}
