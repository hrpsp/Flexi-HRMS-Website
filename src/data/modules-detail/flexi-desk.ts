import type { ModuleDetail } from "@/data/types";

export const flexiDesk: ModuleDetail = {
  slug: "flexi-desk",
  name: "FlexiDesk",
  suite: "operations",
  tagline: "HR helpdesk & ticketing",
  description:
    "FlexiDesk is the HR and IT helpdesk inside Flexi HRMS — tickets, SLAs, escalation, threaded comments, and a proper audit trail for every employee query, IT request, and grievance.",
  reality:
    "Employee queries in WhatsApp to the HR Manager's personal phone. IT tickets in a shared Gmail inbox. Grievances that never got a formal record. FlexiDesk turns all of it into tracked tickets with SLA timers, escalations, and threaded comments — so the volume stays manageable and the resolution is auditable.",
  heroBody:
    "Every HR team has a shadow queue — WhatsApp messages, hallway conversations, forwarded emails — that carries the same volume as a proper helpdesk but with none of the tooling. FlexiDesk replaces the shadow queue with a real one.",
  capabilities: [
    { icon: "LifeBuoy", title: "Tickets & queues", body: "Categorised tickets — HR queries, IT requests, payroll questions, grievances — routed to the right queue and owner." },
    { icon: "Clock4", title: "SLA timers", body: "Response and resolution SLAs per category with escalation rules. Ageing reports visible to team leads." },
    { icon: "MessageCircle", title: "Threaded comments", body: "Full conversation history per ticket, with attachments, tagged colleagues, and internal-only notes separate from employee-facing replies." },
    { icon: "RefreshCw", title: "Escalation & reassignment", body: "Stuck tickets escalate automatically; reassignments preserve history; handovers do not drop context." },
    { icon: "FileText", title: "Knowledge articles", body: "Deflect volume with a searchable knowledge base integrated into ESS — employees find the answer before raising the ticket." },
    { icon: "ShieldCheck", title: "Grievance workflows", body: "Confidential grievance tickets with restricted access, anonymised summaries, and appropriate audit preservation." },
  ],
  workflow: [
    { title: "Raise", description: "Employee raises a ticket via ESS, MobileEdge, or email-to-ticket; category and priority captured." },
    { title: "Route", description: "FlexiDesk assigns to the right queue and owner based on category, with SLA clock started." },
    { title: "Resolve", description: "Owner works the ticket, converses with the employee, loops in colleagues, and closes with resolution notes." },
    { title: "Report", description: "SLA achievement, volume trends, and category analysis surface in Insight360 — with ticket audit preserved in Audit Trail." },
  ],
  integrations: ["peoplehub", "ess", "mobileedge", "notifypro", "insight360", "audit-trail", "systemflex"],
  relatedModules: ["ess", "notifypro", "insight360", "audit-trail"],
  seoTitle: "FlexiDesk — HR helpdesk & ticketing | Flexi HRMS",
  seoDescription:
    "HR helpdesk and ticketing for Pakistani enterprises. SLA timers, escalation, threaded comments, knowledge base, confidential grievance workflows. End the WhatsApp shadow queue.",
  seoKeywords: [
    "HR helpdesk software Pakistan",
    "HR ticketing software",
    "employee query management",
    "HR grievance software",
  ],
};
