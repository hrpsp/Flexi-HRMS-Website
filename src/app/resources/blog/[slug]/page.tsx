import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/resources/article-layout";
import { getResource, resourcesByCategory } from "@/data/resources";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return resourcesByCategory("blog").map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const r = getResource(params.slug);
  if (!r || r.category !== "blog") return { title: "Post not found" };
  const url = `${siteConfig.url}/resources/blog/${r.slug}`;
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const r = getResource(params.slug);
  if (!r || r.category !== "blog") notFound();
  const url = `${siteConfig.url}/resources/blog/${r.slug}`;
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
            { name: "Blog", url: `${siteConfig.url}/resources/blog` },
            { name: r.title, url },
          ]),
        ]}
      />
      <ArticleLayout r={r} />
    </>
  );
}
