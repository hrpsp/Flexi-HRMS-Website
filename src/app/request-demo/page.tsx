import type { Metadata } from "next";
import { Clock, MonitorSmartphone, ShieldCheck, HelpCircle } from "lucide-react";
import { DemoRequestForm } from "@/components/forms/demo-request-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Request a Flexi HRMS demo",
  description:
    "Book a 30-minute demo of Flexi HRMS configured to your industry. Walk through Flexi HQ, PayEdge, compliance, and MobileEdge with a product specialist.",
  robots: { index: true, follow: true },
};

const expectations = [
  {
    icon: Clock,
    title: "30 minutes",
    body: "A focused walkthrough. No marketing pitch. Questions any time during the session.",
  },
  {
    icon: MonitorSmartphone,
    title: "Configured to your industry",
    body: "We set up the tenant to look like a company in your industry — not a generic demo sandbox.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance live",
    body: "We run a payroll cycle with WHT, EOBI, PESSI, and a WPS bank file — so you see it, not just hear about it.",
  },
  {
    icon: HelpCircle,
    title: "Follow-up",
    body: "A written recap, any artefacts you asked for, and a clear next step — no chasing required.",
  },
];

export default function RequestDemoPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.peach/14),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.brand.mid/10),transparent_55%)]"
        />
        <div className="container pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
                Request a demo
              </span>
              <h1 className="text-display-xl text-balance text-neutral-text">
                Book a 30-minute demo. See Flexi HRMS configured for your industry.
              </h1>
              <p className="text-lg text-neutral-gray text-pretty">
                A product specialist will walk through Flexi HQ + Flexi Meta for your industry — with live payroll, compliance, and mobile scenarios. We&apos;ll follow up with a written recap and a clear next step.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {expectations.map((e) => (
                  <div key={e.title} className="rounded-xl border border-border bg-card/70 backdrop-blur p-4">
                    <div className="h-8 w-8 rounded-md bg-brand-peach/25 flex items-center justify-center mb-3">
                      <e.icon className="h-4 w-4 text-brand-dark" />
                    </div>
                    <div className="text-sm font-semibold text-neutral-text">{e.title}</div>
                    <p className="mt-1 text-xs text-neutral-gray line-clamp-3">{e.body}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border mt-6 text-sm text-neutral-gray">
                <div className="font-medium text-neutral-text mb-1">Prefer to call?</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {siteConfig.company.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="hover:text-brand-dark">
                      {p}
                    </a>
                  ))}
                  <a href={`mailto:${siteConfig.company.email}`} className="hover:text-brand-dark">
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
                <DemoRequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
