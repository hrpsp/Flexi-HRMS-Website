import type { Metadata } from "next";
import { SuiteLayout } from "@/components/product/suite-layout";
import { operationsSuite } from "@/data/suites/operations";

export const metadata: Metadata = {
  title: operationsSuite.seoTitle,
  description: operationsSuite.seoDescription,
  keywords: operationsSuite.seoKeywords,
};

export default function OperationsSuitePage() {
  return <SuiteLayout suite={operationsSuite} />;
}
