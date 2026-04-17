import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, CalendarClock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { ResourceCard } from "@/components/resources/resource-card";
import { resources, categoryMeta } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources — blog, guides, compliance updates | Flexi HRMS",
  description:
    "Flexi HRMS resources for Pakistani HR leaders. Product thinking, payroll and compliance guides, and federal-budget compliance updates.",
};

const categoryIcons = {
  blog: BookOpen,
  guide: FileText,
  "compliance-update": CalendarClock,
} as const;

export default function ResourcesPage() {
  const latest = [...resources].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.peach/22),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.brand.mid/16),transparent_55%)]"
        />
        <div className="container pt-20 pb-10 lg:pt-28 lg:pb-14">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Resources
            </span>
            <h1 className="text-display-xl text-balance text-neutral-text">
              Product thinking, payroll checklists, and compliance updates.
            </h1>
            <p className="text-lg text-neutral-gray text-pretty">
              We don&apos;t publish thought leadership for its own sake. Everything here is written because an HR, payroll, or IT leader asked us to explain something — and the answer was useful enough to write down.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-5">
          {(Object.keys(categoryMeta) as Array<keyof typeof categoryMeta>).map((k) => {
            const cat = categoryMeta[k];
            const Icon = categoryIcons[k];
            return (
              <Link
                key={k}
                href={cat.href}
                className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all duration-fast ease-flexi-snap p-7"
              >
                <div className="h-10 w-10 rounded-lg bg-brand-peach/25 flex items-center justify-center mb-5 group-hover:bg-brand-peach/40 transition-colors">
                  <Icon className="h-5 w-5 text-brand-dark" />
                </div>
                <div className="text-base font-semibold text-neutral-text">{cat.label}</div>
                <p className="mt-2 text-sm text-neutral-gray text-pretty">{cat.description}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-dark group-hover:gap-1.5 transition-all duration-fast ease-flexi-snap">
                  Browse {cat.label} <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Latest" title="What's new across the library." />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {latest.slice(0, 6).map((r) => {
            const base = r.category === "blog"
              ? "/resources/blog"
              : r.category === "guide"
              ? "/resources/guides"
              : "/resources/compliance-updates";
            return <ResourceCard key={r.slug} r={r} hrefBase={base} />;
          })}
        </div>
      </Section>
    </>
  );
}
