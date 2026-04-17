import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";
import { modules } from "@/data/modules";
import type { CaseStudyDetail } from "@/data/case-studies-detail";

export function CaseStudyLayout({ cs }: { cs: CaseStudyDetail }) {
  const mods = cs.modulesUsed
    .map((slug) => modules.find((m) => m.slug === slug))
    .filter((m): m is (typeof modules)[number] => Boolean(m));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.brand.peach/25),transparent_60%),radial-gradient(ellipse_at_bottom_left,theme(colors.brand.mid/40),transparent_60%)]"
        />
        <div className="container relative pt-16 pb-16 lg:pt-24 lg:pb-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-6">
            <Link href="/customers" className="hover:text-white">Customers</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{cs.customer}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-2xl font-semibold">
                  {cs.customer.charAt(0)}
                </div>
                <div>
                  <div className="text-eyebrow uppercase text-brand-peach">Case study</div>
                  <div className="text-xl font-semibold">{cs.customer}</div>
                  <div className="text-sm text-white/60">{cs.industry}</div>
                </div>
                {!cs.isConfirmed && <TodoBadge>Quote & metrics pending</TodoBadge>}
              </div>

              <h1 className="text-display-xl text-balance">{cs.heroHeadline}</h1>
              <p className="text-lg text-white/75 text-pretty max-w-2xl">{cs.heroBlurb}</p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg" className="h-12 px-6">
                  <Link href="/request-demo">
                    Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="h-12 px-5 text-white hover:bg-white/10">
                  <Link href="/customers">More customers</Link>
                </Button>
              </div>
            </div>

            {cs.headlineStat && (
              <div className="lg:col-span-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur">
                  <div className="text-5xl lg:text-6xl font-bold text-brand-peach tracking-tight">
                    {cs.headlineStat.stat}
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{cs.headlineStat.label}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-eyebrow uppercase text-brand-mid">Challenge</div>
            <h2 className="text-display-lg text-neutral-text mt-3">The starting point.</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base text-neutral-text/90 text-pretty leading-relaxed">{cs.challenge}</p>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section tone="light">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-eyebrow uppercase text-brand-mid">Solution</div>
            <h2 className="text-display-lg text-neutral-text mt-3">What Flexi put in place.</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base text-neutral-text/90 text-pretty leading-relaxed">{cs.solution}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {mods.map((m) => (
                <Link
                  key={m.slug}
                  href={`/product/${m.slug}`}
                  className="inline-flex items-center rounded-full border border-border bg-card hover:border-brand-dark/30 px-3 py-1.5 text-xs font-medium text-neutral-text transition-colors"
                >
                  {m.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section>
        <SectionHeading
          eyebrow="Outcomes"
          title="What changed."
          description={
            cs.isConfirmed
              ? "Concrete, verifiable results from the deployment."
              : "Preliminary outcome markers — specific metrics to be confirmed with the customer."
          }
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cs.outcomes.map((o, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 ${
                o.isConfirmed ? "border-border bg-card" : "border-dashed border-warning/40 bg-warning/5"
              }`}
            >
              <div className={`text-3xl font-bold tracking-tight ${o.isConfirmed ? "text-brand-dark" : "text-warning"}`}>
                {o.stat}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-neutral-gray">{o.label}</div>
              {!o.isConfirmed && <div className="mt-3"><TodoBadge>Pending</TodoBadge></div>}
            </div>
          ))}
        </div>
      </Section>

      {/* Quote */}
      {cs.quote ? (
        <Section tone="light">
          <div className="max-w-3xl mx-auto text-center">
            {!cs.quote.isConfirmed && <div className="mb-4 flex justify-center"><TodoBadge>Quote pending approval</TodoBadge></div>}
            <blockquote className="text-2xl md:text-3xl font-medium text-neutral-text text-balance leading-relaxed">
              &ldquo;{cs.quote.text}&rdquo;
            </blockquote>
            <div className="mt-6 text-sm text-neutral-gray">— {cs.quote.attribution}</div>
          </div>
        </Section>
      ) : (
        <Section tone="light">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4"><TodoBadge>Customer quote pending</TodoBadge></div>
            <p className="text-sm text-neutral-gray">A formal testimonial will be added when approved by {cs.customer}.</p>
          </div>
        </Section>
      )}

      {/* Timeline callout */}
      {cs.timeline && (
        <Section>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 max-w-3xl">
            <div className="text-eyebrow uppercase text-brand-mid">Implementation</div>
            <div className={`mt-2 text-lg font-medium ${cs.timeline.startsWith("TODO") ? "text-warning" : "text-neutral-text"}`}>
              {cs.timeline}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="bg-brand-dark text-white">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-display-lg text-balance max-w-3xl mx-auto">
            See what Flexi HRMS could look like for your company.
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
