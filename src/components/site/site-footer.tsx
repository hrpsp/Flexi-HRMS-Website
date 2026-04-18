import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { siteConfig, footerNav } from "@/lib/site-config";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 11-.01-4.12 2.06 2.06 0 01.01 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

export function SiteFooter() {
  const columns = [footerNav.product, footerNav.solutions, footerNav.customers, footerNav.resources, footerNav.legal];

  return (
    <footer className="bg-brand-dark text-white mt-24">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" />
            <p className="text-sm text-white/70 max-w-xs text-pretty">
              Pakistan&apos;s enterprises run on Flexi HRMS. Hire-to-retire, configurable per tenant, compliance-native since 2011.
            </p>
            <div className="space-y-2.5 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-peach shrink-0" />
                <span>{siteConfig.company.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-brand-peach shrink-0" />
                <div className="flex flex-col gap-0.5">
                  {siteConfig.company.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="hover:text-white">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-brand-peach shrink-0" />
                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-white">
                  {siteConfig.company.email}
                </a>
              </div>
            </div>
            <a
              href={siteConfig.company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <div className="text-eyebrow uppercase text-brand-peach mb-4">{col.heading}</div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block text-sm text-white/70 hover:text-white bg-gradient-to-r from-brand-peach to-brand-peach bg-no-repeat bg-[length:0%_2px] bg-left-bottom hover:bg-[length:100%_2px] transition-[background-size,color] duration-fast ease-flexi-snap pb-0.5"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} {siteConfig.company.legalName}. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <span>
              Flexi HRMS is a product of{" "}
              <a href={siteConfig.company.parentUrl} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-4">
                Flexi IT Services
              </a>
              .
            </span>
            <span>
              Prefer to outsource HR entirely? See{" "}
              <a href={siteConfig.company.sisterUrl} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-4">
                HRPSP
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
