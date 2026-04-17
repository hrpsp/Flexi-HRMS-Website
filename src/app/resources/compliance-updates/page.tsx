import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ResourceCard } from "@/components/resources/resource-card";
import { resourcesByCategory } from "@/data/resources";

export const metadata: Metadata = {
  title: "Compliance updates — Flexi HRMS",
  description: "Federal budget reactions, EOBI rate changes, provincial labour law adjustments, and other compliance updates — as they happen.",
};

export default function ComplianceUpdatesPage() {
  const updates = resourcesByCategory("compliance-update");
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
              Compliance updates
            </span>
            <h1 className="text-display-lg text-balance text-brand-ink">
              Federal budget. EOBI. PESSI. Provincial labour law. As they change.
            </h1>
            <p className="text-brand-gray text-pretty max-w-2xl">
              When a compliance change affects payroll, we publish what changed, when it applies, and what Flexi has rolled out across customer tenants. No waiting on a quarterly vendor update call.
            </p>
          </div>
        </div>
      </section>

      <Section>
        {updates.length === 0 ? (
          <p className="text-center text-brand-gray">No updates yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {updates.map((r) => (
              <ResourceCard key={r.slug} r={r} hrefBase="/resources/compliance-updates" />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
