import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { suites, modulesBySuite, type Suite } from "@/data/modules";
import { suiteDetails } from "@/data/suites";

export const metadata: Metadata = {
  title: "Flexi HRMS — the product",
  description:
    "Four suites, 25+ modules, one platform. Core HR, Talent, Engagement, and the Platform layer (Flexi HQ + Flexi Meta) that makes every tenant configurable without code.",
};

const suiteOrder: Suite[] = ["core", "talent", "engagement", "platform"];

const suiteIcon: Record<Suite, string> = {
  core: "Users",
  talent: "Target",
  engagement: "Heart",
  platform: "Cog",
};

export default function ProductOverviewPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.peach/22),transparent_60%),radial-gradient(ellipse_at_bottom_left,theme(colors.brand.mid/15),transparent_55%)]"
        />
        <div className="container pt-20 pb-14 lg:pt-28 lg:pb-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              The Flexi HRMS product
            </span>
            <h1 className="text-display-xl text-balance text-brand-ink">
              Four suites. 25+ modules. One configurable platform.
            </h1>
            <p className="text-lg text-brand-gray text-pretty">
              Flexi HRMS is organised so you can start with the modules you need and grow into the rest. Every suite runs on the same Platform layer — which is why a manufacturing plant, a telecom operator, and a retail chain can all run Flexi without any of them living with someone else&apos;s assumptions.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="bg-brand-peach text-brand-dark hover:bg-brand-peach/90 h-12 px-6">
                <Link href="/request-demo">
                  Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 px-5 text-brand-dark hover:bg-brand-light">
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section tone="light">
        <SectionHeading
          eyebrow="The four suites"
          title="Pick your starting point."
          description="Each suite is independently valuable and fully integrated with the rest of Flexi."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {suiteOrder.map((s) => {
            const suite = suites[s];
            const mods = modulesBySuite(s);
            const hasDetail = !!suiteDetails[s];
            return (
              <Link
                key={s}
                href={suite.href}
                className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all p-7"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-lg bg-brand-peach/30 flex items-center justify-center shrink-0">
                      <DynamicIcon name={suiteIcon[s]} className="h-5 w-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-eyebrow uppercase text-brand-mid">Suite</div>
                      <div className="text-xl font-semibold text-brand-ink mt-1">{suite.name}</div>
                      <div className="text-sm text-brand-gray mt-1">{suite.promise}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {mods.slice(0, 6).map((m) => (
                    <span
                      key={m.slug}
                      className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-xs text-brand-ink"
                    >
                      {m.name}
                    </span>
                  ))}
                  {mods.length > 6 && (
                    <span className="inline-flex items-center rounded-full border border-dashed border-brand-dark/30 bg-brand-dark/5 px-2.5 py-1 text-xs font-medium text-brand-dark">
                      +{mods.length - 6} more
                    </span>
                  )}
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-dark group-hover:gap-1.5 transition-all">
                  {hasDetail ? `Explore ${suite.name}` : `${suite.name} — coming soon`} <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          align="center"
          title="All 25+ modules."
          description="Adopt one, adopt all. Add or swap as you grow. Every module runs on Flexi HQ and shares the same data model."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {suiteOrder.flatMap((s) =>
            modulesBySuite(s).map((m) => (
              <Link
                key={m.slug}
                href={`/product/${m.slug}`}
                className="group rounded-xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-sm transition-all p-4"
              >
                <div className="text-xs uppercase tracking-wider text-brand-mid mb-1">{suites[s].name}</div>
                <div className="text-sm font-semibold text-brand-ink group-hover:text-brand-dark">{m.name}</div>
                <div className="text-xs text-brand-gray line-clamp-1 mt-0.5">{m.tagline}</div>
              </Link>
            ))
          )}
        </div>
      </Section>

      <section className="bg-brand-dark text-white">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-display-lg text-balance max-w-3xl mx-auto">
            Want a walkthrough of the full platform?
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            A 30-minute demo, configured to your industry, run by a product specialist.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-brand-peach text-brand-dark hover:bg-brand-peach/90 h-12 px-7">
              <Link href="/request-demo">
                Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
