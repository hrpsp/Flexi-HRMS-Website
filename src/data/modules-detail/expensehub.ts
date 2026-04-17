import type { ModuleDetail } from "@/data/types";

export const expensehub: ModuleDetail = {
  slug: "expensehub",
  name: "ExpenseHub",
  suite: "engagement",
  tagline: "Claim submission, approval, reimbursement",
  description:
    "ExpenseHub handles the full expense claim cycle — submission on mobile with receipt capture, policy-aware validation, approval workflow, and reimbursement through PayEdge.",
  reality:
    "Travel claims on paper. Fuel receipts in a WhatsApp group. An accountant who approves everything because nobody trained her to question it. ExpenseHub moves claims to a workflow — submission, approval, reimbursement, integration to payroll — with the receipt attached, the policy enforced, and the audit trail built automatically.",
  heroBody:
    "Expense claims are the most frequent transaction most employees have with HR. If the experience is bad — scanning receipts, chasing approvals, waiting for reimbursement — that becomes the employee's view of the whole HR function. ExpenseHub fixes that.",
  capabilities: [
    { icon: "Receipt", title: "Mobile claim submission", body: "Submit claims on MobileEdge with receipt photo capture, OCR-assisted field entry, and offline drafts." },
    { icon: "SlidersHorizontal", title: "Policy validation", body: "Per-grade, per-location, per-category limits enforced at submission; policy breaches flagged with exception workflow." },
    { icon: "ShieldCheck", title: "Approval workflow", body: "Manager, budget-holder, and finance approvals configured per claim type and amount; delegation during absence." },
    { icon: "FileText", title: "Multi-currency", body: "Foreign-currency claims with exchange rate capture, receipt attachment, and tax treatment as per FBR." },
    { icon: "Banknote", title: "Reimbursement via PayEdge", body: "Approved claims reimburse through the next payroll cycle or off-cycle payment — full audit trail." },
    { icon: "BarChart3", title: "Spend insight", body: "Category, cost-centre, and trend analysis visible in Insight360 for finance and HR." },
  ],
  workflow: [
    { title: "Capture", description: "Employee photographs receipt on MobileEdge; OCR pre-fills amount, vendor, and date." },
    { title: "Submit", description: "Claim submitted against cost centre with category, business purpose, and policy-aware validation." },
    { title: "Approve", description: "Routed to manager, then finance — approval on mobile or ESS with one tap." },
    { title: "Reimburse", description: "Approved claims flow into next payroll; paid out via WPS bank file." },
  ],
  integrations: ["peoplehub", "payedge", "mobileedge", "ess", "dms", "notifypro", "flexi-hq", "audit-trail"],
  relatedModules: ["payedge", "loanhub", "benefithub", "mobileedge"],
  seoTitle: "ExpenseHub — employee expense claims | Flexi HRMS",
  seoDescription:
    "Mobile-first expense claims with receipt OCR, policy validation, multi-level approvals, and reimbursement through payroll. Part of the Flexi HRMS Engagement suite.",
  seoKeywords: ["expense management software Pakistan", "expense claim software", "reimbursement software", "employee expense app", "expense OCR software"],
};
