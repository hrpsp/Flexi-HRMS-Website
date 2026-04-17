import type { ModuleDetail } from "@/data/types";

export const payedge: ModuleDetail = {
  slug: "payedge",
  name: "PayEdge",
  suite: "core",
  tagline: "Payroll with Pakistan tax engine",
  description:
    "PayEdge runs monthly payroll for Pakistani enterprises with a tax engine that knows WHT slabs, EOBI and PESSI rates, provincial labour law, and every variation the federal budget throws at it.",
  heroBody:
    "Payroll for Pakistan should not require a consultant every June. PayEdge updates for every customer when the federal budget changes — before your next pay cycle. WPS bank files export in the format your bank actually accepts.",
  capabilities: [
    {
      icon: "Calculator",
      title: "Pakistan tax engine",
      body: "WHT slab calculations with monthly averaging, tax certificates, and salary tax reconciliation — updated with every federal budget.",
    },
    {
      icon: "Landmark",
      title: "Statutory contributions",
      body: "EOBI and PESSI employee and employer contributions with province-aware rates, auto-generated statutory returns.",
    },
    {
      icon: "Banknote",
      title: "WPS bank files",
      body: "Generate WPS-format bank files for HBL, UBL, MCB, Meezan, and every major payroll partner bank. One cycle, many banks.",
    },
    {
      icon: "SlidersHorizontal",
      title: "Configurable components",
      body: "Basic, housing, utilities, conveyance, bonuses, deductions, loan recoveries — each defined per tenant through Flexi HQ.",
    },
    {
      icon: "RefreshCw",
      title: "Mid-cycle adjustments",
      body: "Retroactive changes, off-cycle runs, incremental reruns for select employees — without corrupting the ledger.",
    },
    {
      icon: "FileText",
      title: "Payslips & certificates",
      body: "Branded digital payslips, tax certificates, salary certificates — delivered via ESS, MobileEdge, and PDF archive in DMS.",
    },
    {
      icon: "GitBranch",
      title: "Multi-company structures",
      body: "Group-of-companies support with consolidated and per-entity payroll runs, inter-company allocations, and chart-of-accounts mapping.",
    },
    {
      icon: "ShieldCheck",
      title: "Audit-grade traceability",
      body: "Every calculation, every override, every approval — captured in Audit Trail and exportable for FBR, EOBI, or internal audits.",
    },
  ],
  workflow: [
    {
      title: "Prepare",
      description:
        "TimeSync publishes attendance and overtime. LeaveEase closes the period. ExpenseHub submits approved claims. Manual adjustments are captured.",
    },
    {
      title: "Calculate",
      description:
        "PayEdge runs gross-to-net across the entire population — or a selected subset — with the WHT, EOBI, and PESSI engine applied by employee residency and business unit.",
    },
    {
      title: "Review",
      description:
        "Variance analysis against last cycle, outlier detection, approval workflow for finance and HR leadership.",
    },
    {
      title: "Disburse",
      description:
        "WPS bank files generate per bank partner. Payslips publish to ESS and MobileEdge. Tax certificates and statutory returns archive to DMS.",
    },
  ],
  integrations: ["peoplehub", "timesync", "leaveease", "expensehub", "loanhub", "flexi-hq", "connectcentral", "audit-trail"],
  customerCallout: {
    customer: "Bata Pakistan",
    industry: "Retail",
    outcome:
      "Monthly payroll for 2,600+ employees — retail, manufacturing, and distribution — consolidated onto PayEdge with WPS bank file generation across partner banks.",
    isConfirmed: true,
  },
  relatedModules: ["peoplehub", "timesync", "leaveease", "expensehub"],
  seoTitle: "PayEdge — Pakistan payroll software | Flexi HRMS",
  seoDescription:
    "Pakistan payroll with a tax engine that knows WHT slabs, EOBI, PESSI, and provincial labour law. WPS bank files. Used by Bata, Engro, HBL, Descon, and 100+ Pakistani enterprises.",
  seoKeywords: [
    "payroll software Pakistan",
    "WHT payroll software",
    "EOBI payroll calculation",
    "PESSI contribution software",
    "WPS bank file Pakistan",
    "HRMS payroll Pakistan",
    "FBR payslip format",
  ],
};
