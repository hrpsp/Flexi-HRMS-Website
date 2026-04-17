import type { ModuleDetail } from "@/data/types";

export const flexiAms: ModuleDetail = {
  slug: "flexi-ams",
  name: "Flexi AMS",
  suite: "operations",
  tagline: "Asset management",
  description:
    "Flexi AMS is the asset management module for IT, office, and field equipment issued to employees — laptops, phones, SIMs, vehicles, tools, uniforms, PPE — with issue, return, and recovery workflows.",
  reality:
    "A laptop issued three years ago to an employee who left last year and took it with him. A SIM allocated to Project Engineer X that's now in the hands of Project Engineer Y. Flexi AMS tracks assignment, return, damage, and lifecycle — so when payroll-final-settlement runs, the asset clearance is already done.",
  heroBody:
    "Most HRMS products leave asset management to IT or facilities. That works fine — until someone resigns and nobody is sure what laptop or SIM is still out. Flexi AMS keeps asset issuance tied to the employee record, so clearance workflows are accurate.",
  capabilities: [
    { icon: "Boxes", title: "Asset register", body: "Every asset — laptop, phone, SIM, vehicle, tool, uniform, PPE — tracked with serial, owner, location, and status." },
    { icon: "Users", title: "Issue & return", body: "Assets issued to employees against digital signature; returns captured with condition notes and recovery actions." },
    { icon: "FileText", title: "Asset policies", body: "Eligibility, refresh cycles, damage accountability, and loss recovery — configured per policy in Flexi HQ." },
    { icon: "ShieldCheck", title: "Clearance workflows", body: "Exit clearance ties to AMS — no clearance until outstanding assets are returned or charged through PayEdge." },
    { icon: "Smartphone", title: "Mobile inventory check", body: "Plant and field teams verify assets via MobileEdge with barcode and photo capture." },
    { icon: "FileSearch", title: "Audit & depreciation", body: "Asset audits periodic; depreciation schedules per finance policy; hand-off to finance reports through Insight360." },
  ],
  workflow: [
    { title: "Register", description: "New asset enters the register with serial, category, and custodian; attached to a cost centre or business unit." },
    { title: "Issue", description: "Asset issued to employee with digital acknowledgement; employee record reflects outstanding assets." },
    { title: "Maintain", description: "Movements, transfers, and repairs tracked; audits verify reality against register." },
    { title: "Recover", description: "On separation or asset refresh, return captured; condition noted; recovery charged through PayEdge if applicable." },
  ],
  integrations: ["peoplehub", "payedge", "dms", "mobileedge", "insight360", "audit-trail", "flexi-hq"],
  relatedModules: ["peoplehub", "dms", "insight360", "audit-trail"],
  seoTitle: "Flexi AMS — HR asset management | Flexi HRMS",
  seoDescription:
    "Asset management for laptops, phones, SIMs, vehicles, tools, and PPE issued to employees. Issue, return, clearance, depreciation — tied directly to the employee record.",
  seoKeywords: ["HR asset management software", "employee asset tracking", "IT asset HRMS", "PPE management software"],
};
