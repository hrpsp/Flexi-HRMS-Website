import type { ModuleDetail } from "@/data/types";

export const culturecore: ModuleDetail = {
  slug: "culturecore",
  name: "CultureCore",
  suite: "engagement",
  tagline: "Values, recognition, pulse",
  description:
    "CultureCore is the recognition and pulse-survey module — peer-to-peer awards tied to company values, pulse and eNPS surveys with action-planning, and a culture dashboard that actually tells leadership what is changing.",
  reality:
    "A code of conduct no one has read. A whistleblowing policy buried on page 47 of the employee handbook. Values on a poster in reception. CultureCore turns policies into acknowledged, searchable, version-controlled documents — with tracked read-receipts and automatic nudges for new hires.",
  heroBody:
    "Recognition tools fail when they live outside the flow of work. Pulse surveys fail when the insights don't become action. CultureCore makes both live inside the same ESS and mobile app employees already use daily.",
  capabilities: [
    { icon: "Award", title: "Values-based recognition", body: "Award giving tied to company values, with peer-to-peer and manager-to-peer patterns. Visible on EngageBoard." },
    { icon: "BarChart3", title: "Pulse surveys", body: "Short, recurring pulses with anonymity guarantees, comparison over time, and drill-down by function and tenure." },
    { icon: "Target", title: "eNPS & engagement index", body: "Rolling eNPS, engagement composite scores, and theme detection across free-text responses." },
    { icon: "RefreshCw", title: "Action planning", body: "Survey results convert into action plans per team — owner, timeline, and status tracked to closure." },
    { icon: "Gift", title: "Reward redemption", body: "Points-based recognition schemes with catalogue redemption or direct payroll allocation via PayEdge." },
    { icon: "FileSearch", title: "Culture dashboard", body: "Leadership view of trends: recognition density, pulse themes, action-plan follow-through, attrition signals." },
  ],
  workflow: [
    { title: "Recognise", description: "Anyone can give values-tagged recognition via ESS or MobileEdge — visible to the team immediately." },
    { title: "Listen", description: "Pulse surveys push to employees on a cadence; responses flow anonymously into dashboards." },
    { title: "Act", description: "Teams with lower scores build action plans; HR tracks completion and checks impact in next pulse." },
    { title: "Reward", description: "Accumulated recognition points redeem through catalogue or roll over to PayEdge as recognition payouts." },
  ],
  integrations: ["peoplehub", "engageboard", "payedge", "ess", "mobileedge", "notifypro", "flexi-hq"],
  relatedModules: ["engageboard", "wellnest", "performpro", "ess"],
  seoTitle: "CultureCore — recognition & pulse surveys | Flexi HRMS",
  seoDescription:
    "Recognition tied to values, pulse surveys with action planning, eNPS, and culture dashboards. CultureCore lives inside the ESS and mobile app employees already use.",
  seoKeywords: ["employee recognition software Pakistan", "pulse survey software", "eNPS software", "employee engagement Pakistan", "HRMS recognition module"],
};
