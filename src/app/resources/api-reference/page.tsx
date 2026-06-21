"use client";

import { HiOutlineGlobeAlt, HiOutlineCube, HiOutlineBell, HiOutlineChartBar, HiOutlineLockClosed, HiOutlineBolt } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function ApiReferencePage() {
  return (
    <PageTemplate
      category="Resources"
      title="API Reference"
      subtitle="Powerful REST and SDK APIs for seamless integration"
      description="Integrate Cosmos's patent prosecution intelligence directly into your existing tools and workflows with our robust API platform. Whether you need to automate prior art searches, programmatically generate claim analyses, or build custom dashboards, our well-documented APIs and multi-language SDKs provide the flexibility and reliability your engineering teams demand."
      features={[
        {
          title: "RESTful Endpoints",
          description:
            "A comprehensive suite of REST API endpoints covering patent analysis, claim evaluation, prior art search, and prosecution management — all following industry-standard conventions with predictable resource-oriented URLs.",
          icon: <HiOutlineGlobeAlt size={20} />,
          cardType: "code",
          cardData: { lines: ["POST /api/v1/draft", "  { invention: '...',", "  jurisdiction: 'US' }", "→ 200 { patent: {...} }"] },
        },
        {
          title: "SDK Libraries",
          description:
            "Official client libraries for Python, JavaScript, Java, and C# that abstract away HTTP complexity and provide type-safe interfaces, helper utilities, and built-in error handling for rapid development.",
          icon: <HiOutlineCube size={20} />,
          cardType: "code",
          cardData: { lines: ["import { Cosmos } from", "  '@cosmos/sdk';", "const client = new", "  Cosmos({ key: '...' })"] },
        },
        {
          title: "Webhooks",
          description:
            "Real-time event notifications delivered to your systems when analyses complete, deadlines approach, or prosecution statuses change — keeping your team informed without constant polling.",
          icon: <HiOutlineBell size={20} />,
          cardType: "list",
          cardData: { items: ["Draft complete", "OA received", "Status change", "Deadline alert"] },
        },
        {
          title: "Batch Processing",
          description:
            "Submit large volumes of patent applications, prior art queries, or claim analyses in bulk through our batch API, with automatic queuing, progress tracking, and consolidated result delivery.",
          icon: <HiOutlineChartBar size={20} />,
          cardType: "chart",
          cardData: { bars: [40, 65, 85, 95, 70, 50], labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
        },
        {
          title: "Authentication",
          description:
            "Enterprise-grade OAuth 2.0 and API key authentication with granular permission scopes, token rotation, and audit logging to meet the security requirements of any organization.",
          icon: <HiOutlineLockClosed size={20} />,
          cardType: "metric",
          cardData: { value: 99, max: 100, label: "uptime SLA" },
        },
        {
          title: "Rate Limiting",
          description:
            "Transparent, tiered rate limiting with clear headers, automatic retry guidance, and dedicated throughput allocations for enterprise clients to ensure predictable performance at scale.",
          icon: <HiOutlineBolt size={20} />,
          cardType: "stat",
          cardData: { value: "10K", label: "requests/min", change: "Enterprise" },
        },
      ]}
      howItHelps={{
        attorneys:
          "Automate repetitive prosecution workflows such as deadline tracking, status updates, and report generation, freeing up time to focus on substantive legal analysis and client strategy.",
        drafters:
          "Execute bulk operations across patent portfolios — run batch prior art searches, generate comparative claim analyses, and produce consistency reports across large application sets.",
        engineers:
          "Build custom integrations that connect Cosmos with your firm's docketing systems, document management platforms, and internal tools using well-documented, reliable API endpoints.",
      }}
      accentColor="#2D7D46"
    />
  );
}
