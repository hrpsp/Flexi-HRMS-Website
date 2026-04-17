import type { ModuleDetail } from "@/data/types";

export const benefithub: ModuleDetail = {
  slug: "benefithub",
  name: "BenefitHub",
  suite: "engagement",
  tagline: "Benefits enrolment & administration",
  description:
    "BenefitHub runs the benefits administration cycle — plan catalogue, eligibility rules, open-enrolment windows, dependant management, and direct hand-off of elections to payroll and providers.",
  reality:
    "Health insurance the employee doesn't know he's enrolled in. A top-up plan the HR intern signed him up for last year. A dependent list that hasn't been updated since his second child was born. BenefitHub gives employees a live view of their benefits, lets them enrol or amend themselves, and keeps the vendor data reconciled so the insurance cards actually work.",
  heroBody:
    "Medical, life, disability, provident fund, gratuity, leave encashment — benefits admin touches more employees, carries more compliance risk, and typically runs on more spreadsheets than any other HR function. BenefitHub replaces the spreadsheets.",
  capabilities: [
    { icon: "Gift", title: "Plan catalogue", body: "Medical, life, disability, provident fund, gratuity, leave encashment — each configured with eligibility and employee cost." },
    { icon: "Users", title: "Dependant management", body: "Spouse, children, parents added with documentation, age-limits enforced, dependant status tracked." },
    { icon: "CalendarDays", title: "Open enrolment", body: "Annual or quarterly enrolment windows with guided decision flows, plan comparison, and plan-change life events." },
    { icon: "Banknote", title: "Payroll integration", body: "Elections flow to PayEdge as per-period deductions; employer contributions reconcile with provider statements." },
    { icon: "FileText", title: "Provider hand-off", body: "Enrolment files export in the format each provider accepts — auto-generated, auto-sent via ConnectCentral." },
    { icon: "ShieldCheck", title: "Compliance & audit", body: "EOBI, PESSI, PF, gratuity — all tracked with documentation archive, statutory returns, and audit trail." },
  ],
  workflow: [
    { title: "Configure", description: "HR configures plan catalogue, eligibility, employer/employee cost share, and enrolment windows in Flexi HQ." },
    { title: "Enrol", description: "Employees select plans during open enrolment via ESS; dependants added with documentation." },
    { title: "Reconcile", description: "Elections feed payroll; employer contributions reconcile monthly with provider statements." },
    { title: "Claim & renew", description: "Claims tracked; renewals processed; statutory benefits like EOBI/PESSI/PF filed on schedule." },
  ],
  integrations: ["peoplehub", "payedge", "connectcentral", "dms", "ess", "mobileedge", "flexi-hq", "audit-trail"],
  relatedModules: ["payedge", "wellnest", "expensehub", "loanhub"],
  seoTitle: "BenefitHub — benefits enrolment & administration | Flexi HRMS",
  seoDescription:
    "Benefits admin for Pakistani enterprises — medical, life, provident fund, gratuity, EOBI, PESSI. Plan catalogue, dependants, open enrolment, payroll integration, and provider hand-off.",
  seoKeywords: ["benefits administration software Pakistan", "provident fund software", "gratuity software Pakistan", "medical benefits HRMS", "employee benefits software"],
};
