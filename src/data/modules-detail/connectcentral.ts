import type { ModuleDetail } from "@/data/types";

export const connectcentral: ModuleDetail = {
  slug: "connectcentral",
  name: "ConnectCentral",
  suite: "platform",
  tagline: "Integration hub",
  description:
    "ConnectCentral is the integration backplane — the hub that connects Flexi HRMS to biometric devices, payroll banks, SSO providers, ERPs, wellness wearables, and everything else your enterprise runs on.",
  reality:
    "Your ZKTeco devices. Your Suprema devices. WhatsApp for notifications. Google Calendar for leave sync. Your bank's WPS file format. Your SSO provider. Integration is not one connector — it's a dozen messy interfaces that need to keep working on a Tuesday when one of them updates. ConnectCentral is the layer that holds it together.",
  heroBody:
    "An HRMS rarely lives alone. ConnectCentral handles the inevitable — biometric devices across plants, WPS bank file formats across banks, SAP or Oracle ERPs for finance, Azure AD or Okta for SSO — without each integration becoming a bespoke engineering project.",
  capabilities: [
    { icon: "Plug", title: "Pre-built connectors", body: "Biometric (ZKTeco, Hikvision, Matrix, Suprema, Anviz), banks (HBL, UBL, MCB, Meezan), SSO (Azure AD, Okta, Google, ADFS) — all ready out of the box." },
    { icon: "GitBranch", title: "REST APIs & webhooks", body: "Every Flexi object and transition available as REST. Webhooks for state changes. Rate limiting, retry, and audit per integration." },
    { icon: "RefreshCw", title: "Scheduled jobs", body: "Batch exports, scheduled imports, delta syncs — all configurable with windows, timeouts, and alerting." },
    { icon: "ShieldCheck", title: "Secrets management", body: "API keys, tokens, certificates held in the platform secret store with rotation policies and access audit." },
    { icon: "FileSearch", title: "Integration observability", body: "Every call logged with payload (PII-masked), status, duration, and error — searchable, alertable." },
    { icon: "Database", title: "Data mappings", body: "Configurable field mappings per integration; transformation rules for format conversion, lookup, and validation." },
  ],
  workflow: [
    { title: "Configure", description: "Pick a connector, configure credentials, map fields, set schedule — all from ConnectCentral admin UI." },
    { title: "Execute", description: "Integrations run on schedule or trigger; payloads flow with retries, timeouts, and transformations applied." },
    { title: "Observe", description: "Every call logged; failures alert to operations team; dashboards show health by integration." },
    { title: "Audit", description: "Full audit trail for compliance — who configured what, what ran when, what data moved." },
  ],
  integrations: ["flexi-hq", "flexi-meta", "systemflex", "audit-trail", "timesync", "payedge"],
  relatedModules: ["flexi-hq", "systemflex", "audit-trail", "timesync"],
  seoTitle: "ConnectCentral — HRMS integration hub | Flexi HRMS",
  seoDescription:
    "Integration platform connecting Flexi HRMS to biometric devices, banks, SSO providers, ERPs. REST APIs, webhooks, scheduled jobs, observability, and audit — all managed.",
  seoKeywords: ["HR integration software", "HRMS API", "biometric HRMS integration", "HR SSO integration", "HR ERP integration"],
};
