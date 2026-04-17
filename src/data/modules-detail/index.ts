import type { ModuleDetail } from "@/data/types";
import { flexiHq } from "./flexi-hq";
import { peoplehub } from "./peoplehub";
import { pakistanCompliance } from "./pakistan-compliance";
import { timesync } from "./timesync";
import { leaveease } from "./leaveease";
import { payedge } from "./payedge";
import { talentworks } from "./talentworks";
import { performpro } from "./performpro";
import { skillforge } from "./skillforge";
import { leadershiplab } from "./leadershiplab";
import { expensehub } from "./expensehub";
import { loanhub } from "./loanhub";
import { benefithub } from "./benefithub";
import { engageboard } from "./engageboard";
import { culturecore } from "./culturecore";
import { wellnest } from "./wellnest";
import { workforcePlanning } from "./workforce-planning";
import { flexiDesk } from "./flexi-desk";
import { dms } from "./dms";
import { flexiAms } from "./flexi-ams";
import { projectedge } from "./projectedge";
import { systemflex } from "./systemflex";
import { connectcentral } from "./connectcentral";
import { notifypro } from "./notifypro";
import { auditTrail } from "./audit-trail";
import { insight360 } from "./insight360";
import { mobileedge } from "./mobileedge";
import { ess } from "./ess";

const all: ModuleDetail[] = [
  // Core HR & Payroll (6)
  flexiHq, peoplehub, pakistanCompliance, timesync, leaveease, payedge,
  // Talent (4)
  talentworks, performpro, skillforge, leadershiplab,
  // Employee Finance & Experience (7)
  expensehub, loanhub, benefithub, engageboard, culturecore, wellnest, workforcePlanning,
  // Operations (4)
  flexiDesk, dms, flexiAms, projectedge,
  // Platform (7)
  systemflex, connectcentral, notifypro, auditTrail, insight360, mobileedge, ess,
];

export const moduleDetails: Record<string, ModuleDetail> = Object.fromEntries(
  all.map((m) => [m.slug, m])
);

export const getModuleDetail = (slug: string): ModuleDetail | undefined => moduleDetails[slug];

export const moduleDetailSlugs = (): string[] => Object.keys(moduleDetails);
