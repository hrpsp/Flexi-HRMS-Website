export type Suite = "core" | "talent" | "engagement" | "operations" | "platform";

export type ModuleEntry = {
  slug: string;
  name: string;
  suite: Suite;
  tagline: string;
};

export const modules: ModuleEntry[] = [
  // Core HR & Payroll (6)
  { slug: "flexi-hq", name: "Flexi HQ", suite: "core", tagline: "Org structure & blueprint" },
  { slug: "peoplehub", name: "PeopleHub", suite: "core", tagline: "Employee lifecycle & records" },
  { slug: "pakistan-compliance", name: "Pakistan Compliance", suite: "core", tagline: "EOBI, PESSI, WHT, FBR — always current" },
  { slug: "timesync", name: "TimeSync", suite: "core", tagline: "Attendance & shift management" },
  { slug: "leaveease", name: "LeaveEase", suite: "core", tagline: "Policies, balances, approvals" },
  { slug: "payedge", name: "PayEdge", suite: "core", tagline: "Payroll with Pakistan tax engine" },

  // Talent (4)
  { slug: "talentworks", name: "TalentWorks", suite: "talent", tagline: "Recruitment & applicant tracking" },
  { slug: "performpro", name: "PerformPro", suite: "talent", tagline: "Goals, reviews, 360 feedback" },
  { slug: "skillforge", name: "SkillForge", suite: "talent", tagline: "Learning & development" },
  { slug: "leadershiplab", name: "LeadershipLab", suite: "talent", tagline: "Succession & 9-box" },

  // Employee Finance & Experience (7)
  { slug: "expensehub", name: "ExpenseHub", suite: "engagement", tagline: "Claims & reimbursement" },
  { slug: "loanhub", name: "LoanHub", suite: "engagement", tagline: "Salary loans & advances" },
  { slug: "benefithub", name: "BenefitHub", suite: "engagement", tagline: "Benefits administration" },
  { slug: "engageboard", name: "EngageBoard", suite: "engagement", tagline: "Social collaboration" },
  { slug: "culturecore", name: "CultureCore", suite: "engagement", tagline: "Values, recognition, pulse" },
  { slug: "wellnest", name: "WellNest", suite: "engagement", tagline: "Wellness programs & EAP" },
  { slug: "workforce-planning", name: "WorkforcePlanning", suite: "engagement", tagline: "Headcount & manpower plan" },

  // Operations (4)
  { slug: "flexi-desk", name: "FlexiDesk", suite: "operations", tagline: "HR helpdesk & ticketing" },
  { slug: "dms", name: "DMS", suite: "operations", tagline: "Document management" },
  { slug: "flexi-ams", name: "Flexi AMS", suite: "operations", tagline: "Asset management" },
  { slug: "projectedge", name: "ProjectEdge", suite: "operations", tagline: "Project & task tracking" },

  // Platform (7)
  { slug: "systemflex", name: "SystemFlex", suite: "platform", tagline: "Form + workflow + print engine" },
  { slug: "connectcentral", name: "ConnectCentral", suite: "platform", tagline: "Integration hub" },
  { slug: "notifypro", name: "NotifyPro", suite: "platform", tagline: "Notifications engine" },
  { slug: "audit-trail", name: "Audit Trail", suite: "platform", tagline: "Compliance logs" },
  { slug: "insight360", name: "Insight360", suite: "platform", tagline: "Analytics & dashboards" },
  { slug: "mobileedge", name: "MobileEdge", suite: "platform", tagline: "Flutter mobile app" },
  { slug: "ess", name: "ESS", suite: "platform", tagline: "Employee self-service portal" },
];

export const suites: Record<Suite, { name: string; promise: string; href: string }> = {
  core: { name: "Core HR & Payroll", promise: "The hire-to-retire foundation with Pakistan compliance built in.", href: "/product/core" },
  talent: { name: "Talent", promise: "Grow the people you have. Hire the ones you need.", href: "/product/talent" },
  engagement: { name: "Employee Finance & Experience", promise: "Benefits, loans, expenses, recognition, wellbeing — where employees already work.", href: "/product/engagement" },
  operations: { name: "Operations", promise: "Tickets, documents, assets, projects — the HR operations day.", href: "/product/operations" },
  platform: { name: "Platform", promise: "The Reality Engine — SystemFlex + ConnectCentral + the full platform layer.", href: "/product/platform" },
};

export const modulesBySuite = (s: Suite) => modules.filter((m) => m.suite === s);
