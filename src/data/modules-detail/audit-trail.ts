import type { ModuleDetail } from "@/data/types";

export const auditTrail: ModuleDetail = {
  slug: "audit-trail",
  name: "Audit Trail",
  suite: "platform",
  tagline: "Compliance logs",
  description:
    "Audit Trail captures every change to Flexi HRMS data — every field edit, every workflow action, every admin override, every configuration change — immutably, forever retrievable, ready for audit.",
  reality:
    "Someone changed the salary structure in August. Nobody knows who. The auditor will ask. The auditor will not accept 'we don't know.' Audit Trail logs every material change across every module — who, what, when, before, after — so when the question comes, you have the answer.",
  heroBody:
    "For BFSI tenants, public-sector tenants, and any tenant with an internal audit function, audit trail isn't a feature — it's a requirement. Audit Trail is Flexi's answer: every change tracked with timestamp, actor, before/after, and justification.",
  capabilities: [
    { icon: "FileSearch", title: "Change history", body: "Every field change captured with timestamp, user, before/after values, and source (UI, API, workflow)." },
    { icon: "ShieldCheck", title: "Immutable log", body: "Audit records are append-only — no edit, no delete, even for admins. Signed and cryptographically sealed." },
    { icon: "FileText", title: "Justification capture", body: "Sensitive changes prompt the admin for a justification note, captured alongside the change record." },
    { icon: "RefreshCw", title: "Workflow decisions", body: "Every approval, rejection, escalation, and delegation captured — not just data changes but decisions." },
    { icon: "Cog", title: "Configuration changes", body: "Every Flexi HQ change — form, workflow, policy — tracked with diff, approver, and rollout scope." },
    { icon: "BarChart3", title: "Audit reports", body: "Pre-built reports for SBP, EOBI, FBR, internal audit; custom queries across the log for investigations." },
  ],
  workflow: [
    { title: "Capture", description: "Every relevant action — data, decision, configuration — logs to Audit Trail with full context." },
    { title: "Retain", description: "Records retained per statutory minimum (SBP 10 years, FBR 6 years) and internal policy; never deleted." },
    { title: "Query", description: "Auditors and investigators search by employee, date, field, user, or correlation across events." },
    { title: "Report", description: "Pre-built and custom audit reports export in regulator-accepted formats." },
  ],
  integrations: ["peoplehub", "payedge", "flexi-hq", "systemflex", "connectcentral", "dms"],
  relatedModules: ["systemflex", "flexi-hq", "dms", "peoplehub"],
  seoTitle: "Audit Trail — HR compliance logs | Flexi HRMS",
  seoDescription:
    "Immutable audit trail for every data change, decision, and configuration in Flexi HRMS. Pre-built reports for SBP, EOBI, FBR — retention-compliant by design.",
  seoKeywords: ["HR audit software", "HRMS audit trail", "compliance logging HR", "HR data audit", "audit report software Pakistan"],
};
