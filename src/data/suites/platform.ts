import type { SuiteDetail } from "@/data/types";

export const platformSuite: SuiteDetail = {
  slug: "platform",
  name: "Platform",
  eyebrow: "Suite · Platform",
  promise: "The Reality Engine — SystemFlex + ConnectCentral + the full platform layer.",
  heroHeadline: "The Reality Engine beneath every other suite.",
  heroBody:
    "The Platform suite is the seven modules that make the rest of Flexi HRMS possible: SystemFlex configures the product per tenant, ConnectCentral connects it to the messy outside world, MobileEdge and ESS get it to employees, NotifyPro reaches them, Insight360 and Audit Trail make it visible, all without a developer writing code.",
  modules: [
    { slug: "systemflex", name: "SystemFlex", tagline: "Form + workflow + print engine", icon: "Cog" },
    { slug: "connectcentral", name: "ConnectCentral", tagline: "Integration hub", icon: "Plug" },
    { slug: "notifypro", name: "NotifyPro", tagline: "Notifications engine", icon: "Bell" },
    { slug: "audit-trail", name: "Audit Trail", tagline: "Compliance logs", icon: "FileSearch" },
    { slug: "insight360", name: "Insight360", tagline: "Analytics & dashboards", icon: "BarChart3" },
    { slug: "mobileedge", name: "MobileEdge", tagline: "Flutter mobile app", icon: "Smartphone" },
    { slug: "ess", name: "ESS", tagline: "Employee self-service portal", icon: "UserCircle2" },
  ],
  workflow: [
    { title: "Configure", description: "SystemFlex assembles forms, workflows, approval chains, and print templates — your HR admin owns it, no developer needed." },
    { title: "Integrate", description: "ConnectCentral wires Flexi to biometric devices, banks, SSO, ERPs, and every other system that has to keep working on a bad Tuesday." },
    { title: "Reach", description: "NotifyPro, MobileEdge, and ESS get the right message and the right transaction to the right employee — desk-based or frontline." },
    { title: "See", description: "Insight360 reports it, Audit Trail preserves every change. The CFO's Monday numbers reconcile to the exact payroll run." },
  ],
  customerCallout: {
    customer: "Across 100+ enterprises",
    outcome:
      "Manufacturing, telecom, banking, retail, healthcare, utilities — each tenant running a version of Flexi HRMS configured to its industry, on a single codebase.",
    isConfirmed: true,
  },
  crossSell: ["core", "talent", "engagement", "operations"],
  seoTitle: "Platform — SystemFlex, ConnectCentral, and the Reality Engine | Flexi HRMS",
  seoDescription:
    "Flexi HRMS Platform suite: SystemFlex (configurability), ConnectCentral (integrations), NotifyPro, Audit Trail, Insight360, MobileEdge, ESS. The Reality Engine powering every tenant.",
  seoKeywords: [
    "configurable HRMS Pakistan",
    "customisable HR software",
    "HRMS with workflow engine",
    "employee self-service portal Pakistan",
    "HR mobile app Pakistan",
    "HRMS integration hub",
  ],
};
