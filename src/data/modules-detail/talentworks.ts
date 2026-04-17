import type { ModuleDetail } from "@/data/types";

export const talentworks: ModuleDetail = {
  slug: "talentworks",
  name: "TalentWorks",
  suite: "talent",
  tagline: "Recruitment & applicant tracking",
  description:
    "TalentWorks runs the full recruitment cycle — requisition to offer — with career-site publishing, structured screening, interview scheduling, and clean hand-off into PeopleHub when the offer is accepted.",
  reality:
    "You posted a Telecom Tower Engineer role and got 4,200 applications in eight days, 70% unqualified, 300 duplicates, and a shortlist the hiring manager forgot to review before leaving on Eid holiday. TalentWorks filters, scores, schedules, and tracks — from requisition to offer letter to first-day onboarding — so a real Pakistani recruitment volume doesn't break your process.",
  heroBody:
    "Most ATS products are built for tech startups hiring through LinkedIn. TalentWorks is built for Pakistani enterprises hiring at scale across functions — from blue-collar plant hiring to C-suite executive search.",
  capabilities: [
    { icon: "Briefcase", title: "Requisitions", body: "Budgeted vs. replacement requisitions with approval workflow, hiring-manager ownership, and position mapping." },
    { icon: "Users", title: "Career site", body: "Branded careers page publishing open roles. Integrates with Rozee.pk, LinkedIn, and your own site." },
    { icon: "FileText", title: "Application intake", body: "Structured applicant forms, CV parsing, duplicate detection, and applicant profile de-duplication across roles." },
    { icon: "SlidersHorizontal", title: "Screening & scoring", body: "Configurable scorecards per role. Panel interviews with comparative feedback. Blind scoring for DEI." },
    { icon: "CalendarDays", title: "Interview scheduling", body: "Calendar coordination across panellists, candidate self-service slot picking, and auto-reminders." },
    { icon: "RefreshCw", title: "Offer to onboarding", body: "Approved offers generate letters, roll over to PeopleHub, trigger document collection, and provision ESS access." },
  ],
  workflow: [
    { title: "Requisition", description: "Budget-approved position opens with hiring manager assigned and role profile attached." },
    { title: "Source", description: "Role publishes to career site and job boards; applicants flow into structured intake." },
    { title: "Evaluate", description: "Screening, shortlisting, interviews, and scorecards — with panel feedback captured in one record." },
    { title: "Onboard", description: "Offer accepted → PeopleHub record created → onboarding workflows triggered." },
  ],
  integrations: ["peoplehub", "dms", "notifypro", "systemflex", "flexi-hq"],
  relatedModules: ["peoplehub", "performpro", "skillforge", "leadershiplab"],
  seoTitle: "TalentWorks — applicant tracking & recruitment | Flexi HRMS",
  seoDescription:
    "Applicant tracking system built for Pakistani enterprise hiring. Requisitions, career site, CV parsing, panel interviews, and clean hand-off into PeopleHub onboarding.",
  seoKeywords: ["applicant tracking system Pakistan", "ATS Pakistan", "recruitment software Pakistan", "career site builder", "hiring software enterprise"],
};
