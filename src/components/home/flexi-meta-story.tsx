"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const tabs = [
  {
    key: "manufacturing",
    label: "Manufacturing",
    fields: [
      { label: "Reporting plant", value: "Faisalabad — Unit 2" },
      { label: "Shift type", value: "Rotating — A/B/C" },
      { label: "Union membership", value: "CBA recognised" },
      { label: "PPE size", value: "L · Helmet 58cm" },
      { label: "Department", value: "Weaving — Line 4" },
    ],
  },
  {
    key: "telecom",
    label: "Telecom",
    fields: [
      { label: "Tower region", value: "North — Region 3" },
      { label: "SIM allocation", value: "Data + Voice, Postpaid" },
      { label: "Security clearance", value: "Level 2 — Approved" },
      { label: "Deployment", value: "Field engineer" },
      { label: "Vehicle access", value: "Company pool car" },
    ],
  },
  {
    key: "retail",
    label: "Retail",
    fields: [
      { label: "Store code", value: "LHR-212 · Gulberg" },
      { label: "Shift pattern", value: "Split — 10–2, 5–10" },
      { label: "Product category", value: "Women's footwear" },
      { label: "Reporting area", value: "Central Punjab" },
      { label: "Commission band", value: "Tier B" },
    ],
  },
];

export function FlexiMetaStory() {
  const [active, setActive] = useState(tabs[0].key);
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <Section id="meta" tone="default" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.brand.peach/18),transparent_50%)]"
      />
      <div className="relative">
        <SectionHeading
          eyebrow="The configurability moat"
          title="Most HRMS products force your company to adapt. Flexi adapts to your company."
          description="Every competitor uses words like 'flexible' or 'customisable' or 'smart flow.' Flexi Meta demonstrates it. Your HR admin reconfigures forms, workflows, and payroll rules per tenant — without a developer, without a ticket, without a release cycle."
        />

        <div className="mt-12 rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="border-b border-border flex flex-wrap">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "relative px-5 py-3.5 text-sm font-medium transition-colors",
                  active === t.key
                    ? "text-brand-dark"
                    : "text-brand-gray hover:text-brand-ink"
                )}
              >
                {t.label}
                {active === t.key && (
                  <motion.span
                    layoutId="meta-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-peach"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border bg-brand-dark text-white">
              <div className="text-[10px] uppercase tracking-[0.18em] text-brand-peach mb-4">
                Flexi Meta · dictionary
              </div>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  {activeTab.fields.map((f, i) => (
                    <motion.li
                      key={f.label}
                      layout
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      className="rounded-md bg-white/5 border border-white/10 px-3 py-2.5 text-sm"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-brand-peach/80">{f.label}</div>
                      <div className="text-white/90 font-mono text-xs mt-0.5">
                        field · required · text
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>

            <div className="p-6 md:p-8 bg-background">
              <div className="text-[10px] uppercase tracking-[0.18em] text-brand-mid mb-4">
                Flexi HQ · employee form
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2.5"
                >
                  {activeTab.fields.map((f, i) => (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i + 0.1, duration: 0.35 }}
                      className="rounded-md border border-border bg-card px-3.5 py-2.5"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-brand-gray">{f.label}</div>
                      <div className="text-sm text-brand-ink font-medium">{f.value}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-brand-gray max-w-3xl mx-auto">
          This is Flexi Meta. Your HR admin configures it. No developer required. Every tenant runs on their own Flexi HQ — their own forms, workflows, and rules.
        </p>
      </div>
    </Section>
  );
}
