import type { ModuleDetail } from "@/data/types";

export const insight360: ModuleDetail = {
  slug: "insight360",
  name: "Insight360",
  suite: "platform",
  tagline: "Analytics & dashboards",
  description:
    "Insight360 is the analytics layer on top of Flexi HRMS — headcount, payroll cost, attrition, engagement, performance, compensation, and compliance — all from one data model, presented for HR, finance, and leadership.",
  reality:
    "A CFO who wants a report in a specific format by Monday. A CEO who wants headcount by division, cost, gender, and tenure — also by Monday. Insight360 is the reporting layer that makes this a 20-minute job instead of a two-day spreadsheet build. Dashboards for managers. Scheduled reports for leadership. Excel export for the Finance Manager who still prefers Excel.",
  heroBody:
    "HR reporting usually arrives late, lives in Excel, and doesn't tie back to source. Insight360 reports off the same data Flexi runs on — so the number your CFO sees in the board pack is the same number that appears in PayEdge.",
  capabilities: [
    { icon: "BarChart3", title: "Standard dashboards", body: "Headcount by function / location / level, attrition, time-to-hire, payroll cost trend, compensation ratios, engagement — all out of the box." },
    { icon: "SlidersHorizontal", title: "Custom reports", body: "Drag-and-drop report builder over the Flexi Meta model; save, share, schedule, or export to Excel / PDF." },
    { icon: "FileSearch", title: "Drill-through", body: "Every number drills to the source employee, period, or transaction — eliminating the 'where does this come from' debate." },
    { icon: "RefreshCw", title: "Real-time", body: "Dashboards update as Flexi data changes — no overnight batch delay for critical operational numbers." },
    { icon: "ShieldCheck", title: "Row-level security", body: "What each user sees respects their business-unit scope; a plant HR lead can't accidentally see corporate payroll." },
    { icon: "Plug", title: "Warehouse integration", body: "Export to your data warehouse through ConnectCentral for enterprise BI tools (Power BI, Tableau, Qlik)." },
  ],
  workflow: [
    { title: "Model", description: "Insight360 reads directly from Flexi Meta — no separate data model, no sync lag." },
    { title: "Visualise", description: "Standard dashboards out of the box; custom reports built by HR and finance without engineering." },
    { title: "Distribute", description: "Dashboards embedded in ESS, emailed on schedule, exported for board packs — with governance." },
    { title: "Action", description: "Insights feed back into action — pulse action plans, attrition hotspot interventions, cost-control programs." },
  ],
  integrations: ["peoplehub", "payedge", "leaveease", "timesync", "performpro", "culturecore", "connectcentral", "flexi-meta"],
  relatedModules: ["flexi-meta", "peoplehub", "payedge", "performpro"],
  seoTitle: "Insight360 — HR analytics & dashboards | Flexi HRMS",
  seoDescription:
    "HR analytics platform with headcount, payroll cost, attrition, engagement, compensation, and compliance dashboards. Custom reports, drill-through, warehouse integration.",
  seoKeywords: ["HR analytics software", "HR dashboards software", "HR reporting software Pakistan", "people analytics software", "workforce analytics"],
};
