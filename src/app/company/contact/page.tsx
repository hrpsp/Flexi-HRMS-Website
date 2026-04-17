import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Building2 } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 11-.01-4.12 2.06 2.06 0 01.01 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Flexi HRMS",
  description:
    "Get in touch with Flexi IT Services in Lahore. Sales, support, partnerships, or press — we respond within one business day.",
};

const purposes = [
  {
    title: "Evaluating Flexi HRMS",
    body: "Considering Flexi for your organisation? The fastest path is a scheduled demo.",
    cta: { href: "/request-demo", label: "Request a Demo" },
  },
  {
    title: "Existing customer",
    body: "If you're already running Flexi, please use your tenant's support channel. For escalations, email info@myflexihr.com.",
    cta: null,
  },
  {
    title: "Partnership or integration",
    body: "Biometric vendors, payroll banks, ERP integrators, benefits providers — we work with partners across the ecosystem.",
    cta: null,
  },
  {
    title: "Press or analyst",
    body: "Media and analyst enquiries welcome. Email with your publication and requested angle; we'll respond within a business day.",
    cta: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.brand.peach/22),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.brand.mid/16),transparent_55%)]"
        />
        <div className="container pt-20 pb-12 lg:pt-28 lg:pb-16">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Contact
            </span>
            <h1 className="text-display-xl text-balance text-brand-ink">
              Talk to the team in Lahore.
            </h1>
            <p className="text-lg text-brand-gray text-pretty">
              For the fastest route to a demo, use the request-demo form. For anything else, the direct channels are below.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-7">
              <div className="text-eyebrow uppercase text-brand-mid mb-4">Office</div>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Building2 className="h-4 w-4 mt-0.5 text-brand-dark shrink-0" />
                  <div className="font-medium text-brand-ink">{siteConfig.company.legalName}</div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-brand-dark shrink-0" />
                  <div className="text-brand-ink/90">{siteConfig.company.address}</div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-brand-dark shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    {siteConfig.company.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="text-brand-ink/90 hover:text-brand-dark">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-brand-dark shrink-0" />
                  <a href={`mailto:${siteConfig.company.email}`} className="text-brand-ink/90 hover:text-brand-dark">
                    {siteConfig.company.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <LinkedinIcon className="h-4 w-4 mt-0.5 text-brand-dark shrink-0" />
                  <a href={siteConfig.company.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-ink/90 hover:text-brand-dark">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-brand-mid/30 bg-brand-light/40 p-6">
              <div className="text-sm text-brand-ink font-medium mb-1">Looking for HR outsourcing?</div>
              <p className="text-sm text-brand-gray text-pretty">
                Our sister company HRPSP runs HR end-to-end as a service on the Flexi HRMS platform. See{" "}
                <a href={siteConfig.company.sisterUrl} target="_blank" rel="noopener noreferrer" className="text-brand-dark underline underline-offset-4 hover:text-brand-mid">hrpsp.net</a>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {purposes.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-brand-ink">{p.title}</div>
                  <p className="text-sm text-brand-gray mt-1 text-pretty">{p.body}</p>
                </div>
                {p.cta && (
                  <Button asChild className="bg-brand-dark text-white hover:bg-brand-dark/90 h-10 px-5 shrink-0">
                    <Link href={p.cta.href}>
                      {p.cta.label} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
