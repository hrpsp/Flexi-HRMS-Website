import type { SuiteDetail } from "@/data/types";

export const operationsSuite: SuiteDetail = {
  slug: "operations",
  name: "Operations",
  eyebrow: "Suite · Operations",
  promise: "Tickets, documents, assets, projects — the HR operations day.",
  heroHeadline: "The messy middle of HR: tickets, docs, assets, projects.",
  heroBody:
    "Every HR team spends half its day not on strategy but on the operational tail — employee queries in WhatsApp, contracts on a shared drive, laptops that got taken home, projects tracked in someone's inbox. Operations turns all of it into tracked, auditable, owned workflow.",
  modules: [
    { slug: "flexi-desk", name: "FlexiDesk", tagline: "HR helpdesk & ticketing", icon: "LifeBuoy" },
    { slug: "dms", name: "DMS", tagline: "Document management", icon: "FolderOpen" },
    { slug: "flexi-ams", name: "Flexi AMS", tagline: "Asset management", icon: "Boxes" },
    { slug: "projectedge", name: "ProjectEdge", tagline: "Project & task tracking", icon: "KanbanSquare" },
  ],
  workflow: [
    { title: "Ticket it", description: "FlexiDesk turns every HR query, IT request, and grievance into a tracked ticket with SLA, owner, and thread history." },
    { title: "File it", description: "DMS attaches contracts, CNICs, licences, certificates to the employee record with retention and expiry tracking." },
    { title: "Issue it", description: "Flexi AMS assigns laptops, SIMs, vehicles, uniforms against digital signatures; clearance tied to separation." },
    { title: "Ship it", description: "ProjectEdge runs project boards, task ownership, and delay tracking with roll-up dashboards for leadership." },
  ],
  customerCallout: {
    customer: "Across operating tenants",
    outcome:
      "FlexiDesk ticket volume routed off personal WhatsApp; expiring CNICs and licences caught before the plant turnstile rejected employees; asset clearance completed before final-settlement payroll.",
    isConfirmed: false,
  },
  crossSell: ["core", "talent", "platform"],
  seoTitle: "Operations — HR helpdesk, documents, assets, projects | Flexi HRMS",
  seoDescription:
    "Flexi HRMS Operations suite: FlexiDesk (helpdesk), DMS (document management), Flexi AMS (asset management), ProjectEdge (project tracking). Turn the HR operations tail into auditable workflow.",
  seoKeywords: [
    "HR helpdesk software Pakistan",
    "HR ticketing software",
    "HR document management",
    "employee asset tracking",
    "HR project tracking software",
  ],
};
