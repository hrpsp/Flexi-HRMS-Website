import type { SuiteDetail } from "@/data/types";
import type { Suite } from "@/data/modules";
import { coreSuite } from "./core";
import { talentSuite } from "./talent";
import { engagementSuite } from "./engagement";
import { operationsSuite } from "./operations";
import { platformSuite } from "./platform";

export const suiteDetails: Record<Suite, SuiteDetail> = {
  core: coreSuite,
  talent: talentSuite,
  engagement: engagementSuite,
  operations: operationsSuite,
  platform: platformSuite,
};

export const getSuiteDetail = (slug: Suite): SuiteDetail => suiteDetails[slug];
