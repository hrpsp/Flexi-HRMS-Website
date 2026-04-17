import type { Metadata } from "next";
import { Section, TodoBadge } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Website terms of use | Flexi HRMS",
  description:
    "Terms of use for myflexihr.com — the marketing website for Flexi HRMS, operated by Flexi IT Services (Pvt.) Ltd.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Scope",
    body: "These terms govern your use of myflexihr.com (the 'Site'), the marketing website for Flexi HRMS, operated by " + siteConfig.company.legalName + ". They do not govern any use of the Flexi HRMS product — that use is governed by the separate Master Subscription Agreement or order form between Flexi and the customer organisation.",
  },
  {
    title: "2. Acceptance",
    body: "By accessing or using the Site you agree to these terms. If you do not agree, do not use the Site.",
  },
  {
    title: "3. Permitted use",
    body: "You may view the Site, request information, and submit demo enquiries for legitimate evaluation and research purposes. You may share links to Site content with attribution.",
  },
  {
    title: "4. Prohibited use",
    body: "You may not (a) scrape, crawl, or harvest content at volumes that impact Site availability; (b) reverse engineer, decompile, or otherwise attempt to derive source code of Site components; (c) use the Site to transmit malware, attempt to gain unauthorised access, or conduct automated testing without prior written permission; (d) misrepresent your affiliation when submitting enquiries; (e) use Site content in a way that infringes Flexi's intellectual property rights or those of third parties.",
  },
  {
    title: "5. Intellectual property",
    body: "All content on the Site — including text, graphics, logos, and product screenshots — is owned by Flexi IT Services or its licensors and is protected by applicable intellectual property law. No rights are transferred to you by virtue of using the Site. 'Flexi', 'Flexi HRMS', 'Flexi HQ', 'Flexi Meta', and related marks are trademarks of Flexi IT Services. Other marks referenced on the Site belong to their respective owners.",
  },
  {
    title: "6. Accuracy of information",
    body: "We take reasonable care to ensure Site content is accurate at the time of publication. Pricing, product descriptions, and customer claims are subject to change. The authoritative source for any commercial engagement is a signed agreement with Flexi.",
  },
  {
    title: "7. Third-party links",
    body: "The Site may link to third-party sites — including our parent company's site at flexi.pk and our sister company's site at hrpsp.net. Linked sites operate under their own terms and privacy practices; linking does not imply endorsement by us of content on those sites.",
  },
  {
    title: "8. Warranty disclaimer",
    body: "The Site is provided on an 'as is' and 'as available' basis. To the maximum extent permitted by applicable law, Flexi disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
  },
  {
    title: "9. Limitation of liability",
    body: "To the maximum extent permitted by applicable law, Flexi will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of the Site.",
  },
  {
    title: "10. Indemnification",
    body: "You agree to indemnify and hold Flexi harmless from any claims arising out of your breach of these terms or your misuse of the Site.",
  },
  {
    title: "11. Changes",
    body: "We may update these terms from time to time. Material changes will be posted on this page with an updated effective date. Continued use of the Site after changes indicates acceptance.",
  },
  {
    title: "12. Governing law",
    body: "These terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute will be subject to the exclusive jurisdiction of the courts at Lahore.",
  },
  {
    title: "13. Contact",
    body: "Questions about these terms should be sent to " + siteConfig.company.email + ".",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.brand.peach/10),transparent_60%)]"
        />
        <div className="container pt-16 pb-8 lg:pt-20 lg:pb-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mid/20 bg-white/70 backdrop-blur px-3 py-1 text-eyebrow uppercase text-brand-mid">
              Legal
            </span>
            <h1 className="text-display-lg text-balance text-neutral-text">Website terms of use</h1>
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
