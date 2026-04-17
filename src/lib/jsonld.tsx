import { siteConfig } from "@/lib/site-config";

type JsonLdProps = { data: Record<string, unknown> | Array<Record<string, unknown>> };

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.company.legalName,
    alternateName: "Flexi IT Services",
    url: siteConfig.url,
    sameAs: [siteConfig.company.parentUrl, siteConfig.company.sisterUrl, siteConfig.company.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
      streetAddress: siteConfig.company.address,
    },
    contactPoint: siteConfig.company.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "sales",
      areaServed: "PK",
      availableLanguage: ["en", "ur"],
    })),
    email: siteConfig.company.email,
    foundingDate: "2011",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Flexi HRMS",
      },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-PK",
  };
}

export function softwareApplicationSchema(args: {
  name: string;
  description: string;
  category?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: args.name,
    description: args.description,
    applicationCategory: args.category ?? "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: args.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/pricing`,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    provider: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function articleSchema(args: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    url: args.url,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: args.author ? { "@type": "Organization", name: args.author } : { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": args.url },
    keywords: args.keywords?.join(", "),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function webPageSchema(args: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: args.name,
    description: args.description,
    url: args.url,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    ...(args.breadcrumbs && { breadcrumb: breadcrumbSchema(args.breadcrumbs) }),
  };
}
