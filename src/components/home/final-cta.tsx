import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  const phone = siteConfig.company.phones[0];
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse at 15% 20%, rgba(91,83,130,0.4) 0%, transparent 60%), #322E53",
      }}
    >
      <div className="container relative py-20 md:py-28 text-center">
        <h2 className="text-display-lg text-balance max-w-3xl mx-auto text-white">
          Book a demo. See Flexi HRMS configured to your industry in 30 minutes.
        </h2>
        <p className="mt-5 text-white/75 max-w-xl mx-auto text-pretty">
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
            className="inline-flex items-center gap-2 h-12 px-6 rounded-lg border border-white/30 bg-transparent text-white hover:bg-white/10 transition-colors duration-fast ease-flexi-snap"
          >
            <Phone className="h-4 w-4" /> Talk to sales: {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
