import type { Metadata } from "next";
import { SuiteLayout } from "@/components/product/suite-layout";
import { coreSuite } from "@/data/suites/core";

export const metadata: Metadata = {
  title: coreSuite.seoTitle,
  description: coreSuite.seoDescription,
  keywords: coreSuite.seoKeywords,
};

export default function CoreSuitePage() {
  return <SuiteLayout suite={coreSuite} />;
}
