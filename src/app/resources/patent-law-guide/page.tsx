"use client";

import { HiOutlineGlobeAmericas, HiOutlineScale, HiOutlineAdjustmentsHorizontal, HiOutlineMap, HiOutlinePencil, HiOutlineDocumentText } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function PatentLawGuidePage() {
  return (
    <PageTemplate
      category="Resources"
      title="Patent Law Guide"
      subtitle="Educational resources for patent law practitioners and innovators"
      description="Navigate the complexities of patent law with Cosmos's comprehensive legal reference library. Our guides distill decades of prosecution experience and current case law into actionable, practitioner-focused resources that help you strengthen applications, anticipate examiner rejections, and develop winning prosecution strategies across domestic and international jurisdictions."
      features={[
        {
          title: "Jurisdiction-Specific Guides",
          description:
            "Detailed overviews of patent prosecution rules, timelines, and procedural nuances for the USPTO, EPO, JPO, CNIPA, KIPO, and other major patent offices worldwide.",
          icon: <HiOutlineGlobeAmericas size={20} />,
          cardType: "list",
          cardData: { items: ["US (USPTO)", "Europe (EPO)", "India (IPO)", "PCT International"] },
        },
        {
          title: "101/102/103/112 Analysis",
          description:
            "In-depth analysis frameworks for each statutory requirement — patent eligibility under \u00A7101, novelty under \u00A7102, non-obviousness under \u00A7103, and written description and enablement under \u00A7112.",
          icon: <HiOutlineScale size={20} />,
          cardType: "timeline",
          cardData: { steps: ["101 Eligible", "102 Novel", "103 Obvious?"] },
        },
        {
          title: "Prosecution Strategies",
          description:
            "Proven strategies for responding to office actions, conducting examiner interviews, filing continuations and divisionals, and navigating appeals before the PTAB.",
          icon: <HiOutlineAdjustmentsHorizontal size={20} />,
          cardType: "comparison",
          cardData: { before: "Generic", after: "Strategic", improvement: "Targeted" },
        },
        {
          title: "International Filing",
          description:
            "Comprehensive guidance on PCT applications, Paris Convention priority claims, regional phase entry, and coordinating prosecution across multiple jurisdictions for global patent portfolios.",
          icon: <HiOutlineMap size={20} />,
          cardType: "stat",
          cardData: { value: "195", label: "countries covered", change: "All treaties" },
        },
        {
          title: "Claim Drafting Best Practices",
          description:
            "Expert guidance on constructing independent and dependent claims, means-plus-function limitations, Markush groups, and drafting techniques that maximize claim scope while maintaining defensibility.",
          icon: <HiOutlinePencil size={20} />,
          cardType: "list",
          cardData: { items: ["Means-plus-function", "Markush groups", "Jepson claims", "Swiss-type claims"] },
        },
        {
          title: "Case Law Updates",
          description:
            "Regularly updated summaries and analyses of landmark Federal Circuit and Supreme Court decisions that shape patent prosecution practice, with practical takeaways for practitioners.",
          icon: <HiOutlineDocumentText size={20} />,
          cardType: "timeline",
          cardData: { steps: ["Published", "Analyzed", "Applied"] },
        },
      ]}
      howItHelps={{
        attorneys:
          "Access authoritative reference material on statutory requirements, prosecution precedents, and jurisdictional procedures to strengthen arguments and advise clients with greater confidence.",
        drafters:
          "Ensure every application meets legal compliance standards by referencing up-to-date guidance on claim construction, specification requirements, and formal filing rules.",
        engineers:
          "Develop a foundational understanding of patent law concepts, claim interpretation, and the prosecution process to collaborate more effectively with legal teams on invention disclosures.",
      }}
      accentColor="#2D7D46"
    />
  );
}
