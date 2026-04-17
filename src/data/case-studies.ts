export type CaseStudyTile = {
  slug: string;
  customer: string;
  industry: string;
  context: string;
  headlineStat: string;
  statLabel: string;
  isConfirmed: boolean; // if false, render with TODO badge
};

export const featuredCaseStudies: CaseStudyTile[] = [
  {
    slug: "bata-pakistan",
    customer: "Bata Pakistan",
    industry: "Retail",
    context: "Nationwide retail workforce across manufacturing, distribution, and 400+ stores.",
    headlineStat: "2,600+",
    statLabel: "employees on Flexi HRMS",
    isConfirmed: true,
  },
  {
    slug: "ufone",
    customer: "Ufone",
    industry: "Telecom",
    // TODO: confirm copy, outcomes, specific numbers with Ufone team.
    context: "Enterprise telecom operator running Flexi HRMS for HQ and field workforce.",
    headlineStat: "TODO",
    statLabel: "outcome TBC",
    isConfirmed: false,
  },
  {
    slug: "cmpak-zong",
    customer: "CMPak Zong",
    industry: "Telecom",
    // TODO: confirm copy, outcomes, specific numbers with CMPak team.
    context: "Pakistan mobile operator with distributed employee base across the country.",
    headlineStat: "TODO",
    statLabel: "outcome TBC",
    isConfirmed: false,
  },
];
