"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-white py-16 md:py-24"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Case Studies
          </span>
          <h2
            id="case-studies-heading"
            className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl"
          >
            Representative Legal Outcomes
          </h2>
          <p className="mt-4 text-base text-muted">
            Illustrative matters handled with confidentiality — client identities are not
            disclosed. Outcomes depend on facts and law in each case.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex flex-col rounded-2xl border border-navy/10 bg-grey-soft/50 p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                  {study.outcome}
                </span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {study.category}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-navy">
                {study.title}
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <p>
                  <span className="font-semibold text-navy">Challenge: </span>
                  {study.challenge}
                </p>
                <p>
                  <span className="font-semibold text-navy">Approach: </span>
                  {study.approach}
                </p>
              </div>

              <div
                className={cn(
                  "mt-5 flex items-start gap-2 rounded-lg border border-gold/20 bg-white p-3 text-sm text-navy/85",
                )}
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <p>{study.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
