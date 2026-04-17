import type { ModuleDetail } from "@/data/types";

export const peoplehub: ModuleDetail = {
  slug: "peoplehub",
  name: "PeopleHub",
  suite: "core",
  tagline: "Employee lifecycle & records",
  description:
    "PeopleHub is the source of truth for every employee in your organisation — personal data, contract, position, reporting line, documents, and history of every move from hire to exit.",
  reality:
    "An employee file isn't one document. It's a CNIC copy, a hiring approval signed by someone who left, a medical test from 2019, a promotion letter that was verbal, and three policies she's acknowledged but can't find. PeopleHub keeps the entire lifecycle traceable — hire, promote, transfer, confirm, separate — with every document, approval, and amendment attached to the person.",
  heroBody:
    "Every other Flexi module reads from PeopleHub. Onboarding workflows, payroll calculations, leave policies, performance reviews, mobile app access, ESS permissions — all anchored to one employee record with a complete history.",
  capabilities: [
    { icon: "Users", title: "Full employee record", body: "Personal, contact, statutory IDs, contract, position, reporting line, and beneficiary details — all in one record per employee." },
    { icon: "GitBranch", title: "Org structure", body: "Legal entities, business units, departments, cost centres, and reporting lines modelled to match your real org chart." },
    { icon: "RefreshCw", title: "Lifecycle events", body: "Promotions, transfers, probation confirmations, contract renewals, and separations — each captured with audit history." },
    { icon: "FolderOpen", title: "Document management", body: "CNICs, contracts, NDAs, education certificates — stored in DMS and linked to the employee record." },
    { icon: "ShieldCheck", title: "Role-based access", body: "Who can see salary, who can approve leave, who can change position — configured per business unit." },
    { icon: "FileSearch", title: "History you can trust", body: "Every field change, every position move — captured in Audit Trail with before/after values and the admin who changed it." },
  ],
  workflow: [
    { title: "Create", description: "Offer accepted in TalentWorks flows into PeopleHub as a draft record, triggering document collection and statutory registration." },
    { title: "Activate", description: "On join date, the record goes live — ESS access provisioned, payroll inclusion triggered, org chart updated." },
    { title: "Maintain", description: "Promotions, transfers, and contract changes update the record while preserving history for audit and reporting." },
    { title: "Exit", description: "Resignation or termination triggers clearance workflows, final settlement in PayEdge, and record archival." },
  ],
  integrations: ["payedge", "leaveease", "timesync", "performpro", "dms", "flexi-hq", "systemflex", "audit-trail"],
  relatedModules: ["payedge", "leaveease", "timesync", "dms"],
  seoTitle: "PeopleHub — employee records & lifecycle | Flexi HRMS",
  seoDescription:
    "PeopleHub is the employee record system powering Flexi HRMS. Org structure, lifecycle events, document linkage, RBAC, and full audit history for every employee.",
  seoKeywords: ["employee database software", "HRIS Pakistan", "employee record management", "HR software records", "employee lifecycle management"],
};
