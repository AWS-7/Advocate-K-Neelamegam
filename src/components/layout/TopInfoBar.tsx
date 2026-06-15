import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function TopInfoBar() {
  return (
    <div className="hidden sm:block bg-navy-dark text-white text-sm border-b border-white/10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 lg:px-8">
        <div className="flex items-center gap-2 text-white/90">
          <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          <span className="truncate">{siteConfig.address.line1}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-white/90 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            <span>{siteConfig.phone}</span>
          </a>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.availability}
          </span>
        </div>
      </div>
    </div>
  );
}
