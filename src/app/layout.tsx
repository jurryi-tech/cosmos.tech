import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmos.com"),
  title: {
    default: "Cosmos — AI Patent Drafting & Prosecution Platform | Draft Patents 10x Faster",
    template: "%s | Cosmos Tech",
  },
  description:
    "AI-powered patent drafting software for IP attorneys. Draft patent applications, respond to office actions, generate claim amendments & search prior art — all in one platform. Supports USPTO, EPO, India & PCT filings.",
  keywords: [
    "AI patent drafting",
    "AI patent drafting software",
    "AI patent drafting tool",
    "patent drafting AI",
    "patent drafting software",
    "patent drafting tool",
    "AI patent prosecution",
    "AI patent prosecution platform",
    "patent prosecution software",
    "office action response AI",
    "office action response generator",
    "patent claim generation",
    "patent claim drafting AI",
    "claim amendment tool",
    "prior art search AI",
    "AI prior art search",
    "prior art search tool",
    "patent analytics",
    "patent portfolio analytics",
    "patent portfolio management",
    "examiner intelligence",
    "USPTO examiner analytics",
    "patent examiner statistics",
    "AI patent tools",
    "AI patent tools for law firms",
    "patent automation",
    "patent writing AI",
    "patent application generator",
    "AI patent application drafting",
    "patent specification generator",
    "automated patent drafting",
    "patent drafting automation",
    "AI for patent attorneys",
    "AI for IP attorneys",
    "legal AI patent",
    "legaltech patent",
    "patenttech",
    "patent technology platform",
    "Indian patent drafting",
    "EPO patent drafting",
    "PCT patent filing",
    "multi-jurisdiction patent drafting",
    "Cosmos",
    "Cosmos Tech",
    "cosmos.com",
  ],
  authors: [{ name: "Cosmos Tech", url: "https://cosmos.com" }],
  creator: "Cosmos Tech",
  publisher: "Cosmos Tech",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cosmos.com",
    siteName: "Cosmos Tech",
    title: "Cosmos — AI Patent Drafting & Prosecution Platform",
    description:
      "Draft patent applications 10x faster with AI. Purpose-built for patent attorneys — supports USPTO, EPO, India & PCT. AI patent drafter, prior art search, office action response & more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cosmos - AI Patent Drafting & Prosecution Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmos — AI Patent Drafting & Prosecution Platform",
    description:
      "Draft patent applications 10x faster with AI. Purpose-built for patent attorneys. AI patent drafter, prior art search, office action response & claim amendments.",
    images: ["/og-image.png"],
    creator: "@cosmostech",
  },
  alternates: {
    canonical: "https://cosmos.com",
  },
  category: "Technology",
  classification: "Legal Technology, Patent Technology, AI Software",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  other: {
    "application-name": "Cosmos Tech",
    "msapplication-TileColor": "#1A1A1A",
    "theme-color": "#FDFBF7",
    "apple-mobile-web-app-title": "Cosmos",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://cosmos.com/#organization",
                  name: "Cosmos Tech",
                  url: "https://cosmos.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://cosmos.com/favicon.svg",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "contact@cosmos.com",
                    contactType: "sales",
                  },
                  description:
                    "AI-powered patent drafting and prosecution platform for IP attorneys and patent teams.",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cosmos.com/#website",
                  url: "https://cosmos.com",
                  name: "Cosmos Tech",
                  publisher: {
                    "@id": "https://cosmos.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://cosmos.com/?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Cosmos AI Patent Drafter",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description:
                    "AI-powered patent drafting software that generates complete patent specifications including claims, descriptions, and abstracts from invention disclosures.",
                  url: "https://cosmos.com/platform/ai-patent-drafter",
                  provider: {
                    "@id": "https://cosmos.com/#organization",
                  },
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/OnlineOnly",
                    category: "AI Patent Drafting Software",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Cosmos Prior Art Search",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description:
                    "AI-driven prior art search engine that analyzes millions of patents and non-patent literature to assess novelty and patentability.",
                  url: "https://cosmos.com/platform/prior-art-search",
                  provider: {
                    "@id": "https://cosmos.com/#organization",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Cosmos Office Action Response",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description:
                    "Automated office action analysis and response generation tool for patent prosecution. Handles 101, 102, 103, and 112 rejections.",
                  url: "https://cosmos.com/platform/office-action-response",
                  provider: {
                    "@id": "https://cosmos.com/#organization",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://cosmos.com",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
