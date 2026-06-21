"use client";

import { HiOutlineUserCircle, HiOutlineChartBarSquare, HiOutlinePresentationChartBar, HiOutlineBuildingLibrary, HiOutlinePhone } from "react-icons/hi2";
import { LuTimer } from "react-icons/lu";
import PageTemplate from "@/components/ui/PageTemplate";

export default function ExaminerIntelligencePage() {
  return (
    <PageTemplate
      category="Platform"
      title="Examiner Intelligence"
      subtitle="Predict Outcomes. Tailor Strategies. Win Allowances."
      description="Cosmos's Examiner Intelligence platform decodes the patterns behind patent examination, providing deep behavioral analytics on individual examiners, art units, and technology centers. By analyzing millions of prosecution histories, the platform predicts rejection likelihood, recommends examiner-specific argumentation strategies, and identifies the optimal timing and approach for every interaction — turning examiner unpredictability into a strategic advantage."
      features={[
        {
          title: "Examiner Profiles",
          description: "Builds comprehensive behavioral profiles for every active USPTO examiner, capturing their rejection tendencies, preferred claim structures, responsiveness to specific argument types, and historical allowance patterns across technology domains.",
          icon: <HiOutlineUserCircle size={20} />,
          cardType: "profile",
          cardData: { name: "R. Martinez", subtitle: "Art Unit 2122", stat: "68", statLabel: "% allow" },
        },
        {
          title: "Rejection Patterns",
          description: "Identifies recurring rejection patterns at the examiner, art unit, and technology center levels — revealing which grounds of rejection are most frequently asserted and which response strategies have proven most effective in overcoming them.",
          icon: <HiOutlineChartBarSquare size={20} />,
          cardType: "chart",
          cardData: { bars: [85, 62, 45, 30, 15, 8], labels: ["103", "102", "101", "112", "DP", "ODP"] },
        },
        {
          title: "Allowance Rates",
          description: "Tracks real-time allowance rates by examiner, art unit, and claim type, providing granular statistical insights that inform prosecution strategy and help set realistic client expectations about timeline and likelihood of success.",
          icon: <HiOutlinePresentationChartBar size={20} />,
          cardType: "metric",
          cardData: { value: 73, max: 100, label: "avg allowance rate" },
        },
        {
          title: "Art Unit Analytics",
          description: "Delivers detailed performance analytics across all art units, comparing average pendency, rejection rates, appeal outcomes, and interview effectiveness to help practitioners identify the most favorable prosecution environments.",
          icon: <HiOutlineBuildingLibrary size={20} />,
          cardType: "stat",
          cardData: { value: "2,847", label: "art units tracked", change: "Real-time" },
        },
        {
          title: "Interview Success Prediction",
          description: "Predicts the likelihood of a successful examiner interview based on the specific examiner's interview history, the type of rejection at issue, and the technology area — recommending when interviews will accelerate allowance versus when written responses are more effective.",
          icon: <HiOutlinePhone size={20} />,
          cardType: "comparison",
          cardData: { before: "42%", after: "78%", improvement: "+86%" },
        },
        {
          title: "Timing Optimization",
          description: "Analyzes examiner workload cycles, response processing patterns, and seasonal trends to recommend the optimal timing for filing responses, requesting interviews, and pursuing after-final submissions for maximum prosecution efficiency.",
          icon: <LuTimer size={20} />,
          cardType: "timeline",
          cardData: { steps: ["File", "Interview", "Allowance"] },
        },
      ]}
      howItHelps={{
        attorneys:
          "Provides a decisive strategic advantage by revealing exactly how each examiner thinks, what arguments they find persuasive, and when they are most receptive — enabling attorneys to craft prosecution strategies with the precision of a targeted campaign rather than a generic approach.",
        drafters:
          "Enables tailored application drafting by surfacing examiner-specific preferences for claim structure, specification detail, and technical disclosure depth — allowing drafters to proactively address likely objections before the first office action is ever issued.",
        engineers:
          "Guides examiner-specific technical framing by identifying which types of technical evidence, comparative analyses, and implementation details specific examiners find most compelling — ensuring technical contributions are presented in the format most likely to drive allowance.",
      }}
      accentColor="#C58B4E"
    />
  );
}
