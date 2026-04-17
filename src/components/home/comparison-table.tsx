import { Check, X, Minus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Cell =
  | { kind: "yes"; note: string }
  | { kind: "partial"; note: string }
  | { kind: "no"; note: string };

type Column = { key: string; label: string; sub?: string; accent?: boolean };

const columns: Column[] = [
  { key: "flexi", label: "Flexi HRMS", accent: true },
  { key: "global", label: "Global HRMS", sub: "(SAP SF, Workday)" },
  { key: "local", label: "Local single-product HRMS" },
  { key: "legacy", label: "Spreadsheets / legacy" },
];

const rows: {
  feature: string;
  cells: Record<string, Cell>;
}[] = [
  {
    feature: "Tenant configurability without code",
    cells: {
      flexi: { kind: "yes", note: "Native — Flexi Meta" },
      global: { kind: "partial", note: "Partial" },
      local: { kind: "partial", note: "Partial" },
      legacy: { kind: "no", note: "None" },
    },
  },
  {
    feature: "Pakistan statutory compliance",
    cells: {
      flexi: { kind: "yes", note: "Native — updates every federal budget" },
      global: { kind: "partial", note: "Requires local partner" },
      local: { kind: "partial", note: "Claim made; depth varies" },
      legacy: { kind: "no", note: "Manual" },
    },
  },
  {
    feature: "Named enterprise deployments",
    cells: {
      flexi: { kind: "yes", note: "Bata, Ufone, Zong, HBL, Engro, Descon, MEPCO, PTCL, Jazz +90 more" },
      global: { kind: "partial", note: "Few in Pakistan" },
      local: { kind: "partial", note: "Mid-market heavy" },
      legacy: { kind: "no", note: "—" },
    },
  },
  {
    feature: "Implementation timeline",
    cells: {
      flexi: { kind: "yes", note: "4–12 weeks" },
      global: { kind: "no", note: "6–18 months" },
      local: { kind: "yes", note: "2–8 weeks" },
      legacy: { kind: "no", note: "—" },
    },
  },
  {
    feature: "Mobile for frontline workforce",
    cells: {
      flexi: { kind: "yes", note: "White-collar + blue-collar" },
      global: { kind: "partial", note: "Partial" },
      local: { kind: "partial", note: "Partial" },
      legacy: { kind: "no", note: "No" },
    },
  },
  {
    feature: "Software + services option",
    cells: {
      flexi: { kind: "yes", note: "Yes — via HRPSP" },
      global: { kind: "no", note: "No" },
      local: { kind: "no", note: "No" },
      legacy: { kind: "no", note: "No" },
    },
  },
];

function CellIcon({ kind }: { kind: Cell["kind"] }) {
  if (kind === "yes") return <Check className="h-4 w-4 text-brand-success" />;
  if (kind === "partial") return <Minus className="h-4 w-4 text-brand-warning" />;
  return <X className="h-4 w-4 text-brand-gray/60" />;
}

export function ComparisonTable() {
  return (
    <Section>
      <SectionHeading
        align="center"
        title="Built in Pakistan. Built for Pakistan."
        description="How Flexi HRMS compares to global platforms, local single-product tools, and the spreadsheet-plus-legacy status quo."
      />

      {/* Desktop table */}
      <div className="mt-12 hidden md:block">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-light/60 border-b border-border">
                <th className="text-left px-6 py-4 font-medium text-brand-gray">Capability</th>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    className={cn(
                      "text-left px-6 py-4 font-semibold",
                      c.accent ? "text-brand-dark bg-brand-peach/20" : "text-brand-ink"
                    )}
                  >
                    {c.label}
                    {c.sub && <div className="text-xs font-normal text-brand-gray mt-0.5">{c.sub}</div>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-border last:border-b-0">
                  <td className="px-6 py-5 font-medium text-brand-ink">{r.feature}</td>
                  {columns.map((c) => {
                    const cell = r.cells[c.key];
                    return (
                      <td
                        key={c.key}
                        className={cn("px-6 py-5", c.accent && "bg-brand-peach/10")}
                      >
                        <div className="flex items-start gap-2">
                          <CellIcon kind={cell.kind} />
                          <span className={cn("text-sm", c.accent ? "text-brand-ink font-medium" : "text-brand-gray")}>
                            {cell.note}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="mt-12 md:hidden space-y-4">
        {rows.map((r) => (
          <div key={r.feature} className="rounded-xl border border-border bg-card p-5">
            <div className="font-semibold text-brand-ink mb-3">{r.feature}</div>
            <div className="space-y-2.5">
              {columns.map((c) => {
                const cell = r.cells[c.key];
                return (
                  <div
                    key={c.key}
                    className={cn(
                      "flex items-start gap-2.5 rounded-md p-2.5",
                      c.accent ? "bg-brand-peach/15" : "bg-brand-light/60"
                    )}
                  >
                    <CellIcon kind={cell.kind} />
                    <div className="flex-1">
                      <div className={cn("text-xs font-semibold", c.accent ? "text-brand-dark" : "text-brand-ink")}>
                        {c.label}
                      </div>
                      <div className="text-xs text-brand-gray mt-0.5">{cell.note}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
