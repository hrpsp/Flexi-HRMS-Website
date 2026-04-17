import type { SuiteDetail } from "@/data/types";

export const platformSuite: SuiteDetail = {
  slug: "platform",
  name: "Platform",
  eyebrow: "Suite · Platform",
  promise: "The configurability layer — Flexi's moat.",
  heroHeadline: "Every HRMS says 'flexible.' Flexi is the one that actually is.",
  heroBody:
    "Flexi HQ and Flexi Meta are the reason Bata's retail policies, Engro's manufacturing shift rules, and Ufone's telecom workflows all run on the same platform — each configured to its own reality, without forking the product.",
  modules: [
    { slug: "flexi-hq", name: "Flexi HQ", tagline: "Per-tenant configuration", icon: "Cog" },
    { slug: "flexi-meta", name: "Flexi Meta", tagline: "Field & workflow engine", icon: "Database" },
    { slug: "mobileedge", name: "MobileEdge", tagline: "Flutter mobile app", icon: "Smartphone" },
    { slug: "ess", name: "ESS", tagline: "Employee self-service portal", icon: "UserCircle2" },
    { slug: "dms", name: "DMS", tagline: "Document management", icon: "FolderOpen" },
    { slug: "connectcentral", name: "ConnectCentral", tagline: "Integration hub", icon: "Plug" },
    { slug: "systemflex", name: "SystemFlex", tagline: "Admin controls & audit", icon: "ShieldCheck" },
    { slug: "notifypro", name: "NotifyPro", tagline: "Notifications engine", icon: "Bell" },
    { slug: "insight360", name: "Insight360", tagline: "Analytics & dashboards", icon: "BarChart3" },
    { slug: "audit-trail", name: "Audit Trail", tagline: "Compliance logs", icon: "FileSearch" },
    { slug: "flexi-ams", name: "Flexi AMS", tagline: "Asset management", icon: "Boxes" },
  ],
  workflow: [
    {
      title: "Model",
      description: "Flexi Meta defines the fields, relationships, and constraints that make your HR data model different from the next company's.",
    },
    {
      title: "Configure",
      description: "Flexi HQ assembles those fields into onboarding forms, approval workflows, payroll rules, and policies — per business unit if needed.",
    },
    {
      title: "Deploy",
      description: "Changes propagate to ESS, MobileEdge, and every Core / Talent / Engagement module. No release cycle. No developer.",
    },
    {
      title: "Evolve",
      description: "When policy changes mid-year, your HR admin rolls it out in an afternoon — while audit trail and versioning track every change.",
    },
  ],
  customerCallout: {
    customer: "Across 100+ enterprises",
    outcome:
      "Manufacturing, telecom, banking, retail, healthcare, utilities — each tenant running a version of Flexi HRMS configured to its industry, on a single codebase.",
    isConfirmed: true,
  },
  crossSell: ["core", "talent", "engagement"],
  seoTitle: "Platform — Flexi HQ + Flexi Meta configurability | Flexi HRMS",
  seoDescription:
    "Flexi HRMS Platform suite: Flexi HQ + Flexi Meta, MobileEdge, ESS, DMS, ConnectCentral, SystemFlex. Per-tenant configurability without code. The moat behind 100+ Pakistani enterprise deployments.",
  seoKeywords: [
    "configurable HRMS Pakistan",
    "customisable HR software",
    "HRMS with workflow engine",
    "employee self-service portal Pakistan",
    "HR mobile app Pakistan",
    "HRMS integration hub",
  ],
};
