"use client";

import { HiOutlineShieldCheck, HiOutlineLockClosed, HiOutlineEye, HiOutlineGlobeAmericas, HiOutlineKey, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function SecurityPage() {
  return (
    <PageTemplate
      category="Company"
      title="Security"
      subtitle="Enterprise-Grade Security for Sensitive Patent Data"
      description="Patent prosecution involves some of the most confidential information in any organization — unpublished inventions, trade secrets, and strategic IP portfolios. Cosmos's security infrastructure is purpose-built to meet the stringent requirements of law firms, corporate IP departments, and government agencies. We maintain the highest industry standards for data protection, access control, and regulatory compliance so that you can leverage AI with complete confidence."
      features={[
        {
          title: "SOC 2 Type II — In Progress",
          description:
            "Cosmos is actively pursuing SOC 2 Type II certification with independent auditing currently under process. Upon completion, this certification will validate that our security controls, availability safeguards, processing integrity, confidentiality measures, and privacy practices meet rigorous industry standards.",
          icon: <HiOutlineShieldCheck size={20} />,
          cardType: "metric" as const,
          cardData: { value: 100, max: 100, label: "SOC 2 compliance" },
        },
        {
          title: "End-to-End Encryption",
          description:
            "All data is encrypted both in transit using TLS 1.3 and at rest using AES-256 encryption. Encryption keys are managed through dedicated hardware security modules with strict rotation policies, ensuring your patent data remains unreadable to unauthorized parties at every stage.",
          icon: <HiOutlineLockClosed size={20} />,
          cardType: "metric" as const,
          cardData: { value: 256, max: 256, label: "bit AES encryption" },
        },
        {
          title: "Zero-Knowledge Architecture",
          description:
            "Our platform is designed so that Cosmos personnel cannot access your patent documents or invention disclosures. Data processing occurs in isolated, ephemeral environments, and no customer content is used for model training without explicit, documented consent.",
          icon: <HiOutlineEye size={20} />,
          cardType: "comparison" as const,
          cardData: { before: "Visible", after: "Zero-knowledge", improvement: "Private" },
        },
        {
          title: "Data Residency Controls",
          description:
            "Choose where your data is stored and processed. We offer regional data residency options across North America, Europe, and Asia-Pacific to help you comply with local data sovereignty requirements and organizational policies.",
          icon: <HiOutlineGlobeAmericas size={20} />,
          cardType: "list" as const,
          cardData: { items: ["US (Virginia)", "EU (Frankfurt)", "India (Mumbai)", "Custom regions"] },
        },
        {
          title: "Granular Access Controls",
          description:
            "Implement role-based access control with fine-grained permissions at the matter, portfolio, and document level. Support for SSO via SAML 2.0 and OIDC, multi-factor authentication, and session management ensures only authorized personnel access sensitive materials.",
          icon: <HiOutlineKey size={20} />,
          cardType: "list" as const,
          cardData: { items: ["SSO / SAML", "Role-based (RBAC)", "MFA required", "IP allowlisting"] },
        },
        {
          title: "Comprehensive Audit Logging",
          description:
            "Every action on the platform is recorded in immutable audit logs with full traceability. Logs capture user activity, document access, AI interactions, and administrative changes — supporting internal compliance reviews, client audits, and regulatory inquiries.",
          icon: <HiOutlineClipboardDocumentList size={20} />,
          cardType: "stat" as const,
          cardData: { value: "100%", label: "audit coverage", change: "Real-time" },
        },
      ]}
      howItHelps={{
        attorneys:
          "Maintain the highest standards of client confidentiality with infrastructure that meets or exceeds the security expectations of Fortune 500 companies, AmLaw 100 firms, and government patent offices worldwide.",
        drafters:
          "Work within secure, isolated environments where your drafts, invention disclosures, and prosecution strategies are protected by multiple layers of encryption and access control throughout every stage of the workflow.",
        engineers:
          "Integrate with confidence knowing our APIs enforce OAuth 2.0 authentication, rate limiting, and request signing. Our security architecture satisfies the compliance requirements of even the most demanding enterprise IT environments.",
      }}
      accentColor="#8B5E3C"
    />
  );
}
