export type SolutionKind = "industry" | "role";

export type PainPoint = { icon: string; title: string; body: string };
export type StoryBeat = { title: string; body: string };

export type Solution = {
  kind: SolutionKind;
  slug: string;
  name: string;
  eyebrow: string;
  heroHeadline: string;
  heroBody: string;
  painPoints: PainPoint[];
  flexiAnswer: string;
  keyModules: string[];
  storyBeats: StoryBeat[];
  relevantCustomers: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
};

/* ---------------- INDUSTRIES ---------------- */

const manufacturing: Solution = {
  kind: "industry",
  slug: "manufacturing",
  name: "Manufacturing",
  eyebrow: "Industry · Manufacturing",
  heroHeadline: "HR for plants, shifts, unions, and everything in between.",
  heroBody:
    "Manufacturing HR is where policy meets the plant floor. Rotating shifts, CBA-recognised unions, PPE issuance, provincial labour law, multi-unit structures, blue-collar biometrics — Flexi HRMS handles all of it on one platform.",
  painPoints: [
    { icon: "Factory", title: "Shift complexity", body: "Rotating A/B/C shifts, Ramadan adjustments, peak-season ramps — most HRMS products force one shift template on all plants." },
    { icon: "Users", title: "Union obligations", body: "CBA-specific rules for overtime, leave, and recognition that differ by plant and bargaining unit." },
    { icon: "ShieldCheck", title: "Safety & PPE", body: "PPE issuance by role and size, incident reporting, audit trail across plants — usually lives in spreadsheets." },
    { icon: "Landmark", title: "Provincial labour law", body: "Punjab, Sindh, KP, Balochistan — each with variants on minimum wage, overtime multipliers, and leave entitlements." },
  ],
  flexiAnswer:
    "Flexi HQ configures per plant — not per company. Each unit can run its own shift rules, overtime multipliers, and PPE catalogue while sharing the same PayEdge tax engine and PeopleHub record. Provincial labour law variations are built into the policy engine, not handled with workarounds.",
  keyModules: ["peoplehub", "payedge", "timesync", "leaveease", "flexi-hq", "flexi-ams", "mobileedge"],
  storyBeats: [
    { title: "Three plants, three realities", body: "Faisalabad runs rotating shifts with a CBA. Kasur runs continuous operations with overtime caps. Karachi runs a day shift with piece-rate components. One PayEdge, three policy sets, no forks." },
    { title: "Ramadan, without the email chain", body: "Shift patterns shift automatically. Biometric windows adjust. Overtime recalculates per provincial law. Payroll runs on schedule." },
    { title: "PPE accountability, finally", body: "Helmet size, overalls, boots, hearing protection — issued against a digital signature, returned on exit, charged through PayEdge if unreturned." },
  ],
  relevantCustomers: ["Descon", "Engro", "Sitara", "Tofflon", "Popular Group", "TRSChem"],
  seoTitle: "Manufacturing HR software — shifts, unions, PPE, multi-plant | Flexi HRMS",
  seoDescription:
    "HRMS built for Pakistani manufacturing. Rotating shifts, CBA union rules, PPE management, blue-collar biometrics, provincial labour law compliance across multiple plants.",
  seoKeywords: ["manufacturing HR software Pakistan", "shift management software", "HRMS for factories", "union payroll software", "industrial HR Pakistan"],
};

const telecom: Solution = {
  kind: "industry",
  slug: "telecom",
  name: "Telecom",
  eyebrow: "Industry · Telecom",
  heroHeadline: "HR for operators who work where the towers are.",
  heroBody:
    "Telecom workforces live in regions, not buildings. Field engineers, tower technicians, regional sales teams, and a headquarters that runs very differently from any of them. Flexi HRMS configures to how telecom operations actually function.",
  painPoints: [
    { icon: "Radio", title: "Distributed workforce", body: "Engineers dispersed across tower regions; traditional attendance and approval systems assume office-based employees." },
    { icon: "ShieldCheck", title: "Security clearance", body: "Access tiers for network sites, data centres, customer-data systems — rarely tracked in the HRMS." },
    { icon: "Smartphone", title: "Mobile-first reality", body: "A browser-based HRMS does not serve a field workforce that is always on the move." },
    { icon: "GitBranch", title: "Region × function matrix", body: "Employees report into functional and regional leaders; approvals have to understand both." },
  ],
  flexiAnswer:
    "MobileEdge gives field engineers and tower technicians a real mobile app — geo-punching, leave, claims, payslips, announcements — that works on mid-range Android devices with patchy data. Flexi HQ models the region × function matrix so approvals route correctly. PayEdge handles travel allowances, regional premiums, and shift differentials as first-class components.",
  keyModules: ["peoplehub", "payedge", "timesync", "mobileedge", "expensehub", "connectcentral", "flexi-hq"],
  storyBeats: [
    { title: "Geo-punch at the tower site", body: "Field engineer arrives at a tower, punches in via MobileEdge with GPS verification and photo. Works offline; syncs when coverage returns." },
    { title: "Expense claims, same day", body: "Receipt photographed on MobileEdge, OCR pre-fills amount, policy validates against grade and region, approval in two taps, reimbursed in the next payroll cycle." },
    { title: "Security clearance visible", body: "Every data-centre entry request checked against live clearance level in Flexi — not a static spreadsheet." },
  ],
  relevantCustomers: ["Jazz", "Ufone", "Zong", "PTCL"],
  seoTitle: "Telecom HR software — field workforce, geo-punch, regional HR | Flexi HRMS",
  seoDescription:
    "HRMS for Pakistani telecom operators. MobileEdge for field workforce, geo-punch attendance, region × function approvals, travel allowances, security clearance tracking.",
  seoKeywords: ["telecom HR software Pakistan", "field workforce HR", "GPS attendance HRMS", "HRMS for telecom", "mobile HR app Pakistan"],
};

const bfsi: Solution = {
  kind: "industry",
  slug: "bfsi",
  name: "BFSI",
  eyebrow: "Industry · Banking, Financial Services & Insurance",
  heroHeadline: "HRMS that passes the SBP audit.",
  heroBody:
    "In banking, insurance, and financial services, audit trail is not a feature — it is the reason you replaced the last system. Flexi HRMS is built with SBP scrutiny, internal audit rigour, and personal-data protection at the core.",
  painPoints: [
    { icon: "ShieldCheck", title: "Audit depth", body: "SBP audits expect every HR transaction traceable to an employee, a period, and an approver. Spreadsheet-heavy HR cannot deliver it." },
    { icon: "KeyRound", title: "Data sensitivity", body: "Salary, performance, investigations — the highest-sensitivity data in the organisation. Access needs to be provable, not assumed." },
    { icon: "Landmark", title: "Statutory heavy", body: "EOBI, PESSI, WHT, SBP reporting, compliance training — all converging on HR and payroll." },
    { icon: "FileSearch", title: "Incident traceability", body: "Disciplinary cases, financial exposure, exit interviews — the records have to stand up years later." },
  ],
  flexiAnswer:
    "Audit Trail is immutable, signed, and retention-aware. SystemFlex enforces RBAC with row-level scoping — a branch HR lead cannot see corporate payroll. Every configuration change in Flexi HQ is versioned and approved. Every payroll run reproducible. Every decision defensible.",
  keyModules: ["peoplehub", "payedge", "audit-trail", "systemflex", "dms", "flexi-hq", "insight360"],
  storyBeats: [
    { title: "Audit request, five years back", body: "SBP asks for compensation decisions on a specific segment for fiscal year 2021. Flexi returns approver, justification, and full history — in minutes." },
    { title: "Access review, quarterly", body: "Every quarter, SystemFlex produces access review reports by role and scope. Violations flag automatically. No one gets to the field without attestation." },
    { title: "Incident investigation", body: "DMS holds the investigation file, Audit Trail holds the decision path, PayEdge holds the financial recovery — all tied to the employee record." },
  ],
  relevantCustomers: ["HBL", "JS Bank", "Zindigi", "Abhi", "U Bank", "Jubilee Life", "Mobilink Bank"],
  seoTitle: "BFSI HR software — banks, insurance, financial services | Flexi HRMS",
  seoDescription:
    "HRMS for Pakistani banks, insurance, and financial services. SBP audit-ready, immutable audit trail, RBAC with row-level scoping, full statutory compliance.",
  seoKeywords: ["bank HR software Pakistan", "SBP audit HRMS", "BFSI HR software", "insurance HRMS Pakistan", "financial services HR"],
};

const retail: Solution = {
  kind: "industry",
  slug: "retail",
  name: "Retail / FMCG",
  eyebrow: "Industry · Retail & FMCG",
  heroHeadline: "HR that keeps up with store networks and high turnover.",
  heroBody:
    "Hundreds of stores, thousands of frontline staff, onboarding cycles measured in weeks, and a headquarters that has to see everything in real time. Retail and FMCG HR runs on different physics.",
  painPoints: [
    { icon: "ShoppingBag", title: "Store-level operations", body: "Store codes, split shifts, commission bands, regional supervisor structures — every store is its own micro-unit." },
    { icon: "RefreshCw", title: "High turnover", body: "Retail attrition means onboarding and exit flows run constantly. Paper-based processes collapse at scale." },
    { icon: "Smartphone", title: "Frontline reality", body: "Store associates don't have desks. The HRMS that doesn't meet them on mobile is the HRMS that doesn't get used." },
    { icon: "BarChart3", title: "Real-time visibility", body: "Regional managers and HQ need live headcount, attendance, and attrition — not a weekly spreadsheet." },
  ],
  flexiAnswer:
    "PeopleHub models the store network as first-class entities. TalentWorks handles high-volume hiring with bulk onboarding workflows. MobileEdge gives associates payslips, leave, and attendance on the phones they actually own. Insight360 gives regional managers live store-level dashboards.",
  keyModules: ["peoplehub", "payedge", "timesync", "talentworks", "mobileedge", "insight360", "flexi-hq"],
  storyBeats: [
    { title: "Onboarding at store scale", body: "A new store opens. 40 hires across a weekend. TalentWorks runs the intake, PeopleHub creates the records, MobileEdge is live on day one with payslips and leave balance." },
    { title: "Split shift, reconciled", body: "10–2, 5–10 split in stores. TimeSync books both windows, PayEdge calculates correctly, overtime rules apply per provincial law." },
    { title: "Regional manager at 9am", body: "Regional dashboard shows yesterday's attendance, today's absence risk, this month's hiring pipeline — before the first store meeting." },
  ],
  relevantCustomers: ["Bata", "Servis", "Vivo Pakistan", "Rang Rasiya", "Noor Brands", "Airlink"],
  seoTitle: "Retail HR software — store networks, split shifts, frontline workforce | Flexi HRMS",
  seoDescription:
    "HRMS for Pakistani retail and FMCG. Store-level operations, split shifts, high-volume hiring, mobile payslips and leave, regional dashboards.",
  seoKeywords: ["retail HR software Pakistan", "store HRMS", "FMCG HR software", "frontline worker HRMS", "retail payroll software Pakistan"],
};

const healthcare: Solution = {
  kind: "industry",
  slug: "healthcare",
  name: "Healthcare",
  eyebrow: "Industry · Healthcare",
  heroHeadline: "HR that understands clinical schedules and on-call reality.",
  heroBody:
    "Hospitals, diagnostic networks, and healthcare groups run HR against a clinical reality that generic HRMS products do not model — 24/7 rostering, on-call rates, credentialing, locum payroll, and patient-facing credentialing audits.",
  painPoints: [
    { icon: "Stethoscope", title: "24/7 rostering", body: "Three shifts, on-call, post-call, and locum coverage — standard office attendance models don't apply." },
    { icon: "ShieldCheck", title: "Credentialing", body: "PMC registration, speciality certifications, renewals — each with expiry risk and compliance implications." },
    { icon: "Banknote", title: "Variable pay", body: "On-call rates, per-procedure payments, shift differentials, productivity-linked bonuses — all needing payroll integration." },
    { icon: "Users", title: "Distributed clinical network", body: "Hospital, diagnostic centres, collection points — one HR system across them all." },
  ],
  flexiAnswer:
    "TimeSync handles three-shift + on-call patterns with proper rest-hour tracking. PayEdge has configurable components for on-call, shift differentials, per-procedure, and locum. DMS stores credentialing with expiry alerts through NotifyPro. PeopleHub models the network — hospital, branches, labs, collection — with appropriate approval routing.",
  keyModules: ["peoplehub", "payedge", "timesync", "dms", "notifypro", "flexi-hq", "audit-trail"],
  storyBeats: [
    { title: "On-call payroll, automated", body: "Roster plans on-call per week. Actual attendance captures in TimeSync. PayEdge applies the right rate. No manual calculations at month-end." },
    { title: "PMC renewal alert", body: "Ninety days before a specialist's PMC registration expires, the system alerts HR, the specialist, and the medical director. Renewal tracked through DMS." },
    { title: "Lab technician, locum rate", body: "Locum technician picks up a weekend shift. Flexi captures it, pays it at the locum rate, and documents it for the compliance file." },
  ],
  relevantCustomers: ["Chughtai Lab"],
  seoTitle: "Healthcare HR software — hospitals, clinical rosters, on-call | Flexi HRMS",
  seoDescription:
    "HRMS for Pakistani hospitals, diagnostic networks, and healthcare groups. 24/7 rostering, on-call rates, credentialing, variable clinical pay.",
  seoKeywords: ["healthcare HR software Pakistan", "hospital HRMS", "clinical roster software", "healthcare payroll software", "PMC credentialing software"],
};

const utilities: Solution = {
  kind: "industry",
  slug: "utilities",
  name: "Utilities",
  eyebrow: "Industry · Utilities",
  heroHeadline: "HR for DISCOs, distribution zones, and field crews.",
  heroBody:
    "Utilities HR operates across distribution zones, customer-facing crews, control rooms, and administrative offices. Flexi HRMS maps to the operational structure — not the other way around.",
  painPoints: [
    { icon: "Zap", title: "Zone-based structures", body: "Circles, divisions, sub-divisions, distribution zones — utility org structures are dense and hierarchical." },
    { icon: "ShieldCheck", title: "Safety & incident", body: "Crew safety, incident reporting, recurring safety training — critical and audited." },
    { icon: "Clock4", title: "Overtime discipline", body: "Emergency work, breakdowns, restoration calls — overtime has to be captured accurately and paid fairly." },
    { icon: "Users", title: "CBA alignment", body: "Collective bargaining agreements with crew unions that need to be reflected in payroll and leave policies." },
  ],
  flexiAnswer:
    "PeopleHub models the zone hierarchy accurately. TimeSync captures overtime with proper approval trails. PayEdge applies CBA-specific payroll rules per distribution unit. DMS retains safety training and incident records for the required period. Insight360 gives zonal leadership live operational HR visibility.",
  keyModules: ["peoplehub", "payedge", "timesync", "dms", "flexi-hq", "insight360", "audit-trail"],
  storyBeats: [
    { title: "Emergency restoration overtime", body: "Major fault at 2am. Crew dispatched. Overtime recorded, approved, paid according to the applicable CBA — with full audit trail." },
    { title: "Safety training renewal", body: "Every crew member's mandatory safety training tracked; expiries alert 60 days ahead; completion filed to DMS." },
    { title: "Zonal headcount review", body: "Operations director sees zone-wise headcount, attendance, and overtime trends weekly — not quarterly." },
  ],
  relevantCustomers: ["MEPCO"],
  seoTitle: "Utilities HR software — DISCOs, distribution zones, field crews | Flexi HRMS",
  seoDescription:
    "HRMS for Pakistani utilities and DISCOs. Zone hierarchies, crew overtime, safety training, CBA payroll rules, incident audit trail.",
  seoKeywords: ["utilities HR software Pakistan", "DISCO HRMS", "HR software for power sector", "field crew HRMS", "utility payroll software"],
};

const realEstate: Solution = {
  kind: "industry",
  slug: "real-estate",
  name: "Real Estate & Construction",
  eyebrow: "Industry · Real Estate & Construction",
  heroHeadline: "HR for project-based workforces and daily-wage realities.",
  heroBody:
    "Real estate and construction HR moves with projects — site attendance, contract labour, daily-wage crews, sub-contractor oversight — on timelines measured in project milestones, not fiscal years.",
  painPoints: [
    { icon: "Building2", title: "Project-based headcount", body: "Workforce scales up and down per project. Fixed structures don't fit." },
    { icon: "Clock4", title: "Site attendance", body: "Crews at site, often without network, often shifting across multiple projects in the same month." },
    { icon: "Banknote", title: "Daily-wage payroll", body: "Daily rates, weekly pay cycles, contract labour payments — outside the standard monthly payroll assumption." },
    { icon: "FileText", title: "Contractor oversight", body: "Sub-contractor workforce needs visibility without being full employees." },
  ],
  flexiAnswer:
    "PeopleHub handles project-linked employment and contractor profiles separately. TimeSync supports site biometrics and offline punches through MobileEdge. PayEdge accommodates daily rates, weekly cycles, and mixed payroll models. DMS tracks contractor agreements and site-specific documentation.",
  keyModules: ["peoplehub", "payedge", "timesync", "mobileedge", "dms", "flexi-hq"],
  storyBeats: [
    { title: "Site attendance, no network", body: "Crew punches in on a site tablet; MobileEdge caches; sync happens when the supervisor returns to the camp with connectivity." },
    { title: "Weekly payroll, mixed rates", body: "Fixed-salary project staff monthly. Daily-wage crews weekly. Both run on the same PayEdge, with appropriate components." },
    { title: "Project closes, clearance runs", body: "Project ends; crews released; clearance workflows run; final dues paid; records archived to DMS." },
  ],
  relevantCustomers: ["Descon", "Skyline", "Union Developers", "Blue World City"],
  seoTitle: "Real estate & construction HR software | Flexi HRMS",
  seoDescription:
    "HRMS for Pakistani real estate developers and construction firms. Project-based workforce, site attendance, daily-wage payroll, contractor documentation.",
  seoKeywords: ["construction HR software Pakistan", "real estate HRMS", "daily wage payroll software", "site attendance software", "contractor HR software"],
};

/* ---------------- ROLES ---------------- */

const forHrLeaders: Solution = {
  kind: "role",
  slug: "for-hr-leaders",
  name: "For HR Leaders",
  eyebrow: "Role · HR Leaders",
  heroHeadline: "An HRMS that answers your board, your auditor, and your employees.",
  heroBody:
    "The board wants a talent scorecard. The auditor wants an evidence trail. The CFO wants the payroll cost story. Employees want their payslip on their phone. Flexi HRMS gives each of them what they need — from one platform.",
  painPoints: [
    { icon: "BarChart3", title: "Answering the board", body: "Talent metrics, attrition patterns, diversity data, succession coverage — expected in board packs, painful to produce." },
    { icon: "ShieldCheck", title: "Audit readiness", body: "When audit knocks, you need every payroll and compensation decision traceable." },
    { icon: "Users", title: "The employee experience gap", body: "Modern hires expect mobile payslips and self-service; legacy HR still mails PDFs." },
    { icon: "RefreshCw", title: "Policy change velocity", body: "When policy changes — budget, leave, comp — rollout should take days, not months." },
  ],
  flexiAnswer:
    "Insight360 produces board-ready views without monthly Excel. Audit Trail captures every decision for audit. MobileEdge and ESS give employees the interface they expect. Flexi HQ lets your HR admin roll out a policy change in an afternoon — without raising a ticket.",
  keyModules: ["insight360", "audit-trail", "mobileedge", "ess", "flexi-hq", "performpro", "culturecore"],
  storyBeats: [
    { title: "Monday board pack", body: "Insight360 packages your talent dashboard, attrition trend, and comp story directly into exports your board reads." },
    { title: "Policy change, Tuesday afternoon", body: "Leave policy update approved by the CPO. HR admin rolls out the change in Flexi HQ before the end of the day." },
    { title: "Friday audit query", body: "Internal audit asks about a compensation decision from Q2 last year. You have it — approver, justification, timeline — within minutes." },
  ],
  relevantCustomers: [],
  seoTitle: "HRMS for HR leaders — board reports, audit, employee experience | Flexi HRMS",
  seoDescription:
    "Flexi HRMS for CHROs, HR Directors, and VPs of People. Board-ready analytics, full audit trail, mobile-first employee experience, configurable policy roll-out.",
  seoKeywords: ["HRMS for CHRO", "HR leader software", "board HR analytics", "HR director software Pakistan"],
};

const forCfos: Solution = {
  kind: "role",
  slug: "for-cfos",
  name: "For CFOs",
  eyebrow: "Role · CFOs",
  heroHeadline: "HR spend you can actually explain to the board.",
  heroBody:
    "CFOs approve HR budgets but rarely trust HR numbers. Flexi HRMS produces payroll, compensation, and workforce-cost views grounded in the same data that runs the payroll — no month-end reconciliation surprises.",
  painPoints: [
    { icon: "Banknote", title: "Payroll cost transparency", body: "Monthly payroll should be reconcilable to the employee record, not dependent on HR's month-end file." },
    { icon: "BarChart3", title: "Workforce cost trend", body: "Base, variable, benefits, statutory — each needing its own trend line, per business unit." },
    { icon: "ShieldCheck", title: "Compliance risk", body: "EOBI short-payment, WHT miscalculation, or PESSI under-reporting create financial and reputational exposure." },
    { icon: "RefreshCw", title: "Budget-to-actual", body: "Staffing plans set in budget; actual headcount should be visible against it every week, not every quarter." },
  ],
  flexiAnswer:
    "PayEdge produces payroll with the Pakistan tax engine baked in — EOBI, PESSI, WHT always current. Insight360 reports workforce cost by business unit, component, and trend — drilling to the source employee. Budget-to-actual visibility is live, not monthly. Every payroll change is audit-traceable.",
  keyModules: ["payedge", "insight360", "audit-trail", "flexi-hq", "benefithub", "systemflex"],
  storyBeats: [
    { title: "Board pack, comp section", body: "Your workforce cost slide is produced by Insight360, not your assistant. It reconciles to PayEdge. It lands in the pack without drama." },
    { title: "Budget-day payroll update", body: "WHT slabs change. PayEdge updates for every tenant overnight. Your next payroll reflects it. No project. No vendor invoice." },
    { title: "Month-end, not month-start", body: "Month-end payroll close takes hours, not days. Variance to prior month is transparent. Finance signs off with evidence, not trust." },
  ],
  relevantCustomers: [],
  seoTitle: "HRMS for CFOs — payroll, workforce cost, compliance | Flexi HRMS",
  seoDescription:
    "Flexi HRMS for CFOs and finance leaders. Transparent payroll, live workforce cost, current Pakistan tax compliance, full audit trail on every payroll change.",
  seoKeywords: ["HRMS for CFO", "workforce cost software", "payroll compliance Pakistan", "HR finance reporting"],
};

const forCios: Solution = {
  kind: "role",
  slug: "for-cios",
  name: "For CIOs",
  eyebrow: "Role · CIOs",
  heroHeadline: "HR software your architecture review actually clears.",
  heroBody:
    "CIOs inherit HR software decisions made by HR. Flexi HRMS is built to survive your architecture review — SSO, APIs, data residency, security posture, and integration story all first-class, not bolt-ons.",
  painPoints: [
    { icon: "KeyRound", title: "Identity integration", body: "SSO and SCIM provisioning into your Azure AD or Okta — without a six-month project." },
    { icon: "Plug", title: "Integration burden", body: "Biometric devices, payroll banks, ERP, data warehouse — each usually a bespoke integration." },
    { icon: "Globe2", title: "Data residency", body: "Some workloads need to stay on-shore or on-premise. Some vendors do not offer that." },
    { icon: "ShieldCheck", title: "Security review", body: "Your CISO needs a security posture they can defend, not a vendor claim they have to take on faith." },
  ],
  flexiAnswer:
    "SystemFlex delivers SAML/OIDC SSO with SCIM provisioning out of the box. ConnectCentral brings pre-built connectors for biometric, banks, SSO, and ERP — observable, auditable, governed. Flexi supports on-shore SaaS and on-premise deployment for tenants with data-residency requirements. Security posture is documented, reviewable, and meets enterprise requirements.",
  keyModules: ["systemflex", "connectcentral", "flexi-meta", "audit-trail", "flexi-hq", "insight360"],
  storyBeats: [
    { title: "SSO live in a week", body: "Azure AD SAML integration, SCIM user provisioning — configured, tested, and live in a week, not a quarter." },
    { title: "Biometric network, already supported", body: "Twelve plants, mixed ZKTeco and Hikvision. ConnectCentral handles all of them through the same integration layer — with observability." },
    { title: "CISO review, passes", body: "RBAC with row-level scoping, encrypted-at-rest, TLS everywhere, immutable audit, documented posture. The review clears." },
  ],
  relevantCustomers: [],
  seoTitle: "HRMS for CIOs — SSO, APIs, data residency, security | Flexi HRMS",
  seoDescription:
    "Flexi HRMS for CIOs and IT directors. SSO with SCIM, pre-built integrations, on-shore/on-premise deployment, enterprise security posture, clean integration story.",
  seoKeywords: ["HRMS for CIO", "HR software SSO", "enterprise HR integration", "HR data residency Pakistan", "secure HRMS"],
};

export const solutions: Solution[] = [
  manufacturing, telecom, bfsi, retail, healthcare, utilities, realEstate,
  forHrLeaders, forCfos, forCios,
];

export const getSolution = (slug: string): Solution | undefined =>
  solutions.find((s) => s.slug === slug);

export const solutionSlugs = (): string[] => solutions.map((s) => s.slug);

export const solutionsByKind = (kind: SolutionKind): Solution[] =>
  solutions.filter((s) => s.kind === kind);
