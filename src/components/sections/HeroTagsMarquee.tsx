import { Building2, Clock, FileWarning, Gavel, MapPin, Scale, Shield, Users, type LucideIcon } from "lucide-react";
import { heroFeatureTags } from "@/lib/site-data";

const tagIconMap: Record<string, LucideIcon> = {
  scale: Scale,
  gavel: Gavel,
  shield: Shield,
  clock: Clock,
  users: Users,
  building: Building2,
  file: FileWarning,
  map: MapPin,
};

export function HeroTagsMarquee() {
  const tags = [...heroFeatureTags, ...heroFeatureTags];

  return (
    <div className="hero-tags-marquee mt-7 w-full overflow-hidden sm:mt-8 lg:mt-8 lg:max-w-lg">
      <div
        className="hero-tags-marquee-track flex w-max gap-2.5"
        style={{ animationDuration: "28s" }}
      >
        {tags.map((tag, index) => {
          const Icon = tagIconMap[tag.icon] ?? Scale;
          return (
            <span
              key={`${tag.text}-${index}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-medium text-white/75 backdrop-blur-sm sm:text-xs"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-gold/90" aria-hidden="true" />
              {tag.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
