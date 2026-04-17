import Link from "next/link";
import { ArrowRight, Factory, Radio, Landmark, ShoppingBag, Stethoscope, Zap, Building2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { industries } from "@/data/industries";

const iconMap = {
  manufacturing: Factory,
  telecom: Radio,
  bfsi: Landmark,
  retail: ShoppingBag,
  healthcare: Stethoscope,
  utilities: Zap,
  "real-estate": Building2,
} as const;

export function IndustryGrid() {
  return (
    <Section>
      <SectionHeading
        align="center"
        title="Built for how Pakistani industries actually work."
        description="Each industry carries its own shift patterns, labour-law variants, compliance burdens, and workforce composition. Flexi HQ configures to fit — not around."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {industries.map((ind, i) => {
          const Icon = iconMap[ind.slug as keyof typeof iconMap] ?? Building2;
          return (
            <Link
              key={ind.slug}
              href={ind.href}
              className={`group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all p-6 ${
                i === 6 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="h-10 w-10 rounded-lg bg-brand-mid/10 flex items-center justify-center mb-5 group-hover:bg-brand-peach/30 transition-colors">
                <Icon className="h-5 w-5 text-brand-dark" />
              </div>
              <div className="text-base font-semibold text-brand-ink">{ind.name}</div>
              <p className="mt-1.5 text-sm text-brand-gray text-pretty line-clamp-3">{ind.blurb}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-dark group-hover:gap-1.5 transition-all">
                See {ind.name} solution <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
