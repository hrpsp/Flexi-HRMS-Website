export type PricingTier = {
  slug: "essentials" | "professional" | "enterprise";
  name: string;
  audience: string;
  priceLabel: string;
  priceSuffix: string;
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
  includedSuites: string[];
  keyFeatures: string[];
  limits?: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "essentials",
    name: "Essentials",
    audience: "Core HR and payroll for growing teams up to a few hundred employees.",
    priceLabel: "PKR TODO",
    priceSuffix: "per employee / month · billed annually",
    ctaLabel: "Talk to sales",
    ctaHref: "/request-demo",
    includedSuites: ["Core HR"],
    keyFeatures: [
      "PeopleHub — employee records & lifecycle",
      "PayEdge — Pakistan payroll, WHT, EOBI, PESSI, WPS",
      "LeaveEase — leave policies, balances, approvals",
      "TimeSync — biometric attendance, shift management",
      "ESS web portal + MobileEdge mobile app",
      "DMS for employee documents",
      "Standard Insight360 dashboards",
      "Email, SMS, and push notifications via NotifyPro",
    ],
    limits: ["Standard configuration (not full Flexi Meta)", "5 approval workflow templates per tenant", "Community support; email support during business hours"],
  },
  {
    slug: "professional",
    name: "Professional",
    audience: "Core + Talent + Engagement for scaling enterprises across multiple business units.",
    priceLabel: "PKR TODO",
    priceSuffix: "per employee / month · billed annually",
    featured: true,
    ctaLabel: "Talk to sales",
    ctaHref: "/request-demo",
    includedSuites: ["Core HR", "Talent", "Engagement"],
    keyFeatures: [
      "Everything in Essentials",
      "PerformPro, TalentWorks, SkillForge",
      "CultureCore, EngageBoard, BenefitHub",
      "ExpenseHub, LoanHub",
      "Flexi HQ configuration for HR admins",
      "Multi-entity / multi-business-unit structures",
      "Extended approval workflows and policies",
      "SSO (SAML 2.0 / OIDC)",
      "Priority support, named success manager",
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    audience: "The full platform — every suite, full Flexi Meta configurability, enterprise support.",
    priceLabel: "PKR TODO",
    priceSuffix: "custom · annual commit",
    ctaLabel: "Talk to sales",
    ctaHref: "/request-demo",
    includedSuites: ["Core HR", "Talent", "Engagement", "Platform"],
    keyFeatures: [
      "Everything in Professional",
      "LeadershipLab, WellNest",
      "Full Flexi Meta — custom fields, entities, workflows",
      "ConnectCentral for enterprise integrations",
      "Insight360 custom reports + warehouse export",
      "Audit Trail with regulator-format exports",
      "Data residency options (on-shore SaaS or on-premise)",
      "24×7 enterprise support, SLA-backed",
      "Optional HRPSP service wrap — full HR outsourcing on Flexi",
    ],
  },
];

export const pricingFaqs: { q: string; a: string }[] = [
  {
    q: "Is pricing really per-employee-per-month?",
    a: "Yes. No per-module upcharges, no separate licences for MobileEdge or ESS. Your employees count, your tier defines what you get, and that's the number.",
  },
  {
    q: "Can we start with Essentials and upgrade later?",
    a: "Yes. Modular adoption is explicit in the product. Moving from Essentials to Professional or Enterprise does not require re-implementation — your data, configurations, and workflows carry forward.",
  },
  {
    q: "Is annual billing required?",
    a: "Annual billing is the standard. Multi-year commitments are available at a discount. Monthly billing is available for Essentials in specific circumstances — ask sales.",
  },
  {
    q: "What's in implementation cost?",
    a: "Implementation is a one-time fee scoped to your tenant configuration — suites adopted, business units modelled, integrations, and data migration. We quote after a discovery workshop.",
  },
  {
    q: "Do you offer HR as a service?",
    a: "Yes — through our sister company HRPSP, you can run HR end-to-end as an outsourcing arrangement delivered on Flexi HRMS. Ask about the service wrap during sales conversations.",
  },
  {
    q: "Are Pakistan statutory updates included?",
    a: "Yes. EOBI, PESSI, WHT slab changes, FBR format updates, and provincial labour law adjustments are applied across all customers as part of the subscription.",
  },
  {
    q: "Is on-premise deployment available?",
    a: "Available on Enterprise for tenants with regulatory data residency requirements — typically BFSI and public-sector. Ask about infrastructure prerequisites during discovery.",
  },
];
