"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Claim tree data ── */
interface ClaimNode {
  id: number;
  label: string;
  independent: boolean;
  children?: ClaimNode[];
}

const claimTree: ClaimNode[] = [
  {
    id: 1,
    label: "Claim 1 (Independent \u2014 System)",
    independent: true,
    children: [
      { id: 2, label: "Claim 2 (processor configured to...)", independent: false },
      {
        id: 3,
        label: "Claim 3 (memory storing...)",
        independent: false,
        children: [
          { id: 8, label: "Claim 8 (non-transitory medium...)", independent: false },
        ],
      },
      {
        id: 4,
        label: "Claim 4 (differential privacy module...)",
        independent: false,
        children: [
          { id: 9, label: "Claim 9 (epsilon value...)", independent: false },
          { id: 10, label: "Claim 10 (noise injection layer...)", independent: false },
        ],
      },
      { id: 5, label: "Claim 5 (aggregation server...)", independent: false },
    ],
  },
  {
    id: 6,
    label: "Claim 6 (Independent \u2014 Method)",
    independent: true,
    children: [
      { id: 11, label: "Claim 11 (receiving step...)", independent: false },
      { id: 12, label: "Claim 12 (training step...)", independent: false },
      { id: 13, label: "Claim 13 (transmitting step...)", independent: false },
    ],
  },
  {
    id: 14,
    label: "Claim 14 (Independent \u2014 CRM)",
    independent: true,
    children: [
      { id: 15, label: "Claim 15 (instructions for...)", independent: false },
      { id: 16, label: "Claim 16 (further comprising...)", independent: false },
    ],
  },
];

/* ── Analysis checks ── */
const analysisChecks = [
  { section: "\u00A7 101 (Eligibility)", status: "pass", text: "PASS - Technical implementation clearly recited" },
  { section: "\u00A7 102 (Novelty)", status: "pass", text: "PASS - Novel combination: federated + differential privacy + medical imaging" },
  { section: "\u00A7 103 (Obviousness)", status: "warn", text: "LOW RISK - 3 closest references identified, combination requires hindsight" },
  { section: "\u00A7 112 (Specification)", status: "pass", text: "PASS - All terms have antecedent basis" },
  { section: "EPO Art. 52", status: "pass", text: "PASS - Further technical effect demonstrated" },
];

/* ── Full claim text ── */
const claimText = `1. A federated learning system for cross-institutional medical imaging analysis with differential privacy preservation, the system comprising:

    a processor coupled to a secure communication interface and configured to:

        receive locally trained model parameters from a plurality of institutional computing nodes, wherein each institutional computing node processes medical imaging data that remains stored exclusively within its respective institutional boundary;

        apply a differential privacy mechanism comprising calibrated noise injection to each received model parameter set, the calibration being determined by a privacy budget parameter epsilon;

        aggregate the noise-injected model parameters using a federated averaging protocol to generate a global model update;

        transmit the global model update to each of the plurality of institutional computing nodes;

    a non-transitory computer-readable memory storing instructions that, when executed by the processor, cause the system to iteratively perform the receiving, applying, aggregating, and transmitting until a convergence criterion is satisfied.`;

/* ── Check SVG Component ── */
function CheckMark({ status }: { status: string }) {
  if (status === "warn") {
    return (
      <motion.svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className="flex-shrink-0"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <path
          d="M9 3l1.5 4.5H15l-3.5 2.5L13 15 9 12l-4 3 1.5-5L3 7.5h4.5L9 3z"
          fill="#C5A44E"
          stroke="#C5A44E"
          strokeWidth="0.5"
        />
      </motion.svg>
    );
  }
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="flex-shrink-0"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
    >
      <motion.path
        d="M4 9l3.5 3.5L14 5"
        stroke="#4A7C59"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.svg>
  );
}

/* ── Recursive tree node renderer ── */
function TreeNode({
  node,
  depth,
  nodeIndex,
}: {
  node: ClaimNode;
  depth: number;
  nodeIndex: number;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -20, scaleX: 0.7 },
        {
          opacity: 1,
          x: 0,
          scaleX: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={nodeRef} style={{ opacity: 0 }}>
      <div className="flex items-center gap-2 py-1.5">
        {/* Tree lines */}
        {depth > 0 && (
          <div className="flex items-center gap-0">
            {Array.from({ length: depth }).map((_, i) => (
              <span key={i} className="text-[#C9BFA8] text-xs select-none px-[2px]">
                {i === depth - 1 ? (node.children ? "\u251C\u2500" : "\u2514\u2500") : "\u2502 "}
              </span>
            ))}
          </div>
        )}
        {depth === 0 && (
          <span className="text-[#C9BFA8] text-xs select-none">{"\u251C\u2500"}</span>
        )}
        {/* Node dot */}
        <div
          className={`w-3 h-3 rounded-full border flex-shrink-0 ${
            node.independent
              ? "bg-[#C5A44E] border-[#C5A44E] shadow-[0_0_6px_rgba(197,164,78,0.3)]"
              : "bg-transparent border-[#8B7355]/50"
          }`}
        />
        {/* Label */}
        <span
          className={`text-xs font-mono ${
            node.independent
              ? "text-[#1A1A1A] font-semibold"
              : "text-[#5A5A5A]"
          }`}
        >
          {node.label}
        </span>
      </div>
      {node.children && (
        <div className="ml-3">
          {node.children.map((child, ci) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              nodeIndex={nodeIndex + ci + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Component ── */
export default function ClaimsEngine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const claimTextRef = useRef<HTMLDivElement>(null);
  const analysisRef = useRef<HTMLDivElement>(null);
  const checkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const amendmentRef = useRef<HTMLDivElement>(null);
  const typedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      /* Typing effect for claim text */
      if (typedTextRef.current) {
        const fullText = claimText;
        const el = typedTextRef.current;
        el.textContent = "";

        gsap.to(
          { progress: 0 },
          {
            progress: 1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: claimTextRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            },
            onUpdate: function () {
              const p = this.progress();
              const chars = Math.floor(p * fullText.length);
              el.textContent = fullText.substring(0, chars);
            },
          }
        );
      }

      /* Analysis checks animate in */
      checkRefs.current.forEach((ref, i) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      /* Amendment text */
      if (amendmentRef.current) {
        gsap.fromTo(
          amendmentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: amendmentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[250vh]"
      style={{ background: "#FDFBF7" }}
    >
      {/* Ruled margin line (legal manuscript motif) */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-0 hidden lg:block"
        style={{
          left: "12%",
          width: "1px",
          background: "rgba(176,87,58,0.18)",
        }}
      />

      {/* Section header */}
      <div className="relative z-10 pt-20 pb-12 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] mb-4 font-mono">
            Section IV
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] font-medium tracking-tight leading-[1.1]">
            The Anatomy of a Granted Claim
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#C5A44E]/60" />
          <p className="mx-auto mt-6 max-w-xl font-serif text-base md:text-lg italic text-[#5A5A5A] leading-relaxed">
            From drafted limitation to allowance &mdash; every claim, traced,
            tested, and defended against examination.
          </p>
        </motion.div>
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-16">
        {/* ── LEFT COLUMN: Sticky claim tree ── */}
        <div className="w-full lg:w-[40%]">
          <div
            className="lg:sticky lg:top-[20vh] bg-[#F3F1EC] border border-[#E8E4DD] rounded-sm p-7 shadow-[0_1px_2px_rgba(26,26,26,0.04)]"
          >
            <div className="mb-5">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-mono mb-2">
                Claim Tree
              </p>
              <p className="text-xs text-[#5A5A5A] font-mono">
                Patent Application JT-25-0847
              </p>
            </div>

            <div className="border-t border-[#E8E4DD] pt-5">
              {/* Trunk */}
              <div className="text-[#C9BFA8] text-xs select-none mb-1">{"\u2502"}</div>

              {claimTree.map((rootNode, i) => (
                <TreeNode
                  key={rootNode.id}
                  node={rootNode}
                  depth={0}
                  nodeIndex={i}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-5 mt-6 pt-5 border-t border-[#E8E4DD]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C5A44E] border border-[#C5A44E]" />
                <span className="text-[9px] tracking-[0.12em] uppercase text-[#8B7355] font-mono">
                  Independent
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-transparent border border-[#8B7355]/50" />
                <span className="text-[9px] tracking-[0.12em] uppercase text-[#8B7355] font-mono">
                  Dependent
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Scrollable content ── */}
        <div className="w-full lg:w-[55%] space-y-16 pb-32">
          {/* Block 1: Claim Text */}
          <div ref={claimTextRef} className="bg-white border border-[#E8E4DD] rounded-sm p-7 md:p-9 shadow-[0_1px_2px_rgba(26,26,26,0.04)]">
            <div className="mb-5 flex items-center justify-between border-b border-[#E8E4DD] pb-3">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-mono">
                Claim Text
              </p>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#8B7355]/70 font-mono">
                As Drafted
              </span>
            </div>
            <div className="font-mono text-[13px] text-[#2C2C2C] leading-relaxed whitespace-pre-wrap min-h-[400px]">
              <span ref={typedTextRef}></span>
              <motion.span
                className="inline-block w-[2px] h-[14px] bg-[#C5A44E] ml-[1px] align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Block 2: Claim Analysis */}
          <div ref={analysisRef} className="bg-[#FDFBF7] border border-[#E8E4DD] rounded-sm p-7 md:p-9 shadow-[0_1px_2px_rgba(26,26,26,0.04)]">
            <div className="mb-6 border-b border-[#E8E4DD] pb-3">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355] font-mono">
                Cosmos Claim Analysis
              </p>
            </div>

            <div className="space-y-2.5">
              {analysisChecks.map((check, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    checkRefs.current[i] = el;
                  }}
                  className={`flex items-start gap-3 p-3.5 rounded-sm border-l-2 ${
                    check.status === "warn"
                      ? "bg-[#C5A44E]/[0.06] border-l-[#C5A44E]"
                      : "bg-[#4A7C59]/[0.05] border-l-[#4A7C59]"
                  }`}
                  style={{ opacity: 0 }}
                >
                  <CheckMark status={check.status} />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="font-mono text-xs text-[#1A1A1A] font-semibold whitespace-nowrap">
                      {check.section}
                    </span>
                    <span
                      className={`font-mono text-xs leading-relaxed ${
                        check.status === "warn"
                          ? "text-[#8B7355]"
                          : "text-[#4A7C59]"
                      }`}
                    >
                      {check.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Block 3: Amendment Strategy */}
          <div
            ref={amendmentRef}
            className="bg-[#1A1A1A] rounded-sm p-7 md:p-9 shadow-[0_8px_30px_rgba(26,26,26,0.12)] relative overflow-hidden"
            style={{ opacity: 0 }}
          >
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(197,164,78,0.10) 0%, transparent 70%)" }}
            />
            <div className="mb-5 border-b border-white/10 pb-3 relative z-10">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4b766] font-mono">
                Amendment Strategy
              </p>
            </div>
            <p className="font-serif text-[15px] text-[#E8E4DD] leading-[1.7] relative z-10">
              Narrow &lsquo;differential privacy mechanism&rsquo; to
              specifically recite &lsquo;Gaussian noise injection with
              R&eacute;nyi differential privacy accounting&rsquo;. The narrower
              language ties the claim to a concrete technical implementation,
              which strengthens it against a &sect;103 obviousness rejection.
            </p>
            <div className="mt-6 flex items-center gap-3 relative z-10">
              <div className="flex-1 h-px bg-white/15 overflow-hidden">
                <motion.div
                  className="h-full bg-[#C5A44E]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="text-[#d4b766] text-xs font-mono tracking-wider">Suggested</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
