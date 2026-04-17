import type { SuiteDetail } from "@/data/types";

export const talentSuite: SuiteDetail = {
  slug: "talent",
  name: "Talent",
  eyebrow: "Suite · Talent",
  promise: "Grow the people you have. Hire the ones you need.",
  heroHeadline: "Recruitment, performance, learning, and succession — on one platform.",
  heroBody:
    "The Talent suite covers the full arc from the first application to the succession plan. Goals cascade from the organisation down to each employee. 360 feedback informs calibration. Skill gaps inform learning. Learning outcomes feed succession — closing the loop across the talent lifecycle.",
  modules: [
    { slug: "performpro", name: "PerformPro", tagline: "Goals, reviews, 360 feedback", icon: "Target" },
    { slug: "talentworks", name: "TalentWorks", tagline: "Recruitment & applicant tracking", icon: "Briefcase" },
    { slug: "skillforge", name: "SkillForge", tagline: "Learning & development", icon: "GraduationCap" },
    { slug: "leadershiplab", name: "LeadershipLab", tagline: "Succession & 9-box", icon: "Medal" },
  ],
  workflow: [
    {
      title: "Hire",
      description: "TalentWorks sources, screens, and onboards — publishing into PeopleHub when the offer is accepted.",
    },
    {
      title: "Set goals",
      description: "PerformPro cascades company OKRs into individual goals and mid-year check-ins.",
    },
    {
      title: "Develop",
      description: "SkillForge closes skill gaps identified in reviews with learning paths and tracked completions.",
    },
    {
      title: "Succeed",
      description: "LeadershipLab maintains the 9-box grid, succession pipeline, and development plans for critical roles.",
    },
  ],
  customerCallout: {
    customer: "Across BFSI & telecom tenants",
    outcome:
      "Annual appraisal cycles running on PerformPro with calibration — closing with salary-revision data flowing into PayEdge.",
    isConfirmed: false,
  },
  crossSell: ["core", "engagement", "platform"],
  seoTitle: "Talent — recruitment, performance, learning, succession | Flexi HRMS",
  seoDescription:
    "Flexi HRMS Talent suite: PerformPro, TalentWorks, SkillForge, LeadershipLab. Goals, reviews, 360 feedback, ATS, L&D, 9-box succession — on one platform used by Pakistani enterprises.",
  seoKeywords: [
    "performance management software Pakistan",
    "applicant tracking system Pakistan",
    "360 feedback software",
    "HR succession planning software",
    "learning management system Pakistan",
  ],
};
