import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";
import { pricingTiers, pricingFaqs } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { JsonLd, faqPageSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Pricing — per-employee-per-month, no module upcharges | Flexi HRMS",
  description:
    "Flexi HRMS pricing in PKR, per employee per month, billed annually. Three tiers — Essentials, Professional, Enterprise — covering the full platform with no hidden module fees.",
  alternates: { canonical: `${siteConfig.url}/pricing` },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(pricingFaqs),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Pricing", url: `${siteConfig.url}/pricing` },
          ]),
        ]}
      />
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.peach/22),transparent_60%),radial-gradient(ellipse_at_bottom_left,theme(colors.brand.mid/15),transparent_55%)]"
        />
        <div className="container pt-20 pb-10 lg:pt-28 lg:pb-14">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Pricing
            </span>
            <h1 className="text-display-xl text-balance text-brand-ink">
              Transparent pricing. No per-module upcharges.
            </h1>
            <p className="text-lg text-brand-gray text-pretty">
              Per employee per month, billed annually in PKR. Three tiers. Every suite and every module your tier includes — no separate licences for ESS or MobileEdge, no paywalls inside the product.
            </p>
            <div className="flex justify-center">
              <TodoBadge>PKR numbers pending — ask sales for current rate card</TodoBadge>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-5">
          {pricingTiers.map((t) => (
            <div
              key={t.slug}
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
              <div className={cn("text-lg font-semibold", t.featured ? "text-white" : "text-brand-ink")}>
                {t.name}
              </div>
              <p className={cn("text-sm mt-1.5", t.featured ? "text-white/70" : "text-brand-gray")}>
                {t.audience}
              </p>

              <div className="mt-6">
                <div className={cn("text-3xl font-bold", t.featured ? "text-brand-peach" : "text-brand-dark")}>
                  {t.priceLabel}
                </div>
                <div className={cn("text-xs mt-1", t.featured ? "text-white/60" : "text-brand-gray")}>
                  {t.priceSuffix}
                </div>
              </div>

              <div className={cn("mt-5 pb-5 border-b", t.featured ? "border-white/10" : "border-border")}>
                <div className={cn("text-[11px] uppercase tracking-wider mb-2", t.featured ? "text-brand-peach" : "text-brand-mid")}>
                  Suites included
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {t.includedSuites.map((s) => (
                    <span
                      key={s}
                      className={cn(
                        "text-xs rounded-full px-2.5 py-0.5 font-medium",
                        t.featured ? "bg-white/10 text-white" : "bg-brand-light text-brand-ink"
                      )}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 flex-1">
                {t.keyFeatures.map((f) => (
                  <li key={f} className={cn("flex items-start gap-2 text-sm", t.featured ? "text-white/90" : "text-brand-ink/90")}>
                    <Check className={cn("h-4 w-4 mt-0.5 shrink-0", t.featured ? "text-brand-peach" : "text-brand-success")} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {t.limits && (
                <div className={cn("mt-5 pt-5 border-t text-[11px] uppercase tracking-wider mb-1", t.featured ? "border-white/10 text-white/60" : "border-border text-brand-gray")}>
                  Considerations
                  <ul className="normal-case tracking-normal mt-1.5 space-y-1 text-xs font-normal">
                    {t.limits.map((l) => (
                      <li key={l}>— {l}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                asChild
                className={cn(
                  "mt-6 h-11",
                  t.featured
                    ? "bg-brand-peach text-brand-dark hover:bg-brand-peach/90"
                    : "bg-brand-dark text-white hover:bg-brand-dark/90"
                )}
              >
                <Link href={t.ctaHref}>
                  {t.ctaLabel} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Implementation & service"
          title="One-time investment to go live."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-eyebrow uppercase text-brand-mid mb-2">Implementation</div>
            <div className="text-lg font-semibold text-brand-ink">4–12 weeks typical</div>
            <p className="mt-2 text-sm text-brand-gray">Discovery, tenant configuration, data migration, integrations, user training, pilot, and hand-off to production — scoped per engagement.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-eyebrow uppercase text-brand-mid mb-2">Support</div>
            <div className="text-lg font-semibold text-brand-ink">Email / priority / 24×7</div>
            <p className="mt-2 text-sm text-brand-gray">Standard email support on Essentials. Priority and named success manager on Professional. 24×7 SLA-backed on Enterprise.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-eyebrow uppercase text-brand-mid mb-2">Service wrap</div>
            <div className="text-lg font-semibold text-brand-ink">HR as a service via HRPSP</div>
            <p className="mt-2 text-sm text-brand-gray">Prefer to outsource HR entirely? HRPSP runs HR end-to-end on Flexi HRMS. Available as an add-on to Enterprise.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Pricing FAQ"
          title="Straight answers."
          align="center"
        />
        <div className="mt-12 max-w-3xl mx-auto divide-y divide-border border-y border-border">
          {pricingFaqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <span className="text-base font-medium text-brand-ink pr-4">{f.q}</span>
                <span className="shrink-0 mt-1 text-brand-gray group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-brand-gray text-pretty">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-brand-dark text-white">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-display-lg text-balance max-w-3xl mx-auto">
            Get a quote configured for your headcount, industry, and suites.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            A product specialist will walk through suites, configuration scope, integrations, and pricing for your specific reality.
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
