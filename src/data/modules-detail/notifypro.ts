import type { ModuleDetail } from "@/data/types";

export const notifypro: ModuleDetail = {
  slug: "notifypro",
  name: "NotifyPro",
  suite: "platform",
  tagline: "Notifications & alerts engine",
  description:
    "NotifyPro is the notification engine beneath Flexi HRMS — approvals, reminders, announcements, alerts — delivered via the right channel at the right time, with escalation when action is pending.",
  reality:
    "Notifications that should have gone out last week. Reminders a manager wishes he'd received. Approval chains that silently stalled because the approver was on leave. NotifyPro is the central communication engine — email, SMS, in-app, WhatsApp — that makes sure the right message reaches the right person, with escalation when it doesn't.",
  heroBody:
    "Every module produces notifications. Getting notifications right — channel, tone, timing, escalation, quiet hours — is a product problem, not each module's problem. NotifyPro owns it, so other modules don't have to.",
  capabilities: [
    { icon: "Bell", title: "Channel routing", body: "Email, SMS, push notification, in-app — chosen per notification type, user preference, and urgency." },
    { icon: "RefreshCw", title: "Escalation & SLAs", body: "Pending approvals escalate after timeout; missed SLAs alert the next level; reminders repeat per policy." },
    { icon: "Clock4", title: "Quiet hours & batching", body: "Per-user quiet hours; non-urgent notifications batch into digests; urgent ones break through." },
    { icon: "SlidersHorizontal", title: "Template governance", body: "All notification templates configurable per tenant — tone, branding, language — with versioning and audit." },
    { icon: "ShieldCheck", title: "Delivery reliability", body: "Retries, fallback channels, delivery receipts, and dead-letter queues — so critical notifications don't silently fail." },
    { icon: "Users", title: "Preferences", body: "Each employee sets channel preferences per notification category; manager-override for critical types." },
  ],
  workflow: [
    { title: "Trigger", description: "A Flexi module raises a notification event — approval needed, policy changed, deadline approaching." },
    { title: "Route", description: "NotifyPro selects channel and recipients, applies quiet-hours and batching, generates the message from templates." },
    { title: "Deliver", description: "Message sends via email, SMS, push, or in-app; delivery receipts captured; retries on failure." },
    { title: "Follow up", description: "If action isn't taken, escalation and reminders fire per SLA; delivery log captured for audit." },
  ],
  integrations: ["ess", "mobileedge", "systemflex", "connectcentral", "flexi-hq"],
  relatedModules: ["systemflex", "connectcentral", "ess", "mobileedge"],
  seoTitle: "NotifyPro — HRMS notifications engine | Flexi HRMS",
  seoDescription:
    "Notification engine for Flexi HRMS — approvals, reminders, announcements, alerts — delivered via email, SMS, push, or in-app with escalation and quiet hours.",
  seoKeywords: ["HR notification software", "HRMS alerts", "workflow notifications", "approval reminders HR"],
};
