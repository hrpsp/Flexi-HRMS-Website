import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Factory, Radio, Landmark, ShoppingBag, Stethoscope, Zap, Building2, BarChart3, Banknote, KeyRound, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { solutionsByKind } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions — industries and roles",
  description:
    "Flexi HRMS configured for how Pakistani industries actually work — manufacturing, telecom, BFSI, retail, healthcare, utilities, real estate — and for the leaders who evaluate it: HR, Finance, IT.",
};

const iconMap: Record<string, LucideIcon> = {
  manufacturing: Factory,
  telecom: Radio,
  bfsi: Landmark,
  retail: ShoppingBag,
  healthcare: Stethoscope,
  utilities: Zap,
  "real-estate": Building2,
  "for-hr-leaders": BarChart3,
  "for-cfos": Banknote,
  "for-cios": KeyRound,
};

export default function SolutionsPage() {
  const industries = solutionsByKind("industry");
  const roles = solutionsByKind("role");

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.peach/14),transparent_60%),radial-gradient(ellipse_at_bottom_left,theme(colors.brand.mid/9),transparent_55%)]"
        />
        <div className="container pt-20 pb-14 lg:pt-28 lg:pb-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Solutions
            </span>
            <h1 className="text-display-xl text-balance text-neutral-text">
              Built for how Pakistani industries actually work.
            </h1>
            <p className="text-lg text-neutral-gray text-pretty">
              Flexi HRMS configures to the operating reality of each industry — not a generic template. Here&apos;s how it lands in the industries we serve, and what different evaluators care about.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="h-12 px-6">
                <Link href="/request-demo">
                  Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section tone="light">
        <SectionHeading
          eyebrow="By industry"
          title="Seven industries, configured differently."
          description="One Flexi HRMS platform. Seven very different operational realities — each with its own pain points, policy patterns, and workforce shape."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((s) => {
            const Icon = iconMap[s.slug] ?? Building2;
            return (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all duration-fast ease-flexi-snap p-6"
              >
                <div className="h-10 w-10 rounded-lg bg-brand-peach/25 flex items-center justify-center mb-4 group-hover:bg-brand-peach/40 transition-colors">
                  <Icon className="h-5 w-5 text-brand-dark" />
                </div>
                <div className="text-base font-semibold text-neutral-text">{s.name}</div>
                <p className="mt-1.5 text-sm text-neutral-gray line-clamp-2">{s.heroBody}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-dark group-hover:gap-1.5 transition-all duration-fast ease-flexi-snap">
                  See {s.name} solution <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="By role"
          title="Different buyers. Different questions."
          description="HR leaders, CFOs, and CIOs each evaluate HRMS against different criteria. Flexi answers all three."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {roles.map((s) => {
            const Icon = iconMap[s.slug] ?? BarChart3;
            return (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all duration-fast ease-flexi-snap p-7"
              >
                <div className="h-11 w-11 rounded-lg bg-brand-mid/10 flex items-center justify-center mb-5 group-hover:bg-brand-peach/30 transition-colors">
                  <Icon className="h-5 w-5 text-brand-dark" />
                </div>
                <div className="text-base font-semibold text-neutral-text">{s.name}</div>
                <p className="mt-2 text-sm text-neutral-gray line-clamp-3">{s.heroBody}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-brand-dark group-hover:gap-1.5 transition-all duration-fast ease-flexi-snap">
                  See solution <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
