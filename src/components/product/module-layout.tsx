import Link from "next/link";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { modules, suites } from "@/data/modules";
import type { ModuleDetail } from "@/data/types";

export function ModuleLayout({ mod }: { mod: ModuleDetail }) {
  const suiteMeta = suites[mod.suite];
  const related = mod.relatedModules
    .map((slug) => modules.find((m) => m.slug === slug))
    .filter((m): m is (typeof modules)[number] => Boolean(m));
  const integrationModules = mod.integrations
    .map((slug) => modules.find((m) => m.slug === slug))
    .filter((m): m is (typeof modules)[number] => Boolean(m));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.brand.peach/12),transparent_55%),radial-gradient(ellipse_at_bottom_left,theme(colors.brand.mid/9),transparent_55%)]"
        />
        <div className="container pt-14 pb-10 lg:pt-20 lg:pb-14">
          <nav className="flex items-center gap-1.5 text-xs text-neutral-gray mb-6">
            <Link href="/product" className="hover:text-brand-dark">Product</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={suiteMeta.href} className="hover:text-brand-dark">{suiteMeta.name}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-text">{mod.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
                Module · {suiteMeta.name}
              </span>
              <h1 className="text-display-xl text-balance text-neutral-text">{mod.name}</h1>
              <p className="text-lg text-neutral-text/80 font-medium">{mod.tagline}</p>
              <p className="text-base text-neutral-gray text-pretty max-w-2xl">{mod.heroBody}</p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg" className="h-12 px-6">
                  <Link href="/request-demo">
                    Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="h-12 px-5 text-brand-dark hover:bg-neutral-light">
                  <Link href="#capabilities">See capabilities</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ModuleScreenshot mod={mod} />
            </div>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="relative">
        <div className="container pt-4 pb-14 lg:pt-8 lg:pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-eyebrow uppercase text-brand-peach font-semibold">The Reality</span>
              <span className="h-px flex-1 bg-gradient-to-r from-brand-peach/60 to-transparent" />
            </div>
            <figure className="relative border-l-4 border-brand-peach pl-6 md:pl-8 py-2">
              <span
                aria-hidden
                className="absolute -left-[14px] -top-1 h-6 w-6 rounded-full bg-brand-peach text-brand-dark text-xl font-semibold leading-none flex items-center justify-center"
              >
                &ldquo;
              </span>
              <blockquote className="text-lg md:text-xl text-neutral-text/90 leading-relaxed text-pretty font-medium">
                {mod.reality}
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <Section id="capabilities" tone="light">
        <SectionHeading
          eyebrow="Key capabilities"
          title={`What ${mod.name} does.`}
          description={mod.description}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mod.capabilities.map((cap) => (
            <div key={cap.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-brand-peach/25 flex items-center justify-center mb-4">
                <DynamicIcon name={cap.icon} className="h-5 w-5 text-brand-dark" />
              </div>
              <div className="text-base font-semibold text-neutral-text">{cap.title}</div>
              <p className="mt-2 text-sm text-neutral-gray text-pretty">{cap.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Workflow */}
      <Section>
        <SectionHeading
          eyebrow="How it works"
          title={`A ${mod.name} cycle, end to end.`}
        />
        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mod.workflow.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
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

      {/* Integrations */}
      {integrationModules.length > 0 && (
        <Section tone="light">
          <SectionHeading
            eyebrow="Integration with the rest of Flexi"
            title={`${mod.name} shares data with these modules.`}
            description="No data re-entry. No broken integrations. One platform, one data model."
          />
          <div className="mt-10 flex flex-wrap gap-2.5">
            {integrationModules.map((m) => (
              <Link
                key={m.slug}
                href={`/product/${m.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card hover:border-brand-dark/30 hover:bg-background transition-all duration-fast ease-flexi-snap px-4 py-2 text-sm font-medium text-neutral-text"
              >
                <Check className="h-3.5 w-3.5 text-success" />
                {m.name}
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Customer callout */}
      {mod.customerCallout && (
        <Section>
          <div className="rounded-3xl bg-brand-dark text-white p-8 md:p-12 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.brand.peach/12),transparent_60%)]"
            />
            <div className="relative grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 space-y-3">
                {!mod.customerCallout.isConfirmed && (
                  <TodoBadge>Quote / figures pending</TodoBadge>
                )}
                <div className="text-eyebrow uppercase text-brand-peach">
                  Customer · {mod.customerCallout.customer}
                  {mod.customerCallout.industry ? ` · ${mod.customerCallout.industry}` : ""}
                </div>
                {mod.customerCallout.outcome && (
                  <p className="text-xl md:text-2xl font-semibold text-balance">{mod.customerCallout.outcome}</p>
                )}
                {mod.customerCallout.quote && (
                  <blockquote className="text-white/80 text-pretty">&ldquo;{mod.customerCallout.quote}&rdquo;</blockquote>
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

      {/* Related modules */}
      {related.length > 0 && (
        <Section tone="light">
          <SectionHeading
            eyebrow="Related modules"
            title={`Often adopted alongside ${mod.name}.`}
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((m) => (
              <Link
                key={m.slug}
                href={`/product/${m.slug}`}
                className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all duration-fast ease-flexi-snap p-5"
              >
                <div className="text-sm font-semibold text-neutral-text group-hover:text-brand-dark">{m.name}</div>
                <p className="mt-1 text-xs text-neutral-gray line-clamp-2">{m.tagline}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="bg-brand-dark text-white">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-display-lg text-balance max-w-3xl mx-auto">
            See {mod.name} configured to your company in 30 minutes.
          </h2>
          <div className="mt-8">
            <Button asChild size="lg" className="h-12 px-7">
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

function ModuleScreenshot({ mod }: { mod: ModuleDetail }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand-peach/20 via-transparent to-brand-mid/10 blur-2xl" />
      <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-5 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-[0.18em] text-brand-mid">{mod.name} · preview</div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-neutral-gray/30" />
            <span className="h-2 w-2 rounded-full bg-neutral-gray/30" />
            <span className="h-2 w-2 rounded-full bg-brand-peach" />
          </div>
        </div>
        <div className="space-y-2.5">
          {mod.capabilities.slice(0, 4).map((c) => (
            <div key={c.title} className="flex items-start gap-3 rounded-lg bg-neutral-light/70 border border-border px-3 py-2.5">
              <div className="h-7 w-7 rounded-md bg-brand-peach/40 flex items-center justify-center shrink-0">
                <DynamicIcon name={c.icon} className="h-3.5 w-3.5 text-brand-dark" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-neutral-text truncate">{c.title}</div>
                <div className="text-[11px] text-neutral-gray line-clamp-1">{c.body}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] uppercase tracking-wider">
          <span className="text-neutral-gray">Screenshot placeholder</span>
          <span className="text-warning font-semibold">TODO — real UI capture</span>
        </div>
      </div>
    </div>
  );
}
