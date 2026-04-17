import type { SuiteDetail } from "@/data/types";
import type { Suite } from "@/data/modules";
import { coreSuite } from "./core";
import { platformSuite } from "./platform";

export const suiteDetails: Partial<Record<Suite, SuiteDetail>> = {
  core: coreSuite,
  platform: platformSuite,
};

export const getSuiteDetail = (slug: Suite): SuiteDetail | undefined => suiteDetails[slug];
