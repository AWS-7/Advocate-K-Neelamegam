import { cn } from "@/lib/utils";

type SectionFallbackProps = {
  className?: string;
};

export function SectionFallback({ className }: SectionFallbackProps) {
  return (
    <div
      className={cn("min-h-24 w-full animate-pulse bg-grey-soft/40", className)}
      aria-hidden="true"
    />
  );
}
