import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionLayout } from "@/components/solutions/solution-layout";
import { getSolution, solutionSlugs } from "@/data/solutions";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema, webPageSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return solutionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getSolution(params.slug);
  if (!s) return { title: "Solution not found" };
  const url = `${siteConfig.url}/solutions/${s.slug}`;
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    keywords: s.seoKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: s.seoTitle,
      description: s.seoDescription,
      url,
      type: "website",
    },
  };
}

export const dynamicParams = false;

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) notFound();
  const url = `${siteConfig.url}/solutions/${s.slug}`;
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: s.seoTitle,
            description: s.seoDescription,
            url,
          }),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Solutions", url: `${siteConfig.url}/solutions` },
            { name: s.name, url },
          ]),
        ]}
      />
      <SolutionLayout solution={s} />
    </>
  );
}
