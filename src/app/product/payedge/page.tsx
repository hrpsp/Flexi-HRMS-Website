import type { Metadata } from "next";
import { ModuleLayout } from "@/components/product/module-layout";
import { payedge } from "@/data/modules-detail/payedge";

export const metadata: Metadata = {
  title: payedge.seoTitle,
  description: payedge.seoDescription,
  keywords: payedge.seoKeywords,
};

export default function PayEdgePage() {
  return <ModuleLayout mod={payedge} />;
}
