import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { suites } from "@/data/modules";
import type { SuiteDetail } from "@/data/types";

export function SuiteLayout({ suite, extras }: { suite: SuiteDetail; extras?: React.ReactNode }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.peach/15),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.brand.mid/10),transparent_55%)]"
        />
        <div className="container pt-16 pb-12 lg:pt-24 lg:pb-16">
          <nav className="flex items-center gap-1.5 text-xs text-neutral-gray mb-6">
            <Link href="/product" className="hover:text-brand-dark">Product</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-text">{suite.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
                {suite.eyebrow}
              </span>
              <h1 className="text-display-xl text-balance text-neutral-text">{suite.heroHeadline}</h1>
              <p className="text-lg text-neutral-gray text-pretty max-w-2xl">{suite.heroBody}</p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg" className="h-12 px-6">
                  <Link href="/request-demo">
                    Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="h-12 px-5 text-brand-dark hover:bg-neutral-light">
                  <Link href="#included">Explore modules</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SuiteSchematic suite={suite} />
            </div>
          </div>
        </div>
      </section>

      {/* Included modules */}
      <Section id="included">
        <SectionHeading
          eyebrow="What's included"
          title={`${suite.modules.length} modules in the ${suite.name} suite.`}
          description={suite.promise}
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {suite.modules.map((m) => (
            <Link
              key={m.slug}
              href={`/product/${m.slug}`}
              className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all duration-fast ease-flexi-snap p-6"
            >
              <div className="h-10 w-10 rounded-lg bg-brand-mid/10 flex items-center justify-center mb-4 group-hover:bg-brand-peach/30 transition-colors">
                <DynamicIcon name={m.icon} className="h-5 w-5 text-brand-dark" />
              </div>
              <div className="text-base font-semibold text-neutral-text">{m.name}</div>
              <p className="mt-1.5 text-sm text-neutral-gray">{m.tagline}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-dark group-hover:gap-1.5 transition-all duration-fast ease-flexi-snap">
                Explore {m.name} <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* How it works together */}
      <Section tone="light">
        <SectionHeading
          eyebrow="How it works together"
          title={`The ${suite.name} workflow.`}
          description="Modules in a Flexi suite aren't standalone tools bolted together — they share data, workflows, and a single Flexi HQ configuration."
        />
        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {suite.workflow.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-full bg-brand-dark text-white text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="text-base font-semibold text-neutral-text">{step.title}</div>
              </div>
              <p className="text-sm text-neutral-gray text-pretty">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {extras}

      {/* Customer callout */}
      {suite.customerCallout && (
        <Section>
          <div className="rounded-3xl bg-brand-dark text-white p-8 md:p-12 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.brand.peach/15),transparent_60%)]"
            />
            <div className="relative grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 space-y-3">
                {!suite.customerCallout.isConfirmed && (
                  <TodoBadge>Quote / figures pending</TodoBadge>
                )}
                <div className="text-eyebrow uppercase text-brand-peach">
                  Customer · {suite.customerCallout.customer}
                  {suite.customerCallout.industry ? ` · ${suite.customerCallout.industry}` : ""}
                </div>
                {suite.customerCallout.outcome && (
                  <p className="text-xl md:text-2xl font-semibold text-balance">
                    {suite.customerCallout.outcome}
                  </p>
                )}
                {suite.customerCallout.quote && (
                  <blockquote className="text-white/80 text-pretty">&ldquo;{suite.customerCallout.quote}&rdquo;</blockquote>
                )}
              </div>
              <div className="md:col-span-2 md:text-right">
                <Button asChild className="h-12 px-6">
                  <Link href="/customers">
                    See more customers <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Cross-sell */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Explore the rest of Flexi HRMS"
          title={`Pairs well with ${suite.name}.`}
        />
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {suite.crossSell.map((s) => {
            const sx = suites[s];
            return (
              <Link
                key={s}
                href={sx.href}
                className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all duration-fast ease-flexi-snap p-6"
              >
                <div className="text-eyebrow uppercase text-brand-mid">Suite</div>
                <div className="mt-1.5 text-lg font-semibold text-neutral-text">{sx.name}</div>
                <p className="mt-1 text-sm text-neutral-gray">{sx.promise}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-dark group-hover:gap-1.5 transition-all duration-fast ease-flexi-snap">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}

function SuiteSchematic({ suite }: { suite: SuiteDetail }) {
  const visible = suite.modules.slice(0, 6);
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand-peach/20 via-transparent to-brand-mid/10 blur-2xl" />
      <div className="rounded-2xl border border-border bg-card/70 backdrop-blur p-5 shadow-xl">
        <div className="text-[10px] uppercase tracking-[0.18em] text-brand-mid mb-3">Suite map · {suite.name}</div>
        <div className="grid grid-cols-2 gap-2.5">
          {visible.map((m) => (
            <div key={m.slug} className="rounded-lg bg-neutral-light/80 border border-border px-3 py-2.5 flex items-center gap-2.5">
              <DynamicIcon name={m.icon} className="h-4 w-4 text-brand-dark" />
              <div className="text-sm font-medium text-neutral-text truncate">{m.name}</div>
            </div>
          ))}
          {suite.modules.length > 6 && (
            <div className="rounded-lg bg-brand-dark/5 border border-dashed border-brand-dark/30 px-3 py-2.5 text-sm font-medium text-brand-dark flex items-center justify-center">
              + {suite.modules.length - 6} more
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
