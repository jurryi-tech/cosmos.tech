"use client";

import { HiOutlineRocketLaunch, HiOutlineBookOpen, HiOutlineMapPin, HiOutlineLink, HiOutlineStar, HiOutlineFilm } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function DocumentationPage() {
  return (
    <PageTemplate
      category="Resources"
      title="Documentation"
      subtitle="Comprehensive guides and references for the Cosmos platform"
      description="Access detailed documentation covering every aspect of the Cosmos patent prosecution platform. From initial setup and configuration to advanced workflow automation, our documentation library provides the guidance you need to maximize productivity and deliver higher-quality patent applications with confidence."
      features={[
        {
          title: "Getting Started Guides",
          description:
            "Step-by-step onboarding guides that walk you through account setup, workspace configuration, and your first patent analysis — designed to get you productive within minutes of signing up.",
          icon: <HiOutlineRocketLaunch size={20} />,
          cardType: "timeline",
          cardData: { steps: ["Sign up", "Configure", "Draft"] },
        },
        {
          title: "API Documentation",
          description:
            "Complete API reference with interactive examples, request and response schemas, and authentication details for seamless programmatic integration with your existing patent management systems.",
          icon: <HiOutlineBookOpen size={20} />,
          cardType: "code",
          cardData: { lines: ["GET /api/v1/patents", "Authorization: Bearer token", "Content-Type: json", "→ 200 OK"] },
        },
        {
          title: "Workflow Tutorials",
          description:
            "In-depth tutorials covering end-to-end patent prosecution workflows, including prior art analysis, claim drafting, office action responses, and multi-jurisdictional filing strategies.",
          icon: <HiOutlineMapPin size={20} />,
          cardType: "list",
          cardData: { items: ["Patent drafting", "OA response", "Prior art search", "Portfolio mgmt"] },
        },
        {
          title: "Integration Guides",
          description:
            "Detailed guides for connecting Cosmos with popular patent management tools, document management systems, and enterprise platforms to create a unified prosecution workflow.",
          icon: <HiOutlineLink size={20} />,
          cardType: "list",
          cardData: { items: ["REST API", "Python SDK", "Node.js SDK", "Webhooks"] },
        },
        {
          title: "Best Practices",
          description:
            "Curated recommendations from patent prosecution experts on how to leverage Cosmos's AI capabilities for optimal claim construction, prior art coverage, and prosecution efficiency.",
          icon: <HiOutlineStar size={20} />,
          cardType: "stat",
          cardData: { value: "50+", label: "best practices", change: "Updated weekly" },
        },
        {
          title: "Video Walkthroughs",
          description:
            "Visual, narrated walkthroughs of key platform features and workflows, making it easy to learn complex processes and share training materials across your team.",
          icon: <HiOutlineFilm size={20} />,
          cardType: "timeline",
          cardData: { steps: ["Watch", "Practice", "Master"] },
        },
      ]}
      howItHelps={{
        attorneys:
          "Access proprietary on-device patent drafting technology that keeps your invention details completely private — no data ever reaches an external server, enabling fully confidential patent preparation.",
        drafters:
          "Follow step-by-step workflow guides tailored to patent drafting, ensuring consistent quality and adherence to firm standards across every application you prepare.",
        engineers:
          "Leverage comprehensive API documentation and integration guides to build custom automations and connect Cosmos with your organization's existing technical infrastructure.",
      }}
      accentColor="#2D7D46"
    />
  );
}
