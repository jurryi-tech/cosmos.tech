"use client";

import { HiOutlineQuestionMarkCircle, HiOutlineComputerDesktop, HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlineWrenchScrewdriver, HiOutlineCalendarDays } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function WebinarsPage() {
  return (
    <PageTemplate
      category="Resources"
      title="Webinars"
      subtitle="Live and on-demand training sessions for patent professionals"
      description="Accelerate your mastery of patent prosecution with Cosmos's webinar program. Join live sessions led by patent law experts and platform specialists, or access our growing library of recorded trainings on demand. From introductory overviews to advanced deep-dives, our webinar series is designed to help every member of your team build competence and confidence with AI-powered prosecution tools."
      features={[
        {
          title: "Live Q&A Sessions",
          description:
            "Interactive, real-time sessions where you can ask questions directly to Cosmos product experts and patent prosecution specialists, getting personalized answers to your specific workflow challenges.",
          icon: <HiOutlineQuestionMarkCircle size={20} />,
          cardType: "timeline",
          cardData: { steps: ["Register", "Attend", "Certify"] },
        },
        {
          title: "Product Demos",
          description:
            "Guided demonstrations of Cosmos's latest features and capabilities, showing exactly how to apply new tools to real prosecution scenarios with live walkthroughs and practical examples.",
          icon: <HiOutlineComputerDesktop size={20} />,
          cardType: "stat",
          cardData: { value: "2K+", label: "attendees monthly", change: "Growing" },
        },
        {
          title: "Expert Panels",
          description:
            "Panel discussions bringing together patent attorneys, former USPTO examiners, and IP strategists to debate current issues, share prosecution insights, and forecast industry developments.",
          icon: <HiOutlineUserGroup size={20} />,
          cardType: "list",
          cardData: { items: ["Platform basics", "OA responses", "Prior art search", "Advanced claims"] },
        },
        {
          title: "Certification Programs",
          description:
            "Structured learning paths with assessments that validate your proficiency with the Cosmos platform, providing recognized credentials that demonstrate expertise to colleagues and clients.",
          icon: <HiOutlineAcademicCap size={20} />,
          cardType: "metric",
          cardData: { value: 92, max: 100, label: "completion rate" },
        },
        {
          title: "Hands-On Workshops",
          description:
            "Practical, exercise-driven sessions where participants work through real patent prosecution scenarios using Cosmos, building muscle memory and confidence with guided expert support.",
          icon: <HiOutlineWrenchScrewdriver size={20} />,
          cardType: "chart",
          cardData: { bars: [70, 85, 90, 95, 88, 92], labels: ["Draft", "Search", "OA", "Claims", "Port.", "Exam."] },
        },
        {
          title: "Monthly Updates",
          description:
            "Regular briefings covering platform releases, patent law developments, and prosecution trend data — keeping your team aligned on the latest tools and strategies available to them.",
          icon: <HiOutlineCalendarDays size={20} />,
          cardType: "stat",
          cardData: { value: "48", label: "sessions per year", change: "4 per month" },
        },
      ]}
      howItHelps={{
        attorneys:
          "Earn continuing education credits while staying current on AI-assisted prosecution techniques, platform capabilities, and evolving patent law developments that impact your practice.",
        drafters:
          "Develop advanced platform skills through hands-on workshops and structured certification programs that build proficiency and enable you to take on more complex drafting assignments.",
        engineers:
          "Access technical deep-dives into Cosmos's architecture, API capabilities, and integration patterns, led by the engineering team that builds and maintains the platform.",
      }}
      accentColor="#2D7D46"
    />
  );
}
