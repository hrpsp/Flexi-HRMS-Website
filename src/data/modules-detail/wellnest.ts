import type { ModuleDetail } from "@/data/types";

export const wellnest: ModuleDetail = {
  slug: "wellnest",
  name: "WellNest",
  suite: "engagement",
  tagline: "Wellness programs & EAP",
  description:
    "WellNest manages employee wellness initiatives, challenges, and access to Employee Assistance Programs — with the privacy and discretion required for a sensitive area of HR.",
  reality:
    "A counsellor on retainer that nobody uses because nobody knows. An EAP number in an email from 2022. A mental-health crisis that HR learns about from the team lead three weeks too late. WellNest surfaces wellbeing programs in the employee's daily app, logs confidential cases without breaking confidentiality, and gives leadership visibility into patterns without exposing individuals.",
  heroBody:
    "Wellness is a stated priority at most Pakistani enterprises; it shows up at its weakest when it's run through email threads and paper forms. WellNest gives employees confidential access to programs and gives HR aggregate insight without breaching individual privacy.",
  capabilities: [
    { icon: "Heart", title: "Wellness programs", body: "Enrol employees in physical, mental, and financial wellness programs with privacy-first participation tracking." },
    { icon: "ShieldCheck", title: "EAP access", body: "Confidential Employee Assistance Program access — book sessions with counsellors through ESS or MobileEdge." },
    { icon: "Target", title: "Challenges", body: "Step-count, meditation-minute, and team-based wellness challenges integrated with wearables through ConnectCentral." },
    { icon: "FileText", title: "Health content", body: "Curated wellness content library — nutrition, stress, sleep — pushed to employees at relevant moments." },
    { icon: "BarChart3", title: "Aggregate insight only", body: "HR dashboards report only aggregate participation and theme data. No individual-level access by design." },
    { icon: "RefreshCw", title: "Program effectiveness", body: "Correlate participation with engagement, attrition, and absenteeism signals at the aggregate level." },
  ],
  workflow: [
    { title: "Offer", description: "HR launches wellness programs — participation is opt-in, with clear privacy communication." },
    { title: "Engage", description: "Employees enrol, track activity, redeem EAP sessions, and complete challenges via MobileEdge." },
    { title: "Support", description: "EAP sessions happen confidentially; no session content is visible to HR or managers." },
    { title: "Measure", description: "Aggregate dashboards guide next program cycle — never individual-level." },
  ],
  integrations: ["peoplehub", "culturecore", "connectcentral", "ess", "mobileedge", "flexi-hq"],
  relatedModules: ["culturecore", "engageboard", "benefithub", "ess"],
  seoTitle: "WellNest — employee wellness & EAP | Flexi HRMS",
  seoDescription:
    "Employee wellness programs, EAP access, and wellness challenges — with privacy-first participation tracking and aggregate-only HR reporting.",
  seoKeywords: ["employee wellness software", "EAP software Pakistan", "wellness program software", "employee assistance program software"],
};
