"use client";

import { HiOutlineComputerDesktop, HiOutlineDocumentText, HiOutlineHomeModern, HiOutlineSparkles, HiOutlineBookOpen, HiOutlineArrowTrendingUp } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function CareersPage() {
  return (
    <PageTemplate
      category="Company"
      title="Careers"
      subtitle="Join the Team Redefining Patent Prosecution"
      description="At Cosmos, we are assembling a world-class team of engineers, IP professionals, and product builders who share our passion for transforming how patents are prosecuted. We believe the intersection of artificial intelligence and intellectual property law represents one of the most impactful frontiers in legal technology. If you thrive on solving hard problems, care deeply about craftsmanship, and want your work to empower patent professionals across the globe, we would love to hear from you."
      features={[
        {
          title: "Engineering Roles",
          description:
            "Join our engineering team to build scalable, high-performance systems that process millions of patent documents in real time. We work with modern stacks including Next.js, Python, and cloud-native infrastructure to deliver enterprise-grade AI applications.",
          icon: <HiOutlineComputerDesktop size={20} />,
          cardType: "list" as const,
          cardData: { items: ["ML Engineers", "Full-stack devs", "Platform SRE", "AI Researchers"] },
        },
        {
          title: "IP Domain Experts",
          description:
            "We actively seek patent attorneys, agents, and prosecution specialists who want to shape the future of their profession. Your domain knowledge directly informs our product roadmap, model training, and quality benchmarks.",
          icon: <HiOutlineDocumentText size={20} />,
          cardType: "list" as const,
          cardData: { items: ["Patent attorneys", "IP analysts", "Legal ops", "Domain experts"] },
        },
        {
          title: "Remote-First Culture",
          description:
            "Our team operates across multiple time zones with a remote-first philosophy. We invest in asynchronous communication, comprehensive documentation, and regular in-person gatherings to maintain strong collaboration without requiring relocation.",
          icon: <HiOutlineHomeModern size={20} />,
          cardType: "comparison" as const,
          cardData: { before: "Office-bound", after: "Work anywhere", improvement: "Global" },
        },
        {
          title: "Competitive Compensation",
          description:
            "We offer top-of-market salaries, meaningful equity participation, comprehensive health benefits, and generous paid time off. We believe exceptional talent deserves exceptional compensation — no compromises.",
          icon: <HiOutlineSparkles size={20} />,
          cardType: "stat" as const,
          cardData: { value: "Top 5%", label: "compensation", change: "Equity included" },
        },
        {
          title: "Patent Law Training",
          description:
            "Every team member, regardless of role, receives structured training in patent prosecution fundamentals. Understanding the domain we serve makes everyone more effective and ensures our products reflect genuine practitioner needs.",
          icon: <HiOutlineBookOpen size={20} />,
          cardType: "timeline" as const,
          cardData: { steps: ["Learn IP", "Build AI", "Ship product"] },
        },
        {
          title: "Growth Opportunities",
          description:
            "As a rapidly scaling company, we offer clear paths for career advancement, leadership development, and cross-functional exploration. We promote from within and encourage team members to expand their expertise into adjacent domains.",
          icon: <HiOutlineArrowTrendingUp size={20} />,
          cardType: "chart" as const,
          cardData: { bars: [60, 75, 88, 92, 95, 98], labels: ["Jr", "Mid", "Sr", "Staff", "Princ", "Dir"] },
        },
      ]}
      howItHelps={{
        attorneys:
          "Step into IP domain leadership roles where your prosecution experience directly shapes product strategy, guides AI model development, and ensures our tools meet the exacting standards of professional patent practice.",
        drafters:
          "Transition into product development roles where your hands-on drafting expertise informs feature design, user experience decisions, and quality assurance processes — making the tools you wish you always had.",
        engineers:
          "Tackle challenging ML and AI engineering problems at the intersection of natural language understanding and legal reasoning, working with large-scale patent corpora and state-of-the-art model architectures.",
      }}
      accentColor="#8B5E3C"
    />
  );
}
