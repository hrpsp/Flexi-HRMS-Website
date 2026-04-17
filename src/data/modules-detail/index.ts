import type { ModuleDetail } from "@/data/types";
import { payedge } from "./payedge";

export const moduleDetails: Record<string, ModuleDetail> = {
  payedge,
};

export const getModuleDetail = (slug: string): ModuleDetail | undefined => moduleDetails[slug];

export const moduleDetailSlugs = (): string[] => Object.keys(moduleDetails);
