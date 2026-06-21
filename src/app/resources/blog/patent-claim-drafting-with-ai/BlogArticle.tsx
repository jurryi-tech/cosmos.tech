"use client";

import Link from "next/link";

const tableOfContents = [
  { id: "art-of-claim-drafting", label: "1. The Art of Patent Claim Drafting" },
  { id: "why-claims-critical", label: "2. Why Claims Are the Most Critical Step" },
  { id: "how-ai-assists", label: "3. How AI Assists in Claim Drafting" },
  { id: "independent-vs-dependent", label: "4. Independent vs Dependent Claims" },
  { id: "scope-optimization", label: "5. AI-Powered Scope Optimization" },
  { id: "avoiding-pitfalls", label: "6. Avoiding Common Pitfalls with AI" },
  { id: "patmaster-amendment-engine", label: "7. PatMaster's Claim Amendment Engine" },
  { id: "multi-jurisdiction", label: "8. Multi-Jurisdiction Considerations" },
  { id: "best-practices", label: "9. Combining AI with Attorney Expertise" },
  { id: "faq", label: "10. FAQ" },
];

export default function BlogArticle() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[rgba(253,251,247,0.92)] backdrop-blur-xl border-b border-black/6">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center bg-[#1A1A1A] font-serif text-sm font-bold text-[#FDFBF7]">
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
              href="mailto:contact@cosmos.com?subject=PatMaster%20Access%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20access%20to%20PatMaster.%0A%0AThank%20you."
              className="bg-[#1A1A1A] text-white px-4 py-2 text-sm font-medium hover:bg-[#C5A44E] transition-colors"
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
              Claim Drafting Guide
            </span>
            <span className="text-[13px] text-[#999]">March 8, 2026</span>
          </div>
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.15] text-[#1A1A1A] mb-6">
            Patent Claim Drafting with AI: Best Practices for IP Attorneys (2026)
          </h1>
          <p className="text-lg text-[#555] leading-relaxed mb-6">
            Patent claims define the boundaries of legal protection &mdash; they
            are the single most consequential element of any patent application.
            In 2026, AI-powered claim drafting tools are fundamentally changing
            how IP attorneys approach claim construction, scope optimization,
            and multi-jurisdiction compliance. This guide covers the best
            practices for leveraging AI in claim drafting while maintaining
            the strategic judgment that only experienced practitioners can provide.
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

          {/* Section 1 */}
          <section id="art-of-claim-drafting" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              1. The Art of Patent Claim Drafting
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Patent claim drafting is where legal strategy meets technical
              precision. Every word in a claim carries legal weight &mdash; a
              single poorly chosen term can invalidate an entire patent or
              render it unenforceable against competitors. The art lies in
              crafting language that is simultaneously broad enough to capture
              the full inventive concept and specific enough to distinguish
              over prior art.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Traditionally, claim drafting has been the exclusive domain of
              experienced patent attorneys who develop intuition over years of
              practice. They learn to navigate the tension between breadth and
              validity, to anticipate examiner objections, and to construct
              claim hierarchies that provide fallback positions during
              prosecution.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              In 2026, AI patent claim generation tools are augmenting this
              process &mdash; not replacing the attorney&rsquo;s judgment, but
              amplifying their ability to explore more claim formulations, catch
              errors earlier, and draft claims that are prosecution-ready from
              the start. The key question is no longer whether to use AI in
              claim drafting, but how to use it most effectively.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Section 2 */}
          <section id="why-claims-critical" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              2. Why Claim Drafting is the Most Critical Step in Patent Prosecution
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Among all elements of a patent application &mdash; specification,
              drawings, abstract, and claims &mdash; the claims are uniquely
              consequential. They define the legal scope of protection. Courts
              and patent offices worldwide interpret patents primarily through
              claim language when determining infringement or validity.
            </p>

            <div className="bg-[#F5F0E8] p-8 mb-6">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#C5A44E] mb-4">
                Why Claims Matter Most
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-[#C5A44E] font-bold mt-0.5">&#10003;</span>
                  <p className="text-[15px] text-[#333] leading-relaxed">
                    <strong>Legal boundaries:</strong> Claims are the only part
                    of a patent that defines enforceable rights. A broad
                    specification means nothing without claims that capture the
                    inventive scope.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#C5A44E] font-bold mt-0.5">&#10003;</span>
                  <p className="text-[15px] text-[#333] leading-relaxed">
                    <strong>Prosecution trajectory:</strong> The initial claim
                    set determines the entire prosecution path. Poorly drafted
                    claims lead to more office actions, longer pendency, and
                    higher costs.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#C5A44E] font-bold mt-0.5">&#10003;</span>
                  <p className="text-[15px] text-[#333] leading-relaxed">
                    <strong>Litigation value:</strong> During infringement
                    proceedings, claim construction (Markman hearings) often
                    determines the outcome before trial. Precise claim language
                    drafted upfront reduces litigation risk.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#C5A44E] font-bold mt-0.5">&#10003;</span>
                  <p className="text-[15px] text-[#333] leading-relaxed">
                    <strong>Portfolio strategy:</strong> Each claim in a patent
                    portfolio serves a strategic purpose. Independent claims
                    provide broad coverage while dependent claims create
                    fallback positions and strengthen the overall portfolio.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Given this outsized importance, even small improvements in claim
              quality yield disproportionate returns. This is precisely where
              AI claim drafting technology delivers the most value &mdash; by
              helping attorneys draft claims that are cleaner, broader, and
              more prosecution-resilient from day one.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Section 3 */}
          <section id="how-ai-assists" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              3. How AI Assists in Claim Drafting
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              AI claim writing tools assist patent attorneys across three
              primary dimensions: language generation, prior art awareness,
              and scope optimization. Understanding each capability helps
              attorneys extract maximum value from these tools.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Language Generation
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Modern AI models trained on patent corpora can generate
              technically precise claim language from invention disclosures,
              technical descriptions, or even rough notes. The AI understands
              patent drafting conventions &mdash; transitional phrases
              (&ldquo;comprising,&rdquo; &ldquo;consisting of,&rdquo;
              &ldquo;consisting essentially of&rdquo;), claim structure (preamble,
              transitional phrase, body), and the distinction between apparatus
              and method claims.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Rather than starting from a blank page, attorneys receive
              well-structured draft claims that follow proper formatting
              conventions. This shifts the attorney&rsquo;s role from initial
              generation to strategic refinement &mdash; a far more effective
              use of their expertise.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Prior Art Awareness
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              The most advanced AI patent claim generation tools don&rsquo;t
              draft claims in a vacuum. They cross-reference claim language
              against prior art databases in real time, flagging potential
              novelty or obviousness issues before the attorney finalizes the
              claim set. This prior-art-aware drafting significantly reduces
              the risk of filing claims that will face immediate 102 or 103
              rejections.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Scope Optimization
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              AI tools can analyze the landscape of prior art and suggest
              optimal claim breadth. They identify which limitations are
              necessary to distinguish over the closest prior art and which
              can be broadened or removed. This patent claim optimization
              capability helps attorneys find the ideal balance between
              coverage and patentability.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Section 4 */}
          <section id="independent-vs-dependent" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              4. Independent vs Dependent Claims: AI&rsquo;s Role
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              A well-constructed claim set requires careful interplay between
              independent and dependent claims. Each serves a distinct
              strategic purpose, and AI tools handle them differently.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Independent Claims AI Drafting
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Independent claims define the broadest scope of protection.
              AI assists by generating multiple independent claim variations
              &mdash; apparatus, method, and system claims &mdash; each
              approaching the invention from a different angle. The attorney
              then selects and refines the most strategically valuable
              formulations.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              AI is particularly effective at generating independent claims
              that cover different statutory categories (35 U.S.C. &sect;101
              categories: process, machine, manufacture, composition of matter)
              from a single invention disclosure. This ensures comprehensive
              protection that might otherwise require multiple drafting
              iterations.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Dependent Claims AI Drafting
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Dependent claims add specific limitations that narrow the scope
              of their parent claims. AI excels at generating comprehensive
              dependent claim trees by analyzing the specification and
              identifying every distinct feature that can serve as an
              additional limitation.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              This is one area where AI claim drafting delivers outsized value.
              Manually constructing a complete dependent claim tree is
              tedious and error-prone. Attorneys often under-draft dependent
              claims due to time constraints, leaving prosecution fallback
              positions on the table. AI generates exhaustive dependent claim
              sets in seconds, giving the attorney more material to work with
              strategically.
            </p>

            <div className="bg-[#F5F0E8] p-8 mb-6">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#C5A44E] mb-4">
                AI&rsquo;s Value in Claim Hierarchy Construction
              </p>
              <div className="space-y-2">
                {[
                  "Generates 3-5 independent claim variations across statutory categories",
                  "Produces 15-25 dependent claims from a single specification",
                  "Ensures proper antecedent basis throughout the claim tree",
                  "Identifies missing dependent claims that strengthen fallback positions",
                  "Flags redundant or overlapping dependent claims",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#C5A44E] font-bold mt-0.5">&#10003;</span>
                    <p className="text-[15px] text-[#333] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Section 5 */}
          <section id="scope-optimization" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              5. AI-Powered Claim Scope Optimization
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Claim scope optimization is the most strategically valuable
              application of AI in patent claim drafting. The goal is to
              draft claims that occupy the maximum allowable scope &mdash;
              broad enough to deter competitors, narrow enough to survive
              examination.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              AI patent claim optimization tools achieve this by performing
              three concurrent analyses:
            </p>

            <div className="space-y-6 mb-6">
              <div className="border-l-2 border-[#C5A44E] pl-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-2">Prior Art Gap Analysis</h4>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  The AI maps the invention against the nearest prior art
                  references and identifies the &ldquo;white space&rdquo;
                  &mdash; the novel territory where claims can be positioned.
                  It suggests claim language that maximally occupies this
                  white space without overlapping with existing art.
                </p>
              </div>
              <div className="border-l-2 border-[#C5A44E] pl-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-2">Limitation Sensitivity Analysis</h4>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  For each limitation in a claim, the AI evaluates what
                  happens if it is broadened, narrowed, or removed entirely.
                  This helps attorneys understand which limitations are
                  load-bearing (necessary for patentability) and which are
                  unnecessarily narrowing the claim scope.
                </p>
              </div>
              <div className="border-l-2 border-[#C5A44E] pl-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-2">Prosecution Outcome Modeling</h4>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  Advanced tools model how different claim formulations are
                  likely to fare during prosecution, based on historical
                  examination patterns for similar technology areas, art
                  units, and examiners. This predictive capability helps
                  attorneys choose claim strategies with higher allowance
                  probability.
                </p>
              </div>
            </div>

            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Patent claim strategy AI is not about finding a single
              &ldquo;correct&rdquo; claim scope. It provides attorneys with a
              richer understanding of the scope landscape, enabling more
              informed strategic decisions.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Section 6 */}
          <section id="avoiding-pitfalls" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              6. Avoiding Common Claim Drafting Pitfalls with AI
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              A significant portion of office actions stem from claim drafting
              errors that are entirely preventable. AI claim drafting tools
              excel at catching these issues before filing, reducing
              prosecution costs and pendency times.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Antecedent Basis Errors
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Every element introduced in a claim must have proper antecedent
              basis. The first reference uses &ldquo;a&rdquo; or
              &ldquo;an,&rdquo; and subsequent references use
              &ldquo;the&rdquo; or &ldquo;said.&rdquo; Violations result in
              35 U.S.C. &sect;112(b) indefiniteness rejections. AI tools
              automatically track every element introduction and reference
              across the entire claim set, flagging violations instantly.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Section 112 Issues
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Beyond antecedent basis, &sect;112 rejections arise from
              insufficient written description support (&sect;112(a)),
              indefinite claim language (&sect;112(b)), and lack of enablement.
              AI tools cross-reference every claim term against the
              specification to verify that each limitation has adequate
              written description support and that the specification enables
              the full scope of the claims.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              Means-Plus-Function Traps
            </h3>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Claims that use &ldquo;means for&rdquo; language invoke
              &sect;112(f), limiting the claim scope to the structures
              disclosed in the specification and their equivalents. Attorneys
              sometimes inadvertently trigger means-plus-function interpretation
              through ambiguous language. AI tools flag potential
              means-plus-function invocations and suggest alternative
              structural language that avoids the &sect;112(f) trap while
              maintaining appropriate claim breadth.
            </p>

            <div className="bg-[#F5F0E8] p-8 mb-6 mt-8">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#C5A44E] mb-4">
                Common Pitfalls AI Catches Before Filing
              </p>
              <div className="space-y-2">
                {[
                  "Missing antecedent basis for claim elements",
                  "Indefinite language (\"approximately,\" \"substantially\" without definition)",
                  "Claim terms not supported by the specification",
                  "Inadvertent means-plus-function invocations",
                  "Inconsistent terminology between claims and specification",
                  "Improper multiple dependent claim formatting",
                  "Missing transitional phrases or structural claim elements",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#C5A44E] font-bold mt-0.5">&#10003;</span>
                    <p className="text-[15px] text-[#333] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Section 7 */}
          <section id="patmaster-amendment-engine" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              7. How PatMaster&rsquo;s Claim Amendment Engine Works
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              PatMaster by Cosmos Tech approaches claim drafting and amendment
              as an integrated workflow rather than isolated tasks. The Claim
              Amendment Engine is built on the principle that drafting and
              prosecution are parts of a continuous feedback loop &mdash; claims
              drafted with prosecution awareness require fewer amendments, and
              amendments informed by initial drafting context are more
              strategically sound.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              How It Works
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#1A1A1A] font-serif text-sm font-bold text-[#C5A44E]">
                  1
                </span>
                <div>
                  <p className="font-semibold text-[#1A1A1A] mb-1">Invention Intake</p>
                  <p className="text-[15px] text-[#444] leading-relaxed">
                    The attorney provides an invention disclosure, technical
                    description, or prior application. PatMaster parses the
                    inventive concept, identifies key technical features, and
                    maps the relevant prior art landscape.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#1A1A1A] font-serif text-sm font-bold text-[#C5A44E]">
                  2
                </span>
                <div>
                  <p className="font-semibold text-[#1A1A1A] mb-1">Claim Generation</p>
                  <p className="text-[15px] text-[#444] leading-relaxed">
                    The engine generates multiple independent claim sets across
                    statutory categories, along with comprehensive dependent
                    claim trees. Each claim is drafted with awareness of the
                    identified prior art, optimizing for both breadth and
                    patentability.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#1A1A1A] font-serif text-sm font-bold text-[#C5A44E]">
                  3
                </span>
                <div>
                  <p className="font-semibold text-[#1A1A1A] mb-1">Validation &amp; Error Checking</p>
                  <p className="text-[15px] text-[#444] leading-relaxed">
                    Every generated claim passes through automated checks for
                    antecedent basis, &sect;112 compliance, means-plus-function
                    issues, specification support, and consistency across the
                    claim set.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#1A1A1A] font-serif text-sm font-bold text-[#C5A44E]">
                  4
                </span>
                <div>
                  <p className="font-semibold text-[#1A1A1A] mb-1">Prosecution-Ready Amendments</p>
                  <p className="text-[15px] text-[#444] leading-relaxed">
                    When office actions are received, the Claim Amendment Engine
                    analyzes the examiner&rsquo;s rejections against the
                    original claim set and specification, suggests targeted
                    amendments that overcome rejections while preserving maximum
                    scope, and generates supporting arguments for the response.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              This end-to-end approach means that PatMaster&rsquo;s claim
              amendments aren&rsquo;t generated in isolation &mdash; they
              account for the full prosecution history, the prior art record,
              and the strategic goals established during initial drafting.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Section 8 */}
          <section id="multi-jurisdiction" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              8. Multi-Jurisdiction Claim Considerations: US vs EP vs India
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              Patent claim drafting requirements differ significantly across
              jurisdictions. What constitutes a valid claim format at the
              USPTO may be rejected at the EPO or the Indian Patent Office.
              AI tools that support multi-jurisdiction drafting must account
              for these differences natively.
            </p>

            {/* US */}
            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              United States (USPTO)
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "Multiple dependent claims are allowed but attract additional fees",
                "Means-plus-function claiming under \u00a7112(f) is available but construed narrowly",
                "No restriction on the number of independent claims (excess claim fees apply beyond 3 independent / 20 total)",
                "Functional claiming is broadly permitted with proper specification support",
                "Markush group claims are accepted for chemical/materials inventions",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-[#444] leading-relaxed">
                  <span className="text-[#C5A44E] mt-1">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* EP */}
            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              European Patent Office (EPO)
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "Claims must follow the two-part form (prior art portion + characterizing portion) under Rule 43(1) EPC",
                "Fees increase significantly after 15 claims",
                "Software-related claims must demonstrate a \"technical effect\" beyond mere data processing",
                "Multiple dependent claims referring to other multiple dependent claims are not permitted",
                "Clarity requirements under Article 84 EPC are strictly enforced",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-[#444] leading-relaxed">
                  <span className="text-[#C5A44E] mt-1">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* India */}
            <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3 mt-8">
              India (Indian Patent Office)
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "Claims must relate to a single invention or a group of inventions forming a single inventive concept (Section 10(5))",
                "Software per se is not patentable under Section 3(k); claims must emphasize technical contribution",
                "Method of medical treatment claims are excluded under Section 3(i)",
                "Total claim count affects filing fees; strategic dependent claim selection is critical",
                "Claims must be clear, succinct, and fairly based on the specification",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-[#444] leading-relaxed">
                  <span className="text-[#C5A44E] mt-1">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              AI tools like PatMaster automatically adapt claim structure,
              formatting, and language conventions based on the target
              jurisdiction. When filing the same invention in multiple
              jurisdictions, the AI generates jurisdiction-specific claim
              sets from a single invention disclosure &mdash; ensuring
              compliance without requiring the attorney to manually rewrite
              claims for each office.
            </p>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Section 9 */}
          <section id="best-practices" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              9. Best Practices: Combining AI with Attorney Expertise
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              The most effective approach to AI claim drafting is not
              automation but collaboration. AI handles the generation,
              validation, and optimization; the attorney provides strategic
              direction, technical understanding, and legal judgment. Here
              are the practices that leading IP teams follow in 2026:
            </p>

            <div className="space-y-6 mb-6">
              <div className="border-l-2 border-[#C5A44E] pl-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-2">
                  Start with a Clear Invention Disclosure
                </h4>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  AI output quality is directly proportional to input quality.
                  Provide detailed technical descriptions, identify the
                  inventive contribution clearly, and specify the intended
                  scope of protection. A well-structured invention disclosure
                  produces dramatically better AI-generated claims.
                </p>
              </div>
              <div className="border-l-2 border-[#C5A44E] pl-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-2">
                  Use AI for the First Draft, Not the Final Draft
                </h4>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  Let the AI generate the initial claim set &mdash; multiple
                  independent claims, comprehensive dependent claim trees,
                  different statutory categories. Then apply your expertise
                  to select, refine, and reshape the claims for the specific
                  prosecution strategy.
                </p>
              </div>
              <div className="border-l-2 border-[#C5A44E] pl-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-2">
                  Review AI-Suggested Scope Against Business Strategy
                </h4>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  AI optimizes for patentability, but the attorney must
                  optimize for business value. Consider competitive
                  landscape, enforcement goals, licensing strategy, and
                  portfolio positioning when deciding how to scope claims.
                </p>
              </div>
              <div className="border-l-2 border-[#C5A44E] pl-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-2">
                  Leverage AI Validation Before Filing
                </h4>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  Run the complete claim set through AI validation checks for
                  antecedent basis, &sect;112 compliance, specification support,
                  and consistency. This automated pre-filing review catches
                  errors that even experienced practitioners miss under time
                  pressure.
                </p>
              </div>
              <div className="border-l-2 border-[#C5A44E] pl-6">
                <h4 className="font-semibold text-[#1A1A1A] mb-2">
                  Maintain Prosecution Continuity
                </h4>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  Use platforms like PatMaster that maintain context across
                  the entire prosecution lifecycle. When amendments are needed,
                  the AI should understand the original drafting strategy, the
                  prior art record, and the prosecution history &mdash; not
                  just the latest office action in isolation.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Section 10 - FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              10. Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-[#F5F0E8] p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">
                  Can AI draft patent claims without attorney review?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  No. AI tools generate high-quality claim drafts, but all
                  AI-generated claims require thorough attorney review before
                  filing. The USPTO requires that practitioners signing patent
                  applications take full responsibility for the content. AI
                  serves as a drafting accelerator, not a replacement for
                  legal judgment and professional responsibility.
                </p>
              </div>

              <div className="bg-[#F5F0E8] p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">
                  How does AI help avoid Section 112 rejections?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  AI claim drafting tools automatically check for antecedent
                  basis errors, flag indefinite language, detect unsupported
                  means-plus-function limitations, and verify that every claim
                  term has proper support in the specification. This proactive
                  checking catches issues that frequently lead to &sect;112(a)
                  and &sect;112(b) rejections before filing.
                </p>
              </div>

              <div className="bg-[#F5F0E8] p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">
                  What is claim scope optimization and how does AI assist?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  Claim scope optimization is the process of drafting claims
                  that are broad enough to provide meaningful protection while
                  narrow enough to be patentable over prior art. AI assists
                  by analyzing prior art databases in real time, suggesting
                  broader alternative language, identifying potential narrowing
                  amendments, and modeling how different claim formulations
                  might fare during prosecution.
                </p>
              </div>

              <div className="bg-[#F5F0E8] p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">
                  Does PatMaster support multi-jurisdiction claim drafting?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  Yes. PatMaster by Cosmos Tech supports claim drafting for
                  USPTO, EPO, Indian Patent Office, and PCT filings. It
                  automatically adjusts claim formatting, language conventions,
                  and structural requirements based on the target jurisdiction,
                  ensuring compliance with each office&rsquo;s specific rules
                  and fee structures.
                </p>
              </div>

              <div className="bg-[#F5F0E8] p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">
                  How much time does AI save in patent claim drafting?
                </h3>
                <p className="text-[15px] text-[#444] leading-relaxed">
                  AI-assisted claim drafting typically reduces the time spent
                  on initial claim generation by 60&ndash;80%. Tasks that
                  traditionally took 8&ndash;15 hours for a complete claim
                  set can be completed in 2&ndash;4 hours with AI assistance,
                  including generating independent claims, dependent claim
                  trees, and multi-dependent claim structures. The time savings
                  compound when drafting for multiple jurisdictions.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-black/5 mb-16" />

          {/* Conclusion + CTA */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              Conclusion
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              AI claim drafting is not a future possibility &mdash; it is a
              present reality reshaping how patent attorneys work. The
              attorneys and firms that adopt AI-assisted claim drafting
              practices in 2026 are producing higher-quality claims, reducing
              prosecution costs, and securing broader protection for their
              clients.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-6">
              The key is choosing the right tool and using it effectively.
              AI handles generation, validation, and optimization; the attorney
              provides strategy, judgment, and accountability. Together, they
              produce claim sets that neither could achieve alone.
            </p>

            <div className="bg-[#1A1A1A] p-8 text-center">
              <p className="text-white font-serif text-xl mb-3">
                Ready to Transform Your Claim Drafting Workflow?
              </p>
              <p className="text-[#999] text-[15px] leading-relaxed mb-6 max-w-xl mx-auto">
                PatMaster by Cosmos Tech gives IP attorneys AI-powered claim
                generation, scope optimization, and multi-jurisdiction
                compliance &mdash; all in a single platform built for patent
                prosecution.
              </p>
              <a
                href="mailto:contact@cosmos.com?subject=PatMaster%20Demo%20Request%20%E2%80%93%20Claim%20Drafting&body=Hi%20Cosmos%20Team%2C%0A%0AI%20read%20your%20article%20on%20AI%20claim%20drafting%20and%20would%20like%20to%20request%20a%20demo%20of%20PatMaster.%0A%0AThank%20you."
                className="inline-block bg-[#C5A44E] text-[#1A1A1A] px-8 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-[#d4b65e] transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </section>
        </article>
      </div>

      {/* Footer */}
      <footer className="bg-[#111] text-[#666] px-6 py-8 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.2em] text-white hover:text-[#C5A44E] transition-colors"
          >
            COSMOS
          </Link>
          <p className="text-xs">
            &copy; 2026 Cosmos Tech, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
