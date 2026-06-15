"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-grey-soft py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl"
          >
            Legal Services — Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            Answers about criminal, civil, family, property, and High Court legal services
            from Advocate K. Neelamegam at Lumbini Law Associates.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-navy transition-colors hover:text-gold md:px-6 md:text-lg"
                    aria-expanded={isOpen}
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-gold transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div className="border-t border-navy/5 px-5 py-4 md:px-6">
                    <p className="text-sm leading-relaxed text-muted md:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
