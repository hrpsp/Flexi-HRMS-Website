import type { ModuleDetail } from "@/data/types";

export const engageboard: ModuleDetail = {
  slug: "engageboard",
  name: "EngageBoard",
  suite: "engagement",
  tagline: "Social collaboration & announcements",
  description:
    "EngageBoard is the internal social and announcements feed — a company-wide communications channel that reaches every employee where they already work: ESS and MobileEdge.",
  reality:
    "Birthday wishes no one sends. Anniversary celebrations that happen a week late. Pulse surveys run once a year and filed. EngageBoard puts recognition, announcements, and lightweight pulse checks in the everyday workflow — so engagement isn't an annual event, it's a background hum.",
  heroBody:
    "Town halls, policy updates, CEO notes, birthday walls, new-joiner announcements — all usually scattered across email, WhatsApp, and notice boards. EngageBoard consolidates them, with read receipts and audience targeting that actually works.",
  capabilities: [
    { icon: "Sparkles", title: "Company announcements", body: "Broadcast posts from HR, leadership, or functional heads with rich media, links, and audience targeting." },
    { icon: "Users", title: "Audience targeting", body: "Send to the whole company, a business unit, a cost centre, a location — with read-receipt tracking." },
    { icon: "Award", title: "Recognition feed", body: "CultureCore awards render in the feed — recognition is public and visible, reinforcing culture." },
    { icon: "CalendarDays", title: "Birthdays & milestones", body: "Auto-generated birthday, anniversary, and promotion posts — opt-in per employee via privacy settings." },
    { icon: "FileText", title: "Policy pinning", body: "Important announcements pin to the top with mandatory-read tracking and audit trail of who acknowledged." },
    { icon: "Smartphone", title: "Mobile-first", body: "MobileEdge push notifications, in-app feed, and reactions — built for workforces that don't sit at desks." },
  ],
  workflow: [
    { title: "Compose", description: "HR or leadership composes a post with attachments, tagged users, and target audience." },
    { title: "Publish", description: "Post publishes to targeted employees' ESS feed and MobileEdge with optional push notifications." },
    { title: "Engage", description: "Employees read, react, and comment; read-receipts track mandatory acknowledgements." },
    { title: "Measure", description: "Reach, engagement, and acknowledgement rates visible to authors and HR." },
  ],
  integrations: ["peoplehub", "culturecore", "ess", "mobileedge", "notifypro", "flexi-hq"],
  relatedModules: ["culturecore", "wellnest", "ess", "notifypro"],
  seoTitle: "EngageBoard — internal communications | Flexi HRMS",
  seoDescription:
    "Company-wide announcements, social feed, recognition surfacing, birthday/milestone posts, and policy pinning — all reaching employees through ESS and MobileEdge.",
  seoKeywords: ["employee communication software", "internal comms platform", "company announcements software", "HR social feed", "employee app Pakistan"],
};
