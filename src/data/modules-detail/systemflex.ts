import type { ModuleDetail } from "@/data/types";

export const systemflex: ModuleDetail = {
  slug: "systemflex",
  name: "SystemFlex",
  suite: "platform",
  tagline: "Form + workflow + print engine — the Reality Engine",
  description:
    "SystemFlex is the configurability runtime — FormBuilder, WorkflowDesigner, PrintManager, module settings, and the governance layer around all of them. Your HR admin configures what used to require a developer.",
  reality:
    "Every time you need a new field on the onboarding form, the vendor quotes you 12 weeks and USD 4,000. SystemFlex is the engine that ended that. FormBuilder. WorkflowDesigner. PrintManager. Module settings. Your HR admin configures what used to require a developer — forms, fields, approval chains, letter templates — without opening a support ticket.",
  heroBody:
    "Who can see which employees' salaries? Who can change payroll rules? Who approved the admin who approved the configuration? SystemFlex answers every one of these questions — not with assumptions, but with audit trail.",
  capabilities: [
    { icon: "Users", title: "Users & roles", body: "Role-based access with inheritance, scoping by business unit, and explicit deny rules for sensitive fields." },
    { icon: "KeyRound", title: "SSO & 2FA", body: "SAML 2.0, OIDC, SCIM provisioning; 2FA via authenticator app, SMS, or hardware token per tenant policy." },
    { icon: "ShieldCheck", title: "Session policy", body: "Session timeouts, concurrent session limits, IP restrictions, and device registration — governed per role." },
    { icon: "Smartphone", title: "Device management", body: "Register, approve, and remote-wipe mobile devices; enforce app version minimums; force re-auth on trigger." },
    { icon: "FileSearch", title: "Platform audit log", body: "Every admin action — role change, permission grant, policy edit — captured immutably for audit." },
    { icon: "Cog", title: "Tenant administration", body: "Tenant-level settings, environment promotion (dev → staging → prod), and feature-flag governance." },
  ],
  workflow: [
    { title: "Onboard admin", description: "New platform admin provisioned via SSO, assigned role, scoped to business units — with approval workflow." },
    { title: "Govern access", description: "Periodic access reviews ensure permissions match current responsibilities; violations flag automatically." },
    { title: "Operate securely", description: "Session, device, and network policies enforce the enterprise security posture on every Flexi user." },
    { title: "Audit", description: "Every admin action traceable. Access reports, change reports, and incident investigations are one query away." },
  ],
  integrations: ["peoplehub", "flexi-hq", "flexi-meta", "audit-trail", "connectcentral", "notifypro", "ess", "mobileedge"],
  relatedModules: ["audit-trail", "flexi-hq", "connectcentral", "ess"],
  seoTitle: "SystemFlex — HRMS admin controls | Flexi HRMS",
  seoDescription:
    "Platform admin controls for users, roles, SSO, 2FA, session policy, device management, and audit. The security and governance layer of Flexi HRMS.",
  seoKeywords: ["HRMS access control", "HR RBAC software", "HR SSO integration", "HR 2FA software", "HR audit software"],
};
