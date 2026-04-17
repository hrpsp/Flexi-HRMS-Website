import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Essentials",
    audience: "Core HR + payroll for growing teams.",
    priceLabel: "PKR TODO",
    priceSuffix: "per employee / month",
    highlights: ["PeopleHub, PayEdge, LeaveEase, TimeSync", "Pakistan statutory compliance", "ESS + mobile app"],
    cta: "See Essentials",
  },
  {
    name: "Professional",
    audience: "Core + Talent + Engagement for scaling enterprises.",
    priceLabel: "PKR TODO",
    priceSuffix: "per employee / month",
    featured: true,
    highlights: [
      "Everything in Essentials",
      "PerformPro, TalentWorks, SkillForge",
      "CultureCore, EngageBoard, BenefitHub",
      "Flexi HQ configuration",
    ],
    cta: "See Professional",
  },
  {
    name: "Enterprise",
    audience: "Full platform — all suites, full configurability.",
    priceLabel: "PKR TODO",
    priceSuffix: "custom",
    highlights: [
      "Everything in Professional",
      "Flexi Meta — per-tenant field & workflow engine",
      "LeadershipLab, WellNest, Insight360, Audit Trail",
      "SSO, API access, data residency",
    ],
    cta: "Talk to sales",
  },
];

export function PricingPreview() {
  return (
    <Section>
      <SectionHeading
        align="center"
        title="Transparent pricing. No per-module upcharges."
        description="Per-employee-per-month, billed annually. Three tiers, one platform. Swap or add modules mid-term."
      />
      <div className="mt-4 flex justify-center">
        <TodoBadge>Pricing numbers pending</TodoBadge>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={cn(
              "rounded-2xl border p-7 flex flex-col",
              t.featured
                ? "bg-brand-dark text-white border-brand-dark shadow-xl relative md:-translate-y-2"
                : "bg-card border-border"
            )}
          >
            {t.featured && (
              <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-peach px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-dark">
                Most adopted
              </span>
            )}
            <div className={cn("text-lg font-semibold", t.featured ? "text-white" : "text-neutral-text")}>
              {t.name}
            </div>
            <p className={cn("text-sm mt-1.5", t.featured ? "text-white/70" : "text-neutral-gray")}>
              {t.audience}
            </p>

            <div className="mt-6">
              <div className={cn("text-3xl font-bold", t.featured ? "text-brand-peach" : "text-brand-dark")}>
                {t.priceLabel}
              </div>
              <div className={cn("text-xs mt-1", t.featured ? "text-white/60" : "text-neutral-gray")}>
                {t.priceSuffix}
              </div>
            </div>

            <ul className="mt-6 space-y-2.5 flex-1">
              {t.highlights.map((h) => (
                <li
                  key={h}
                  className={cn(
                    "flex items-start gap-2 text-sm",
                    t.featured ? "text-white/90" : "text-neutral-text/90"
                  )}
                >
                  <Check
                    className={cn(
                      "h-4 w-4 mt-0.5 shrink-0",
                      t.featured ? "text-brand-peach" : "text-success"
                    )}
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild variant="outline" className="h-11 px-6">
          <Link href="/pricing">
            See full pricing <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
