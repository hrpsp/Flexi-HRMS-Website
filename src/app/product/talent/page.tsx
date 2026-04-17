import type { Metadata } from "next";
import { SuiteLayout } from "@/components/product/suite-layout";
import { talentSuite } from "@/data/suites/talent";

export const metadata: Metadata = {
  title: talentSuite.seoTitle,
  description: talentSuite.seoDescription,
  keywords: talentSuite.seoKeywords,
};

export default function TalentSuitePage() {
  return <SuiteLayout suite={talentSuite} />;
}
