"use client";

import { HiOutlineDocumentText, HiOutlineAdjustmentsHorizontal, HiOutlineShieldCheck, HiOutlineGlobeAlt, HiOutlineLink, HiOutlineCog6Tooth } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function AIPatentDrafterPage() {
  return (
    <PageTemplate
      category="Platform"
      title="AI Patent Drafter"
      subtitle="Prosecution-Ready Applications, Drafted in Minutes"
      description="Cosmos's AI Patent Drafter transforms invention disclosures into complete, prosecution-ready patent applications with unprecedented speed and precision. Leveraging advanced language models trained on millions of granted patents, the drafter generates detailed specifications, optimized claim sets, and fully formatted applications that meet the exacting standards of patent offices worldwide — reducing drafting cycles from weeks to hours."
      features={[
        {
          title: "Specification Generation",
          description: "Automatically generates comprehensive patent specifications from invention disclosures, including detailed descriptions, embodiments, and technical drawings placeholders that meet USPTO and international filing requirements.",
          icon: <HiOutlineDocumentText size={20} />,
          cardType: "timeline",
          cardData: { steps: ["Disclosure", "AI Draft", "Review"] },
        },
        {
          title: "Claims Optimization",
          description: "Crafts strategically layered independent and dependent claims with optimal scope, balancing breadth of protection against prior art vulnerability while maintaining clear antecedent basis throughout the claim hierarchy.",
          icon: <HiOutlineAdjustmentsHorizontal size={20} />,
          cardType: "chart",
          cardData: { bars: [45, 72, 88, 65, 92, 78], labels: ["Ind.1", "Ind.2", "Dep.3", "Dep.4", "Dep.5", "Dep.6"] },
        },
        {
          title: "101 Compliance Engine",
          description: "Proactively analyzes draft applications against Section 101 eligibility requirements, identifying potential abstract idea or natural phenomenon rejections and suggesting technical integration language to strengthen patent eligibility.",
          icon: <HiOutlineShieldCheck size={20} />,
          cardType: "metric",
          cardData: { value: 96, max: 100, label: "101 compliance score" },
        },
        {
          title: "Multi-Jurisdiction Support",
          description: "Generates applications tailored to the specific requirements of USPTO, EPO, JPO, CNIPA, and KIPO, automatically adapting claim formats, unity of invention standards, and disclosure requirements for each jurisdiction.",
          icon: <HiOutlineGlobeAlt size={20} />,
          cardType: "list",
          cardData: { items: ["USPTO Format", "EPO Standards", "India S.3(k)", "PCT Compliance"] },
        },
        {
          title: "Prior Art Integration",
          description: "Seamlessly incorporates prior art references into the background section and distinguishes the invention, ensuring the specification adequately addresses the closest prior art while emphasizing novel and non-obvious aspects.",
          icon: <HiOutlineLink size={20} />,
          cardType: "comparison",
          cardData: { before: "15 hrs", after: "25 min", improvement: "97% faster" },
        },
        {
          title: "Auto Formatting",
          description: "Produces applications in patent-office-compliant formats with proper numbering, paragraph referencing, claim dependency notation, and formal language conventions — ready for direct filing without manual reformatting.",
          icon: <HiOutlineCog6Tooth size={20} />,
          cardType: "code",
          cardData: { lines: ["const spec = await draft({", "  invention: disclosure,", "  format: 'USPTO',", "  claims: optimized", "})"] },
        },
      ]}
      howItHelps={{
        attorneys:
          "Dramatically reduces review and revision time by delivering structurally sound first drafts with proper legal framework, claim hierarchy, and prosecution-ready language — allowing attorneys to focus on strategic claim positioning rather than structural corrections.",
        drafters:
          "Automates the transformation of raw invention disclosures into polished first drafts, handling specification structure, claim formatting, and formal patent language so drafters can concentrate on technical accuracy and inventive step articulation.",
        engineers:
          "Bridges the gap between technical innovation and patent language by automatically translating complex engineering concepts, algorithms, and system architectures into clear, legally precise patent descriptions that preserve full technical scope.",
      }}
      accentColor="#C5A44E"
    />
  );
}
