export type Suite = "core" | "talent" | "engagement" | "platform";

export type ModuleEntry = {
  slug: string;
  name: string;
  suite: Suite;
  tagline: string;
};

export const modules: ModuleEntry[] = [
  // Core HR
  { slug: "peoplehub", name: "PeopleHub", suite: "core", tagline: "Employee lifecycle & records" },
  { slug: "payedge", name: "PayEdge", suite: "core", tagline: "Payroll with Pakistan tax engine" },
  { slug: "leaveease", name: "LeaveEase", suite: "core", tagline: "Policies, balances, approvals" },
  { slug: "timesync", name: "TimeSync", suite: "core", tagline: "Attendance & shift management" },

  // Talent
  { slug: "performpro", name: "PerformPro", suite: "talent", tagline: "Goals, reviews, 360 feedback" },
  { slug: "talentworks", name: "TalentWorks", suite: "talent", tagline: "Recruitment & applicant tracking" },
  { slug: "skillforge", name: "SkillForge", suite: "talent", tagline: "Learning & development" },
  { slug: "leadershiplab", name: "LeadershipLab", suite: "talent", tagline: "Succession & 9-box" },

  // Engagement
  { slug: "culturecore", name: "CultureCore", suite: "engagement", tagline: "Values, recognition, pulse" },
  { slug: "engageboard", name: "EngageBoard", suite: "engagement", tagline: "Social collaboration" },
  { slug: "wellnest", name: "WellNest", suite: "engagement", tagline: "Wellness programs & EAP" },
  { slug: "benefithub", name: "BenefitHub", suite: "engagement", tagline: "Benefits administration" },
  { slug: "expensehub", name: "ExpenseHub", suite: "engagement", tagline: "Claims & reimbursement" },
  { slug: "loanhub", name: "LoanHub", suite: "engagement", tagline: "Salary loans & advances" },

  // Platform
  { slug: "flexi-hq", name: "Flexi HQ", suite: "platform", tagline: "Per-tenant configuration" },
  { slug: "flexi-meta", name: "Flexi Meta", suite: "platform", tagline: "Field & workflow engine" },
  { slug: "mobileedge", name: "MobileEdge", suite: "platform", tagline: "Flutter mobile app" },
  { slug: "ess", name: "ESS", suite: "platform", tagline: "Employee self-service portal" },
  { slug: "dms", name: "DMS", suite: "platform", tagline: "Document management" },
  { slug: "connectcentral", name: "ConnectCentral", suite: "platform", tagline: "Integration hub" },
  { slug: "systemflex", name: "SystemFlex", suite: "platform", tagline: "Admin controls & audit" },
  { slug: "notifypro", name: "NotifyPro", suite: "platform", tagline: "Notifications engine" },
  { slug: "insight360", name: "Insight360", suite: "platform", tagline: "Analytics & dashboards" },
  { slug: "audit-trail", name: "Audit Trail", suite: "platform", tagline: "Compliance logs" },
  { slug: "flexi-ams", name: "Flexi AMS", suite: "platform", tagline: "Asset management" },
];

export const suites: Record<Suite, { name: string; promise: string; href: string }> = {
  core: { name: "Core HR", promise: "The hire-to-retire foundation.", href: "/product/core" },
  talent: { name: "Talent", promise: "Grow the people you have. Hire the ones you need.", href: "/product/talent" },
  engagement: { name: "Engagement", promise: "Culture, recognition, and well-being in one place.", href: "/product/engagement" },
  platform: { name: "Platform", promise: "The configurability layer — Flexi's moat.", href: "/product/platform" },
};

export const modulesBySuite = (s: Suite) => modules.filter((m) => m.suite === s);
