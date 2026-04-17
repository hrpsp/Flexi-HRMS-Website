import type { ModuleDetail } from "@/data/types";

export const workforcePlanning: ModuleDetail = {
  slug: "workforce-planning",
  name: "WorkforcePlanning",
  suite: "engagement",
  tagline: "Headcount & manpower plan",
  description:
    "WorkforcePlanning holds the approved manpower plan and reconciles it against hiring in real time — so Finance and HR see the same number, and divisions can't hire without central visibility.",
  reality:
    "Headcount approved in August. Hiring that doesn't happen till January. Budgets blown by midyear because the divisions hired without central visibility. WorkforcePlanning maintains the approved manpower plan, validates every job requisition against budget, and shows actual vs plan in real time — so Finance and HR see the same number.",
  heroBody:
    "Most Pakistani enterprises run workforce planning in an Excel file that drifts the moment the fiscal year starts. WorkforcePlanning locks the plan, tracks movement against it, and catches over-hire before it becomes a Finance call.",
  capabilities: [
    { icon: "BarChart3", title: "Approved manpower plan", body: "Hold the budgeted headcount by division, grade, and cost centre — with approval history and version trail." },
    { icon: "Target", title: "Requisition validation", body: "Every TalentWorks requisition validates against plan — over-plan requisitions need explicit leadership approval." },
    { icon: "LineChart", title: "Plan vs actual", body: "Live view of hiring progress, attrition impact, headcount delta by division — refreshed against PeopleHub daily." },
    { icon: "Users", title: "Scenario modelling", body: "Model hiring freezes, expansion plans, restructurings — with cost impact projected from current compensation data." },
    { icon: "Banknote", title: "Cost visibility", body: "Approved plan translates to a budgeted compensation envelope; Finance sees burn rate against plan." },
    { icon: "GitBranch", title: "Division & function views", body: "Plan holds at the level your business actually runs — divisions, functions, cost centres, or a matrix of all three." },
  ],
  workflow: [
    { title: "Plan", description: "Approved headcount and compensation envelope loaded at the start of the fiscal year with finance and HR sign-off." },
    { title: "Requisition", description: "Every new hire starts as a requisition; WorkforcePlanning checks it against plan before TalentWorks publishes the role." },
    { title: "Track", description: "Hires, exits, and transfers reflect against plan in real time — no month-end reconciliation with Excel." },
    { title: "Replan", description: "Mid-year adjustments flow through as versioned plan updates with approval history preserved." },
  ],
  integrations: ["peoplehub", "talentworks", "payedge", "insight360", "systemflex", "audit-trail"],
  relatedModules: ["talentworks", "peoplehub", "insight360", "payedge"],
  seoTitle: "WorkforcePlanning — approved manpower plan vs actual | Flexi HRMS",
  seoDescription:
    "Workforce planning module: approved manpower plan, requisition validation, plan vs actual, scenario modelling, cost visibility. Finance and HR see the same number.",
  seoKeywords: [
    "workforce planning software Pakistan",
    "manpower planning HRMS",
    "headcount planning software",
    "HR budget software",
  ],
};
