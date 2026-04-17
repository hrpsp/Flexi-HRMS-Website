import type { SuiteDetail } from "@/data/types";

export const engagementSuite: SuiteDetail = {
  slug: "engagement",
  name: "Employee Finance & Experience",
  eyebrow: "Suite · Employee Finance & Experience",
  promise: "Benefits, loans, expenses, recognition, wellbeing — where employees already work.",
  heroHeadline: "Everything an employee transacts with HR. In one place.",
  heroBody:
    "Every month, employees submit expense claims, apply for loans, enrol in benefits, send recognition, complete pulse surveys, and ask for salary advances. Historically each of those is its own headache. Here they are one suite — integrated with payroll, visible in ESS and MobileEdge, and governed by the same policy engine.",
  modules: [
    { slug: "expensehub", name: "ExpenseHub", tagline: "Claims & reimbursement", icon: "Receipt" },
    { slug: "loanhub", name: "LoanHub", tagline: "Salary loans & advances", icon: "Wallet" },
    { slug: "benefithub", name: "BenefitHub", tagline: "Benefits administration", icon: "Gift" },
    { slug: "engageboard", name: "EngageBoard", tagline: "Social & announcements", icon: "Sparkles" },
    { slug: "culturecore", name: "CultureCore", tagline: "Values, recognition, pulse", icon: "Award" },
    { slug: "wellnest", name: "WellNest", tagline: "Wellness programs & EAP", icon: "Heart" },
    { slug: "workforce-planning", name: "WorkforcePlanning", tagline: "Headcount & manpower plan", icon: "LineChart" },
  ],
  workflow: [
    { title: "Plan", description: "WorkforcePlanning holds the approved manpower budget; every hiring requisition validates against plan, visible to Finance and HR." },
    { title: "Transact", description: "ExpenseHub, LoanHub, BenefitHub handle the employee-money transactions with policy enforcement and payroll integration." },
    { title: "Recognise", description: "CultureCore + EngageBoard make recognition, announcements, and pulse checks part of the everyday flow — not an annual event." },
    { title: "Care", description: "WellNest surfaces wellbeing programs confidentially; aggregate patterns visible to leadership without exposing individuals." },
  ],
  customerCallout: {
    customer: "Across manufacturing + retail tenants",
    outcome:
      "Pulse surveys running through ESS, recognition visible in MobileEdge, expense claims reimbursed in the next payroll cycle, loan deductions reconciled automatically.",
    isConfirmed: false,
  },
  crossSell: ["core", "talent", "operations", "platform"],
  seoTitle: "Employee Finance & Experience — benefits, loans, expenses, recognition | Flexi HRMS",
  seoDescription:
    "Flexi HRMS Employee Finance & Experience: ExpenseHub, LoanHub, BenefitHub, EngageBoard, CultureCore, WellNest, WorkforcePlanning. Everything an employee transacts with HR — integrated with payroll.",
  seoKeywords: [
    "employee engagement software Pakistan",
    "employee recognition platform",
    "benefits administration software",
    "expense management HRMS",
    "employee loan software Pakistan",
    "workforce planning software Pakistan",
  ],
};
