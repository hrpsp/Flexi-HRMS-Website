import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { CountUp } from "@/components/ui/count-up";

export const metadata: Metadata = {
  title: "Why Flexi HRMS — the configurability moat | Flexi HRMS",
  description:
    "Every HRMS says 'flexible.' Here's what makes Flexi different: Flexi Meta + Flexi HQ per-tenant configurability, 15 years in production, 100+ Pakistani enterprises, Pakistan-native compliance.",
};

const differentiators = [
  {
    eyebrow: "Differentiator 01",
    title: "Flexi Meta + Flexi HQ — shown, not claimed.",
    body: "Every competitor uses words like 'flexible' or 'customisable' or 'smart flow.' Flexi demonstrates it: forms, workflows, and payroll rules reconfigure per tenant, live — without code, without a ticket, without a release cycle. A manufacturing tenant's onboarding form looks nothing like a retail tenant's onboarding form — and neither requires a developer. This is the single biggest moat against every other HRMS in the Pakistani market.",
    proof: "The same codebase running Bata's retail policies, Engro's manufacturing shifts, and Ufone's telecom workflows — each tenant configured to its own reality.",
    link: { href: "/product/platform", label: "See the Platform suite" },
  },
  {
    eyebrow: "Differentiator 02",
    title: "Named blue-chip deployments. Specific numbers.",
    body: "Competitors list customers with abstractions — 'leading brands,' 'trusted by,' 'hundreds of enterprises.' Flexi names them: Bata Pakistan (2,600+ employees), Ufone, CMPak Zong, HBL, Engro, Descon, PTCL, Jazz, JazzCash, Chughtai Lab, PSDF, Mobilink Bank, U Bank, JS Bank, Jubilee Life — and 85+ others. Specific. Verifiable. Blue-chip. Pakistani.",
    proof: "Every name above is a live deployment, not a logo swap.",
    link: { href: "/customers", label: "See customer case studies" },
  },
  {
    eyebrow: "Differentiator 03",
    title: "Fifteen years in production.",
    body: "Flexi HRMS has been running Pakistani HR and payroll since 2011, via HRPSP deployments at scale. 100+ client organisations. 35,000+ employees managed. 240+ Pakistani cities. Fifteen years of federal budgets, provincial labour law revisions, WHT slab rewrites, EOBI rate changes, and every other Pakistan-specific update the market throws at an HRMS vendor.",
    proof: "Fifteen years matches or exceeds every serious competitor's tenure in Pakistan.",
    link: { href: "/compliance", label: "See Pakistan compliance depth" },
  },
  {
    eyebrow: "Differentiator 04",
    title: "Pakistan-native from day one.",
    body: "EOBI contribution calculations, PESSI rates by province, WHT slab logic with monthly averaging, FBR payslip format compliance, provincial labour law variants for manufacturing and service establishments, WPS bank file formats for every major partner bank. Updated every federal budget, without a project.",
    proof: "What global HRMS products handle via a 'local partner,' Flexi handles natively.",
    link: { href: "/compliance", label: "See compliance details" },
  },
  {
    eyebrow: "Differentiator 05",
    title: "Software OR service — the buyer's choice.",
    body: "Most HRMS vendors sell only software. Through HRPSP, Flexi can run your HR end-to-end as an outsourcing service — delivered on the Flexi HRMS platform. Payroll processed for you, compliance filings done for you, employee queries handled for you. Run it yourself, or hand it off. The product is the same.",
    proof: "No other Pakistani HRMS offers this structural choice.",
    link: { href: "https://hrpsp.net", label: "Learn about HRPSP", external: true },
  },
  {
    eyebrow: "Differentiator 06",
    title: "Mobile for the Pakistani workforce.",
    body: "A very large share of every Pakistani enterprise's workforce works from a plant, a store, a tower site, or a distribution route. MobileEdge is a proper Flutter app — payslips, leave, attendance, expense claims, recognition, announcements — that works on mid-range Android devices with spotty data. White-collar and blue-collar, same app.",
    proof: "ESS for desk-based employees. MobileEdge for the rest. One product, one platform.",
    link: { href: "/product/mobileedge", label: "See MobileEdge" },
  },
];

export default function WhyFlexiPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.peach/15),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.brand.mid/10),transparent_55%)]"
        />
        <div className="container pt-20 pb-14 lg:pt-28 lg:pb-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Why Flexi
            </span>
            <h1 className="text-display-xl text-balance text-neutral-text">
              Six things Flexi HRMS does that other HRMS products claim but cannot deliver.
            </h1>
            <p className="text-lg text-neutral-gray text-pretty">
              Every HRMS in this market says the same things — flexible, modern, intuitive, comprehensive. This page is what makes Flexi actually different, in concrete detail, with named proof points.
            </p>
          </div>
        </div>
      </section>

      {/* Scale bar repeated here for this page's audience */}
      <section className="bg-brand-gradient text-white">
        <div className="container py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {[
              { value: 100, suffix: "+", label: "Client organisations" },
              { value: 35000, suffix: "+", label: "Employees managed" },
              { value: 240, suffix: "+", label: "Pakistani cities" },
              { value: 15, suffix: " years", label: "In production" },
            ].map((s, i) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold tracking-tight">
                  <CountUp value={s.value} suffix={s.suffix} index={i} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-brand-peach/90">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <Section>
        <div className="space-y-20 md:space-y-28">
          {differentiators.map((d, i) => (
            <div key={d.title} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="text-eyebrow uppercase text-brand-mid">{d.eyebrow}</div>
                <h2 className="text-display-lg text-neutral-text mt-3 text-balance">{d.title}</h2>
              </div>
              <div className="lg:col-span-7 space-y-5">
                <p className="text-base text-neutral-text/90 text-pretty leading-relaxed">{d.body}</p>
                <div className="rounded-xl border-l-4 border-brand-peach bg-brand-peach/10 px-5 py-4">
                  <div className="text-xs uppercase tracking-wider text-brand-mid mb-1">In practice</div>
                  <p className="text-sm text-neutral-text/90 text-pretty">{d.proof}</p>
                </div>
                {d.link && (
                  <div>
                    {d.link.external ? (
                      <a
                        href={d.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-dark hover:gap-1.5 transition-all duration-fast ease-flexi-snap"
                      >
                        {d.link.label} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={d.link.href}
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-dark hover:gap-1.5 transition-all duration-fast ease-flexi-snap"
                      >
                        {d.link.label} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison narrative — anonymised */}
      <Section tone="light">
        <SectionHeading
          eyebrow="When the buyer compares"
          title="The three real alternatives — and how Flexi stacks up."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            {
              label: "Global HRMS",
              sub: "(e.g. SAP SuccessFactors, Workday)",
              strengths: ["Enterprise pedigree", "Strong analytics"],
              gaps: ["Limited Pakistani compliance depth", "Local partner dependency", "6–18 month implementations"],
              icon: Minus,
            },
            {
              label: "Local single-product HRMS",
              sub: "(various Pakistani players)",
              strengths: ["Pakistan-aware payroll", "Faster to implement"],
              gaps: ["Claim configurability; depth varies", "Narrower module coverage", "Smaller deployments in the mid-market"],
              icon: Minus,
            },
            {
              label: "Spreadsheets / legacy",
              sub: "(FoxPro-era, early TimeTrax, custom Oracle)",
              strengths: ["Familiar to finance", "No licence cost"],
              gaps: ["Manual compliance", "No audit trail", "No mobile", "Doesn't scale past a certain point"],
              icon: X,
            },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-base font-semibold text-neutral-text">{c.label}</div>
              <div className="text-xs text-neutral-gray">{c.sub}</div>
              <div className="mt-5 space-y-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-success mb-1.5">Strengths</div>
                  <ul className="space-y-1.5">
                    {c.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-neutral-text/90">
                        <Check className="h-3.5 w-3.5 mt-1 shrink-0 text-success" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-warning mb-1.5">Gaps vs. Flexi</div>
                  <ul className="space-y-1.5">
                    {c.gaps.map((g) => (
                      <li key={g} className="flex items-start gap-2 text-sm text-neutral-gray">
                        <c.icon className="h-3.5 w-3.5 mt-1 shrink-0 text-warning" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-brand-dark text-white">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-display-lg text-balance max-w-3xl mx-auto">
            See the configurability that makes everything else possible.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            A 30-minute demo configured to your industry — so the moat stops being a slide and starts being a screen.
          </p>
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
