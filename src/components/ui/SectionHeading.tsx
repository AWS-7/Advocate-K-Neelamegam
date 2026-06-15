import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "mb-4 h-1 w-16 rounded-full bg-gold",
          align === "center" ? "mx-auto" : "",
        )}
        aria-hidden="true"
      />
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-white/80" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
