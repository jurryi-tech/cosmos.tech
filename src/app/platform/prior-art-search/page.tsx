"use client";

import { HiOutlineMagnifyingGlass, HiOutlineBookOpen, HiOutlineChartBar, HiOutlineClipboardDocumentList, HiOutlineMap, HiOutlineSignal } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function PriorArtSearchPage() {
  return (
    <PageTemplate
      category="Platform"
      title="Prior Art Search"
      subtitle="AI-Powered Search Across Global Patent Databases"
      description="Cosmos's Prior Art Search engine scours over 150 million patent documents and non-patent literature sources worldwide using advanced semantic understanding — not just keyword matching. Uncover the most relevant prior art in seconds, generate detailed relevance reports, and build airtight prosecution strategies grounded in comprehensive landscape intelligence."
      features={[
        {
          title: "Semantic Search",
          description: "Goes beyond traditional keyword matching by understanding the conceptual meaning of inventions, identifying semantically similar prior art across different terminology, languages, and technical domains that keyword searches routinely miss.",
          icon: <HiOutlineMagnifyingGlass size={20} />,
          cardType: "stat",
          cardData: { value: "2.4M", label: "patents indexed", change: "+12K daily" },
        },
        {
          title: "Patent & Non-Patent Literature",
          description: "Searches across global patent databases, scientific journals, conference proceedings, white papers, technical standards, and open-source repositories to ensure comprehensive prior art coverage across all relevant disclosure categories.",
          icon: <HiOutlineBookOpen size={20} />,
          cardType: "chart",
          cardData: { bars: [85, 72, 68, 90, 55, 78, 82], labels: ["US", "EP", "JP", "CN", "KR", "IN", "WO"] },
        },
        {
          title: "Automated Relevance Scoring",
          description: "Assigns intelligent relevance scores to each reference based on claim-level overlap, technical similarity, and temporal proximity — surfacing the most critical prior art first and eliminating hours of manual review.",
          icon: <HiOutlineChartBar size={20} />,
          cardType: "metric",
          cardData: { value: 94, max: 100, label: "relevance accuracy" },
        },
        {
          title: "Claim Charting",
          description: "Automatically generates element-by-element claim charts mapping prior art disclosures against each claim limitation, providing structured evidence for patentability assessments, invalidity analyses, and freedom-to-operate opinions.",
          icon: <HiOutlineClipboardDocumentList size={20} />,
          cardType: "list",
          cardData: { items: ["Element mapping", "Reference linking", "Gap identification", "Export ready"] },
        },
        {
          title: "Landscape Analysis",
          description: "Visualizes the competitive patent landscape with interactive maps showing filing trends, key assignees, technology clusters, and white space opportunities to inform strategic IP portfolio decisions and R&D investments.",
          icon: <HiOutlineMap size={20} />,
          cardType: "comparison",
          cardData: { before: "2 weeks", after: "4 hours", improvement: "93% faster" },
        },
        {
          title: "Real-Time Monitoring",
          description: "Continuously monitors newly published patent applications and grants across all major jurisdictions, alerting you to emerging prior art, competitor filings, and potential infringement risks as they appear.",
          icon: <HiOutlineSignal size={20} />,
          cardType: "timeline",
          cardData: { steps: ["Set alerts", "AI monitors", "Notify"] },
        },
      ]}
      howItHelps={{
        attorneys:
          "Empowers strategic prosecution by delivering comprehensive prior art landscapes in minutes rather than days, enabling attorneys to craft stronger arguments for patentability, anticipate examiner rejections, and build more defensible patent portfolios.",
        drafters:
          "Enables drafting around known prior art from the outset by providing detailed prior art context before pen hits paper, resulting in applications that clearly distinguish over the closest references and minimize office action exposure.",
        engineers:
          "Identifies gaps in the existing IP landscape where novel innovations can be protected, helps prioritize R&D efforts toward patentable inventions, and surfaces competitor activity in adjacent technology spaces.",
      }}
      accentColor="#4E8BC5"
    />
  );
}
