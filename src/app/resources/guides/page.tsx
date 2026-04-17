import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ResourceCard } from "@/components/resources/resource-card";
import { resourcesByCategory } from "@/data/resources";

export const metadata: Metadata = {
  title: "Guides — Flexi HRMS",
  description: "Practical guides and checklists for Pakistani HR and payroll teams.",
};

export default function GuidesPage() {
  const guides = resourcesByCategory("guide");
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.peach/22),transparent_60%)]"
        />
        <div className="container pt-16 pb-8 lg:pt-20 lg:pb-10">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Guides
            </span>
            <h1 className="text-display-lg text-balance text-neutral-text">
              Practical guides. Built to use, not to download and forget.
            </h1>
          </div>
        </div>
      </section>

      <Section>
        {guides.length === 0 ? (
          <p className="text-center text-neutral-gray">No guides yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((r) => (
              <ResourceCard key={r.slug} r={r} hrefBase="/resources/guides" />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
