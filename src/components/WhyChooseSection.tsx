import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Bug,
  ChartNoAxesCombined,
  ClipboardList,
  FolderKanban,
  Workflow,
} from 'lucide-react';
import { KEY_BENEFITS } from '../data/landingData';

const BENEFIT_ICONS = {
  FolderKanban,
  ClipboardList,
  Bug,
  Workflow,
  ChartNoAxesCombined,
};

export const WhyChooseSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-y border-[#E5E7EB]/80 bg-[#F8FAFF] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Large Typographic Statement */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28 lg:col-span-5"
          >
            <div className="mb-3 inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#2563EB]">
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 -rotate-12 rounded-[2px] bg-[#F97316]"
              />
              <span>Why Choose Istrava</span>
            </div>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#111827] text-balance sm:text-4xl lg:text-[2.65rem]">
              Bring Your Entire QA Workflow Together.
            </h2>

            <div aria-hidden="true" className="mt-4 flex items-center gap-1.5">
              <span className="h-1 w-10 rounded-full bg-[#2563EB]" />
              <span className="h-1 w-3 rounded-full bg-[#F97316]" />
            </div>

            <p className="mt-5 text-base leading-relaxed text-[#64748B] sm:text-lg">
              Software quality improves when planning, execution, defect tracking,
              and reporting operate in one connected system rather than across
              fragmented tools.
            </p>

            {/* Subtle Geometric Accent Composition */}
            <div
              aria-hidden="true"
              className="mt-10 hidden items-center gap-4 lg:flex"
            >
              <div className="h-14 w-14 -rotate-6 rounded-2xl border border-[#2563EB]/25 bg-white p-3 shadow-xs">
                <div className="h-full w-full rounded-lg bg-[#2563EB]/15" />
              </div>
              <div className="h-10 w-10 rotate-12 rounded-xl bg-[#F97316]/20" />
              <div className="h-px flex-1 bg-[#E5E7EB]" />
            </div>
          </motion.div>

          {/* Right Column: Numbered Editorial Bento Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {KEY_BENEFITS.map((benefit, index) => {
              const Icon = BENEFIT_ICONS[benefit.iconName];
              const isOrange = benefit.accent === 'orange';
              const isMarquee = index === 0;

              return (
                <motion.article
                  key={benefit.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-7 ${
                    isOrange
                      ? 'hover:border-[#F97316]/45'
                      : 'hover:border-[#2563EB]/40'
                  } ${benefit.spanClass}`}
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-xl transition-transform duration-200 group-hover:rotate-12 ${
                      index % 2 === 0 ? 'rotate-6' : '-rotate-6'
                    } ${isOrange ? 'bg-[#F97316]/8' : 'bg-[#2563EB]/6'}`}
                  />

                  <div
                    className={`relative z-10 flex ${
                      isMarquee
                        ? 'flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'
                        : 'items-start gap-4'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border bg-[#F8FAFF] shadow-2xs transition-transform duration-200 group-hover:-rotate-3 ${
                          isOrange
                            ? 'border-[#F97316]/25 text-[#F97316]'
                            : 'border-[#2563EB]/20 text-[#2563EB]'
                        }`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-display text-xs font-bold tabular-nums ${
                              isOrange ? 'text-[#F97316]' : 'text-[#2563EB]'
                            }`}
                          >
                            0{index + 1}
                          </span>
                          <h3 className="font-display text-base font-bold text-[#111827] sm:text-lg">
                            {benefit.title}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
