"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const tableOfContents = [
  { id: "what-is-ai-patent-drafting", label: "What is AI Patent Drafting?" },
  { id: "how-technology-works", label: "How the Technology Works" },
  { id: "ai-drafting-workflow", label: "The AI Drafting Workflow" },
  { id: "what-ai-can-cannot-do", label: "What AI Can & Cannot Do" },
  { id: "key-features", label: "Key Features to Look For" },
  { id: "patmaster-approach", label: "How PatMaster Approaches AI Drafting" },
  { id: "multi-jurisdiction", label: "Multi-Jurisdiction Considerations" },
  { id: "best-practices", label: "Best Practices for Attorneys" },
  { id: "future-of-ai", label: "The Future of AI in Patents" },
  { id: "faq", label: "FAQ" },
];

const demoMailto =
  "mailto:contact@cosmos.com?subject=PatMaster%20Demo%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo%20of%20PatMaster.%0A%0AThank%20you.";

export default function BlogArticle() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[rgba(253,251,247,0.92)] backdrop-blur-xl border-b border-black/6">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center  bg-[#1A1A1A] font-serif text-sm font-bold text-[#FDFBF7]">
              J
            </span>
            <span className="font-mono text-xs tracking-[0.3em] text-[#1A1A1A] uppercase">
              COSMOS
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/resources/blog"
              className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors"
            >
              &larr; All Articles
            </Link>
            <a
              href={demoMailto}
              className="bg-[#1A1A1A] text-white px-4 py-2  text-sm font-medium hover:bg-[#C5A44E] transition-colors"
            >
              Request Access
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-12 border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#C5A44E] bg-[#C5A44E]/10 px-3 py-1">
              Complete Guide
            </span>
            <span className="text-[13px] text-[#999]">March 8, 2026</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.15] text-[#1A1A1A] mb-6"
          >
            How AI Patent Drafting Works: A Complete Guide for Patent Attorneys
          </motion.h1>
          <p className="text-lg text-[#555] leading-relaxed mb-6">
            AI is transforming how patent applications are drafted, but the
            technology behind it remains opaque to many practitioners. This guide
            breaks down exactly how AI patent drafting works &mdash; from the
            underlying NLP models and training data to the step-by-step workflow
            that turns an invention disclosure into a publishable specification.
          </p>
          <div className="flex items-center gap-3 text-sm text-[#888]">
            <span>Written by</span>
            <span className="font-medium text-[#1A1A1A]">
              Cosmos Tech Editorial Team
            </span>
            <span>&bull;</span>
            <span>18 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#999] mb-4">
              Table of Contents
            </p>
            <nav className="flex flex-col gap-2">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-[#666] hover:text-[#C5A44E] transition-colors leading-relaxed"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Article */}
        <article className="max-w-3xl flex-1">
          {/* ============================================================ */}
          {/* Section 1: What is AI Patent Drafting? */}
          {/* ============================================================ */}
          <section id="what-is-ai-patent-drafting" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              What is AI Patent Drafting?
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              AI patent drafting refers to the use of artificial intelligence
              &mdash; specifically natural language processing (NLP) and machine
              learning &mdash; to assist patent attorneys and agents in creating
              patent application documents. These AI systems can generate patent
              specifications, claims, abstracts, and detailed descriptions based
              on invention disclosures, technical documents, or structured input
              from the inventor.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Unlike general-purpose language models such as ChatGPT or Claude,
              purpose-built AI patent drafting systems are trained specifically on
              patent prosecution data. They understand the unique linguistic
              conventions of patent law, including means-plus-function claiming,
              antecedent basis requirements, enablement standards, and the
              particular formatting requirements of different patent offices
              worldwide.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              The core promise of AI patent drafting is not to replace patent
              attorneys, but to dramatically accelerate the most time-consuming
              portions of the drafting process. Where a skilled patent attorney
              might spend 20&ndash;40 hours drafting a complete patent
              application from scratch, AI-assisted drafting can reduce that to
              2&ndash;8 hours &mdash; freeing the attorney to focus on strategic
              claim construction, prosecution planning, and client counseling.
            </p>

            <div className="bg-[#F5F0E8] p-6 mt-6">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#C5A44E] mb-3">
                Key Distinction
              </p>
              <p className="text-[15px] text-[#333] leading-relaxed">
                AI patent drafting is <strong>not</strong> the same as using
                a general-purpose chatbot to write patent text. Purpose-built
                patent AI systems are trained on millions of granted patents,
                prosecution histories, and examiner actions. They understand
                patent-specific conventions that general models frequently get
                wrong &mdash; such as proper claim dependency chains, consistent
                terminology throughout the specification, and
                jurisdiction-specific formatting requirements.
              </p>
            </div>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Section 2: How AI Patent Drafting Technology Works */}
          {/* ============================================================ */}
          <section id="how-technology-works" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              How AI Patent Drafting Technology Works
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-6">
              Understanding the technology behind AI patent drafting helps
              attorneys evaluate tools more effectively and use them with
              appropriate confidence. Here are the three foundational pillars
              that make AI patent drafting possible.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3">
              Natural Language Processing (NLP) for Patent Text
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              At the core of every AI patent drafting system is a natural
              language processing engine. Modern patent AI systems use
              transformer-based architectures &mdash; the same foundational
              technology behind large language models &mdash; but fine-tuned
              specifically for patent language. Patent text is linguistically
              distinct from ordinary English: it uses intentionally broad
              terminology, nested claim structures, specific antecedent basis
              conventions, and highly technical vocabulary that varies by
              technology domain.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Patent-specific NLP models are trained to understand these
              conventions. They learn to differentiate between independent and
              dependent claims, identify the metes and bounds of claimed subject
              matter, and generate specification language that properly supports
              each claim element. The best models can handle multiple technology
              domains &mdash; from software and electrical engineering to
              mechanical systems, chemical compositions, and biotechnology.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Training Data: The Foundation of Patent AI
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              The quality of an AI patent drafting system depends heavily on its
              training data. The most effective systems are trained on:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                [
                  "Granted patent databases",
                  "Millions of granted patents from USPTO, EPO, WIPO, and other offices, providing examples of claim structures and specification styles that have successfully passed prosecution.",
                ],
                [
                  "Prosecution histories",
                  "File wrapper data including examiner rejections, applicant amendments, and arguments — teaching the AI what claim language survives examination and what gets rejected.",
                ],
                [
                  "Patent classification data",
                  "CPC and IPC classification codes that help the AI understand the technical domain of an invention and generate appropriate terminology.",
                ],
                [
                  "Examiner action patterns",
                  "Historical data on how different examiners and art units respond to specific claim formulations, enabling the AI to pre-emptively address common rejection grounds.",
                ],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="text-[#C5A44E] font-bold mt-0.5 shrink-0">
                    &#9656;
                  </span>
                  <p className="text-[15px] text-[#444] leading-relaxed">
                    <strong className="text-[#1A1A1A]">{title}:</strong> {desc}
                  </p>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Claim Analysis and Semantic Understanding
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              The most sophisticated AI patent drafting tools go beyond simple
              text generation. They perform semantic analysis of the invention
              disclosure to identify:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "The core inventive concept and its distinguishing technical features",
                "Potential claim hierarchies — from broad independent claims to narrow dependent claims",
                "Required specification support for each claim element (enablement and written description)",
                "Possible prior art conflicts based on the described technical features",
                "Appropriate claim categories (method, system, apparatus, composition) for the invention type",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#C5A44E] font-bold mt-0.5 shrink-0">
                    &#9656;
                  </span>
                  <p className="text-[15px] text-[#444] leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-[15px] text-[#444] leading-relaxed">
              This semantic understanding allows the AI to produce drafts that
              are structurally sound from the outset, rather than generating
              plausible-sounding but technically problematic patent text. It is
              the difference between a tool that merely writes patent-like
              language and one that understands patent drafting strategy.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Section 3: The AI Patent Drafting Workflow */}
          {/* ============================================================ */}
          <section id="ai-drafting-workflow" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              The AI Patent Drafting Workflow
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-8">
              AI patent drafting is not a single-step process. The best tools
              implement a structured, multi-stage workflow that mirrors how
              experienced patent attorneys approach drafting &mdash; but at
              dramatically accelerated speed.
            </p>

            {[
              {
                step: "01",
                title: "Invention Disclosure Intake",
                content:
                  "The process begins when an inventor or attorney uploads an invention disclosure. This can be a formal invention disclosure form, a technical white paper, research notes, presentation slides, or even a recorded inventor interview transcript. Advanced AI systems accept multiple input formats and can extract the core inventive concept from unstructured data. The AI parses the disclosure to identify the technical problem being solved, the proposed solution, the key components or steps involved, and any described advantages over existing approaches.",
              },
              {
                step: "02",
                title: "AI Analysis and Concept Mapping",
                content:
                  "Once the disclosure is ingested, the AI performs deep technical analysis. It identifies the invention's core technical features and maps them to potential claim elements. The system typically performs an initial prior art landscape analysis to understand the relevant technical field and identify potential differentiation points. This step is critical because it determines the strategic direction of the entire patent application — how broadly or narrowly to claim, which embodiments to emphasize, and what specification detail is needed to support the claims.",
              },
              {
                step: "03",
                title: "Claim Set Generation",
                content:
                  "The AI generates a structured claim set, typically including broad independent claims across multiple categories (method, system, computer-readable medium for software inventions; apparatus, method, composition for physical inventions) and a strategic hierarchy of dependent claims that progressively narrow the scope. The best AI systems ensure proper antecedent basis throughout the claim chain, consistent terminology, and compliance with jurisdiction-specific claim formatting requirements. They also suggest alternative claim wordings to provide fallback positions during prosecution.",
              },
              {
                step: "04",
                title: "Specification Generation",
                content:
                  "Based on the claim set and the original disclosure, the AI generates a complete patent specification. This includes the title, cross-references, background of the invention, summary of the invention, brief description of the drawings, detailed description of preferred embodiments, and abstract. The specification is generated to specifically support each claim element with adequate detail for enablement and written description requirements. Advanced systems generate multiple embodiments and include alternative implementations to broaden claim support.",
              },
              {
                step: "05",
                title: "Attorney Review and Refinement",
                content:
                  "The AI-generated draft is presented to the patent attorney for thorough review. This is where human expertise is irreplaceable. The attorney evaluates the claim strategy, refines claim scope based on business objectives and prosecution strategy, corrects any technical inaccuracies, adds domain-specific nuances that the AI may have missed, and ensures the specification adequately supports the intended claim scope. Most AI tools provide an interactive editing environment where attorneys can request the AI to regenerate specific sections, expand descriptions, or adjust claim language.",
              },
            ].map((item) => (
              <div key={item.step} className="mb-8 flex gap-6">
                <div className="shrink-0">
                  <span className="flex h-12 w-12 items-center justify-center bg-[#1A1A1A] font-mono text-sm font-bold text-[#C5A44E]">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#444] leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Section 4: What AI Can and Cannot Do */}
          {/* ============================================================ */}
          <section id="what-ai-can-cannot-do" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              What AI Can and Cannot Do in Patent Drafting
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-6">
              Setting realistic expectations is essential for attorneys adopting
              AI patent drafting tools. AI excels in certain areas and has
              fundamental limitations in others.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F5F0E8] p-6">
                <h3 className="font-semibold text-[#1A1A1A] text-lg mb-4 flex items-center gap-2">
                  <span className="text-[#C5A44E]">&#10003;</span> What AI Does
                  Well
                </h3>
                <ul className="space-y-3">
                  {[
                    "Generating initial specification drafts from invention disclosures in minutes rather than days",
                    "Maintaining consistent terminology across claims and specification",
                    "Ensuring proper antecedent basis in claim chains",
                    "Formatting applications per jurisdiction-specific requirements (USPTO, EPO, India, PCT)",
                    "Identifying gaps in specification support for claim elements",
                    "Generating multiple embodiments and alternative implementations",
                    "Performing consistency checks across the entire application",
                    "Suggesting dependent claim hierarchies based on technical features",
                    "Creating drawings descriptions that align with claim language",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#C5A44E] shrink-0 mt-0.5">
                        &#9656;
                      </span>
                      <span className="text-[14px] text-[#444] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1A1A1A] p-6">
                <h3 className="font-semibold text-[#FDFBF7] text-lg mb-4 flex items-center gap-2">
                  <span className="text-[#C5A44E]">&#10007;</span> Where AI
                  Falls Short
                </h3>
                <ul className="space-y-3">
                  {[
                    "Strategic claim scope decisions based on business objectives and competitive landscape",
                    "Understanding the inventor's true inventive concept when disclosures are ambiguous",
                    "Evaluating patentability (novelty and non-obviousness) with nuanced legal judgment",
                    "Navigating prosecution strategy and examiner psychology",
                    "Making trade-offs between claim breadth and prosecution risk",
                    "Handling inventions at the boundary of patentable subject matter (35 USC 101 / Article 52 EPC)",
                    "Drafting for design-around prevention — anticipating competitor workarounds",
                    "Identifying undisclosed embodiments the inventor may not have articulated",
                    "Exercising professional judgment on ethical and privilege matters",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#C5A44E] shrink-0 mt-0.5">
                        &#9656;
                      </span>
                      <span className="text-[14px] text-[#FDFBF7]/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-[15px] text-[#444] leading-relaxed">
              The bottom line: AI is a powerful drafting accelerator, not a
              drafting replacement. The attorneys who get the most value from AI
              patent drafting tools are those who use AI to handle the
              time-consuming mechanics of drafting &mdash; and reinvest that
              saved time into the strategic and analytical work that truly
              requires human expertise.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Section 5: Key Features to Look For */}
          {/* ============================================================ */}
          <section id="key-features" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              Key Features to Look for in AI Patent Drafting Tools
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-6">
              Not all AI patent drafting tools are created equal. When evaluating
              platforms, patent attorneys should assess the following critical
              capabilities:
            </p>

            {[
              {
                title: "Patent-Specific AI Training",
                desc: "The AI model should be trained specifically on patent data — granted patents, prosecution histories, examiner actions, and patent classification systems. General-purpose language models adapted for patent use consistently underperform purpose-built patent AI in claim quality, specification coherence, and jurisdiction compliance.",
              },
              {
                title: "Multi-Jurisdiction Compliance",
                desc: "Your tool should natively support the formatting, terminology, and legal requirements of the patent offices you file with most frequently. This includes claim formatting differences (e.g., two-part claims for EPO, means-plus-function handling for USPTO, and Section 10 requirements for Indian applications), as well as specification structure variations across jurisdictions.",
              },
              {
                title: "Claim Quality and Antecedent Basis",
                desc: "Look for AI that properly manages antecedent basis throughout claim chains, maintains consistent terminology between claims and specification, generates proper claim dependency structures, and avoids common drafting errors like indefinite claim terms, unsupported limitations, and improper multiple dependencies.",
              },
              {
                title: "Prior Art Integration",
                desc: "The best AI patent drafting tools integrate with prior art search capabilities. This allows the AI to position the claims relative to known prior art, draft around specific references, and generate specification language that distinguishes the invention from the closest prior art — all during the initial drafting stage.",
              },
              {
                title: "Data Privacy and Client Confidentiality",
                desc: "This is non-negotiable for law firms and corporate IP departments. The AI platform must guarantee that client invention disclosures and draft patent applications are never used for model training, never shared with third parties, and stored with appropriate security measures. Look for SOC 2 compliance, data isolation guarantees, and clear terms of service on data usage.",
              },
              {
                title: "Attorney Review Workflow",
                desc: "The tool should provide a structured review workflow — not just dump a raw text file. Look for interactive editing environments, section-by-section review modes, AI-assisted refinement capabilities, change tracking, and the ability to regenerate specific sections without starting over. The review stage is where attorney value is added, and the tool should facilitate, not hinder, this process.",
              },
            ].map((item, i) => (
              <div key={item.title} className="mb-6 flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center bg-[#C5A44E]/10 font-mono text-sm font-bold text-[#C5A44E] shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#444] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Section 6: How PatMaster Approaches AI Drafting */}
          {/* ============================================================ */}
          <section id="patmaster-approach" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              How PatMaster by Cosmos Tech Approaches AI Drafting
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              PatMaster, developed by Cosmos Tech, exemplifies the purpose-built
              approach to AI patent drafting. Rather than adapting a
              general-purpose AI model for patent work, PatMaster was
              engineered from the ground up as patent prosecution infrastructure
              &mdash; with every design decision optimized for the patent
              attorney workflow.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              PatMaster&apos;s AI drafting engine processes invention disclosures
              through a multi-stage pipeline. The system first performs technical
              concept extraction to identify the inventive elements, then maps
              those elements to potential claim structures across multiple claim
              categories. It generates a complete specification with claims,
              detailed description, drawings descriptions, abstract, and all
              required formalities &mdash; formatted for the target patent
              office.
            </p>

            <div className="bg-[#F5F0E8] p-6 mb-6">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#C5A44E] mb-3">
                What Sets PatMaster Apart
              </p>
              <ul className="space-y-3">
                {[
                  [
                    "End-to-end prosecution platform",
                    "PatMaster goes beyond drafting to cover the full patent lifecycle — prior art search, office action response generation, examiner intelligence, claim amendment tools, and portfolio analytics, all in a single platform.",
                  ],
                  [
                    "Multi-jurisdiction native support",
                    "Drafts are generated natively for USPTO, EPO, Indian Patent Office, and PCT, with jurisdiction-specific claim formatting, specification structure, and compliance requirements built in.",
                  ],
                  [
                    "Privacy-first architecture",
                    "Client data is never used for model training. PatMaster provides complete data isolation with enterprise-grade security, making it suitable for AmLaw firms and corporate IP departments with strict confidentiality requirements.",
                  ],
                  [
                    "Attorney-centric review workflow",
                    "PatMaster presents AI-generated drafts in a structured review environment where attorneys can evaluate, refine, and approve sections individually — with the ability to request AI regeneration of specific passages without losing approved work.",
                  ],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="text-[#C5A44E] font-bold mt-0.5 shrink-0">
                      &#10003;
                    </span>
                    <p className="text-[15px] text-[#333] leading-relaxed">
                      <strong>{title}:</strong> {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[15px] text-[#444] leading-relaxed">
              The integration of drafting with prosecution tools is a key
              advantage: when PatMaster generates a patent draft, it can
              simultaneously flag potential prior art issues, suggest claim
              amendments that pre-emptively address likely examiner objections,
              and provide intelligence on how specific art units and examiners
              have historically treated similar claim formulations.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Section 7: Multi-Jurisdiction Considerations */}
          {/* ============================================================ */}
          <section id="multi-jurisdiction" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              Multi-Jurisdiction Considerations
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-6">
              Patent drafting is not one-size-fits-all. Each major patent office
              has distinct requirements that AI drafting tools must account for.
              Understanding these differences is essential for attorneys
              evaluating whether an AI tool can truly serve their practice.
            </p>

            {[
              {
                office: "USPTO (United States)",
                points: [
                  "Claims must be in independent/dependent format with proper antecedent basis and definiteness under 35 USC 112",
                  "Means-plus-function claims (35 USC 112(f)) require corresponding structure in the specification",
                  "Subject matter eligibility under 35 USC 101 (Alice/Mayo framework) demands specific technical detail in software and biotech claims",
                  "Continuation and divisional practice allows broad initial filing strategies",
                  "Information Disclosure Statement (IDS) requirements affect how prior art is referenced in the specification",
                ],
              },
              {
                office: "EPO (European Patent Office)",
                points: [
                  "Two-part claim format (preamble + characterizing portion) is standard for European applications",
                  "Article 52 EPC exclusions require careful claim drafting for software and business method inventions",
                  "Problem-solution approach to inventive step (Article 56) favors specific technical effect language in the specification",
                  "Unity of invention requirements are stricter — divisional strategy must be considered during initial drafting",
                  "Description must be adapted to granted claims before issuance",
                ],
              },
              {
                office: "Indian Patent Office",
                points: [
                  "Section 3 exclusions (particularly Section 3(k) for software) require careful claim drafting to frame inventions as technical solutions",
                  "Section 10 requirements for specification completeness and sufficiency are strictly enforced",
                  "Pre-grant opposition procedures mean the specification must robustly support claims from the outset",
                  "Claims relating to traditional knowledge face additional scrutiny",
                  "Working requirements (Section 83) influence how the specification describes industrial applicability",
                ],
              },
              {
                office: "PCT (International Application)",
                points: [
                  "International Search Report and Written Opinion at the international phase require claims that are clearly searchable across technology domains",
                  "Claim fees per claim (over a threshold) incentivize efficient claim drafting",
                  "National phase entry in multiple jurisdictions requires a specification that can be adapted for different claim formatting requirements",
                  "Chapter II examination (Demand) strategy may affect initial claim construction",
                  "Unity of invention analysis under PCT Rule 13 differs from national practice",
                ],
              },
            ].map((item) => (
              <div key={item.office} className="mb-8">
                <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3">
                  {item.office}
                </h3>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="text-[#C5A44E] font-bold mt-0.5 shrink-0">
                        &#9656;
                      </span>
                      <p className="text-[15px] text-[#444] leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-[#F5F0E8] p-6">
              <p className="text-[15px] text-[#333] leading-relaxed">
                <strong>Bottom line for multi-jurisdiction drafting:</strong> An
                AI patent drafting tool that only supports USPTO-style
                applications will create significant rework for firms filing
                internationally. Look for tools like PatMaster that generate
                jurisdiction-specific drafts natively, rather than requiring
                manual adaptation after the initial draft is generated.
              </p>
            </div>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Section 8: Best Practices for Patent Attorneys Using AI */}
          {/* ============================================================ */}
          <section id="best-practices" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              Best Practices for Patent Attorneys Using AI
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-6">
              Adopting AI patent drafting tools effectively requires more than
              just learning to use the software. These best practices will help
              attorneys maximize the value of AI while maintaining the quality
              and strategic rigor their clients expect.
            </p>

            {[
              {
                num: "1",
                title: "Treat AI Output as a First Draft, Never Final",
                desc: "Every AI-generated patent draft should be reviewed with the same critical eye you would apply to a junior associate's work. Check for technical accuracy, claim scope appropriateness, specification support for each claim element, and consistency throughout. AI can produce plausible-sounding text that contains subtle technical errors — your domain expertise is the essential quality filter.",
              },
              {
                num: "2",
                title: "Invest in High-Quality Invention Disclosures",
                desc: "The quality of AI output is directly proportional to the quality of input. Structured, detailed invention disclosures with clear problem statements, technical descriptions, key differentiators, and described embodiments produce dramatically better AI drafts than vague or incomplete disclosures. Consider standardizing your disclosure intake process to optimize for AI-assisted drafting.",
              },
              {
                num: "3",
                title: "Use AI for Consistency Checking",
                desc: "One of AI's strongest capabilities is maintaining consistency across a long document. Use the AI to verify that all claim terms have proper antecedent basis, that the specification description matches the claim language, that reference numerals are consistent, and that no claim elements lack corresponding specification support.",
              },
              {
                num: "4",
                title: "Maintain Prosecution Strategy Ownership",
                desc: "AI can suggest claim structures and generate specification text, but prosecution strategy must remain with the attorney. Decisions about claim breadth, fallback positions, continuation strategies, and prosecution tactics should be driven by your understanding of the client's business objectives, competitive landscape, and portfolio strategy — not by AI optimization.",
              },
              {
                num: "5",
                title: "Verify Data Privacy Compliance",
                desc: "Before using any AI patent drafting tool with client inventions, verify the vendor's data handling practices. Ensure client data is not used for model training, review the terms of service carefully, confirm data residency and security certifications, and establish internal policies for AI tool usage that comply with your professional responsibility obligations.",
              },
              {
                num: "6",
                title: "Document AI Usage for Ethical Compliance",
                desc: "As patent offices and bar associations develop guidelines on AI disclosure, establish documentation practices now. Track which parts of an application were AI-generated versus attorney-drafted, maintain records of attorney review and modifications, and stay current with evolving disclosure requirements in your filing jurisdictions.",
              },
              {
                num: "7",
                title: "Use AI to Expand, Not Reduce, Quality",
                desc: "The primary value proposition of AI patent drafting is not to reduce attorney time spent on each application — it is to allow attorneys to invest the same or more time in higher-value strategic work. Use time saved on mechanical drafting to perform more thorough prior art analysis, develop more robust prosecution strategies, and craft more strategically valuable claim sets.",
              },
            ].map((item) => (
              <div key={item.num} className="mb-6 flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center bg-[#1A1A1A] font-mono text-sm font-bold text-[#C5A44E] shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#444] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Section 9: The Future of AI in Patent Prosecution */}
          {/* ============================================================ */}
          <section id="future-of-ai" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              The Future of AI in Patent Prosecution
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              AI patent drafting in 2026 is already substantially more
              sophisticated than it was even two years ago, but the technology
              continues to evolve rapidly. Here are the key trends shaping the
              future of AI in patent prosecution.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              End-to-End Prosecution Automation
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              The market is moving decisively toward integrated platforms that
              handle the entire patent lifecycle. Rather than using separate
              tools for drafting, prior art search, office action response, and
              portfolio management, firms increasingly demand single platforms
              that connect these workflows. When the AI that drafted the original
              application also generates office action responses, it maintains
              continuity of claim strategy and argument consistency that
              siloed tools cannot match.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Predictive Prosecution Intelligence
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Next-generation AI patent tools will increasingly predict
              prosecution outcomes before filing. By analyzing patterns in
              examiner behavior, art unit tendencies, and historical rejection
              rates for specific claim formulations, AI can advise attorneys on
              which claim strategies are most likely to succeed &mdash; and flag
              potential issues before they become expensive prosecution
              roadblocks.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Multi-Modal Invention Understanding
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Future AI patent drafting tools will process not just text but
              also engineering diagrams, CAD models, circuit schematics, and
              chemical structure notations directly. This multi-modal capability
              will enable the AI to generate patent drawings descriptions, flow
              charts, and technical illustrations alongside the text
              specification — further reducing the manual effort in patent
              preparation.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Regulatory Evolution
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Patent offices worldwide are developing policies on AI-assisted
              patent applications. The USPTO has issued guidance on AI inventorship
              and is expected to address AI-assisted drafting practices. The EPO
              and other offices are similarly evolving their positions. Attorneys
              should expect increasing clarity on disclosure requirements and
              ethical obligations related to AI tool usage in patent
              prosecution.
            </p>

            <p className="text-[15px] text-[#444] leading-relaxed">
              The trajectory is clear: AI will become an indispensable component
              of patent prosecution practice, much as word processors and
              electronic filing systems became indispensable in previous decades.
              The attorneys and firms who invest in understanding and effectively
              using AI patent drafting tools now will have a significant
              competitive advantage as the technology matures.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Section 10: FAQ */}
          {/* ============================================================ */}
          <section id="faq" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">
                  How does AI patent drafting actually work?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  AI patent drafting uses natural language processing (NLP) and
                  machine learning models trained on millions of granted patents
                  and prosecution histories. The AI analyzes an invention
                  disclosure, identifies key technical elements, maps them to
                  patent claim structures, and generates a full specification
                  including claims, detailed description, abstract, and drawings
                  descriptions &mdash; all formatted for the target patent
                  office. The process typically takes minutes rather than the
                  days or weeks required for manual drafting.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">
                  Can AI replace patent attorneys in drafting patents?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  No. AI patent drafting tools are designed to augment patent
                  attorneys, not replace them. AI can generate initial drafts,
                  check for consistency, and suggest claim language, but patent
                  attorneys must review all output for technical accuracy,
                  strategic claim scope, legal compliance, and alignment with the
                  inventor&apos;s goals. The USPTO and other patent offices require
                  a registered practitioner to sign and take responsibility for
                  patent applications. AI handles the mechanical drafting work so
                  attorneys can focus on the strategic work that requires human
                  judgment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">
                  How much time does AI patent drafting save?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  AI patent drafting tools typically reduce drafting time by
                  50&ndash;90%. A patent application that traditionally takes
                  20&ndash;40 hours to draft can be completed in 2&ndash;8 hours
                  with AI assistance. The time savings come from automated
                  specification generation, claim structuring, prior art
                  analysis, and consistency checking. However, thorough attorney
                  review remains essential and should not be shortened &mdash;
                  the time savings are in the initial drafting mechanics, not in
                  the quality review process.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">
                  What should I look for in an AI patent drafting tool?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  Key features to evaluate include: patent-specific AI training
                  (not general-purpose LLMs adapted for patents),
                  multi-jurisdiction support (USPTO, EPO, India, PCT), claim
                  quality with proper antecedent basis handling, integration with
                  prior art search, data privacy guarantees that client data is
                  never used for model training, attorney review workflows with
                  interactive editing, and the ability to handle complex
                  technical domains including software, mechanical, chemical, and
                  biotechnology inventions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">
                  Is AI-drafted patent content considered prior art or public
                  disclosure?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  No. Using AI tools to draft patent applications does not
                  constitute public disclosure or create prior art, provided the
                  AI platform maintains proper confidentiality. However,
                  attorneys should verify that the AI vendor&apos;s terms of service
                  guarantee that client data is not used for model training and
                  is not shared with third parties. Platforms like PatMaster by
                  Cosmos Tech offer privacy-first architecture where client data
                  is never used for training and complete data isolation is
                  maintained.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* ============================================================ */}
          {/* Conclusion + CTA */}
          {/* ============================================================ */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              Conclusion
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              AI patent drafting is no longer a speculative technology &mdash; it
              is a practical, proven tool that is reshaping how patent
              applications are prepared worldwide. The technology has matured to
              the point where purpose-built AI systems can generate
              high-quality initial patent drafts in minutes, maintain consistency
              across complex applications, and support multi-jurisdiction filing
              requirements natively.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              For patent attorneys, the question is no longer whether to adopt AI
              drafting tools, but how to integrate them effectively into existing
              workflows. The attorneys and firms that develop expertise in
              AI-assisted drafting now &mdash; learning to write effective
              prompts, review AI output critically, and combine AI speed with
              human strategic judgment &mdash; will be best positioned to serve
              their clients as the technology continues to evolve.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-8">
              The key is to choose tools that are purpose-built for patent work,
              respect client confidentiality, support the jurisdictions you file
              in, and enhance rather than replace the attorney&apos;s role in the
              drafting process.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A1A1A] p-8 text-center"
            >
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#C5A44E] mb-3">
                Ready to See AI Patent Drafting in Action?
              </p>
              <p className="text-[#FDFBF7]/80 text-[15px] leading-relaxed mb-6 max-w-lg mx-auto">
                PatMaster by Cosmos Tech provides end-to-end AI patent drafting
                and prosecution automation with multi-jurisdiction support and
                privacy-first architecture. Request a demo to see how it works
                with your practice.
              </p>
              <a
                href={demoMailto}
                className="inline-block bg-[#C5A44E] text-[#1A1A1A] px-8 py-3 font-medium text-sm hover:bg-[#d4b45e] transition-colors"
              >
                Request a Demo
              </a>
            </motion.div>
          </section>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-black/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.3em] text-[#999] uppercase">
            COSMOS
          </span>
          <span className="text-xs text-[#999]">
            &copy; 2026 Cosmos Tech. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
