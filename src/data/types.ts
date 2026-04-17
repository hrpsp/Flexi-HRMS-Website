import type { Suite } from "@/data/modules";

export type CustomerCallout = {
  customer: string;
  industry?: string;
  quote?: string;
  outcome?: string;
  isConfirmed: boolean;
};

export type SuiteModuleEntry = {
  slug: string;
  name: string;
  tagline: string;
  icon: string; // Lucide icon name
};

export type SuiteDetail = {
  slug: Suite;
  name: string;
  eyebrow: string;
  promise: string;
  heroHeadline: string;
  heroBody: string;
  modules: SuiteModuleEntry[];
  workflow: { title: string; description: string }[];
  customerCallout?: CustomerCallout;
  crossSell: Suite[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
};

export type ModuleCapability = {
  icon: string;
  title: string;
  body: string;
};

export type ModuleWorkflowStep = {
  title: string;
  description: string;
};

export type ModuleDetail = {
  slug: string;
  name: string;
  suite: Suite;
  tagline: string;
  description: string;
  reality: string;
  heroBody: string;
  capabilities: ModuleCapability[];
  workflow: ModuleWorkflowStep[];
  integrations: string[];
  customerCallout?: CustomerCallout;
  relatedModules: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
};
