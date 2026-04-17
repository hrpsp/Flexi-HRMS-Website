import type { Metadata } from "next";
import { Section, TodoBadge } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy notice | Flexi HRMS",
  description:
    "How Flexi IT Services handles personal data collected through myflexihr.com — what we collect, why, how long we keep it, and your rights.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Who we are",
    body: `This privacy notice covers myflexihr.com, the marketing website for Flexi HRMS, operated by ${siteConfig.company.legalName} ("Flexi", "we", "us"). Our registered address is ${siteConfig.company.address}. You can reach us at ${siteConfig.company.email} or ${siteConfig.company.phones.join(" / ")}.`,
  },
  {
    title: "2. What this notice covers",
    body: "This notice describes how we handle personal data we collect through this marketing website — for example when you submit a demo request, subscribe to resources, or contact us. It does not cover the handling of employee data inside a customer's Flexi HRMS tenant; that is governed by the Data Processing Agreement between Flexi and the customer organisation.",
  },
  {
    title: "3. What we collect",
    body: "We collect information you provide directly — name, work email, phone, company, industry, headcount band, role, and any notes you add to a form. We also collect basic technical information about your visit (IP address, device type, browser, referring URL) for security and analytics.",
  },
  {
    title: "4. How we use it",
    body: "Demo request data is used to contact you about your enquiry, schedule the demo, and follow up. Marketing data (where you've consented) is used to send you relevant updates. Technical data is used to operate, secure, and improve the website. We do not sell personal data to third parties.",
  },
  {
    title: "5. Sharing",
    body: "We share data only with service providers who help us operate the website (for example hosting, email, CRM, analytics) under appropriate contractual protections, and where we are required by law or regulation. We do not share your data with marketing networks.",
  },
  {
    title: "6. Retention",
    body: "Demo request records are retained for as long as your enquiry remains active and for a reasonable follow-up window. Marketing subscription data is retained until you unsubscribe. Technical logs are retained per a standard security retention schedule.",
  },
  {
    title: "7. Your rights",
    body: "You can ask us to confirm what personal data we hold about you, correct it, delete it, restrict its processing, or withdraw your consent. Email us at " + siteConfig.company.email + " and we will respond within a reasonable period consistent with applicable law.",
  },
  {
    title: "8. International transfers",
    body: "Where service providers that support this website process data outside Pakistan, we rely on appropriate safeguards and contractual protections to ensure your data remains protected to the standard described here.",
  },
  {
    title: "9. Security",
    body: "We apply security controls appropriate to the sensitivity of the data — encrypted transport, access controls, and monitoring for unusual activity. No system is perfectly secure; if you believe your data has been exposed, please contact us immediately.",
  },
  {
    title: "10. Changes to this notice",
    body: "We may update this notice from time to time. Material changes will be flagged on this page with an updated effective date. Continued use of the site after changes indicates acceptance of the revised notice.",
  },
  {
    title: "11. Contact",
    body: "Questions about this notice, or requests under it, should be sent to " + siteConfig.company.email + ", attention: Privacy.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.peach/18),transparent_60%)]"
        />
        <div className="container pt-16 pb-8 lg:pt-20 lg:pb-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Legal
            </span>
            <h1 className="text-display-lg text-balance text-neutral-text">Privacy notice</h1>
            <p className="text-sm text-neutral-gray">
              Effective date: TODO — confirm with legal · Last updated: TODO
            </p>
            <TodoBadge>Placeholder — requires legal review before launch</TodoBadge>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold text-neutral-text">{s.title}</h2>
              <p className="mt-2 text-sm text-neutral-text/90 leading-relaxed text-pretty">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
