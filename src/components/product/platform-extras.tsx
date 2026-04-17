"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { KeyRound, Plug, Database, ShieldCheck, Globe2, Scroll } from "lucide-react";
import { ease, duration, spring } from "@/lib/motion";

const tenants = [
  {
    key: "bata",
    label: "Bata — Retail",
    policy: "Split shift · commission band B",
    tax: "WHT with retail commission",
    approval: "Store manager → Regional HR",
    mobile: "Punch-in from store ESS kiosk",
  },
  {
    key: "engro",
    label: "Engro — Manufacturing",
    policy: "Rotating A/B/C · union CBA",
    tax: "WHT with shift allowance",
    approval: "Plant supervisor → Unit HR → HQ",
    mobile: "Biometric on plant turnstile",
  },
  {
    key: "ufone",
    label: "Ufone — Telecom",
    policy: "Field engineer · regional",
    tax: "WHT with travel allowance",
    approval: "Tower lead → Region ops",
    mobile: "GPS punch-in from tower site",
  },
];

const technicalCallouts = [
  {
    icon: KeyRound,
    title: "SSO — SAML 2.0 & OIDC",
    body: "Azure AD, Okta, Google Workspace, ADFS. Provisioning via SCIM. Group-to-role mapping in SystemFlex.",
  },
  {
    icon: Plug,
    title: "APIs & webhooks",
    body: "REST APIs for every Flexi object. Webhooks for every state transition. ConnectCentral registers, throttles, and audits every integration.",
  },
  {
    icon: Database,
    title: "Data model you can read",
    body: "Flexi Meta exposes its dictionary. No hidden tables, no magic. Your reporting team can hit it directly through Insight360 or pipe to your warehouse.",
  },
  {
    icon: ShieldCheck,
    title: "Security posture",
    body: "Role-based access, row-level security, encrypted-at-rest, TLS in transit, private VPC deployments for enterprise tenants.",
  },
  {
    icon: Globe2,
    title: "Data residency",
    body: "Pakistan-local deployment or on-prem. Data sovereignty respected for BFSI and public-sector tenants.",
  },
  {
    icon: Scroll,
    title: "Audit trail — everything",
    body: "Every field change, every workflow action, every admin override — captured, timestamped, exportable. Passes SBP, EOBI, and FBR audits.",
  },
];

export function PlatformExtras() {
  const [active, setActive] = useState(tenants[0].key);
  const tenant = tenants.find((t) => t.key === active)!;
  const reduce = useReducedMotion();

  return (
    <>
      {/* One codebase, many realities */}
      <Section>
        <SectionHeading
          eyebrow="One codebase, three realities"
          title="Same Flexi HRMS. Very different companies."
          description="The screenshot is a fiction. The underlying platform isn't. Toggle between tenants to see how Flexi HQ configures the same modules into different operating realities."
        />

        <div className="mt-12 rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="border-b border-border flex flex-wrap">
            {tenants.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  "relative px-5 py-3.5 text-sm font-medium transition-colors",
                  active === t.key ? "text-brand-dark" : "text-neutral-gray hover:text-neutral-text"
                )}
              >
                {t.label}
                {active === t.key && (
                  <motion.span
                    layoutId="tenant-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-peach"
                    transition={reduce ? { duration: 0 } : spring.soft}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { label: "LeaveEase policy", value: tenant.policy },
              { label: "PayEdge configuration", value: tenant.tax },
              { label: "Workflow approvals", value: tenant.approval },
              { label: "MobileEdge behaviour", value: tenant.mobile },
            ].map((col, i) => (
              <div key={col.label} className={cn("p-6", i % 2 === 1 && "bg-neutral-light/40")}>
                <div className="text-[10px] uppercase tracking-[0.18em] text-brand-mid mb-2">{col.label}</div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active}-${col.label}`}
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
                    transition={{ duration: reduce ? 0 : duration.fast, ease: ease.flexiSnap }}
                    className="text-sm text-neutral-text font-medium text-pretty"
                  >
                    {col.value}
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-neutral-gray max-w-2xl mx-auto">
          None of this requires a branch, a fork, or a ticket. Flexi HQ reads Flexi Meta and configures every module accordingly — at the tenant level, and at the business-unit level within a tenant.
        </p>
      </Section>

      {/* Technical callouts */}
      <Section tone="light">
        <SectionHeading
          eyebrow="For the technical evaluator"
          title="What your CIO and your architect will ask."
          description="Flexi is built for enterprise IT scrutiny. SSO, APIs, data residency, audit — all first-class, not bolt-ons."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {technicalCallouts.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-brand-mid/10 flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-brand-dark" />
              </div>
              <div className="text-base font-semibold text-neutral-text">{c.title}</div>
              <p className="mt-2 text-sm text-neutral-gray text-pretty">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
