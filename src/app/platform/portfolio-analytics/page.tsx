"use client";

import { HiOutlineSquares2X2, HiOutlineBuildingOffice2, HiOutlineMagnifyingGlassCircle, HiOutlineSparkles, HiOutlineArrowTrendingUp, HiOutlineLightBulb } from "react-icons/hi2";
import PageTemplate from "@/components/ui/PageTemplate";

export default function PortfolioAnalyticsPage() {
  return (
    <PageTemplate
      category="Platform"
      title="Portfolio Analytics"
      subtitle="Actionable Intelligence for Strategic IP Decisions"
      description="Cosmos's Portfolio Analytics platform transforms raw patent data into strategic intelligence, delivering comprehensive visualizations and predictive insights across your entire IP portfolio. From competitive benchmarking to white space identification, gain the analytical clarity needed to make confident decisions about filing priorities, licensing opportunities, and portfolio optimization at every level of your organization."
      features={[
        {
          title: "Portfolio Heatmaps",
          description: "Generates dynamic visual heatmaps displaying patent density, claim strength, and geographic coverage across technology domains — instantly revealing areas of concentrated protection and vulnerable gaps requiring strategic attention.",
          icon: <HiOutlineSquares2X2 size={20} />,
          cardType: "chart",
          cardData: { bars: [92, 45, 78, 55, 88, 30, 65], labels: ["AI", "Bio", "Semi", "Mech", "SW", "Chem", "Tel"] },
        },
        {
          title: "Competitive Intelligence",
          description: "Tracks competitor patent activity in real time, analyzing their filing patterns, technology focus areas, and prosecution strategies to provide early warning of competitive threats and opportunities for strategic differentiation.",
          icon: <HiOutlineBuildingOffice2 size={20} />,
          cardType: "profile",
          cardData: { name: "CompetitorX", subtitle: "Portfolio: 2,340 patents", stat: "67", statLabel: "% overlap" },
        },
        {
          title: "Gap Analysis",
          description: "Identifies critical gaps in your patent coverage by comparing your portfolio against competitor holdings, industry trends, and your own product roadmap — highlighting where new filings would deliver the greatest strategic and commercial value.",
          icon: <HiOutlineMagnifyingGlassCircle size={20} />,
          cardType: "metric",
          cardData: { value: 34, max: 100, label: "white spaces found" },
        },
        {
          title: "Valuation Metrics",
          description: "Assigns data-driven valuation estimates to individual patents and portfolio segments based on citation impact, technology relevance, remaining life, claim breadth, and licensing market comparables for informed financial decision-making.",
          icon: <HiOutlineSparkles size={20} />,
          cardType: "stat",
          cardData: { value: "$4.2M", label: "portfolio value", change: "+18% YoY" },
        },
        {
          title: "Filing Trends",
          description: "Analyzes historical filing patterns across your portfolio and industry to forecast future technology trajectories, identify emerging areas of innovation, and time your filings to maximize strategic positioning and cost efficiency.",
          icon: <HiOutlineArrowTrendingUp size={20} />,
          cardType: "timeline",
          cardData: { steps: ["Q1: 45", "Q2: 62", "Q3: 78"] },
        },
        {
          title: "White Space Identification",
          description: "Discovers unpatented technology spaces adjacent to your core innovations where first-mover filing advantages exist, mapping unexplored intersections between technical domains that represent high-value protection opportunities.",
          icon: <HiOutlineLightBulb size={20} />,
          cardType: "list",
          cardData: { items: ["Edge computing", "Quantum ML", "Bio-sensors", "Privacy tech"] },
        },
      ]}
      howItHelps={{
        attorneys:
          "Informs portfolio-level prosecution strategy with quantitative evidence, enabling attorneys to advise clients on filing priorities, continuation decisions, and portfolio pruning with data-backed confidence rather than intuition alone.",
        drafters:
          "Guides prioritization of drafting resources toward the highest-value filings by surfacing which technology areas have the greatest strategic importance, competitive pressure, and white space opportunity — ensuring effort is allocated where it matters most.",
        engineers:
          "Aligns R&D investment with IP strategy by revealing where patent protection is strongest, where competitors are advancing, and where new inventions would fill critical portfolio gaps — turning patent analytics into actionable innovation roadmaps.",
      }}
      accentColor="#4EC58B"
    />
  );
}
