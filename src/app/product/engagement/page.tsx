import type { Metadata } from "next";
import { SuiteLayout } from "@/components/product/suite-layout";
import { engagementSuite } from "@/data/suites/engagement";

export const metadata: Metadata = {
  title: engagementSuite.seoTitle,
  description: engagementSuite.seoDescription,
  keywords: engagementSuite.seoKeywords,
};

export default function EngagementSuitePage() {
  return <SuiteLayout suite={engagementSuite} />;
}
