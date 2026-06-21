"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    slug: "best-ai-patent-drafting-tools-2026",
    category: "Industry Analysis",
    title: "Best AI Patent Drafting Tools in 2026: Top 7 Platforms Compared",
    excerpt:
      "Comprehensive comparison of the leading AI patent drafting platforms. PatMaster by Cosmos leads with multi-jurisdiction drafting, privacy-first AI, and end-to-end prosecution support.",
    date: "March 8, 2026",
    readTime: "15 min read",
    featured: true,
  },
  {
    slug: "how-ai-patent-drafting-works",
    category: "Guide",
    title:
      "How AI Patent Drafting Works: A Complete Guide for Patent Attorneys",
    excerpt:
      "Deep dive into the technology behind AI patent drafting — from NLP and training data to claim analysis and multi-jurisdiction compliance. Everything patent attorneys need to know.",
    date: "March 8, 2026",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "ai-office-action-response-guide",
    category: "Guide",
    title:
      "AI Office Action Response: How to Use AI to Respond to USPTO Rejections",
    excerpt:
      "Learn how AI transforms office action response — from parsing 101, 102, 103, and 112 rejections to generating strategic claim amendments and examiner-specific arguments.",
    date: "March 8, 2026",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "ai-prior-art-search-vs-traditional",
    category: "Comparison",
    title:
      "AI Prior Art Search vs Traditional Prior Art Search: What Patent Attorneys Need to Know",
    excerpt:
      "Head-to-head comparison of AI-powered and traditional prior art search methods. Understand the advantages, limitations, and when to use each approach.",
    date: "March 8, 2026",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "patent-claim-drafting-with-ai",
    category: "Best Practices",
    title:
      "Patent Claim Drafting with AI: Best Practices for IP Attorneys",
    excerpt:
      "Master the art of AI-assisted patent claim drafting. From independent and dependent claims to scope optimization and multi-jurisdiction considerations.",
    date: "March 8, 2026",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "multi-jurisdiction-patent-filing-ai",
    category: "Guide",
    title:
      "Multi-Jurisdiction Patent Filing: How AI Handles USPTO, EPO, India & PCT",
    excerpt:
      "Navigate the complexities of international patent filing with AI. Covers USPTO, EPO, Indian Section 3(k), and PCT-specific requirements and how AI simplifies each.",
    date: "March 8, 2026",
    readTime: "12 min read",
    featured: false,
  },
];

const categories = ["All", "Industry Analysis", "Guide", "Comparison", "Best Practices"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[rgba(253,251,247,0.92)] backdrop-blur-xl border-b border-black/6">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center bg-[#1A1A1A] font-serif text-sm font-bold text-[#FDFBF7]">
              J
            </span>
            <span className="font-mono text-xs tracking-[0.3em] text-[#1A1A1A] uppercase">
              COSMOS
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors"
            >
              &larr; Home
            </Link>
            <a
              href="mailto:contact@cosmos.com?subject=Demo%20Request&body=Hi%20Cosmos%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20demo.%0A%0AThank%20you."
              className="bg-[#1A1A1A] text-white px-4 py-2 text-sm font-medium hover:bg-[#C5A44E] transition-colors"
            >
              Request Access
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#C5A44E] mb-4">
            COSMOS TECH BLOG
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#1A1A1A] mb-4">
            Insights & Analysis
          </h1>
          <p className="text-lg text-[#666] max-w-2xl">
            Patent prosecution intelligence, AI drafting strategies, and
            industry analysis for IP professionals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`font-mono text-xs tracking-wide px-4 py-2 cursor-pointer transition-colors whitespace-nowrap ${
                i === 0
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-[#F5F0E8] text-[#666] hover:bg-[#E8E0D0]"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#999] mb-6">
            FEATURED
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {blogPosts
              .filter((p) => p.featured)
              .map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/resources/blog/${post.slug}`} className="block group">
                    <div className="bg-[#1A1A1A] p-8 h-full flex flex-col justify-between min-h-[320px] border border-[#333] hover:border-[#C5A44E] transition-colors">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#C5A44E] bg-[#C5A44E]/10 px-3 py-1">
                            {post.category}
                          </span>
                          <span className="font-mono text-[10px] text-[#666]">
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="font-serif text-2xl text-white leading-tight mb-4 group-hover:text-[#C5A44E] transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm text-[#888] leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#333]">
                        <span className="text-xs text-[#666]">{post.date}</span>
                        <span className="font-mono text-xs text-[#C5A44E] group-hover:translate-x-1 transition-transform">
                          Read article &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>

          {/* All Articles */}
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#999] mb-6">
            ALL ARTICLES
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => !p.featured)
              .map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={`/resources/blog/${post.slug}`} className="block group">
                    <div className="bg-white border border-black/8 p-6 h-full flex flex-col justify-between min-h-[280px] hover:border-[#C5A44E] transition-colors">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#C5A44E] bg-[#F5F0E8] px-3 py-1">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg text-[#1A1A1A] leading-snug mb-3 group-hover:text-[#C5A44E] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#888] leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-black/5">
                        <div className="flex items-center gap-3 text-xs text-[#999]">
                          <span>{post.date}</span>
                          <span>&bull;</span>
                          <span>{post.readTime}</span>
                        </div>
                        <span className="font-mono text-xs text-[#C5A44E] group-hover:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1A1A1A] p-12 text-center">
            <h2 className="font-serif text-2xl text-white mb-3">
              Stay Ahead in Patent Prosecution
            </h2>
            <p className="text-[#888] text-sm mb-6 max-w-lg mx-auto">
              Get the latest insights on AI patent drafting, prosecution
              strategies, and industry analysis delivered to your inbox.
            </p>
            <a
              href="mailto:contact@cosmos.com?subject=Blog%20Updates%20Subscription&body=Hi%20Cosmos%20Team%2C%0A%0APlease%20add%20me%20to%20your%20blog%20updates%20mailing%20list.%0A%0AThank%20you."
              className="inline-block bg-[#C5A44E] text-[#1A1A1A] font-medium px-8 py-3 text-sm hover:bg-[#D4B55E] transition-colors"
            >
              Subscribe to Updates
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-[#666] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.2em] text-white hover:text-[#C5A44E] transition-colors"
          >
            COSMOS
          </Link>
          <p className="text-xs">
            &copy; 2026 Cosmos Tech, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
