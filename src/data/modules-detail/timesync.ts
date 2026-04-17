import type { ModuleDetail } from "@/data/types";

export const timesync: ModuleDetail = {
  slug: "timesync",
  name: "TimeSync",
  suite: "core",
  tagline: "Attendance & shift management",
  description:
    "TimeSync captures attendance from biometric devices, GPS punches, and kiosk terminals; enforces shift patterns; and feeds clean overtime and absence data into PayEdge.",
  reality:
    "Three office sites. Two biometric brands. Fifty-eight employees who punch-in for each other. A Sahiwal warehouse on 2G where punches arrive four hours late. A Ramadan schedule that starts in two weeks. TimeSync handles all of it — device-agnostic, offline-capable, and built to reconcile the daily mess, not replace it with a prettier one.",
  heroBody:
    "Every major Pakistani biometric device is supported out of the box — ZKTeco, Hikvision, Matrix, Suprema, Anviz. Shift patterns from rotating manufacturing roster to field engineer GPS punches all run on one engine.",
  capabilities: [
    { icon: "Clock4", title: "Biometric integration", body: "Direct connectors for ZKTeco, Hikvision, Matrix, Suprema, Anviz. Multi-site syncing through ConnectCentral." },
    { icon: "Smartphone", title: "GPS & mobile punches", body: "Geofenced punch-in via MobileEdge for field teams. Photo capture and location stamp on each punch." },
    { icon: "SlidersHorizontal", title: "Shift patterns", body: "Fixed, rotating, split, and night shifts with handover rules; ramp up/down for manufacturing and retail peak seasons." },
    { icon: "RefreshCw", title: "Overtime rules", body: "Overtime calculated per provincial labour law with your internal multipliers, approval workflows, and cap enforcement." },
    { icon: "CalendarDays", title: "Attendance rules", body: "Grace periods, half-day thresholds, short-leave deduction, and late coming penalties — configurable per business unit." },
    { icon: "FileSearch", title: "Exception management", body: "Missed punches, irregular patterns, and anomalies surfaced to supervisors for regularisation before payroll closes." },
  ],
  workflow: [
    { title: "Capture", description: "Biometric devices, kiosks, and MobileEdge feed punches into TimeSync in near-real-time." },
    { title: "Apply rules", description: "Shift pattern, grace, breaks, and overtime rules apply per employee policy — producing a daily status." },
    { title: "Regularise", description: "Employees raise regularisation requests for missed punches; managers approve via ESS or MobileEdge." },
    { title: "Publish", description: "At period close, final attendance and overtime data feeds into PayEdge and LeaveEase." },
  ],
  integrations: ["peoplehub", "payedge", "leaveease", "mobileedge", "connectcentral", "ess", "flexi-hq"],
  relatedModules: ["payedge", "leaveease", "peoplehub", "mobileedge"],
  seoTitle: "TimeSync — attendance & shift management | Flexi HRMS",
  seoDescription:
    "Biometric attendance with ZKTeco, Hikvision, Matrix integration. GPS mobile punches. Shift management with provincial labour law overtime — feeds cleanly into PayEdge.",
  seoKeywords: ["attendance software Pakistan", "biometric attendance software", "ZKTeco integration HRMS", "shift management software", "GPS attendance tracking"],
};
