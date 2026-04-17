import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Flexi HRMS — built by Flexi IT Services",
  description:
    "Flexi HRMS is the flagship HR platform built by Flexi IT Services (Pvt.) Ltd. Fifteen years of Pakistani enterprise HR experience, 100+ customer organisations, 35,000+ employees managed.",
};

export default function CompanyPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.peach/22),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.brand.mid/16),transparent_55%)]"
        />
        <div className="container pt-20 pb-12 lg:pt-28 lg:pb-16">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Company
            </span>
            <h1 className="text-display-xl text-balance text-brand-ink">
              Built by {siteConfig.company.legalName}. In production since 2011.
            </h1>
            <p className="text-lg text-brand-gray text-pretty">
              Flexi HRMS is the flagship HR platform from Flexi IT Services — a Lahore-headquartered enterprise software company serving 100+ Pakistani organisations across telecom, banking, manufacturing, retail, healthcare, and utilities. This site covers Flexi HRMS. The broader company portfolio lives at{" "}
              <a href={siteConfig.company.parentUrl} target="_blank" rel="noopener noreferrer" className="text-brand-dark underline underline-offset-4 hover:text-brand-mid">
                flexi.pk
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-3">
            <div className="text-eyebrow uppercase text-brand-mid">What we do</div>
            <h2 className="text-display-lg text-brand-ink">Enterprise software for Pakistani reality.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base text-brand-ink/90 leading-relaxed text-pretty">
            <p>
              Flexi IT Services builds enterprise software designed for the realities Pakistani businesses actually operate in — federal budget changes on 24 hours&apos; notice, provincial labour law variants, WHT slabs that move, and workforces spread across manufacturing floors, tower sites, retail stores, hospital shifts, and distribution zones.
            </p>
            <p>
              Flexi HRMS is the most widely adopted product in our portfolio. It runs HR and payroll for the named enterprises listed on the <Link href="/customers" className="text-brand-dark underline underline-offset-4 hover:text-brand-mid">customers</Link> page. Its configurability moat — Flexi HQ + Flexi Meta — is the reason the same codebase serves a retail chain, a telecom operator, a commercial bank, and a manufacturing group without any of them getting someone else&apos;s defaults.
            </p>
            <p>
              Our sister company, HRPSP, runs HR as a service for organisations that prefer to outsource the function end-to-end rather than run the software themselves. HRPSP delivers that service on the Flexi HRMS platform — meaning the product is the same whether you run it or we run it.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="By the numbers" title="Fifteen years. One hundred enterprises. Thirty-five thousand employees." />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: "15 years", l: "Flexi HRMS in production" },
            { n: "100+", l: "Client organisations" },
            { n: "35,000+", l: "Employees managed" },
            { n: "240+", l: "Pakistani cities" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-3xl font-bold text-brand-dark">{s.n}</div>
              <div className="mt-1.5 text-xs uppercase tracking-wider text-brand-gray">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="The people building it."
          description="Bios and photos go here when each team member has approved their own copy and headshot. No placeholder faces, no made-up titles."
        />
        <div className="mt-8 flex justify-center"><TodoBadge>Provide bios + headshots to publish</TodoBadge></div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { role: "Chief Executive", hint: "Company leadership" },
            { role: "Chief Technology Officer", hint: "Product & engineering" },
            { role: "Head of Product", hint: "Flexi HRMS product direction" },
            { role: "Head of Customer Success", hint: "Implementation & retention" },
            { role: "Head of Sales", hint: "Commercial leadership" },
            { role: "Head of Compliance", hint: "Pakistan regulatory depth" },
          ].map((slot) => (
            <div key={slot.role} className="rounded-2xl border border-dashed border-brand-gray/30 bg-brand-light/40 p-6 flex items-start gap-4">
              <div className="h-14 w-14 rounded-full bg-white border border-border flex items-center justify-center text-brand-gray text-xs font-medium shrink-0">
                Photo
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-wider text-brand-warning font-semibold">Pending</div>
                <div className="mt-1 text-sm font-semibold text-brand-ink">{slot.role}</div>
                <p className="mt-1 text-xs text-brand-gray">{slot.hint}</p>
                <p className="mt-3 text-[11px] text-brand-gray/80 italic">
                  Name, short bio (≤60 words), and approved headshot to go here.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="The wider Flexi group" title="One company, several products, two delivery models." />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="text-eyebrow uppercase text-brand-mid mb-2">Parent company</div>
            <div className="text-lg font-semibold text-brand-ink">Flexi IT Services (Pvt.) Ltd.</div>
            <p className="mt-2 text-sm text-brand-gray text-pretty">
              A portfolio of enterprise software products — Flexi HRMS among them. For the full product catalogue, visit{" "}
              <a href={siteConfig.company.parentUrl} target="_blank" rel="noopener noreferrer" className="text-brand-dark underline underline-offset-4 hover:text-brand-mid">flexi.pk</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="text-eyebrow uppercase text-brand-mid mb-2">Sister company</div>
            <div className="text-lg font-semibold text-brand-ink">HRPSP</div>
            <p className="mt-2 text-sm text-brand-gray text-pretty">
              HR outsourcing, payroll, and recruitment services — delivered on the Flexi HRMS platform. See{" "}
              <a href={siteConfig.company.sisterUrl} target="_blank" rel="noopener noreferrer" className="text-brand-dark underline underline-offset-4 hover:text-brand-mid">hrpsp.net</a>.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-brand-dark text-white">
        <div className="container py-14 md:py-16 text-center">
          <h2 className="text-display-md text-balance max-w-2xl mx-auto">
            Want to talk to someone on the team?
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild className="bg-brand-peach text-brand-dark hover:bg-brand-peach/90 h-11 px-6">
              <Link href="/request-demo">
                Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="h-11 px-6 text-white hover:bg-white/10">
              <Link href="/company/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
