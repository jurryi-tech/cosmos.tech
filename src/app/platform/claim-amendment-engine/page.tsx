"use client";

import { HiOutlineArrowsRightLeft, HiOutlineArrowsPointingOut, HiOutlineCheckBadge, HiOutlineArrowPath, HiOutlineListBullet, HiOutlineDocumentDuplicate } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function ClaimAmendmentEnginePage() {
  return (
    <PageTemplate
      category="Platform"
      title="Claim Amendment Engine"
      subtitle="Intelligent Amendments That Maximize Patent Value"
      description="Cosmos's Claim Amendment Engine delivers precise, strategically optimized claim amendments that navigate the delicate balance between overcoming rejections and preserving maximum protection scope. Powered by deep analysis of claim dependencies, prosecution histories, and prior art boundaries, the engine suggests amendments that strengthen your patent position while maintaining alignment with your broader portfolio strategy."
      features={[
        {
          title: "Claim Dependency Analysis",
          description: "Maps the complete dependency structure across all claims, identifying critical support chains, potential antecedent basis issues, and orphaned limitations to ensure every amendment maintains structural integrity throughout the claim hierarchy.",
          icon: <HiOutlineArrowsRightLeft size={20} />,
          cardType: "chart",
          cardData: { bars: [100, 80, 60, 80, 40, 60, 40], labels: ["C1", "C2", "C3", "C4", "C5", "C6", "C7"] },
        },
        {
          title: "Broadening & Narrowing",
          description: "Provides calibrated broadening and narrowing recommendations for each claim, quantifying the scope impact of proposed amendments against the prior art landscape and identifying the optimal balance between coverage and allowability.",
          icon: <HiOutlineArrowsPointingOut size={20} />,
          cardType: "comparison",
          cardData: { before: "Broad", after: "Optimized", improvement: "balanced" },
        },
        {
          title: "112 Compliance",
          description: "Continuously validates all amendments against Section 112 requirements including written description support, enablement, definiteness, and means-plus-function limitations — flagging potential issues before they become examiner rejections.",
          icon: <HiOutlineCheckBadge size={20} />,
          cardType: "metric",
          cardData: { value: 98, max: 100, label: "112 compliance rate" },
        },
        {
          title: "Continuation Strategy",
          description: "Recommends strategic continuation, divisional, and CIP filing opportunities based on amendment trajectories, suggesting how to preserve broader claim scope in child applications while securing allowance in the parent case.",
          icon: <HiOutlineArrowPath size={20} />,
          cardType: "timeline",
          cardData: { steps: ["Parent", "Continuation", "CIP"] },
        },
        {
          title: "Claim Tree Visualization",
          description: "Renders interactive visual claim trees showing dependency relationships, amendment history, and scope changes over time — providing instant clarity on how each amendment affects the overall claim architecture and protection boundaries.",
          icon: <HiOutlineListBullet size={20} />,
          cardType: "list",
          cardData: { items: ["Claim 1 (Independent)", "Claim 2 → Claim 1", "Claim 3 → Claim 1", "Claim 4 (Independent)"] },
        },
        {
          title: "Amendment History",
          description: "Maintains a complete audit trail of every amendment made throughout prosecution, tracking scope evolution, prosecution history estoppel implications, and the rationale behind each change for future enforcement and licensing analysis.",
          icon: <HiOutlineDocumentDuplicate size={20} />,
          cardType: "stat",
          cardData: { value: "847", label: "amendments tracked", change: "+23 this week" },
        },
      ]}
      howItHelps={{
        attorneys:
          "Enables strategic claim positioning with data-driven amendment recommendations that account for prior art boundaries, examiner tendencies, and portfolio-wide claim coordination — ensuring each amendment advances both immediate allowance goals and long-term enforcement strategy.",
        drafters:
          "Automates the mechanical aspects of claim amendment drafting including dependency restructuring, antecedent basis correction, and format compliance — freeing drafters to focus on the substantive technical distinctions that drive allowance.",
        engineers:
          "Optimizes the technical scope of patent claims by identifying which technical features provide the strongest basis for distinguishing over prior art, ensuring amendments preserve protection for the most commercially valuable aspects of the invention.",
      }}
      accentColor="#8B4EC5"
    />
  );
}
