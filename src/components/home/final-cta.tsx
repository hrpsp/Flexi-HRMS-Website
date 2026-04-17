import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  const phone = siteConfig.company.phones[0];
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,theme(colors.brand.peach/25),transparent_60%),radial-gradient(ellipse_at_80%_80%,theme(colors.brand.mid/40),transparent_60%)]"
      />
      <div className="container relative py-20 md:py-28 text-center">
        <h2 className="text-display-lg text-balance max-w-3xl mx-auto">
          Book a demo. See Flexi HRMS configured to your industry in 30 minutes.
        </h2>
        <p className="mt-5 text-white/70 max-w-xl mx-auto text-pretty">
          A product specialist will walk through Flexi HQ + Flexi Meta for your industry, with live payroll, compliance, and mobile scenarios.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="h-12 px-7">
            <Link href="/request-demo">
              Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <a
            href={`tel:${phone.replace(/-/g, "")}`}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-lg border border-white/20 hover:border-white/40 text-white hover:bg-white/5 transition-colors"
          >
            <Phone className="h-4 w-4" /> Talk to sales: {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
