import type { ModuleDetail } from "@/data/types";

export const leadershiplab: ModuleDetail = {
  slug: "leadershiplab",
  name: "LeadershipLab",
  suite: "talent",
  tagline: "Succession & 9-box",
  description:
    "LeadershipLab is the succession planning and leadership pipeline module — 9-box grids, successor mapping for critical roles, development plans, and readiness tracking over time.",
  reality:
    "You have eight people who could be promoted to Plant Manager. Nobody has the list. Succession is whatever the CEO remembers in the board meeting. LeadershipLab maintains your talent pool, 9-box placement, development plans, and succession scenarios — so when the Plant Manager resigns on a Thursday, Friday isn't panic.",
  heroBody:
    "Succession is the conversation leadership teams should have every quarter but usually have once a year. LeadershipLab keeps the 9-box current, the successor pipeline visible, and the development plans accountable.",
  capabilities: [
    { icon: "Medal", title: "9-box grid", body: "Performance × potential grid with calibration, drag-to-reposition review sessions, and history of movement over time." },
    { icon: "Target", title: "Critical roles", body: "Flag positions as critical; map ready-now, ready-in-1-year, ready-in-2-3-year successors with coverage gap analysis." },
    { icon: "GraduationCap", title: "Development plans", body: "Per-successor development plans tied to SkillForge learning paths, stretch assignments, and mentoring arrangements." },
    { icon: "BarChart3", title: "Pipeline visibility", body: "Leadership pipeline health dashboards by function, geography, and level — visible in Insight360." },
    { icon: "FileSearch", title: "Readiness signals", body: "Signals from PerformPro reviews, SkillForge completions, and manager observations aggregate into readiness scores." },
    { icon: "Users", title: "Talent council", body: "Quarterly talent review meeting support — agenda, roster, calibration, decisions — all captured for audit." },
  ],
  workflow: [
    { title: "Identify", description: "Leadership flags critical roles and nominates high-potential talent into the pipeline." },
    { title: "Calibrate", description: "Quarterly 9-box calibration sessions review placements and successor readiness across the leadership team." },
    { title: "Develop", description: "Individual development plans link into SkillForge, stretch assignments, and coaching." },
    { title: "Track", description: "Readiness movement tracked over time; succession coverage reviewed per critical role." },
  ],
  integrations: ["peoplehub", "performpro", "skillforge", "insight360", "flexi-hq"],
  relatedModules: ["performpro", "skillforge", "talentworks", "peoplehub"],
  seoTitle: "LeadershipLab — succession planning & 9-box | Flexi HRMS",
  seoDescription:
    "Succession planning with 9-box calibration, critical role coverage, successor development plans, and readiness tracking. Integrated with performance and learning.",
  seoKeywords: ["succession planning software Pakistan", "9-box talent matrix", "leadership development software", "talent pipeline software", "HRMS succession"],
};
