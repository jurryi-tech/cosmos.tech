"use client";

import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function MotivationPage() {
  return (
    <>
      <Header />
      <main
        className="min-h-screen pt-32 pb-24"
        style={{
          background: "linear-gradient(180deg, #F3EFE8 0%, #FDFBF7 40%, #FDFBF7 100%)",
        }}
      >
        <div className="max-w-[760px] mx-auto px-6 md:px-8">
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.3em] text-[#C5A44E] uppercase mb-6"
          >
            Why Cosmos Exists
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] mb-16"
          >
            The industry doesn&apos;t reward honesty.{" "}
            <span className="text-[#C5A44E]">It rewards volume.</span>
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Opening */}
            <p className="font-sans text-lg leading-[1.9] text-[#3A3A3A]">
              After spending a year working inside the patent industry, one thing became painfully clear to me:{" "}
              <strong className="text-[#1A1A1A]">inventors and organizations have no one truly on their side.</strong>
            </p>

            {/* Personal story */}
            <div className="border-l-4 border-[#C5A44E] pl-6 py-2">
              <p className="font-sans text-base leading-[1.9] text-[#4A4A4A] italic">
                I was kicked out of my previous company &ldquo;Inventip Legal&rdquo; for discussing AI usage for patent drafting and for helping assignees with a genuine approach for early detection of rejection scenarios while drafting patents. The argument was simply &mdash; &ldquo;Why not avoid any chances of rejection at the time of drafting, rather than waiting for prosecution? Why not give genuine feedback to inventors for their inventions than giving fake hopes of a successful grant after 18 months?&rdquo;
              </p>
            </div>

            {/* Gold divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] flex-1 bg-[#C5A44E]/20" />
              <div className="w-2 h-2 rounded-full bg-[#C5A44E]/40" />
              <div className="h-[1px] flex-1 bg-[#C5A44E]/20" />
            </div>

            {/* The problems */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              The entire ecosystem is built to extract money from inventors, not to help them succeed.
            </h2>

            <p className="font-sans text-lg leading-[1.9] text-[#3A3A3A]">
              Drafting a single patent costs thousands of dollars, and the service-based industry is structured around maximizing billable hours, not maximizing grant outcomes.
            </p>

            <p className="font-sans text-lg leading-[1.9] text-[#3A3A3A]">
              Inventors pour years into their ideas, only to be handed drafts that don&apos;t faithfully represent their inventions. And they wouldn&apos;t even know, because there&apos;s no honest review layer telling them what went wrong.
            </p>

            <p className="font-sans text-lg leading-[1.9] text-[#3A3A3A]">
              <strong className="text-[#1A1A1A]">Privacy is an afterthought.</strong> Confidential invention details pass through multiple hands, multiple servers, multiple third parties. No one guarantees where that data ends up.
            </p>

            <p className="font-sans text-lg leading-[1.9] text-[#3A3A3A]">
              Grants are brutally hard to obtain, not because the inventions aren&apos;t worthy, but because inventors lack strategic guidance. They don&apos;t have an unbiased partner who can tell them honestly:{" "}
              <em>&ldquo;this claim is too broad,&rdquo;</em>{" "}
              <em>&ldquo;this description doesn&apos;t match your disclosure,&rdquo;</em>{" "}
              <em>&ldquo;this is how an examiner will think.&rdquo;</em>
            </p>

            {/* Gold divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] flex-1 bg-[#C5A44E]/20" />
              <div className="w-2 h-2 rounded-full bg-[#C5A44E]/40" />
              <div className="h-[1px] flex-1 bg-[#C5A44E]/20" />
            </div>

            {/* The mission */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              Why I started Cosmos.
            </h2>

            <p className="font-sans text-lg leading-[1.9] text-[#3A3A3A]">
              I started Cosmos because I believe AI, when built carefully and responsibly, can become the{" "}
              <strong className="text-[#1A1A1A]">strategic, honest partner that inventors have never had.</strong>{" "}
              One that drafts faithfully, reviews without bias, protects their data completely, and makes high-quality patent prosecution accessible to everyone &mdash; not just those who can afford $15,000 per application.
            </p>

            {/* Closing statement */}
            <div className="bg-[#1A1A1A] rounded-xl p-8 md:p-12 mt-12">
              <p className="font-serif text-xl md:text-2xl text-[#FDFBF7] leading-[1.6] italic">
                &ldquo;This isn&apos;t about replacing attorneys.{" "}
                <span className="text-[#C5A44E]">It&apos;s about giving every inventor a fair shot.</span>&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
