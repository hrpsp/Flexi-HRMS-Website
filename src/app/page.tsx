import { Hero } from "@/components/home/hero";
import { TheReality } from "@/components/home/the-reality";
import { ScaleBar } from "@/components/home/scale-bar";
import { ClientWall } from "@/components/home/client-wall";
import { FlexiMetaStory } from "@/components/home/flexi-meta-story";
import { ModuleMatrix } from "@/components/home/module-matrix";
import { ComplianceStories } from "@/components/home/compliance-stories";
import { IndustryGrid } from "@/components/home/industry-grid";
import { CustomerProof } from "@/components/home/customer-proof";
import { ComparisonTable } from "@/components/home/comparison-table";
import { PricingPreview } from "@/components/home/pricing-preview";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TheReality />
      <ScaleBar />
      <ClientWall />
      <FlexiMetaStory />
      <ModuleMatrix />
      <ComplianceStories />
      <IndustryGrid />
      <CustomerProof />
      <ComparisonTable />
      <PricingPreview />
      <FinalCta />
    </>
  );
}
