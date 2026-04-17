import type { ModuleDetail } from "@/data/types";

export const pakistanCompliance: ModuleDetail = {
  slug: "pakistan-compliance",
  name: "Pakistan Compliance",
  suite: "core",
  tagline: "EOBI, PESSI, WHT, FBR — always current",
  description:
    "Pakistan Compliance is the statutory engine beneath Flexi — WHT slabs, EOBI and PESSI rates, FBR reporting formats, provincial labour law variants. Updated centrally across every customer, every federal budget.",
  reality:
    "EOBI rates change. PESSI rates change. WHT slabs change every federal budget. FBR reporting formats change. The rules for Punjab differ from Sindh. Compliance isn't a tick-box — it's a moving target you cannot afford to miss. Flexi's Pakistan Compliance module updates centrally for every tenant, every time a statutory change lands. You stop tracking law. You start running operations.",
  heroBody:
    "Every Pakistani HRMS claims compliance. Pakistan Compliance is the module that makes the claim specific — a single source of truth for WHT, EOBI, PESSI, FBR, and provincial labour law that updates for every customer on budget night.",
  capabilities: [
    { icon: "Calculator", title: "WHT engine", body: "Slab lookup, monthly averaging, mid-year slab transitions, reconciliation on separation, tax certificate generation." },
    { icon: "Landmark", title: "EOBI + PESSI", body: "Per-employee registration, insurable wage ceiling, contribution splits, provincial routing (Punjab PESSI, Sindh SESSI, KP ESSI)." },
    { icon: "FileText", title: "FBR formats", body: "Payslip disclosures, annual salary tax certificates, employer returns — in exactly the formats FBR accepts." },
    { icon: "Scale", title: "Provincial labour law", body: "Minimum wage, overtime multipliers, leave entitlements per province and establishment type — applied automatically." },
    { icon: "RefreshCw", title: "Budget-night rollout", body: "When rules change, updates propagate to every tenant overnight. Your next payroll uses the new rules." },
    { icon: "ShieldCheck", title: "Audit-ready exports", body: "Pre-formatted exports for EOBI audits, FBR queries, provincial labour department inspections — without a consultant." },
  ],
  workflow: [
    { title: "Maintain", description: "Flexi's compliance desk maintains the statutory rule set centrally — slab tables, rate tables, format definitions." },
    { title: "Roll out", description: "Updates propagate to every tenant environment within hours of a federal or provincial change." },
    { title: "Apply", description: "PayEdge, LeaveEase, and TimeSync read the current rules — no per-tenant configuration required for statutory baselines." },
    { title: "Report", description: "Pre-built statutory returns generate on schedule; audit exports on demand; retention aligned to regulator requirements." },
  ],
  integrations: ["payedge", "peoplehub", "leaveease", "timesync", "audit-trail", "dms", "systemflex"],
  relatedModules: ["payedge", "audit-trail", "peoplehub", "leaveease"],
  seoTitle: "Pakistan Compliance — EOBI, PESSI, WHT, FBR | Flexi HRMS",
  seoDescription:
    "Pakistan statutory compliance as a live module. WHT slabs, EOBI/PESSI contributions, FBR formats, provincial labour law — updated centrally for every Flexi HRMS customer, every federal budget.",
  seoKeywords: [
    "Pakistan HR compliance software",
    "EOBI software Pakistan",
    "PESSI software Pakistan",
    "WHT payroll software",
    "FBR payslip format software",
    "provincial labour law software",
  ],
};
