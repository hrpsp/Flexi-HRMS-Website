import { Clock, FileCheck2, Moon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const stories = [
  {
    icon: Clock,
    moment: "Budget day, 2 AM.",
    body: "WHT slabs change in the federal budget. Flexi updates for every customer overnight. Payroll runs on schedule the next morning.",
  },
  {
    icon: FileCheck2,
    moment: "EOBI audit, Tuesday 10 AM.",
    body: "Every contribution calculation traceable to employee and pay period. Export ready in minutes.",
  },
  {
    icon: Moon,
    moment: "Ramadan shift, blue-collar plant.",
    body: "Shift patterns adjust. Biometric attendance captures the change. Overtime recalculates per provincial labour law.",
  },
];

export function ComplianceStories() {
  return (
    <Section tone="light">
      <SectionHeading
        align="center"
        title="Compliance you don't have to think about."
        description="EOBI. PESSI. WHT. FBR. Provincial labour statutes. Built in — updated every federal budget."
      />

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {stories.map((s) => (
          <div
            key={s.moment}
            className="rounded-2xl bg-card border border-border p-7 flex flex-col"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-peach/30 flex items-center justify-center mb-5">
              <s.icon className="h-5 w-5 text-brand-dark" />
            </div>
            <div className="text-lg font-semibold text-brand-ink">{s.moment}</div>
            <p className="mt-2 text-sm text-brand-gray text-pretty">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] text-brand-mid">
        <span>EOBI</span>
        <span>·</span>
        <span>PESSI</span>
        <span>·</span>
        <span>WHT</span>
        <span>·</span>
        <span>FBR</span>
        <span>·</span>
        <span>WPS</span>
        <span>·</span>
        <span>Provincial labour law</span>
      </div>
    </Section>
  );
}
