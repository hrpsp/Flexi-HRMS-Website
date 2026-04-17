export type Industry = {
  slug: string;
  name: string;
  blurb: string;
  href: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    blurb: "Shifts, unions, PPE, multi-plant. Blue-collar biometrics. Provincial labour law.",
    href: "/solutions/manufacturing",
  },
  {
    slug: "telecom",
    name: "Telecom",
    blurb: "Tower regions, SIM allocation, security clearance, field vs office workflows.",
    href: "/solutions/telecom",
  },
  {
    slug: "bfsi",
    name: "BFSI",
    blurb: "SBP compliance, stringent audit trails, sensitive payroll, data residency.",
    href: "/solutions/bfsi",
  },
  {
    slug: "retail",
    name: "Retail / FMCG",
    blurb: "Store codes, shift patterns, high-turnover onboarding, nationwide dispersion.",
    href: "/solutions/retail",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb: "24/7 rosters, clinical credentialing, variable on-call and locum payroll.",
    href: "/solutions/healthcare",
  },
  {
    slug: "utilities",
    name: "Utilities",
    blurb: "Field crews, DISCO regional structures, overtime rules by distribution zone.",
    href: "/solutions/utilities",
  },
  {
    slug: "real-estate",
    name: "Real Estate & Construction",
    blurb: "Project-based headcount, site attendance, contract labour, daily-wage payroll.",
    href: "/solutions/real-estate",
  },
];
