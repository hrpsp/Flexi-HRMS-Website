import type { Metadata } from "next";
import { SuiteLayout } from "@/components/product/suite-layout";
import { PlatformExtras } from "@/components/product/platform-extras";
import { platformSuite } from "@/data/suites/platform";

export const metadata: Metadata = {
  title: platformSuite.seoTitle,
  description: platformSuite.seoDescription,
  keywords: platformSuite.seoKeywords,
};

export default function PlatformSuitePage() {
  return <SuiteLayout suite={platformSuite} extras={<PlatformExtras />} />;
}
