import type { ModuleDetail } from "@/data/types";

export const flexiHq: ModuleDetail = {
  slug: "flexi-hq",
  name: "Flexi HQ",
  suite: "core",
  tagline: "Org structure & blueprint",
  description:
    "Flexi HQ is the organisational blueprint — legal entities, divisions, cost centres, reporting lines, matrix structures, and designations — that every other Flexi module configures against.",
  reality:
    "Your company is not an org chart. It's three legal entities, seven divisions, a matrix reporting line everyone denies exists, and designations that got invented in a CEO-level meeting last year. Flexi HQ captures it the way it actually is — not the way the last HRMS forced you to redraw it.",
  heroBody:
    "Every competitor says 'flexible.' Flexi HQ is the control plane that makes it true — the place where Bata configures retail policies, Engro configures manufacturing shifts, and Ufone configures telecom workflows — all on the same product, each on its own configuration.",
  capabilities: [
    { icon: "Cog", title: "Form designer", body: "Drag, drop, and configure fields from the Flexi Meta dictionary into onboarding, transfer, exit, and any other form — per tenant." },
    { icon: "GitBranch", title: "Workflow designer", body: "Configure approval chains, conditional routing, SLAs, and escalations visually. No YAML, no scripts." },
    { icon: "SlidersHorizontal", title: "Policy engine", body: "Leave rules, attendance rules, payroll components, OT multipliers — all expressible in configuration, not code." },
    { icon: "Users", title: "Business-unit scoping", body: "Configurations can be scoped per legal entity, business unit, location, or employee class — so head office and plants can differ." },
    { icon: "RefreshCw", title: "Versioning & rollback", body: "Every configuration change is versioned. Roll back instantly if something breaks. Test in sandbox before publishing." },
    { icon: "ShieldCheck", title: "Governance", body: "Approval workflows for configuration changes themselves — so a rogue admin can't change payroll rules unreviewed." },
  ],
  workflow: [
    { title: "Design", description: "HR admin builds or adjusts forms, workflows, and policies visually in Flexi HQ." },
    { title: "Validate", description: "Changes run against a sandbox with test data before they touch production; dependency analysis flags impact." },
    { title: "Publish", description: "Approved configuration publishes to the tenant — affecting ESS, MobileEdge, and every module from next use." },
    { title: "Monitor", description: "Audit trail captures every change, every publisher, every rollback — available for internal and external audit." },
  ],
  integrations: ["flexi-meta", "systemflex", "audit-trail", "notifypro", "connectcentral"],
  relatedModules: ["flexi-meta", "systemflex", "audit-trail", "connectcentral"],
  seoTitle: "Flexi HQ — HRMS configuration engine | Flexi HRMS",
  seoDescription:
    "Flexi HQ is the per-tenant configuration control plane. Forms, workflows, policies, and payroll rules — all configured without code, versioned, and audit-tracked.",
  seoKeywords: ["configurable HRMS", "HR workflow engine", "no-code HR software", "HR configuration platform", "HRMS customisation Pakistan"],
};
