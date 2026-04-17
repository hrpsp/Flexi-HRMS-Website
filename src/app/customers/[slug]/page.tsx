import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/customers/case-study-layout";
import { getCaseStudy, caseStudySlugs } from "@/data/case-studies-detail";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return caseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return { title: "Case study not found" };
  const url = `${siteConfig.url}/customers/${cs.slug}`;
  return {
    title: cs.seoTitle,
    description: cs.seoDescription,
    keywords: cs.seoKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: cs.seoTitle,
      description: cs.seoDescription,
      url,
      type: "article",
    },
  };
}

export const dynamicParams = false;

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();
  const url = `${siteConfig.url}/customers/${cs.slug}`;
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: cs.heroHeadline,
            description: cs.seoDescription,
            url,
            datePublished: "2026-01-01",
            keywords: cs.seoKeywords,
          }),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Customers", url: `${siteConfig.url}/customers` },
            { name: cs.customer, url },
          ]),
        ]}
      />
      <CaseStudyLayout cs={cs} />
    </>
  );
}
