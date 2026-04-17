import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { modules } from "@/data/modules";
import type { Solution } from "@/data/solutions";

export function SolutionLayout({ solution }: { solution: Solution }) {
  const keyMods = solution.keyModules
    .map((slug) => modules.find((m) => m.slug === slug))
    .filter((m): m is (typeof modules)[number] => Boolean(m));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.peach/22),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.brand.mid/16),transparent_55%)]"
        />
        <div className="container pt-16 pb-12 lg:pt-24 lg:pb-16">
          <nav className="flex items-center gap-1.5 text-xs text-brand-gray mb-6">
            <Link href="/solutions" className="hover:text-brand-dark">Solutions</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-ink">{solution.name}</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              {solution.eyebrow}
            </span>
            <h1 className="text-display-xl text-balance text-brand-ink">{solution.heroHeadline}</h1>
            <p className="text-lg text-brand-gray text-pretty">{solution.heroBody}</p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="bg-brand-peach text-brand-dark hover:bg-brand-peach/90 h-12 px-6">
                <Link href="/request-demo">
                  Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 px-5 text-brand-dark hover:bg-brand-light">
                <Link href="/customers">See customer stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Where generic HRMS breaks"
          title={`What ${solution.name} HR teams run into.`}
        />
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {solution.painPoints.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-brand-warning/20 flex items-center justify-center mb-4">
                <DynamicIcon name={p.icon} className="h-5 w-5 text-brand-dark" />
              </div>
              <div className="text-base font-semibold text-brand-ink">{p.title}</div>
              <p className="mt-2 text-sm text-brand-gray text-pretty">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Flexi's answer */}
      <Section>
        <SectionHeading
          eyebrow="How Flexi answers"
          title={`Configured for ${solution.name}.`}
          description={solution.flexiAnswer}
        />
      </Section>

      {/* Story beats */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Concretely"
          title="What it looks like, in practice."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {solution.storyBeats.map((beat, i) => (
            <div key={beat.title} className="rounded-2xl border border-border bg-card p-7 flex flex-col">
              <div className="h-8 w-8 rounded-full bg-brand-dark text-white text-xs font-semibold flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <div className="text-base font-semibold text-brand-ink">{beat.title}</div>
              <p className="mt-2 text-sm text-brand-gray text-pretty">{beat.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key modules */}
      <Section>
        <SectionHeading
          eyebrow="Modules that matter most"
          title={`The Flexi stack for ${solution.name}.`}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {keyMods.map((m) => (
            <Link
              key={m.slug}
              href={`/product/${m.slug}`}
              className="group rounded-xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-sm transition-all p-4"
            >
              <div className="text-sm font-semibold text-brand-ink group-hover:text-brand-dark">{m.name}</div>
              <div className="text-xs text-brand-gray line-clamp-2 mt-1">{m.tagline}</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Relevant customers (if any) */}
      {solution.relevantCustomers.length > 0 && (
        <Section tone="light">
          <SectionHeading
            eyebrow="Who runs on Flexi"
            title={`${solution.name} companies using Flexi HRMS.`}
            description="Named deployments. Blue-chip Pakistani enterprises."
          />
          <div className="mt-10 flex flex-wrap gap-2.5">
            {solution.relevantCustomers.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-brand-ink"
              >
                {c}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="bg-brand-dark text-white">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-display-lg text-balance max-w-3xl mx-auto">
            See Flexi HRMS configured for {solution.name} in 30 minutes.
          </h2>
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
