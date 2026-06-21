import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cosmos.com";

  const platformPages = [
    "ai-patent-drafter",
    "prior-art-search",
    "office-action-response",
    "claim-amendment-engine",
    "portfolio-analytics",
    "examiner-intelligence",
  ];

  const companyPages = [
    "about-us",
    "careers",
    "contact",
    "privacy-policy",
    "security",
    "terms-of-service",
  ];

  const resourcePages = [
    "documentation",
    "api-reference",
    "patent-law-guide",
    "blog",
    "case-studies",
    "webinars",
  ];

  const blogPosts = [
    "best-ai-patent-drafting-tools-2026",
    "how-ai-patent-drafting-works",
    "ai-office-action-response-guide",
    "ai-prior-art-search-vs-traditional",
    "patent-claim-drafting-with-ai",
    "multi-jurisdiction-patent-filing-ai",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...platformPages.map((page) => ({
      url: `${baseUrl}/platform/${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...companyPages.map((page) => ({
      url: `${baseUrl}/company/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...resourcePages.map((page) => ({
      url: `${baseUrl}/resources/${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/resources/blog/${post}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
