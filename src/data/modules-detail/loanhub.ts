import type { ModuleDetail } from "@/data/types";

export const loanhub: ModuleDetail = {
  slug: "loanhub",
  name: "LoanHub",
  suite: "engagement",
  tagline: "Salary loans & advances",
  description:
    "LoanHub administers employee salary loans, advances, and car-lease schemes with clear policies, approval workflows, and automatic monthly recoveries through PayEdge.",
  reality:
    "Salary advances that never come back. Loan deductions that stopped when the employee got promoted and nobody updated the schedule. A tracking spreadsheet that one person owns and nobody else can read. LoanHub automates the lifecycle — application, approval, disbursement, payroll-linked deductions, closure — with balance visible to everyone who needs it.",
  heroBody:
    "Employee loans are a common Pakistani benefit and a messy one to run on spreadsheets. LoanHub makes the policy, the approval, the disbursement, and the monthly recovery a single, auditable workflow.",
  capabilities: [
    { icon: "Wallet", title: "Loan policies", body: "Separate policies for salary advances, personal loans, car lease, housing — each with eligibility, limits, tenure, and markup rules." },
    { icon: "ShieldCheck", title: "Approval workflow", body: "Grade-based approval thresholds with finance and HR sign-off; policy breach detection at the submission stage." },
    { icon: "Banknote", title: "Disbursement", body: "Approved loans disburse through PayEdge or WPS bank file — with proper accounting entries and deduction schedule creation." },
    { icon: "RefreshCw", title: "Recovery schedule", body: "Monthly instalments auto-deducted through PayEdge; early repayment and restructuring supported with recalculation." },
    { icon: "FileText", title: "Statements & certificates", body: "Employee loan statements, outstanding-balance certificates, and tax treatment as per FBR — all auto-generated." },
    { icon: "FileSearch", title: "Audit trail", body: "Full policy and transaction history captured for internal audit, statutory audit, and employee dispute resolution." },
  ],
  workflow: [
    { title: "Apply", description: "Employee applies via ESS, selects loan type, amount, and tenure; eligibility checks run automatically." },
    { title: "Approve", description: "Manager, HR, and finance approve through configured thresholds; loan agreement generated and signed digitally via DMS." },
    { title: "Disburse", description: "Approved loan disburses through next payroll cycle or via WPS bank file; deduction schedule created." },
    { title: "Recover", description: "Monthly instalments deduct automatically from payroll; early repayments and balance inquiries handled via ESS." },
  ],
  integrations: ["peoplehub", "payedge", "dms", "ess", "mobileedge", "notifypro", "flexi-hq", "audit-trail"],
  relatedModules: ["payedge", "expensehub", "benefithub", "peoplehub"],
  seoTitle: "LoanHub — employee salary loans & advances | Flexi HRMS",
  seoDescription:
    "Employee loan administration for Pakistani enterprises — salary advances, personal loans, car lease, housing — with policy enforcement, approval workflows, and payroll recovery.",
  seoKeywords: ["employee loan software Pakistan", "salary advance software", "salary loan HRMS", "employee advance software"],
};
