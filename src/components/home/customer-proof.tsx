import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";
import { featuredCaseStudies } from "@/data/case-studies";

export function CustomerProof() {
  return (
    <Section tone="light">
      <SectionHeading
        align="center"
        title="Outcomes, not claims."
        description="Three customers running Flexi HRMS. Named deployments, verifiable numbers."
      />

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {featuredCaseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/customers/${cs.slug}`}
            className="group rounded-2xl border border-border bg-card hover:border-brand-dark/30 hover:shadow-md transition-all p-7 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-brand-dark text-white flex items-center justify-center text-sm font-semibold">
                  {cs.customer.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-ink">{cs.customer}</div>
                  <div className="text-xs text-brand-gray">{cs.industry}</div>
                </div>
              </div>
              {!cs.isConfirmed && <TodoBadge>Needs outcome</TodoBadge>}
            </div>

            <p className="text-sm text-brand-gray text-pretty">{cs.context}</p>

            <div className="mt-6 pt-5 border-t border-border">
              <div className="text-3xl font-bold text-brand-dark">
                {cs.isConfirmed ? cs.headlineStat : <span className="text-brand-warning">TODO</span>}
              </div>
              <div className="text-xs uppercase tracking-wider text-brand-gray mt-1">{cs.statLabel}</div>
            </div>

            <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-dark group-hover:gap-1.5 transition-all">
              Read case study <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
