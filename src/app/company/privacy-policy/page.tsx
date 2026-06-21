"use client";

import { HiOutlineChartBar, HiOutlineGlobeEuropeAfrica, HiOutlineClock, HiOutlineHandRaised, HiOutlineFingerPrint, HiOutlineHandThumbUp } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function PrivacyPolicyPage() {
  return (
    <PageTemplate
      category="Company"
      title="Privacy Policy"
      subtitle="How Cosmos Handles and Protects Your Data"
      description="At Cosmos, we recognize that trust is the foundation of every client relationship — especially when that relationship involves confidential patent data. Our privacy policy reflects our unwavering commitment to transparency, regulatory compliance, and user empowerment. We collect only what is necessary, protect it with industry-leading safeguards, and give you full control over your information. This policy explains in clear terms what data we collect, why we collect it, how we use it, and what rights you have."
      features={[
        {
          title: "Data Collection Transparency",
          description:
            "We provide a comprehensive, plain-language accounting of every category of data we collect — from account registration details and usage analytics to document content and AI interaction logs. You will always know exactly what information Cosmos processes and for what purpose.",
          icon: <HiOutlineChartBar size={20} />,
          cardType: "list" as const,
          cardData: { items: ["Usage analytics", "Account info", "Patent content", "Communication prefs"] },
        },
        {
          title: "GDPR & Global Compliance",
          description:
            "Cosmos is fully compliant with the General Data Protection Regulation, the California Consumer Privacy Act, and other major data protection frameworks worldwide. We maintain lawful bases for processing, honor data subject rights, and work with certified data protection officers.",
          icon: <HiOutlineGlobeEuropeAfrica size={20} />,
          cardType: "metric" as const,
          cardData: { value: 100, max: 100, label: "GDPR compliant" },
        },
        {
          title: "Data Retention Policies",
          description:
            "We retain your data only for as long as it is necessary to provide our services or as required by applicable law. Clear retention schedules are published for every data category, and automated deletion processes ensure that expired data is purged securely and completely.",
          icon: <HiOutlineClock size={20} />,
          cardType: "timeline" as const,
          cardData: { steps: ["Created", "Retained", "Deleted"] },
        },
        {
          title: "Third-Party Sharing Limits",
          description:
            "Cosmos does not sell your data — ever. We share information with third parties only when strictly necessary for service delivery, and only with vendors who are contractually bound to equivalent privacy and security standards through comprehensive data processing agreements.",
          icon: <HiOutlineHandRaised size={20} />,
          cardType: "list" as const,
          cardData: { items: ["No selling data", "No ad targeting", "No third-party sharing", "Strict NDAs"] },
        },
        {
          title: "Cookie & Tracking Policy",
          description:
            "Our cookie policy gives you granular control over tracking technologies. We use essential cookies for platform functionality and optional analytics cookies only with your explicit consent. You can modify your preferences at any time through our cookie management center.",
          icon: <HiOutlineFingerPrint size={20} />,
          cardType: "stat" as const,
          cardData: { value: "0", label: "third-party trackers", change: "None" },
        },
        {
          title: "User Rights & Controls",
          description:
            "You have the right to access, correct, export, and delete your personal data at any time. Our self-service privacy dashboard makes it simple to exercise these rights, and our support team responds to all privacy-related requests within the timeframes mandated by applicable regulations.",
          icon: <HiOutlineHandThumbUp size={20} />,
          cardType: "comparison" as const,
          cardData: { before: "Complex", after: "Simple", improvement: "Clear rights" },
        },
      ]}
      howItHelps={{
        attorneys:
          "Demonstrate regulatory compliance to your clients and ethics committees with a platform that adheres to the strictest data protection standards and provides auditable documentation of its privacy practices.",
        drafters:
          "Rest assured that your work product, invention disclosures, and prosecution materials are governed by clear data protection policies that prevent unauthorized access, unintended retention, and inappropriate secondary use.",
        engineers:
          "Build integrations on a platform designed with privacy by design and privacy by default principles, including purpose limitation, data minimization, and pseudonymization capabilities baked into every API endpoint.",
      }}
      accentColor="#8B5E3C"
    />
  );
}
