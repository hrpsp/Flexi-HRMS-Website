import type { ModuleDetail } from "@/data/types";

export const projectedge: ModuleDetail = {
  slug: "projectedge",
  name: "ProjectEdge",
  suite: "operations",
  tagline: "Project & task tracking",
  description:
    "ProjectEdge is the internal project and task tracking layer inside Flexi HRMS — Kanban boards, task ownership, deadlines, and delay audit — tied back to the employee record.",
  reality:
    "Project work tracked in a spreadsheet. Task assignments in email. Delays explained in a meeting by the person responsible for the delay. ProjectEdge puts the project, the task, the owner, the deadline, and the delay record in one place — with Kanban for the team and roll-up dashboards for leadership.",
  heroBody:
    "Most Pakistani HR-adjacent project work — onboarding cohorts, policy rollouts, compliance initiatives, cross-functional change — lives in separate trackers, each drifting. ProjectEdge pulls them into Flexi, tied to the people actually doing the work.",
  capabilities: [
    { icon: "KanbanSquare", title: "Kanban boards", body: "Project boards per initiative with stages, drag-to-move cards, WIP limits, and filters by owner or priority." },
    { icon: "Target", title: "Task ownership", body: "Every task has one owner, a due date, and a clear definition of done. No shared responsibility, no orphaned tasks." },
    { icon: "CalendarDays", title: "Deadlines & milestones", body: "Milestones track progress against plan; calendar views show what's due when across projects." },
    { icon: "Users", title: "Cross-functional teams", body: "Pull people from across business units into project teams without disrupting their home reporting line." },
    { icon: "FileText", title: "Delay audit", body: "When a task slips, the reason gets captured against the task itself — for retrospective, pattern analysis, and accountability." },
    { icon: "BarChart3", title: "Leadership roll-up", body: "Dashboards aggregate progress across projects for leadership — on-track, at-risk, slipped — with drill-down to the task." },
  ],
  workflow: [
    { title: "Define", description: "Project created with goals, stages, and team. Tasks broken out with owners and deadlines." },
    { title: "Execute", description: "Team works the Kanban board; comments and attachments live on each task." },
    { title: "Track", description: "Delays captured with reasons; milestones marked; risks flagged to the project owner." },
    { title: "Review", description: "Leadership sees roll-up dashboards; retrospectives reference the delay audit to learn from patterns." },
  ],
  integrations: ["peoplehub", "flexi-desk", "insight360", "notifypro", "systemflex", "audit-trail"],
  relatedModules: ["flexi-desk", "insight360", "peoplehub", "performpro"],
  seoTitle: "ProjectEdge — project & task tracking | Flexi HRMS",
  seoDescription:
    "Internal project tracker for HR-adjacent initiatives: Kanban boards, task ownership, deadlines, delay audit, leadership roll-up dashboards. Inside the HRMS, tied to the employee record.",
  seoKeywords: [
    "HR project tracking software",
    "HR Kanban software",
    "internal project management HRMS",
    "task tracking software Pakistan",
  ],
};
