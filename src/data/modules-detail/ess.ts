import type { ModuleDetail } from "@/data/types";

export const ess: ModuleDetail = {
  slug: "ess",
  name: "ESS",
  suite: "platform",
  tagline: "Employee self-service portal",
  description:
    "ESS is the employee self-service web portal — payslips, leave, attendance, claims, profile updates, approvals, and recognition in one place, branded to your company.",
  reality:
    "2,000 employees asking the HR Manager what their leave balance is. 400 requests for salary certificates that HR has to draft individually. Payslip distribution on email that gets forwarded to private Gmail accounts. ESS is the employee self-service portal — secure, auditable, and built to take 80% of routine queries off the HR team's desk.",
  heroBody:
    "For desk-based employees, ESS is the face of HR. Every module with an employee-facing view renders through ESS — which is why ESS is a first-class platform module, not a side surface.",
  capabilities: [
    { icon: "UserCircle2", title: "My profile", body: "Personal data, dependants, qualifications, documents — with employee-editable fields configurable per tenant." },
    { icon: "Banknote", title: "Payslips & certificates", body: "Monthly payslips, tax certificates, salary certificates, loan statements — downloadable and archived." },
    { icon: "CalendarDays", title: "Leave & attendance", body: "Apply, check balance, view attendance record, request regularisation — all without ticket raising." },
    { icon: "Receipt", title: "Expenses, loans, benefits", body: "Submit and track claims, loan applications, benefit elections, and dependant updates." },
    { icon: "ShieldCheck", title: "Approvals inbox", body: "For managers — a single inbox for every approval: leave, expense, loan, regularisation, goal-sign-off." },
    { icon: "Sparkles", title: "Culture & announcements", body: "Company announcements, birthday wall, recognition, pulse surveys — surfaced where employees actually are." },
  ],
  workflow: [
    { title: "Sign in", description: "Employee signs in via SSO or username/password through SystemFlex; 2FA enforced per tenant policy." },
    { title: "Transact", description: "Every HR transaction — leave, claim, attendance query, document download — happens in ESS." },
    { title: "Approve", description: "Managers approve from their inbox; notifications and escalations governed by NotifyPro." },
    { title: "Engage", description: "Announcements, pulse, recognition, and learning appear in the same portal — part of the daily flow." },
  ],
  integrations: ["peoplehub", "payedge", "timesync", "leaveease", "expensehub", "loanhub", "benefithub", "culturecore", "engageboard", "skillforge", "notifypro", "systemflex"],
  relatedModules: ["mobileedge", "peoplehub", "leaveease", "expensehub"],
  seoTitle: "ESS — employee self-service portal | Flexi HRMS",
  seoDescription:
    "Employee self-service portal for payslips, leave, attendance, claims, loans, benefits, and manager approvals. The web home for every Flexi HRMS employee.",
  seoKeywords: ["employee self service portal", "ESS software Pakistan", "employee portal HRMS", "HR self service software", "payslip portal"],
};
