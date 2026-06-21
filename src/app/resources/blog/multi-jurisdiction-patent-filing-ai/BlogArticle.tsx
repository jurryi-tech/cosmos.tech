"use client";

import Link from "next/link";

const tableOfContents = [
  { id: "challenge", label: "1. The Challenge" },
  { id: "key-differences", label: "2. Patent Office Differences" },
  { id: "ai-simplifies", label: "3. How AI Simplifies Drafting" },
  { id: "uspto-filing", label: "4. USPTO Filing" },
  { id: "epo-filing", label: "5. EPO Filing" },
  { id: "india-filing", label: "6. Indian Patent Filing" },
  { id: "pct-filing", label: "7. PCT Applications" },
  { id: "patmaster-multi", label: "8. PatMaster for Multi-Jurisdiction" },
  { id: "cost-savings", label: "9. Cost & Time Savings" },
  { id: "faq", label: "FAQ" },
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
              International Patents
            </span>
            <span className="text-[13px] text-[#999]">March 8, 2026</span>
          </div>
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.15] text-[#1A1A1A] mb-6">
            Multi-Jurisdiction Patent Filing: How AI Handles USPTO, EPO, India
            &amp; PCT
          </h1>
          <p className="text-lg text-[#555] leading-relaxed mb-6">
            Filing patents across multiple jurisdictions is one of the most
            complex and expensive challenges in intellectual property law. Each
            patent office&mdash;USPTO, EPO, the Indian Patent Office, and the
            PCT system&mdash;has distinct requirements for claim format,
            patentability standards, and procedural compliance. This guide
            explores how AI is transforming multi-jurisdiction patent drafting
            and filing in 2026.
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

        {/* Main Content */}
        <article className="flex-1 max-w-3xl">
          {/* Section 1 */}
          <section id="challenge" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              1. The Challenge of Multi-Jurisdiction Patent Filing
            </h2>
            <p className="text-[#444] leading-[1.8] mb-4">
              For any company or inventor seeking global patent protection, the
              reality is daunting: there is no single &ldquo;world patent.&rdquo;
              Each country or regional office operates under its own patent law,
              examination guidelines, and procedural rules. A patent application
              that sails through the USPTO may face fundamental objections at the
              EPO or be rejected outright in India.
            </p>
            <p className="text-[#444] leading-[1.8] mb-4">
              The traditional approach to multi-jurisdiction patent filing
              involves hiring local agents in each country, manually adapting
              claims and specifications to meet jurisdiction-specific
              requirements, and managing overlapping deadlines across different
              prosecution timelines. This process is not only expensive&mdash;
              often exceeding $30,000&ndash;$50,000 per patent family&mdash;but
              also error-prone. A single compliance mistake can result in loss of
              rights in an entire jurisdiction.
            </p>
            <div className="bg-[#F5F0E8] p-6 my-8 border-l-4 border-[#C5A44E]">
              <p className="text-sm font-medium text-[#1A1A1A] mb-2">
                Key Statistic
              </p>
              <p className="text-[#444] text-sm leading-relaxed">
                According to WIPO data, PCT international applications exceeded
                278,000 in 2025. Yet fewer than 15% of applicants leverage AI
                tools for jurisdiction-specific adaptation&mdash;leaving
                significant cost and time savings on the table.
              </p>
            </div>
            <p className="text-[#444] leading-[1.8]">
              The core challenges include: divergent claim format requirements
              (two-part claims at the EPO vs. independent claims at the USPTO),
              different patentable subject matter exclusions (Section 3(k) in
              India, Alice/Mayo in the US), varying disclosure standards, and
              incompatible prosecution procedures. AI-powered patent filing tools
              are now capable of addressing all of these simultaneously.
            </p>
          </section>

          {/* Section 2 */}
          <section id="key-differences" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              2. Understanding Key Patent Office Differences: USPTO vs EPO vs
              India vs PCT
            </h2>
            <p className="text-[#444] leading-[1.8] mb-6">
              Before exploring how AI handles multi-jurisdiction filing, it is
              essential to understand the fundamental differences between the
              major patent offices.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A1A1A] text-white">
                    <th className="text-left p-3 font-medium">Requirement</th>
                    <th className="text-left p-3 font-medium">USPTO</th>
                    <th className="text-left p-3 font-medium">EPO</th>
                    <th className="text-left p-3 font-medium">India</th>
                    <th className="text-left p-3 font-medium">PCT</th>
                  </tr>
                </thead>
                <tbody className="text-[#444]">
                  <tr className="border-b border-black/5">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      Claim Format
                    </td>
                    <td className="p-3">
                      Independent + dependent; no required structure
                    </td>
                    <td className="p-3">
                      Two-part form (preamble + characterizing portion)
                    </td>
                    <td className="p-3">
                      Similar to UK practice; no strict two-part requirement
                    </td>
                    <td className="p-3">
                      Flexible; adapted during national phase entry
                    </td>
                  </tr>
                  <tr className="border-b border-black/5 bg-[#F5F0E8]/50">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      Software Patents
                    </td>
                    <td className="p-3">
                      Allowed if passing Alice/Mayo test (abstract idea +
                      something more)
                    </td>
                    <td className="p-3">
                      Allowed if &ldquo;further technical effect&rdquo; beyond
                      normal software execution
                    </td>
                    <td className="p-3">
                      Excluded under Section 3(k) unless technical effect shown
                    </td>
                    <td className="p-3">
                      Depends on designated offices
                    </td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      Unity of Invention
                    </td>
                    <td className="p-3">
                      Restriction requirement (relatively flexible)
                    </td>
                    <td className="p-3">
                      Strict unity of invention; single inventive concept
                    </td>
                    <td className="p-3">
                      Unity requirement similar to EPO
                    </td>
                    <td className="p-3">
                      International unity assessment; may differ at national
                      phase
                    </td>
                  </tr>
                  <tr className="border-b border-black/5 bg-[#F5F0E8]/50">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      Disclosure Standard
                    </td>
                    <td className="p-3">
                      Written description + enablement + best mode
                    </td>
                    <td className="p-3">
                      Sufficiency of disclosure (no best mode)
                    </td>
                    <td className="p-3">
                      Sufficiency; best method of performing invention
                    </td>
                    <td className="p-3">
                      Must satisfy requirements of all designated offices
                    </td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      Grace Period
                    </td>
                    <td className="p-3">12 months</td>
                    <td className="p-3">
                      None (absolute novelty)
                    </td>
                    <td className="p-3">
                      Limited (government-published, learned societies only)
                    </td>
                    <td className="p-3">Depends on designated offices</td>
                  </tr>
                  <tr className="bg-[#F5F0E8]/50">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      Continuation Practice
                    </td>
                    <td className="p-3">
                      Continuations, CIPs, divisionals freely available
                    </td>
                    <td className="p-3">
                      Divisionals only; no continuation-in-part
                    </td>
                    <td className="p-3">Divisionals only</td>
                    <td className="p-3">N/A at international phase</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#444] leading-[1.8]">
              These differences mean that a &ldquo;one-size-fits-all&rdquo;
              patent application simply does not work. Each jurisdiction demands
              specific adaptations&mdash;and missing even one can jeopardize
              patent rights. This is precisely where AI patent filing tools
              provide the greatest value.
            </p>
          </section>

          {/* Section 3 */}
          <section id="ai-simplifies" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              3. How AI Simplifies Multi-Jurisdiction Drafting
            </h2>
            <p className="text-[#444] leading-[1.8] mb-4">
              AI patent filing tools address multi-jurisdiction complexity
              through several key capabilities:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-[#F5F0E8] p-5 border-l-4 border-[#C5A44E]">
                <p className="font-medium text-[#1A1A1A] mb-1">
                  Jurisdiction-Aware Claim Generation
                </p>
                <p className="text-sm text-[#444] leading-relaxed">
                  AI models trained on jurisdiction-specific patent corpora can
                  generate claims that comply with the format and substantive
                  requirements of each office. For example, automatically
                  converting a USPTO-style independent claim into EPO two-part
                  form, or restructuring software claims to navigate India&apos;s
                  Section 3(k).
                </p>
              </div>
              <div className="bg-[#F5F0E8] p-5 border-l-4 border-[#C5A44E]">
                <p className="font-medium text-[#1A1A1A] mb-1">
                  Automated Compliance Checking
                </p>
                <p className="text-sm text-[#444] leading-relaxed">
                  Rather than relying on attorneys to manually verify compliance
                  with each office&apos;s rules, AI can flag issues
                  automatically: missing reference signs in EPO claims, unity of
                  invention problems, disclosure sufficiency gaps, or
                  subject-matter eligibility risks.
                </p>
              </div>
              <div className="bg-[#F5F0E8] p-5 border-l-4 border-[#C5A44E]">
                <p className="font-medium text-[#1A1A1A] mb-1">
                  Single-Input, Multi-Output Drafting
                </p>
                <p className="text-sm text-[#444] leading-relaxed">
                  The most advanced AI patent drafting platforms accept a single
                  invention disclosure and produce jurisdiction-specific drafts
                  simultaneously. This eliminates the traditional workflow of
                  drafting for one office and then paying for manual adaptation
                  to others.
                </p>
              </div>
              <div className="bg-[#F5F0E8] p-5 border-l-4 border-[#C5A44E]">
                <p className="font-medium text-[#1A1A1A] mb-1">
                  Consistency Maintenance
                </p>
                <p className="text-sm text-[#444] leading-relaxed">
                  When claims are adapted for different jurisdictions, AI
                  ensures that the underlying specification supports all claim
                  variants. This prevents the common problem of claim amendments
                  in one jurisdiction creating added-matter issues or
                  unsupported limitations in another.
                </p>
              </div>
            </div>
            <p className="text-[#444] leading-[1.8]">
              The result is a fundamentally different workflow: instead of
              sequential, manual adaptation, patent practitioners get parallel,
              AI-assisted generation with built-in compliance verification.
            </p>
          </section>

          {/* Section 4 - USPTO */}
          <section id="uspto-filing" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              4. USPTO Filing: AI Considerations for US Patent Applications
            </h2>
            <p className="text-[#444] leading-[1.8] mb-4">
              The United States Patent and Trademark Office remains the world&apos;s
              most active patent office for AI-related applications. When using
              AI for USPTO patent filing, several US-specific considerations
              come into play:
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Alice/Mayo Subject Matter Eligibility
            </h3>
            <p className="text-[#444] leading-[1.8] mb-4">
              The two-step Alice/Mayo framework remains the primary hurdle for
              software and AI-related patent applications at the USPTO. AI
              drafting tools must generate claims that: (1) avoid being
              characterized as directed to an abstract idea, law of nature, or
              natural phenomenon, and (2) include elements that amount to
              &ldquo;significantly more&rdquo; than the judicial exception.
            </p>
            <p className="text-[#444] leading-[1.8] mb-4">
              Effective AI patent filing tools analyze claim language against
              patterns from successful 101 rejections and allowances, suggesting
              specific technical implementation details that strengthen
              eligibility arguments.
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Written Description and Enablement
            </h3>
            <p className="text-[#444] leading-[1.8] mb-4">
              The USPTO&apos;s heightened written description requirements
              (particularly post-<em>Ariad</em>) demand that specifications
              demonstrate &ldquo;possession&rdquo; of the claimed invention. AI
              tools can automatically generate detailed embodiments, flowcharts,
              and implementation examples that satisfy these requirements, while
              ensuring that the description supports the full scope of the
              claims.
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Continuation Strategy
            </h3>
            <p className="text-[#444] leading-[1.8]">
              Unlike other jurisdictions, the USPTO allows continuation and
              continuation-in-part applications. AI tools can draft
              specifications with sufficient breadth to support future
              continuation filings, identifying potential claim variations and
              ensuring adequate disclosure support for portfolio expansion.
            </p>
          </section>

          {/* Section 5 - EPO */}
          <section id="epo-filing" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              5. EPO Filing: AI for European Patent Applications
            </h2>
            <p className="text-[#444] leading-[1.8] mb-4">
              European Patent Office filing introduces unique challenges that AI
              patent filing tools must navigate carefully:
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Two-Part Claim Format
            </h3>
            <p className="text-[#444] leading-[1.8] mb-4">
              Rule 43(1) EPC requires claims in two-part form: a preamble
              stating the prior art, followed by a characterizing portion
              introduced by &ldquo;characterized in that&rdquo; or
              &ldquo;wherein the improvement comprises.&rdquo; AI tools must
              automatically identify what constitutes known prior art versus the
              novel contribution, and restructure claims accordingly. This is a
              non-trivial task that requires understanding the closest prior art
              for each invention.
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Strict Unity of Invention
            </h3>
            <p className="text-[#444] leading-[1.8] mb-4">
              The EPO enforces unity of invention far more strictly than the
              USPTO. All claims in an application must relate to a single
              inventive concept linked by &ldquo;special technical
              features.&rdquo; AI tools can analyze claim sets to identify
              potential unity objections before filing, saving applicants the
              cost and delay of divisional applications.
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Added Matter (Article 123(2) EPC)
            </h3>
            <p className="text-[#444] leading-[1.8] mb-4">
              The EPO&apos;s prohibition on added matter is significantly
              stricter than the USPTO&apos;s new matter rules. Any amendment
              must be &ldquo;directly and unambiguously derivable&rdquo; from
              the application as filed. AI tools must ensure that specifications
              contain sufficient basis for all possible claim amendments, and
              flag any proposed changes that could trigger Article 123(2)
              objections.
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Technical Effect for Software Inventions
            </h3>
            <p className="text-[#444] leading-[1.8]">
              Under the EPO&apos;s &ldquo;any hardware&rdquo; approach and the
              <em> Comvik</em> framework, software inventions must demonstrate a
              &ldquo;further technical effect&rdquo; beyond the normal physical
              interactions of software running on hardware. AI drafting tools
              should emphasize technical problem-solution framing and ensure
              claims are tied to concrete technical implementations.
            </p>
          </section>

          {/* Section 6 - India */}
          <section id="india-filing" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              6. Indian Patent Filing: Navigating Section 3(k) with AI
            </h2>
            <p className="text-[#444] leading-[1.8] mb-4">
              India presents some of the most distinctive challenges for
              multi-jurisdiction patent filing, particularly for software and
              AI-related inventions. The Indian Patents Act, 1970 (as amended)
              contains several exclusions that do not exist in US or European
              law.
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Section 3(k): Computer Programmes Per Se
            </h3>
            <div className="bg-[#F5F0E8] p-6 my-6 border-l-4 border-[#C5A44E]">
              <p className="text-sm font-medium text-[#1A1A1A] mb-2">
                Section 3(k) of the Indian Patents Act
              </p>
              <p className="text-[#444] text-sm leading-relaxed italic">
                &ldquo;The following are not inventions within the meaning of
                this Act: ... (k) a computer programme per se or algorithms.&rdquo;
              </p>
            </div>
            <p className="text-[#444] leading-[1.8] mb-4">
              The critical phrase is &ldquo;per se.&rdquo; The Indian Patent
              Office&apos;s Computer Related Inventions (CRI) Guidelines clarify
              that software is patentable when it produces a &ldquo;technical
              effect&rdquo; or solves a &ldquo;technical problem.&rdquo; AI
              patent filing tools must automatically:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#444] leading-[1.8] mb-4">
              <li>
                Frame claims around the technical contribution, not the
                algorithm itself
              </li>
              <li>
                Emphasize hardware integration and physical-world effects in
                claim language
              </li>
              <li>
                Avoid claiming &ldquo;a method implemented by a computer
                program&rdquo; without substantial technical context
              </li>
              <li>
                Include system claims with specific hardware components when
                possible
              </li>
              <li>
                Ensure the specification describes the technical advancement
                over prior art, not merely a software implementation
              </li>
            </ul>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Section 3(d): New Forms of Known Substances
            </h3>
            <p className="text-[#444] leading-[1.8] mb-4">
              For pharmaceutical and chemical inventions, Section 3(d) imposes
              an additional hurdle not found in US or European law: new forms of
              known substances are not patentable unless they demonstrate
              &ldquo;significantly enhanced efficacy.&rdquo; AI drafting tools
              targeting India must flag potential 3(d) issues and suggest
              language that emphasizes efficacy improvements.
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Expedited Examination and Startup Benefits
            </h3>
            <p className="text-[#444] leading-[1.8]">
              India offers expedited examination for startups, small entities,
              and applicants claiming green technology. AI tools can identify
              eligibility for these fast-track pathways and prepare applications
              that maximize the chances of early grant. The Indian Patent Office
              has also been increasing its use of the Patent Prosecution Highway
              (PPH) with the JPO and other offices, which AI tools can
              incorporate into filing strategy recommendations.
            </p>
          </section>

          {/* Section 7 - PCT */}
          <section id="pct-filing" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              7. PCT Applications: AI-Assisted International Filing Strategy
            </h2>
            <p className="text-[#444] leading-[1.8] mb-4">
              The Patent Cooperation Treaty (PCT) system, administered by WIPO,
              provides a unified international filing mechanism that delays the
              cost and complexity of national phase entry by up to 30&ndash;31
              months from the priority date. AI patent filing tools can
              significantly enhance PCT strategy in several ways:
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Drafting for Multiple National Phases
            </h3>
            <p className="text-[#444] leading-[1.8] mb-4">
              The most effective PCT applications are drafted to satisfy the
              requirements of all intended national phase offices
              simultaneously. AI tools can analyze the target jurisdictions and
              generate a specification that provides sufficient support for
              jurisdiction-specific claim adaptations at national phase entry,
              without creating internal inconsistencies.
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              International Search Report (ISR) Optimization
            </h3>
            <p className="text-[#444] leading-[1.8] mb-4">
              The choice of International Searching Authority (ISA) affects the
              quality and focus of the ISR, which in turn influences national
              phase prosecution. AI tools can recommend the optimal ISA based on
              the technology field and target jurisdictions, and draft claims
              that are most likely to receive favorable preliminary opinions.
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Chapter II Demand Strategy
            </h3>
            <p className="text-[#444] leading-[1.8] mb-4">
              Filing a Chapter II Demand for International Preliminary
              Examination (IPEA) can strengthen the application before national
              phase entry. AI tools can analyze the written opinion from the ISA
              and recommend whether a Demand is strategically advantageous,
              draft claim amendments to address cited prior art, and prepare
              arguments that improve the IPRP (International Preliminary Report
              on Patentability).
            </p>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              National Phase Entry Planning
            </h3>
            <p className="text-[#444] leading-[1.8]">
              AI can model the cost, timeline, and strategic value of entering
              different national phases, helping applicants make informed
              decisions about where to pursue patent protection. This includes
              considering market size, competitor filing patterns, enforcement
              strength, and maintenance fee projections for each jurisdiction.
            </p>
          </section>

          {/* Section 8 - PatMaster */}
          <section id="patmaster-multi" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              8. How PatMaster Handles Multi-Jurisdiction Filing
            </h2>
            <p className="text-[#444] leading-[1.8] mb-4">
              <strong>PatMaster</strong> by Cosmos Tech was built from the
              ground up for multi-jurisdiction patent drafting and filing. Unlike
              tools that were designed for a single office and later adapted for
              international use, PatMaster&apos;s architecture treats
              jurisdiction-awareness as a core capability.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-[#1A1A1A] text-white p-5">
                <p className="font-medium text-[#C5A44E] mb-1 text-sm uppercase tracking-wider">
                  Single Disclosure, Multiple Outputs
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Submit one invention disclosure and PatMaster generates
                  jurisdiction-specific drafts for USPTO, EPO, India, and PCT
                  simultaneously. Each output is tailored to the target
                  office&apos;s claim format, disclosure standards, and
                  subject-matter eligibility requirements.
                </p>
              </div>
              <div className="bg-[#1A1A1A] text-white p-5">
                <p className="font-medium text-[#C5A44E] mb-1 text-sm uppercase tracking-wider">
                  Section 3(k) Compliance Engine
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  For Indian filings, PatMaster automatically restructures
                  software and AI claims to emphasize technical effects and
                  hardware integration, reducing Section 3(k) rejection risk.
                  The system flags claim language patterns that have historically
                  triggered CRI objections.
                </p>
              </div>
              <div className="bg-[#1A1A1A] text-white p-5">
                <p className="font-medium text-[#C5A44E] mb-1 text-sm uppercase tracking-wider">
                  EPO Two-Part Claim Conversion
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  PatMaster identifies the closest prior art from integrated
                  prior art search and automatically generates two-part claims
                  with appropriate preamble and characterizing portions,
                  compliant with Rule 43(1) EPC.
                </p>
              </div>
              <div className="bg-[#1A1A1A] text-white p-5">
                <p className="font-medium text-[#C5A44E] mb-1 text-sm uppercase tracking-wider">
                  Cross-Jurisdiction Consistency
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  When claims are adapted for different offices, PatMaster
                  verifies that the specification supports all claim variants
                  across jurisdictions. This prevents the costly problem of
                  claim amendments in one jurisdiction creating unsupported
                  limitations or added-matter issues in another.
                </p>
              </div>
              <div className="bg-[#1A1A1A] text-white p-5">
                <p className="font-medium text-[#C5A44E] mb-1 text-sm uppercase tracking-wider">
                  Privacy-First Architecture
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  All invention disclosures and draft applications are processed
                  with enterprise-grade security. Client data is never used to
                  train underlying models, ensuring confidentiality of
                  unpublished inventions across all jurisdictions.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F0E8] p-6 my-8 border-l-4 border-[#C5A44E]">
              <p className="text-sm font-medium text-[#1A1A1A] mb-2">
                Try PatMaster for Multi-Jurisdiction Filing
              </p>
              <p className="text-[#444] text-sm leading-relaxed mb-4">
                See how PatMaster generates jurisdiction-specific patent
                applications from a single invention disclosure. Request early
                access to explore multi-jurisdiction drafting, compliance
                checking, and prosecution support.
              </p>
              <a
                href="mailto:contact@cosmos.com?subject=PatMaster%20Multi-Jurisdiction%20Demo&body=Hi%20Cosmos%20Team%2C%0A%0AI%20am%20interested%20in%20a%20demo%20of%20PatMaster%27s%20multi-jurisdiction%20patent%20filing%20capabilities.%0A%0AThank%20you."
                className="inline-block bg-[#C5A44E] text-white px-5 py-2 text-sm font-medium hover:bg-[#b89443] transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </section>

          {/* Section 9 - Cost Savings */}
          <section id="cost-savings" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              9. Cost and Time Savings: AI vs Manual Multi-Jurisdiction Filing
            </h2>
            <p className="text-[#444] leading-[1.8] mb-6">
              The economic case for AI-assisted multi-jurisdiction patent filing
              is compelling. Below is a comparison of typical costs and
              timelines for filing a patent family across USPTO, EPO, and India:
            </p>

            {/* Cost Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A1A1A] text-white">
                    <th className="text-left p-3 font-medium">Task</th>
                    <th className="text-left p-3 font-medium">
                      Manual (Traditional)
                    </th>
                    <th className="text-left p-3 font-medium">
                      AI-Assisted (PatMaster)
                    </th>
                    <th className="text-left p-3 font-medium">Savings</th>
                  </tr>
                </thead>
                <tbody className="text-[#444]">
                  <tr className="border-b border-black/5">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      Initial draft (USPTO)
                    </td>
                    <td className="p-3">20&ndash;40 hrs / $8,000&ndash;$15,000</td>
                    <td className="p-3">3&ndash;6 hrs / $1,500&ndash;$3,000</td>
                    <td className="p-3 text-[#C5A44E] font-medium">
                      ~75&ndash;80%
                    </td>
                  </tr>
                  <tr className="border-b border-black/5 bg-[#F5F0E8]/50">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      EPO adaptation
                    </td>
                    <td className="p-3">8&ndash;15 hrs / $3,000&ndash;$6,000</td>
                    <td className="p-3">1&ndash;2 hrs / $500&ndash;$1,000</td>
                    <td className="p-3 text-[#C5A44E] font-medium">
                      ~80&ndash;85%
                    </td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      India adaptation (w/ 3(k) compliance)
                    </td>
                    <td className="p-3">6&ndash;12 hrs / $2,500&ndash;$5,000</td>
                    <td className="p-3">1&ndash;2 hrs / $500&ndash;$1,000</td>
                    <td className="p-3 text-[#C5A44E] font-medium">
                      ~75&ndash;80%
                    </td>
                  </tr>
                  <tr className="border-b border-black/5 bg-[#F5F0E8]/50">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      PCT application
                    </td>
                    <td className="p-3">5&ndash;10 hrs / $2,000&ndash;$4,000</td>
                    <td className="p-3">1&ndash;3 hrs / $500&ndash;$1,500</td>
                    <td className="p-3 text-[#C5A44E] font-medium">
                      ~70&ndash;75%
                    </td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="p-3 font-medium text-[#1A1A1A]">
                      Compliance review (all jurisdictions)
                    </td>
                    <td className="p-3">5&ndash;10 hrs / $2,000&ndash;$4,000</td>
                    <td className="p-3">1&ndash;2 hrs / $400&ndash;$800</td>
                    <td className="p-3 text-[#C5A44E] font-medium">
                      ~80%
                    </td>
                  </tr>
                  <tr className="bg-[#1A1A1A] text-white font-medium">
                    <td className="p-3">Total (3-jurisdiction family)</td>
                    <td className="p-3">44&ndash;87 hrs / $17,500&ndash;$34,000</td>
                    <td className="p-3">7&ndash;15 hrs / $3,400&ndash;$7,300</td>
                    <td className="p-3 text-[#C5A44E]">~75&ndash;80%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#444] leading-[1.8] mb-4">
              <strong>Note:</strong> These figures represent professional
              drafting and adaptation costs only. Official filing fees,
              translation costs, and local agent fees are additional and vary by
              jurisdiction. All estimates assume attorney review of AI-generated
              output.
            </p>
            <div className="bg-[#F5F0E8] p-6 my-8 border-l-4 border-[#C5A44E]">
              <p className="text-sm font-medium text-[#1A1A1A] mb-2">
                Beyond Cost Savings: Quality Improvements
              </p>
              <p className="text-[#444] text-sm leading-relaxed">
                The value of AI in multi-jurisdiction filing extends beyond cost
                reduction. AI-generated drafts tend to be more internally
                consistent across jurisdictions, contain fewer compliance errors
                that trigger office actions, and provide better specification
                support for claim amendments during prosecution. Firms using
                AI-assisted multi-jurisdiction drafting report 30&ndash;40%
                fewer office actions related to formal compliance issues.
              </p>
            </div>
            <h3 className="font-serif text-lg text-[#1A1A1A] mt-8 mb-3">
              Time-to-Filing Comparison
            </h3>
            <p className="text-[#444] leading-[1.8]">
              Traditional multi-jurisdiction drafting typically takes
              4&ndash;8 weeks from invention disclosure to filing-ready
              applications across three offices. With AI-assisted drafting, this
              timeline compresses to 1&ndash;2 weeks, including thorough
              attorney review. For PCT applications with multiple target
              national phases, the time savings are even more pronounced because
              the AI generates all jurisdiction-specific adaptations
              simultaneously during the initial drafting phase.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-black/5 pb-6">
                <h3 className="font-medium text-[#1A1A1A] mb-2">
                  Can I file the same patent application in multiple
                  jurisdictions simultaneously?
                </h3>
                <p className="text-sm text-[#444] leading-relaxed">
                  Yes, but each jurisdiction has different formal requirements,
                  claim formats, and substantive patentability standards. A PCT
                  application lets you file a single international application
                  and then enter national/regional phases (USPTO, EPO, India,
                  etc.) within 30&ndash;31 months. AI tools like PatMaster can
                  generate jurisdiction-adapted drafts from a single invention
                  disclosure, ensuring compliance with each office&apos;s
                  requirements from the start.
                </p>
              </div>
              <div className="border-b border-black/5 pb-6">
                <h3 className="font-medium text-[#1A1A1A] mb-2">
                  How does Section 3(k) of the Indian Patents Act affect
                  software patent filing?
                </h3>
                <p className="text-sm text-[#444] leading-relaxed">
                  Section 3(k) excludes &ldquo;computer programmes per
                  se&rdquo; from patentability in India. To patent
                  software-related inventions, you must frame claims around the
                  technical effect or technical contribution of the
                  software&mdash;not the algorithm itself. AI drafting tools
                  automatically restructure claims to emphasize hardware
                  integration and technical effects when targeting the Indian
                  Patent Office.
                </p>
              </div>
              <div className="border-b border-black/5 pb-6">
                <h3 className="font-medium text-[#1A1A1A] mb-2">
                  What are the main differences between USPTO and EPO patent
                  filing requirements?
                </h3>
                <p className="text-sm text-[#444] leading-relaxed">
                  Key differences include: the EPO enforces strict unity of
                  invention (one inventive concept per application), while the
                  USPTO uses a more flexible restriction/election process. The
                  EPO requires a two-part claim format (preamble + characterizing
                  portion), whereas the USPTO does not. The EPO also has
                  stricter requirements for added matter and does not allow
                  continuation practice the way the USPTO does.
                </p>
              </div>
              <div className="border-b border-black/5 pb-6">
                <h3 className="font-medium text-[#1A1A1A] mb-2">
                  How much does multi-jurisdiction patent filing cost with vs.
                  without AI?
                </h3>
                <p className="text-sm text-[#444] leading-relaxed">
                  Traditional multi-jurisdiction filing across USPTO, EPO, and
                  India typically costs $25,000&ndash;$50,000+ in professional
                  fees alone (excluding official fees). AI-assisted drafting
                  with platforms like PatMaster can reduce professional drafting
                  and adaptation time by 60&ndash;80%, potentially saving
                  $15,000&ndash;$30,000 per patent family. The biggest savings
                  come from automated claim adaptation and jurisdiction-specific
                  compliance checking.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="font-medium text-[#1A1A1A] mb-2">
                  What is the best AI tool for multi-jurisdiction patent filing
                  in 2026?
                </h3>
                <p className="text-sm text-[#444] leading-relaxed">
                  PatMaster by Cosmos Tech is the leading AI platform for
                  multi-jurisdiction patent filing in 2026. It supports USPTO,
                  EPO, Indian Patent Office, and PCT filings from a single
                  interface, with jurisdiction-specific claim adaptation,
                  automated compliance checking, and a privacy-first
                  architecture where client data is never used for model
                  training.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion + CTA */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">
              Conclusion
            </h2>
            <p className="text-[#444] leading-[1.8] mb-4">
              Multi-jurisdiction patent filing no longer needs to be a manual,
              error-prone, and prohibitively expensive process. AI patent filing
              tools&mdash;and PatMaster in particular&mdash;are making it
              possible to generate jurisdiction-specific, compliance-checked
              patent applications from a single invention disclosure. Whether
              you are navigating the EPO&apos;s two-part claim requirements,
              India&apos;s Section 3(k) software exclusions, or optimizing a
              PCT strategy for multiple national phases, AI provides a
              structured, efficient path forward.
            </p>
            <p className="text-[#444] leading-[1.8] mb-8">
              The firms and patent professionals who adopt AI-assisted
              multi-jurisdiction drafting in 2026 will not only reduce costs by
              60&ndash;80% but also improve the quality and consistency of their
              international patent portfolios. The question is no longer whether
              to use AI for multi-jurisdiction filing&mdash;it is how quickly
              you can integrate it into your practice.
            </p>
            <div className="bg-[#1A1A1A] p-8 text-center">
              <p className="text-white font-serif text-xl mb-3">
                Ready to simplify multi-jurisdiction patent filing?
              </p>
              <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">
                See how PatMaster generates USPTO, EPO, India, and PCT-ready
                applications from a single invention disclosure. Request early
                access today.
              </p>
              <a
                href="mailto:contact@cosmos.com?subject=PatMaster%20Access%20Request%20-%20Multi-Jurisdiction&body=Hi%20Cosmos%20Team%2C%0A%0AI%20am%20interested%20in%20PatMaster%20for%20multi-jurisdiction%20patent%20filing.%0A%0AThank%20you."
                className="inline-block bg-[#C5A44E] text-white px-8 py-3 text-sm font-medium hover:bg-[#b89443] transition-colors"
              >
                Request Access to PatMaster
              </a>
            </div>
          </section>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t border-black/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center bg-[#1A1A1A] font-serif text-xs font-bold text-[#FDFBF7]">
              J
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#999] uppercase">
              COSMOS
            </span>
          </div>
          <p className="text-xs text-[#999]">
            &copy; 2026 Cosmos Tech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
