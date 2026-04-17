import type { SuiteDetail } from "@/data/types";

export const coreSuite: SuiteDetail = {
  slug: "core",
  name: "Core HR",
  eyebrow: "Suite · Core HR",
  promise: "The hire-to-retire foundation.",
  heroHeadline: "Employee, payroll, leave, and attendance. Built for Pakistan.",
  heroBody:
    "Core HR runs the daily operations every Pakistani enterprise depends on. Employee records, payroll with a compliance-native tax engine, leave policies by business unit, and biometric attendance — all configurable per tenant through Flexi HQ.",
  modules: [
    { slug: "peoplehub", name: "PeopleHub", tagline: "Employee lifecycle & records", icon: "Users" },
    { slug: "payedge", name: "PayEdge", tagline: "Payroll with Pakistan tax engine", icon: "Banknote" },
    { slug: "leaveease", name: "LeaveEase", tagline: "Policies, balances, approvals", icon: "CalendarDays" },
    { slug: "timesync", name: "TimeSync", tagline: "Attendance & shift management", icon: "Clock4" },
  ],
  workflow: [
    {
      title: "Onboard",
      description: "PeopleHub creates the employee record, assigns org position, and triggers document workflows in DMS.",
    },
    {
      title: "Schedule",
      description: "TimeSync applies the correct shift roster and biometric rules for the employee's location and role.",
    },
    {
      title: "Accrue",
      description: "LeaveEase assigns annual, casual, sick, and company-specific leave balances based on policy.",
    },
    {
      title: "Pay",
      description: "PayEdge runs monthly payroll with WHT, EOBI, PESSI, and any deductions — exporting WPS bank files on schedule.",
    },
  ],
  customerCallout: {
    customer: "Bata Pakistan",
    industry: "Retail",
    outcome: "2,600+ employees on Flexi Core HR across manufacturing, distribution, and 400+ stores.",
    isConfirmed: true,
  },
  crossSell: ["talent", "engagement", "platform"],
  seoTitle: "Core HR — employee, payroll, leave, attendance | Flexi HRMS",
  seoDescription:
    "Flexi HRMS Core HR: PeopleHub, PayEdge, LeaveEase, TimeSync. Pakistan-native payroll, biometric attendance, leave policies by business unit. Used by Bata, Engro, Jazz, HBL and 100+ enterprises.",
  seoKeywords: [
    "HR software Pakistan",
    "payroll software Pakistan",
    "HRMS Pakistan",
    "attendance software Pakistan",
    "leave management software",
    "biometric attendance software Pakistan",
  ],
};
