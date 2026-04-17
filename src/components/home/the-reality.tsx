import Link from "next/link";
import {
  Clock,
  Moon,
  FileCheck2,
  Radio,
  Calculator,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeading, TodoBadge } from "@/components/ui/section";

type Reality = {
  icon: typeof Clock;
  title: string;
  body: string;
  modules: { name: string; slug: string }[];
};

const realities: Reality[] = [
  {
    icon: Clock,
    title: "Budget day, 2 AM.",
    body: "WHT slabs change overnight in the federal budget. Flexi updates across every tenant before morning payroll. Your CFO doesn't lose a night's sleep.",
    modules: [
      { name: "Pakistan Compliance", slug: "pakistan-compliance" },
      { name: "PayEdge", slug: "payedge" },
    ],
  },
  {
    icon: Moon,
    title: "Ramadan shift. Blue-collar plant.",
    body: "Sehri-time punches. Compressed shifts. Overtime recalculated for reduced hours. Festival-specific leave. Flexi reshapes the attendance engine without anyone writing custom code.",
    modules: [
      { name: "TimeSync", slug: "timesync" },
      { name: "LeaveEase", slug: "leaveease" },
    ],
  },
  {
    icon: FileCheck2,
    title: "The EOBI audit, Tuesday morning.",
    body: "An auditor walks in. You have 48 hours. Every contribution traced to employee, pay period, and CNIC. Exported in the FBR/EOBI format, no consultant required.",
    modules: [
      { name: "Pakistan Compliance", slug: "pakistan-compliance" },
      { name: "Audit Trail", slug: "audit-trail" },
    ],
  },
  {
    icon: Radio,
    title: "Two vendors, three offices, one workforce.",
    body: "ZKTeco at Head Office, Suprema at the Lahore plant, Hikvision at the warehouse. Flexi's ConnectCentral reconciles all three into one attendance record. No spreadsheet glue required.",
    modules: [
      { name: "ConnectCentral", slug: "connectcentral" },
      { name: "TimeSync", slug: "timesync" },
    ],
  },
  {
    icon: Calculator,
    title: "Piece-rate floor meets salary staff.",
    body: "1,800 stitching operators on quantity × rate. 200 office staff on monthly salary. Contract cleaners on TOR rates. All in one payroll run. All three tax treatments handled correctly.",
    modules: [
      { name: "PayEdge", slug: "payedge" },
      { name: "PeopleHub", slug: "peoplehub" },
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "The Finance Manager wants Excel.",
    body: "Not a PDF. Not a dashboard. Excel, with these exact columns, in this exact format, because she files FBR that way. Flexi exports on her terms, not ours.",
    modules: [
      { name: "Insight360", slug: "insight360" },
      { name: "SystemFlex", slug: "systemflex" },
    ],
  },
];

export function TheReality() {
  return (
    <Section tone="default">
      <SectionHeading
        align="center"
        title="Six realities other HRMS products ignore. Flexi HRMS was built for them."
        description="This is what actually shows up on a Pakistani HR team's desk. Every card below is something a buyer has told us their current system handles badly, or not at all."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {realities.map((r) => (
          <article
            key={r.title}
            className="group rounded-2xl border border-border bg-card hover:border-brand-peach hover:shadow-md transition-all p-6 flex flex-col"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-peach/25 group-hover:bg-brand-peach/40 transition-colors flex items-center justify-center mb-5">
              <r.icon className="h-5 w-5 text-brand-dark" />
            </div>
            <h3 className="text-lg font-semibold text-brand-ink text-pretty">{r.title}</h3>
            <p className="mt-2 text-sm text-brand-gray text-pretty flex-1">{r.body}</p>
            <div className="mt-5 pt-4 border-t border-border">
              <div className="text-[10px] uppercase tracking-wider text-brand-mid mb-2">
                Flexi handles this in
              </div>
              <div className="flex flex-wrap gap-1.5">
                {r.modules.map((m, i) => (
                  <span key={m.slug} className="inline-flex items-center">
                    <Link
                      href={`/product/${m.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-mid underline underline-offset-4 decoration-brand-peach/60 hover:decoration-brand-peach"
                    >
                      {m.name}
                      {i === r.modules.length - 1 && <ArrowRight className="h-3 w-3" />}
                    </Link>
                    {i < r.modules.length - 1 && (
                      <span className="mx-1.5 text-brand-gray">+</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pull-quote — TODO: secure from Bata / MEPCO / Ufone */}
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <TodoBadge>Secure quote from Bata, MEPCO, or Ufone</TodoBadge>
        </div>
        <blockquote className="relative rounded-2xl border-l-4 border-brand-peach bg-brand-light/50 px-8 py-7 text-center">
          <p className="text-lg md:text-xl font-medium text-brand-ink text-balance leading-relaxed">
            &ldquo;We evaluated four HRMS products. Three showed us beautiful demos. Flexi asked us what our actual month-end chaos looks like. That&apos;s why we bought Flexi.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-brand-gray italic">
            — Attribution pending (target: Bata Pakistan / MEPCO / Ufone)
          </footer>
        </blockquote>
      </div>
    </Section>
  );
}
