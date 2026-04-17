import type { ModuleDetail } from "@/data/types";

export const performpro: ModuleDetail = {
  slug: "performpro",
  name: "PerformPro",
  suite: "talent",
  tagline: "Goals, reviews, 360 feedback, calibration",
  description:
    "PerformPro runs the full performance cycle — cascading goals, continuous check-ins, 360 feedback, appraisal reviews, and calibration meetings — with direct hand-off of outcomes into PayEdge for salary revisions.",
  reality:
    "Annual appraisals that nobody believes in. Goals set in January, forgotten by March. Ratings calibrated in a meeting where the loudest manager wins. PerformPro makes the whole cycle visible — goal setting, ongoing check-ins, 360-degree feedback, calibration math — so the performance conversation is grounded in evidence, not politics.",
  heroBody:
    "Pakistani enterprise performance cycles involve calibration meetings, bell-curve enforcement, succession discussions, and budget-aware salary revisions. PerformPro handles the choreography so HR can focus on the conversation, not the spreadsheet.",
  capabilities: [
    { icon: "Target", title: "Cascading goals", body: "Organisation OKRs cascade to business units, teams, and individuals. Goals carry weightage, measurement, and milestone check-ins." },
    { icon: "RefreshCw", title: "Continuous check-ins", body: "Lightweight monthly or quarterly conversations captured as running history — not reinvented at year-end." },
    { icon: "Users", title: "360 feedback", body: "Configurable reviewer sets: manager, peers, reports, skip-level. Anonymity rules per tenant." },
    { icon: "SlidersHorizontal", title: "Calibration", body: "Department and leadership calibration boards with rating distributions, flag resolution, and decision history." },
    { icon: "BarChart3", title: "Ratings & outcomes", body: "Rating scales, 9-box placements, promotion recommendations, salary revision proposals — all traceable." },
    { icon: "Banknote", title: "Hand-off to payroll", body: "Approved salary revisions flow directly to PayEdge with effective dates, letter generation, and backdated arrears." },
  ],
  workflow: [
    { title: "Set", description: "Goals cascade from the CEO scorecard down to every employee at cycle start." },
    { title: "Track", description: "Continuous check-ins log progress, blockers, and adjustments throughout the year." },
    { title: "Review", description: "Self-assessment, manager review, and 360 feedback captured in the review window." },
    { title: "Calibrate", description: "Leadership calibration sessions adjust ratings, finalise salary revisions, and hand off to PayEdge." },
  ],
  integrations: ["peoplehub", "payedge", "skillforge", "leadershiplab", "ess", "notifypro", "flexi-hq"],
  relatedModules: ["skillforge", "leadershiplab", "talentworks", "peoplehub"],
  seoTitle: "PerformPro — performance management & 360 feedback | Flexi HRMS",
  seoDescription:
    "Cascading goals, continuous check-ins, 360 feedback, calibration, and salary revisions that flow directly to payroll. PerformPro runs the full Pakistani enterprise performance cycle.",
  seoKeywords: ["performance management software Pakistan", "360 feedback software Pakistan", "appraisal software", "OKR software", "HRMS performance module"],
};
