export const siteConfig = {
  name: "Flexi HRMS",
  shortName: "Flexi HRMS",
  url: "https://myflexihr.com",
  tagline: "Not another HR app. The HR Reality app.",
  description:
    "Flexi HRMS runs hire-to-retire for 100+ Pakistani enterprises — 35,000+ employees across 240+ cities. Piece-rate payroll. Budget-day WHT changes. Ramadan shifts. Built for how HR actually runs in Pakistan.",
  company: {
    legalName: "Flexi IT Services (Pvt.) Ltd.",
    parentUrl: "https://flexi.pk",
    sisterUrl: "https://hrpsp.net",
    address: "Lahore, Pakistan",
    email: "info@myflexihr.com",
    phones: ["042-35786322", "042-35756321"],
    linkedin: "https://www.linkedin.com/company/flexi-it-services/",
  },
} as const;

export type NavGroup = {
  label: string;
  href?: string;
  columns?: {
    heading: string;
    links: { label: string; href: string; description?: string }[];
  }[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Product",
    columns: [
      {
        heading: "Core HR & Payroll",
        links: [
          { label: "Flexi HQ", href: "/product/flexi-hq", description: "Org structure & blueprint" },
          { label: "PeopleHub", href: "/product/peoplehub", description: "Employee lifecycle & records" },
          { label: "Pakistan Compliance", href: "/product/pakistan-compliance", description: "EOBI, PESSI, WHT, FBR" },
          { label: "PayEdge", href: "/product/payedge", description: "Payroll with Pakistan tax engine" },
          { label: "TimeSync", href: "/product/timesync", description: "Attendance & shift management" },
          { label: "LeaveEase", href: "/product/leaveease", description: "Policies, balances, approvals" },
        ],
      },
      {
        heading: "Talent",
        links: [
          { label: "TalentWorks", href: "/product/talentworks", description: "Recruitment & ATS" },
          { label: "PerformPro", href: "/product/performpro", description: "Goals, reviews, 360" },
          { label: "SkillForge", href: "/product/skillforge", description: "Learning & development" },
          { label: "LeadershipLab", href: "/product/leadershiplab", description: "Succession & 9-box" },
        ],
      },
      {
        heading: "Employee Finance & Experience",
        links: [
          { label: "ExpenseHub", href: "/product/expensehub", description: "Claims & reimbursement" },
          { label: "LoanHub", href: "/product/loanhub", description: "Salary loans & advances" },
          { label: "BenefitHub", href: "/product/benefithub", description: "Benefits administration" },
          { label: "CultureCore", href: "/product/culturecore", description: "Recognition & pulse" },
          { label: "WellNest", href: "/product/wellnest", description: "Wellness & EAP" },
          { label: "WorkforcePlanning", href: "/product/workforce-planning", description: "Headcount & manpower plan" },
        ],
      },
      {
        heading: "Operations & Platform",
        links: [
          { label: "FlexiDesk", href: "/product/flexi-desk", description: "HR helpdesk & ticketing" },
          { label: "DMS", href: "/product/dms", description: "Document management" },
          { label: "SystemFlex", href: "/product/systemflex", description: "The Reality Engine" },
          { label: "ConnectCentral", href: "/product/connectcentral", description: "Integration hub" },
          { label: "MobileEdge", href: "/product/mobileedge", description: "Flutter mobile app" },
          { label: "See all 28 modules →", href: "/product" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        heading: "By industry",
        links: [
          { label: "Manufacturing", href: "/solutions/manufacturing" },
          { label: "Telecom", href: "/solutions/telecom" },
          { label: "BFSI", href: "/solutions/bfsi" },
          { label: "Retail / FMCG", href: "/solutions/retail" },
          { label: "Healthcare", href: "/solutions/healthcare" },
          { label: "Utilities", href: "/solutions/utilities" },
          { label: "Real Estate", href: "/solutions/real-estate" },
        ],
      },
      {
        heading: "By role",
        links: [
          { label: "For HR Leaders", href: "/solutions/for-hr-leaders" },
          { label: "For CFOs", href: "/solutions/for-cfos" },
          { label: "For CIOs", href: "/solutions/for-cios" },
        ],
      },
    ],
  },
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    columns: [
      {
        heading: "Learn",
        links: [
          { label: "Blog", href: "/resources/blog" },
          { label: "Guides", href: "/resources/guides" },
          { label: "Compliance updates", href: "/resources/compliance-updates" },
          { label: "Why Flexi", href: "/why-flexi" },
          { label: "Compliance", href: "/compliance" },
        ],
      },
    ],
  },
];

export const footerNav = {
  product: {
    heading: "Product",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Core HR & Payroll", href: "/product/core" },
      { label: "Talent", href: "/product/talent" },
      { label: "Employee Finance & Experience", href: "/product/engagement" },
      { label: "Operations", href: "/product/operations" },
      { label: "Platform", href: "/product/platform" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  solutions: {
    heading: "Solutions",
    links: [
      { label: "Manufacturing", href: "/solutions/manufacturing" },
      { label: "Telecom", href: "/solutions/telecom" },
      { label: "BFSI", href: "/solutions/bfsi" },
      { label: "Retail / FMCG", href: "/solutions/retail" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "All industries", href: "/solutions" },
    ],
  },
  customers: {
    heading: "Customers",
    links: [
      { label: "Case studies", href: "/customers" },
      { label: "Why Flexi", href: "/why-flexi" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
  resources: {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Compliance updates", href: "/resources/compliance-updates" },
      { label: "Request a demo", href: "/request-demo" },
    ],
  },
  legal: {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Contact", href: "/company/contact" },
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
    ],
  },
} as const;
