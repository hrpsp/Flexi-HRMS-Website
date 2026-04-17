export type CaseStudyOutcome = { stat: string; label: string; isConfirmed: boolean };
export type CaseStudyQuote = { text: string; attribution: string; isConfirmed: boolean };

export type CaseStudyDetail = {
  slug: string;
  customer: string;
  industry: string;
  industrySlug: string;
  heroHeadline: string;
  heroBlurb: string;
  isConfirmed: boolean; // overall: false means all numbers and quotes are TODO
  headlineStat: { stat: string; label: string } | null;
  challenge: string;
  solution: string;
  outcomes: CaseStudyOutcome[];
  quote?: CaseStudyQuote;
  modulesUsed: string[];
  timeline?: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
};

const bata: CaseStudyDetail = {
  slug: "bata-pakistan",
  customer: "Bata Pakistan",
  industry: "Retail",
  industrySlug: "retail",
  isConfirmed: true,
  heroHeadline: "Bata Pakistan runs 2,600+ employees on Flexi HRMS — manufacturing, distribution, and 400+ stores.",
  heroBlurb:
    "One of Pakistan's largest retail workforces — spanning footwear manufacturing, nationwide distribution, and 400+ stores — consolidated on to Flexi HRMS.",
  headlineStat: { stat: "2,600+", label: "employees on Flexi HRMS" },
  challenge:
    "Bata Pakistan operates one of the country's most dispersed retail workforces — a footwear manufacturing operation, a distribution network moving product across the country, and a nationwide store footprint spanning every major city. Each part of that operation runs on different working patterns. Plant shift workers on rotating rosters. Warehouse staff on standard shifts. Store associates on split shifts with commission bands that vary by product category. Regional supervisors covering multiple stores each. Head office on conventional monthly payroll.\n\nThe brief was to consolidate all of that onto one HR platform — without forcing the plant onto the retail schedule, or the retail network into a manufacturing-shaped HRMS. Any system that asked Bata to flatten its operational reality to match the product's assumptions was not going to work.",
  solution:
    "Flexi HQ was configured per operating unit. Manufacturing rules on the plant side — rotating shifts, overtime per provincial labour law, PPE policy. Split-shift patterns, commission bands, and store-code structures on the retail side. Standard monthly payroll on the head-office side. All of it running on the same PeopleHub employee record and the same PayEdge tax engine — which is the point of the configurability model.\n\nPayEdge runs consolidated monthly payroll for the combined workforce, generating WPS bank files across partner banks. PeopleHub models the 400+ store network as first-class entities, with regional supervisor structures reflected in the approval chain so that a store incident escalates to the right regional lead rather than a generic head-office queue.\n\nMobileEdge and ESS give the workforce the same interface regardless of where they work — store associates get payslips on their phones, plant workers get shift schedules on the kiosk, head office uses the web portal. The same product meets three different workforces on the terms that actually apply to each.",
  outcomes: [
    { stat: "2,600+", label: "employees consolidated on Flexi HRMS", isConfirmed: true },
    { stat: "400+", label: "store network modelled", isConfirmed: true },
    { stat: "TODO", label: "implementation timeline", isConfirmed: false },
    { stat: "TODO", label: "monthly payroll cycle time", isConfirmed: false },
  ],
  modulesUsed: ["peoplehub", "payedge", "timesync", "leaveease", "mobileedge", "ess", "flexi-hq"],
  timeline: "TODO — confirm implementation duration",
  seoTitle: "Bata Pakistan — 2,600+ employees on Flexi HRMS",
  seoDescription:
    "Bata Pakistan runs HR and payroll for 2,600+ employees across manufacturing, distribution, and 400+ stores on Flexi HRMS. Split-shift patterns, regional structures, WPS payroll.",
  seoKeywords: ["Bata Pakistan HR", "retail HRMS case study", "Pakistan retail payroll", "store HR software"],
};

const ufone: CaseStudyDetail = {
  slug: "ufone",
  customer: "Ufone",
  industry: "Telecom",
  industrySlug: "telecom",
  isConfirmed: false,
  heroHeadline: "Ufone — enterprise telecom HR running on Flexi HRMS.",
  heroBlurb:
    "An enterprise telecom operator with HQ, regional offices, and field engineers — running HR and payroll through Flexi HRMS.",
  headlineStat: null,
  challenge:
    "Ufone's HR operates across functions and regions — a matrix structure with HQ functional leaders, regional operational leaders, tower-region field teams, and customer-facing channels. Approvals, reporting lines, and payroll components have to reflect both sides of the matrix, not collapse into one.",
  solution:
    "Flexi HQ models the region × function matrix so approvals route correctly across both dimensions. MobileEdge supports field engineers with geo-punch attendance and mobile claim submission. PayEdge handles telecom-specific pay components including travel and regional premiums.",
  outcomes: [
    { stat: "TODO", label: "employee coverage", isConfirmed: false },
    { stat: "TODO", label: "regions supported", isConfirmed: false },
    { stat: "TODO", label: "implementation timeline", isConfirmed: false },
    { stat: "TODO", label: "key outcome metric", isConfirmed: false },
  ],
  modulesUsed: ["peoplehub", "payedge", "timesync", "mobileedge", "expensehub", "flexi-hq"],
  timeline: "TODO — confirm implementation duration",
  seoTitle: "Ufone — telecom HR on Flexi HRMS",
  seoDescription:
    "Ufone runs HR and payroll on Flexi HRMS — HQ, regional teams, and field engineers on one platform with MobileEdge for the field workforce.",
  seoKeywords: ["Ufone HR", "telecom HRMS case study Pakistan", "telecom HR software"],
};

const zong: CaseStudyDetail = {
  slug: "cmpak-zong",
  customer: "CMPak Zong",
  industry: "Telecom",
  industrySlug: "telecom",
  isConfirmed: false,
  heroHeadline: "CMPak Zong — mobile operator HR on Flexi HRMS.",
  heroBlurb:
    "A nationwide mobile operator with distributed employee base, regional sales, and technical operations — running on Flexi HRMS.",
  headlineStat: null,
  challenge:
    "Zong operates across a distributed national footprint with administrative, technical, and commercial functions. Headcount visibility, consistent HR policy, and a single source of truth for payroll across the business were the foundations to get right.",
  solution:
    "PeopleHub provides the single employee record across the national footprint. Flexi HQ applies consistent core policy while preserving functional variation where required. Insight360 gives operational and leadership teams visibility across the workforce.",
  outcomes: [
    { stat: "TODO", label: "employee coverage", isConfirmed: false },
    { stat: "TODO", label: "office locations integrated", isConfirmed: false },
    { stat: "TODO", label: "implementation timeline", isConfirmed: false },
    { stat: "TODO", label: "key outcome metric", isConfirmed: false },
  ],
  modulesUsed: ["peoplehub", "payedge", "timesync", "mobileedge", "insight360", "flexi-hq"],
  timeline: "TODO — confirm implementation duration",
  seoTitle: "CMPak Zong — telecom HR on Flexi HRMS",
  seoDescription:
    "CMPak Zong runs HR and payroll on Flexi HRMS across a distributed national telecom workforce — administrative, technical, and commercial functions unified.",
  seoKeywords: ["Zong HR", "CMPak HRMS", "telecom HR software Pakistan"],
};

export const caseStudies: CaseStudyDetail[] = [bata, ufone, zong];

export const getCaseStudy = (slug: string): CaseStudyDetail | undefined =>
  caseStudies.find((c) => c.slug === slug);

export const caseStudySlugs = (): string[] => caseStudies.map((c) => c.slug);
