import type { ModuleDetail } from "@/data/types";

export const leaveease: ModuleDetail = {
  slug: "leaveease",
  name: "LeaveEase",
  suite: "core",
  tagline: "Policies, balances, approvals",
  description:
    "LeaveEase models leave the way Pakistani companies actually run it — annual, casual, sick, bereavement, Hajj, iddat, maternity and paternity — with policies that vary by business unit, location, and employee category.",
  reality:
    "Your leave policy is written. Your leave practice is different. Executives take 'unofficial' leave. Field staff accrue encashment nobody tracks properly. Urs and Moharram adjust by region. LeaveEase lets you encode both the written policy AND the workable one — with balance tracking, encashment logic, and approval chains that match how decisions are actually made.",
  heroBody:
    "Leave is where corporate policy meets local reality. LeaveEase handles provincial labour law minima, per-contract entitlements, pro-ration on joining, carry-forward rules, and encashment formulas — without custom code.",
  capabilities: [
    { icon: "CalendarDays", title: "Policies per entity", body: "Different leave rules for different legal entities, business units, or employee classes — all configured in Flexi HQ." },
    { icon: "RefreshCw", title: "Accruals & balances", body: "Monthly accruals, pro-rated joiners, carry-forwards with caps, and encashment on separation — applied automatically." },
    { icon: "ShieldCheck", title: "Approval workflows", body: "Routing by position, cost centre, or policy; auto-escalations; delegate during manager leave." },
    { icon: "Clock4", title: "Planner & calendar view", body: "Team leave calendar with conflict warnings, public holiday integration, and bulk approvals for managers." },
    { icon: "Landmark", title: "Statutory alignment", body: "Provincial labour law minima for manufacturing, service, and retail establishments — reviewed each budget cycle." },
    { icon: "FileText", title: "Leave encashment", body: "Formulas for unused leave on exit, tied directly into PayEdge final settlement with audit trail." },
  ],
  workflow: [
    { title: "Entitle", description: "On joining or policy change, balances are calculated and assigned per the employee's applicable policy." },
    { title: "Request", description: "Employee submits via ESS or MobileEdge; system checks balance, overlap, and conflicts before routing." },
    { title: "Approve", description: "Manager receives push notification, approves on MobileEdge — balance debits and payroll impact calculated instantly." },
    { title: "Reconcile", description: "Year-end carry-forward applied per policy; encashment on separation settled through PayEdge." },
  ],
  integrations: ["peoplehub", "payedge", "timesync", "mobileedge", "ess", "notifypro", "flexi-hq"],
  relatedModules: ["peoplehub", "timesync", "payedge", "ess"],
  seoTitle: "LeaveEase — leave policy & balance management | Flexi HRMS",
  seoDescription:
    "LeaveEase models Pakistani leave policies the way they actually work. Provincial labour law minima, per-entity rules, accruals, carry-forwards, and encashment — integrated with payroll.",
  seoKeywords: ["leave management software Pakistan", "leave policy software", "annual leave software", "leave tracker HRMS", "employee leave system"],
};
