import type { SuiteDetail } from "@/data/types";

export const coreSuite: SuiteDetail = {
  slug: "core",
  name: "Core HR & Payroll",
  eyebrow: "Suite · Core HR & Payroll",
  promise: "The hire-to-retire foundation with Pakistan compliance built in.",
  heroHeadline: "Org structure, people, compliance, time, leave, payroll. All in one foundation.",
  heroBody:
    "Core HR & Payroll is the six-module foundation every Pakistani enterprise needs on day one. Flexi HQ models the organisation. PeopleHub holds the employee. Pakistan Compliance keeps you current. TimeSync captures attendance. LeaveEase runs leave. PayEdge runs payroll — with EOBI, PESSI, WHT, and WPS baked in.",
  modules: [
    { slug: "flexi-hq", name: "Flexi HQ", tagline: "Org structure & blueprint", icon: "Cog" },
    { slug: "peoplehub", name: "PeopleHub", tagline: "Employee lifecycle & records", icon: "Users" },
    { slug: "pakistan-compliance", name: "Pakistan Compliance", tagline: "EOBI, PESSI, WHT, FBR", icon: "Scale" },
    { slug: "timesync", name: "TimeSync", tagline: "Attendance & shift management", icon: "Clock4" },
    { slug: "leaveease", name: "LeaveEase", tagline: "Policies, balances, approvals", icon: "CalendarDays" },
    { slug: "payedge", name: "PayEdge", tagline: "Payroll with Pakistan tax engine", icon: "Banknote" },
  ],
  workflow: [
    { title: "Structure", description: "Flexi HQ models legal entities, divisions, cost centres, and the matrix reporting line everyone denies exists." },
    { title: "Onboard", description: "PeopleHub creates the employee record with every document and amendment tied to the person for life." },
    { title: "Comply", description: "Pakistan Compliance keeps EOBI, PESSI, WHT, and FBR current — every federal budget applied before your next cycle." },
    { title: "Schedule & pay", description: "TimeSync captures punches, LeaveEase runs the leave calendar, PayEdge runs payroll with WPS exports for every partner bank." },
  ],
  customerCallout: {
    customer: "Bata Pakistan",
    industry: "Retail",
    outcome: "2,600+ employees on Flexi Core HR across manufacturing, distribution, and 400+ stores.",
    isConfirmed: true,
  },
  crossSell: ["talent", "engagement", "operations", "platform"],
  seoTitle: "Core HR & Payroll — Flexi HQ, PeopleHub, Compliance, Time, Leave, PayEdge | Flexi HRMS",
  seoDescription:
    "Flexi HRMS Core HR & Payroll: six modules covering org structure, people, Pakistan statutory compliance, time, leave, and payroll. Used by Bata, Engro, Jazz, HBL and 100+ Pakistani enterprises.",
  seoKeywords: [
    "HR software Pakistan",
    "payroll software Pakistan",
    "HRMS Pakistan",
    "attendance software Pakistan",
    "leave management software",
    "biometric attendance software Pakistan",
    "EOBI software",
    "WHT payroll Pakistan",
  ],
};
