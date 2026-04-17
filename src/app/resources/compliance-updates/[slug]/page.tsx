import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/resources/article-layout";
import { getResource, resourcesByCategory } from "@/data/resources";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return resourcesByCategory("compliance-update").map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const r = getResource(params.slug);
  if (!r || r.category !== "compliance-update") return { title: "Update not found" };
  const url = `${siteConfig.url}/resources/compliance-updates/${r.slug}`;
  return {
    title: r.seoTitle,
    description: r.seoDescription,
    keywords: r.seoKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: r.seoTitle,
      description: r.seoDescription,
      url,
      type: "article",
      publishedTime: r.publishedAt,
      modifiedTime: r.updatedAt ?? r.publishedAt,
    },
  };
}

export const dynamicParams = false;

export default function ComplianceUpdatePage({ params }: { params: { slug: string } }) {
  const r = getResource(params.slug);
  if (!r || r.category !== "compliance-update") notFound();
  const url = `${siteConfig.url}/resources/compliance-updates/${r.slug}`;
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: r.title,
            description: r.description,
            url,
            datePublished: r.publishedAt,
            dateModified: r.updatedAt,
            author: r.author,
            keywords: r.seoKeywords,
          }),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Resources", url: `${siteConfig.url}/resources` },
            { name: "Compliance updates", url: `${siteConfig.url}/resources/compliance-updates` },
            { name: r.title, url },
          ]),
        ]}
      />
      <ArticleLayout r={r} />
    </>
  );
}
