export const siteConfig = {
  name: "Flexi HRMS",
  shortName: "Flexi HRMS",
  url: "https://myflexihr.com",
  tagline: "The HRMS that configures to your company.",
  description:
    "Flexi HRMS runs hire-to-retire for 100+ Pakistani enterprises — 35,000+ employees across 240+ cities. Configurable per tenant without code. Compliance-native since 2011.",
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
        heading: "Core HR",
        links: [
          { label: "PeopleHub", href: "/product/peoplehub", description: "Employee lifecycle & records" },
          { label: "PayEdge", href: "/product/payedge", description: "Payroll with Pakistan tax engine" },
          { label: "LeaveEase", href: "/product/leaveease", description: "Policies, balances, approvals" },
          { label: "TimeSync", href: "/product/timesync", description: "Attendance & shift management" },
        ],
      },
      {
        heading: "Talent",
        links: [
          { label: "PerformPro", href: "/product/performpro", description: "Goals, reviews, 360" },
          { label: "TalentWorks", href: "/product/talentworks", description: "Recruitment & ATS" },
          { label: "SkillForge", href: "/product/skillforge", description: "Learning & development" },
          { label: "LeadershipLab", href: "/product/leadershiplab", description: "Succession & 9-box" },
        ],
      },
      {
        heading: "Engagement",
        links: [
          { label: "CultureCore", href: "/product/culturecore", description: "Recognition & pulse" },
          { label: "EngageBoard", href: "/product/engageboard", description: "Social collaboration" },
          { label: "WellNest", href: "/product/wellnest", description: "Wellness & EAP" },
          { label: "BenefitHub", href: "/product/benefithub", description: "Benefits administration" },
        ],
      },
      {
        heading: "Platform",
        links: [
          { label: "Flexi HQ", href: "/product/flexi-hq", description: "Per-tenant configuration" },
          { label: "Flexi Meta", href: "/product/flexi-meta", description: "The configurability engine" },
          { label: "MobileEdge", href: "/product/mobileedge", description: "Flutter mobile app" },
          { label: "See all modules →", href: "/product" },
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
      { label: "Core HR", href: "/product/core" },
      { label: "Talent", href: "/product/talent" },
      { label: "Engagement", href: "/product/engagement" },
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
