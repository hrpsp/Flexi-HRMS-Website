import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, Landmark, FileText, Banknote, Shield, Building2, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Pakistan HRMS compliance — EOBI, PESSI, WHT, FBR, WPS | Flexi HRMS",
  description:
    "Flexi HRMS is compliance-native for Pakistan. EOBI contributions, PESSI by province, WHT slabs with monthly averaging, FBR payslip format, WPS bank files, provincial labour law — all built-in, updated every federal budget.",
  keywords: [
    "EOBI software Pakistan",
    "PESSI software Pakistan",
    "WHT payroll software",
    "WHT slabs Pakistan payroll",
    "FBR payslip format",
    "WPS bank file Pakistan",
    "Pakistan labour law software",
    "HRMS compliance Pakistan",
  ],
};

const areas = [
  {
    slug: "wht",
    title: "Withholding Tax (WHT)",
    eyebrow: "Federal tax · FBR",
    icon: Calculator,
    summary:
      "Monthly WHT deduction on salary income per the slab structure announced in the federal budget. Monthly averaging across the fiscal year, reconciliation on separation, and tax certificate generation.",
    howFlexiHandles: [
      "WHT slab table maintained centrally; updated for every customer within days of budget announcement.",
      "Monthly averaging logic implemented per FBR guidance — with retroactive recalculation if slab changes mid-year.",
      "Tax certificates auto-generated per employee, archived in DMS, available in ESS.",
      "Year-end reconciliation, adjustment, and FBR return support.",
    ],
    pain: "Most local HRMS products implement the current year's slab but stumble on mid-year slab changes or monthly averaging.",
  },
  {
    slug: "eobi",
    title: "Employees' Old-Age Benefits Institution (EOBI)",
    eyebrow: "Statutory · EOBI",
    icon: Landmark,
    summary:
      "Monthly employer and employee contributions against insurable employees, with registration, contribution tracking, and return filing responsibilities.",
    howFlexiHandles: [
      "Per-employee EOBI eligibility flagged with CNIC validation and insurable wage applied.",
      "Monthly contribution calculation and employer/employee split per current EOBI rates.",
      "Contribution register maintained for audit; discrepancy reports surfaced pre-filing.",
      "Support for registration records, contribution history, and pensioner management workflows.",
    ],
    pain: "EOBI mismatches are a common audit finding — usually from mismatched insurable wages or missed contributions for new joiners. Flexi prevents both.",
  },
  {
    slug: "pessi",
    title: "Provincial Employees' Social Security (PESSI/SESSI)",
    eyebrow: "Statutory · Provincial",
    icon: Shield,
    summary:
      "Provincial social security contributions — PESSI (Punjab), SESSI (Sindh), ESSI (KP), and equivalents — each with its own wage threshold, rate, and filing cadence.",
    howFlexiHandles: [
      "Province detected per employee's workplace location, not headquarters — so a Punjab plant employee contributes to PESSI even if the company is Sindh-registered.",
      "Rate tables maintained per provincial authority; updates propagated as announcements are published.",
      "Contribution calculations with wage thresholds applied per current rules.",
      "Filing-format support for each provincial authority's submission requirements.",
    ],
    pain: "Companies operating across provinces routinely misfile — contributing to the wrong province or missing a province. Flexi's location-aware calculation fixes this.",
  },
  {
    slug: "wps",
    title: "Wages Payment System (WPS) bank files",
    eyebrow: "Payroll · Banks",
    icon: Banknote,
    summary:
      "Salary disbursement through partner banks (HBL, UBL, MCB, Meezan, JS, and others) — each requiring payroll files in its own specified format.",
    howFlexiHandles: [
      "Bank-specific file format generators for every major Pakistani payroll partner bank.",
      "Multi-bank payroll runs — employees paid through different banks in the same cycle, each with the correct file format.",
      "Transaction confirmation reconciliation — matching bank-returned confirmations back against the payroll register.",
      "Exception reporting for failed transfers, with retry workflow through ConnectCentral.",
    ],
    pain: "Bank file format changes without warning are a routine pain point. Flexi updates connectors centrally — your next payroll run uses the latest format.",
  },
  {
    slug: "fbr",
    title: "FBR payslip & return formats",
    eyebrow: "Federal · FBR",
    icon: FileText,
    summary:
      "Payslip content, annual salary tax certificates, and employer returns to FBR — all expected in specific formats with specific content.",
    howFlexiHandles: [
      "Payslip templates include all FBR-required content; tenant branding applied on top without losing compliance.",
      "Annual salary tax certificate generation with year-end tax paid, WHT deducted, and reconciliation.",
      "Employer return support for employer declarations to FBR.",
      "Archive of every payslip and certificate in DMS with retention policies set per statutory minimum.",
    ],
    pain: "Branded payslips that drop FBR-required content fields are a common audit exposure. Flexi layers branding on top of a compliant template.",
  },
  {
    slug: "labour-law",
    title: "Provincial labour law",
    eyebrow: "Statutory · Provincial",
    icon: Scale,
    summary:
      "Punjab, Sindh, KP, Balochistan and ICT each have their own versions of the Industrial & Commercial Employment Ordinance, Factories Act, Shops and Establishments Act, and Minimum Wages Ordinance.",
    howFlexiHandles: [
      "Minimum wage tracked per province and employee category (skilled/unskilled/clerical); alerts when salary approaches floor.",
      "Overtime multipliers configurable per province and establishment type (factory, commercial, shops).",
      "Leave entitlement minima enforced per province — above minima is company-specific policy.",
      "Working-hour caps with weekly rest day rules appropriate to establishment type.",
    ],
    pain: "Pan-Pakistan operators often apply one set of rules to all provinces. Flexi respects provincial variation by default.",
  },
  {
    slug: "audit",
    title: "Audit trail & retention",
    eyebrow: "Governance",
    icon: Building2,
    summary:
      "SBP, FBR, EOBI, and provincial authorities each have expectations around retention periods, log integrity, and availability during audit.",
    howFlexiHandles: [
      "Immutable audit log of every data change, workflow decision, and configuration edit.",
      "Retention policies aligned to statutory minimums — SBP 10 years, FBR 6 years, labour department per province.",
      "Pre-built audit report packs for SBP, FBR, EOBI, and internal audit.",
      "Role-based access with row-level scoping — sensitive data access is itself logged.",
    ],
    pain: "Audit logs that are editable by admins or that don't retain for the required period are findings waiting to happen.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.peach/22),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.brand.mid/16),transparent_55%)]"
        />
        <div className="container pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Pakistan compliance
            </span>
            <h1 className="text-display-xl text-balance text-neutral-text">
              The Pakistan compliance detail most HRMS vendors handwave.
            </h1>
            <p className="text-lg text-neutral-gray text-pretty">
              Every Pakistani HRMS claims compliance. This page is where that claim gets concrete — WHT with monthly averaging, EOBI with CNIC validation, PESSI at the employee&apos;s workplace province, WPS file formats per partner bank, FBR payslip content preserved under branding, and provincial labour law variants that actually vary.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {["EOBI", "PESSI / SESSI", "WHT", "FBR", "WPS", "Labour law", "Audit retention"].map((k) => (
                <span key={k} className="inline-flex items-center rounded-full border border-brand-mid/20 bg-white/50 px-3 py-1 text-xs font-medium text-brand-mid">
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Federal budget promise"
          title="Every federal budget, we do the work so you don't have to."
          description="When the finance minister announces a change that touches payroll — WHT slab, EOBI rate, minimum wage, tax credit — Flexi updates for every customer within days. Your next payroll cycle uses the new rules. No project. No vendor invoice."
        />
        <div className="mt-8 flex justify-center">
          <TodoBadge>Next budget update cadence: confirm with product</TodoBadge>
        </div>
      </Section>

      {/* Area-by-area deep dive */}
      <Section>
        <div className="space-y-12">
          {areas.map((a) => (
            <div key={a.slug} id={a.slug} className="scroll-mt-24 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="h-11 w-11 rounded-lg bg-brand-peach/25 flex items-center justify-center">
                  <a.icon className="h-5 w-5 text-brand-dark" />
                </div>
                <div className="text-eyebrow uppercase text-brand-mid">{a.eyebrow}</div>
                <h2 className="text-display-md text-neutral-text text-balance">{a.title}</h2>
                <p className="text-sm text-neutral-gray text-pretty">{a.summary}</p>
              </div>
              <div className="lg:col-span-8">
                <div className="rounded-2xl border border-border bg-card p-6 md:p-7">
                  <div className="text-eyebrow uppercase text-brand-mid mb-3">How Flexi handles it</div>
                  <ul className="space-y-2.5">
                    {a.howFlexiHandles.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-text/90">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-peach shrink-0" />
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-xl border-l-4 border-warning bg-warning/5 px-5 py-4">
                  <div className="text-xs uppercase tracking-wider text-warning mb-1">Where most HRMS products break</div>
                  <p className="text-sm text-neutral-text/90 text-pretty">{a.pain}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-brand-dark text-white">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-display-lg text-balance max-w-3xl mx-auto">
            See compliance live on a 30-minute demo.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            We&apos;ll walk through a live payroll run with WHT, EOBI, PESSI, and WPS — for your industry, at your headcount.
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
