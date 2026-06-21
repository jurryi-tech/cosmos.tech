"use client";

import { HiOutlineDocumentText, HiOutlineCheckCircle, HiOutlineShieldCheck, HiOutlineBolt, HiOutlineScale, HiOutlineHandRaised } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function TermsOfServicePage() {
  return (
    <PageTemplate
      category="Company"
      title="Terms of Service"
      subtitle="Legal Terms Governing Use of the Cosmos Platform"
      description="These Terms of Service establish the legal framework governing your access to and use of the Cosmos platform, including all associated tools, APIs, and services. We have drafted these terms to be clear, balanced, and fair — reflecting our belief that strong partnerships are built on mutual understanding. By using Cosmos, you agree to abide by these terms, which are designed to protect both your interests and ours while enabling you to leverage our AI-powered patent prosecution tools with confidence."
      features={[
        {
          title: "Service Scope & Definitions",
          description:
            "A clear delineation of what the Cosmos platform encompasses, including AI-assisted drafting tools, prior art search capabilities, office action analysis, docketing integrations, and all ancillary features. Every service component is defined precisely so there is no ambiguity about what is covered.",
          icon: <HiOutlineDocumentText size={20} />,
          cardType: "list" as const,
          cardData: { items: ["API access", "Platform tools", "Support", "Updates"] },
        },
        {
          title: "Acceptable Usage Policies",
          description:
            "Our usage policies outline permitted and prohibited activities on the platform, including guidelines for AI-generated content review, responsible use of automated features, rate limits, and restrictions designed to maintain platform integrity and service quality for all users.",
          icon: <HiOutlineCheckCircle size={20} />,
          cardType: "timeline" as const,
          cardData: { steps: ["Accept", "Use", "Comply"] },
        },
        {
          title: "Intellectual Property Ownership",
          description:
            "You retain full ownership of all content you create, upload, or generate using Cosmos. Our terms explicitly confirm that no intellectual property rights in your patent drafts, claims, disclosures, or other work product transfer to Cosmos through your use of the platform.",
          icon: <HiOutlineShieldCheck size={20} />,
          cardType: "stat" as const,
          cardData: { value: "100%", label: "your IP stays yours", change: "Guaranteed" },
        },
        {
          title: "SLA & Uptime Guarantees",
          description:
            "We commit to 99.9% platform availability backed by financially-supported service level agreements. Our SLA details scheduled maintenance windows, incident response timelines, communication protocols, and the credits or remedies available in the event of service disruptions.",
          icon: <HiOutlineBolt size={20} />,
          cardType: "metric" as const,
          cardData: { value: 99, max: 100, label: "uptime SLA" },
        },
        {
          title: "Liability Framework",
          description:
            "A balanced liability framework that clearly allocates risk between Cosmos and our users. We stand behind our platform with meaningful warranties while establishing reasonable limitations that reflect the advisory nature of AI-assisted patent prosecution tools.",
          icon: <HiOutlineScale size={20} />,
          cardType: "comparison" as const,
          cardData: { before: "Ambiguous", after: "Crystal clear", improvement: "Fair terms" },
        },
        {
          title: "Dispute Resolution",
          description:
            "In the event of a disagreement, our terms provide for structured dispute resolution beginning with good-faith negotiation, followed by mediation, and binding arbitration as a final recourse. We prioritize efficient, cost-effective resolution over protracted litigation.",
          icon: <HiOutlineHandRaised size={20} />,
          cardType: "list" as const,
          cardData: { items: ["Mediation first", "Binding arbitration", "Delaware law", "30-day notice"] },
        },
      ]}
      howItHelps={{
        attorneys:
          "Review clear, professionally drafted legal terms that respect the ethical obligations of patent practice and provide unambiguous confirmation that your client work product remains entirely your own.",
        drafters:
          "Understand exactly what you can and cannot do on the platform with straightforward usage guidelines that support productive workflows while maintaining the quality standards expected in professional patent prosecution.",
        engineers:
          "Access detailed API usage terms including rate limits, authentication requirements, data format specifications, and integration guidelines that enable you to build robust, compliant connections with the Cosmos platform.",
      }}
      accentColor="#8B5E3C"
    />
  );
}
