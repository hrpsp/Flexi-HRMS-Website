import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";
import { caseStudies } from "@/data/case-studies-detail";
import { clients } from "@/data/clients";

export const metadata: Metadata = {
  title: "Customers — Pakistani enterprises running on Flexi HRMS",
  description:
    "Flexi HRMS powers HR and payroll for 100+ Pakistani enterprises. Bata, Ufone, Zong, HBL, Engro, Descon, PTCL, Jazz, JazzCash, MEPCO, and 90+ more.",
};

export default function CustomersPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.peach/14),transparent_60%),radial-gradient(ellipse_at_bottom_left,theme(colors.brand.mid/9),transparent_55%)]"
        />
        <div className="container pt-20 pb-12 lg:pt-28 lg:pb-16">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Customers
            </span>
            <h1 className="text-display-xl text-balance text-neutral-text">
              100+ Pakistani enterprises. 35,000+ employees. Fifteen years in production.
            </h1>
            <p className="text-lg text-neutral-gray text-pretty">
              Flexi HRMS runs HR and payroll for blue-chip Pakistani enterprises across telecom, banking, manufacturing, retail, healthcare, and utilities. The companies below are a selection.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Case studies"
          title="Detailed stories."
          description="Three customers with depth on the challenge, what Flexi put in place, and what changed."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/customers/${cs.slug}`}
              className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all duration-fast ease-flexi-snap p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-brand-dark text-white flex items-center justify-center text-sm font-semibold">
                    {cs.customer.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-text">{cs.customer}</div>
                    <div className="text-xs text-neutral-gray">{cs.industry}</div>
                  </div>
                </div>
                {!cs.isConfirmed && <TodoBadge>Pending</TodoBadge>}
              </div>
              <p className="text-sm text-neutral-gray text-pretty line-clamp-3">{cs.heroBlurb}</p>
              {cs.headlineStat && (
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="text-3xl font-bold text-brand-dark">{cs.headlineStat.stat}</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-gray mt-1">{cs.headlineStat.label}</div>
                </div>
              )}
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-dark group-hover:gap-1.5 transition-all duration-fast ease-flexi-snap">
                Read case study <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="The client roster"
          title="Companies running on Flexi HRMS."
        />
        <div className="mt-4 flex justify-center">
          <TodoBadge>Text placeholders — swap in client SVGs</TodoBadge>
        </div>
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group flex h-16 items-center justify-center rounded-lg border border-dashed border-neutral-gray/30 bg-white/60 px-3 text-center text-[13px] font-medium text-neutral-gray hover:border-brand-mid/40 hover:bg-white hover:text-neutral-text transition-all duration-fast ease-flexi-snap"
            >
              {c.name}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-neutral-gray">
          Plus 70 more organisations across Pakistan.
        </div>
      </Section>

      <section className="bg-brand-dark text-white">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-display-lg text-balance max-w-3xl mx-auto">
            Want to be the next customer with a case study here?
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
