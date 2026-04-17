import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModuleLayout } from "@/components/product/module-layout";
import { getModuleDetail, moduleDetailSlugs } from "@/data/modules-detail";
import { suites } from "@/data/modules";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, softwareApplicationSchema, breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return moduleDetailSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const mod = getModuleDetail(params.slug);
  if (!mod) return { title: "Module not found" };
  const url = `${siteConfig.url}/product/${mod.slug}`;
  return {
    title: mod.seoTitle,
    description: mod.seoDescription,
    keywords: mod.seoKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: mod.seoTitle,
      description: mod.seoDescription,
      url,
      type: "website",
    },
  };
}

export const dynamicParams = false;

export default function ModulePage({ params }: { params: { slug: string } }) {
  const mod = getModuleDetail(params.slug);
  if (!mod) notFound();
  const url = `${siteConfig.url}/product/${mod.slug}`;
  const suite = suites[mod.suite];
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: `${mod.name} — ${siteConfig.name}`,
            description: mod.seoDescription,
            url,
          }),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Product", url: `${siteConfig.url}/product` },
            { name: suite.name, url: `${siteConfig.url}${suite.href}` },
            { name: mod.name, url },
          ]),
        ]}
      />
      <ModuleLayout mod={mod} />
    </>
  );
}
