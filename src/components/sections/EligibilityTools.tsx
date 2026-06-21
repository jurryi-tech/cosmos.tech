"use client";

import { motion } from "framer-motion";
import EligibilityFlow from "./EligibilityFlow";
import RiskGauge from "./RiskGauge";
import AttorneyFeedback from "./AttorneyFeedback";

/* ------------------------------------------------------------------ */
/*  § 101 ELIGIBILITY WORKBENCH                                        */
/*  Interactive tools: Alice/Mayo flow, risk gauge, attorney markup    */
/* ------------------------------------------------------------------ */

export default function EligibilityTools() {
  return (
    <section
      id="eligibility-tools"
      className="bg-[#FDFBF7] px-6 md:px-12 py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] tracking-[0.3em] text-[#8B7355] uppercase">
            The Workbench
          </span>
          <span className="h-px w-16 bg-[#C5A44E]/50" />
        </motion.div>

        <motion.h2
          className="font-serif text-4xl md:text-5xl text-[#1A1A1A] max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Test a claim against &sect; 101
        </motion.h2>

        <motion.p
          className="font-sans text-[15px] text-[#5A5A5A] max-w-xl mt-5 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          Walk a claim through the Alice/Mayo framework, gauge abstract-idea
          risk, and review attorney-style markup &mdash; interactively. Drag the
          nodes, move the slider, work the comments.
        </motion.p>

        {/* Tool 1: Alice/Mayo draggable flow */}
        <div className="mt-14 border border-[#E8E4DD] bg-white shadow-sm">
          <EligibilityFlow />
        </div>

        {/* Tools 2 + 3 */}
        <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
          <RiskGauge />
          <AttorneyFeedback />
        </div>
      </div>
    </section>
  );
}
