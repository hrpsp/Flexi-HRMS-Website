import type { ModuleDetail } from "@/data/types";

export const skillforge: ModuleDetail = {
  slug: "skillforge",
  name: "SkillForge",
  suite: "talent",
  tagline: "Learning & development",
  description:
    "SkillForge is the learning and development engine — skill taxonomies, learning paths, catalogue management, mandatory compliance training, and the feedback loop from performance reviews back into development plans.",
  reality:
    "Compliance training that auditors will ask about. Cross-shift training that production managers resist because it costs output. Language-of-instruction mismatches between the Urdu-first floor and the English-first LMS. SkillForge handles the programs, the enrolments, the completion proof, and the certificates — and tracks who actually took the training, not just who clicked through.",
  heroBody:
    "L&D only works when skill gaps from reviews actually inform learning paths, and learning completion actually informs succession. SkillForge closes that loop inside Flexi — no hand-offs to a separate LMS.",
  capabilities: [
    { icon: "GraduationCap", title: "Skill taxonomy", body: "A structured library of skills, levels, and role mappings — aligned to your competency framework." },
    { icon: "Target", title: "Learning paths", body: "Sequenced courses, internal training, external workshops, and on-the-job assignments grouped by role, band, or development need." },
    { icon: "FileText", title: "Content catalogue", body: "Internal content, SCORM/xAPI uploads, external provider integrations. Attendance and completion tracked." },
    { icon: "ShieldCheck", title: "Mandatory & compliance training", body: "Annual compliance cycles — AML, code of conduct, safety — with renewal reminders and proof-of-completion archive." },
    { icon: "RefreshCw", title: "Review-to-learning loop", body: "Skill gaps identified in PerformPro reviews automatically recommend learning paths to close them." },
    { icon: "BarChart3", title: "Development plans", body: "Individual development plans (IDPs) tracking progress, coach notes, and nominations for leadership programs." },
  ],
  workflow: [
    { title: "Map skills", description: "Define your competency framework, map skills to roles, and baseline existing employees." },
    { title: "Assign paths", description: "Role, level, or band-based learning paths assign automatically; managers top up based on individual needs." },
    { title: "Deliver", description: "Employees complete content in ESS/MobileEdge; attendance captured for workshops; external providers integrated." },
    { title: "Evaluate", description: "Completion, effectiveness surveys, and skill-gap closure feed back into performance and succession." },
  ],
  integrations: ["peoplehub", "performpro", "leadershiplab", "ess", "notifypro", "flexi-hq"],
  relatedModules: ["performpro", "leadershiplab", "peoplehub", "culturecore"],
  seoTitle: "SkillForge — learning & development | Flexi HRMS",
  seoDescription:
    "L&D module with skill taxonomy, learning paths, SCORM content, compliance training, and the feedback loop from reviews to development plans — integrated with performance and succession.",
  seoKeywords: ["learning management system Pakistan", "LMS software Pakistan", "employee training software", "corporate training software", "learning development software"],
};
