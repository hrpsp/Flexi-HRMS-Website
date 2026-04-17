import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { moduleDetailSlugs } from "@/data/modules-detail";
import { solutionSlugs } from "@/data/solutions";
import { caseStudySlugs } from "@/data/case-studies-detail";
import { resources } from "@/data/resources";

const now = new Date();

function url(path: string): string {
  return `${siteConfig.url}${path}`.replace(/\/$/, "") || siteConfig.url;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/product"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/product/core"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: url("/product/talent"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: url("/product/engagement"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: url("/product/platform"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: url("/solutions"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: url("/customers"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: url("/pricing"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/why-flexi"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: url("/compliance"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: url("/resources"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: url("/resources/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: url("/resources/guides"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: url("/resources/compliance-updates"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: url("/request-demo"), lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: url("/company"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/company/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/legal/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: url("/legal/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const moduleRoutes: MetadataRoute.Sitemap = moduleDetailSlugs().map((slug) => ({
    url: url(`/product/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = solutionSlugs().map((slug) => ({
    url: url(`/solutions/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const customerRoutes: MetadataRoute.Sitemap = caseStudySlugs().map((slug) => ({
    url: url(`/customers/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = resources.map((r) => {
    const base =
      r.category === "blog"
        ? "/resources/blog"
        : r.category === "guide"
        ? "/resources/guides"
        : "/resources/compliance-updates";
    return {
      url: url(`${base}/${r.slug}`),
      lastModified: new Date(r.updatedAt ?? r.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...moduleRoutes, ...solutionRoutes, ...customerRoutes, ...resourceRoutes];
}
