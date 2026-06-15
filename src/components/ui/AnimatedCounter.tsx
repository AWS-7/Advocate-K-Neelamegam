"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
};

export function AnimatedCounter({
  end,
  suffix = "",
  label,
  duration = 2.5,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl md:text-5xl font-bold text-gold">
        {inView ? (
          <CountUp end={end} duration={duration} suffix={suffix} />
        ) : (
          <span>0{suffix}</span>
        )}
      </p>
      <p className="mt-2 text-sm md:text-base text-white/80 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
