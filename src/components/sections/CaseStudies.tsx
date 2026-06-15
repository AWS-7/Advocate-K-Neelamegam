"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Clock, Target } from "lucide-react";
import { caseStudies, caseStudyTypes } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.type === filter);

  return (
    <section
      id="case-studies"
      className="bg-white py-16 md:py-24"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
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
            Anonymized case summaries illustrating our approach and results. Client identities
            are protected; outcomes are representative of our practice.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["All", ...caseStudyTypes].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                filter === type
                  ? "bg-navy text-white"
                  : "border border-navy/15 bg-grey-soft/60 text-navy hover:border-gold/40",
              )}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col rounded-2xl border border-navy/10 bg-grey-soft/40 p-5 transition-shadow hover:shadow-lg md:p-6"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                  {study.type}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {study.duration}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-navy">{study.title}</h3>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <div>
                  <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
                    <Briefcase className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    Challenge
                  </p>
                  <p>{study.challenge}</p>
                </div>
                <div>
                  <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
                    <Target className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    Approach
                  </p>
                  <p>{study.approach}</p>
                </div>
                <div className="rounded-lg border border-gold/25 bg-gold/5 px-3 py-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">Outcome</p>
                  <p className="mt-1 text-navy">{study.outcome}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
