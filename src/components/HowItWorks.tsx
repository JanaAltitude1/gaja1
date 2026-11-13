import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ChartNoAxesCombined,
  ClipboardList,
  FolderKanban,
  Layers,
  PlayCircle,
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/landingData';
import { SectionHeading } from './SectionHeading';

const STEP_ICONS = {
  FolderKanban,
  ClipboardList,
  Layers,
  PlayCircle,
  ChartNoAxesCombined,
};

export const HowItWorks: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From Testing Planning to Quality Insights."
          description="Follow a clear five-step workflow that keeps testing teams aligned from project setup to final quality reporting."
          align="center"
          accentColor="orange"
        />

        <div className="relative mt-16">
          {/* Desktop horizontal connecting path */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-11 hidden h-0.5 bg-gradient-to-r from-[#2563EB]/40 via-[#F97316]/55 to-[#2563EB]/40 lg:block"
          />

          {/* Mobile vertical connecting path */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-11 top-8 w-0.5 bg-gradient-to-b from-[#2563EB]/40 via-[#F97316]/55 to-[#2563EB]/40 lg:hidden"
          />

          <ol className="relative grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-5">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[step.iconName];
              const isOrange = Boolean(step.highlightOrange);

              return (
                <motion.li
                  key={step.stepNumber}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative flex items-start gap-5 lg:flex-col lg:items-center lg:text-center"
                >
                  {/* Step Node */}
                  <div className="relative z-10 shrink-0">
                    <div
                      aria-hidden="true"
                      className={`absolute -inset-1 rounded-2xl transition-transform duration-200 group-hover:rotate-12 ${
                        idx % 2 === 0 ? '-rotate-6' : 'rotate-6'
                      } ${isOrange ? 'bg-[#F97316]/16' : 'bg-[#2563EB]/14'}`}
                    />
                    <div
                      className={`relative flex h-22 w-22 items-center justify-center rounded-2xl border bg-white shadow-xs transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md ${
                        isOrange
                          ? 'border-[#F97316]/35 text-[#F97316]'
                          : 'border-[#2563EB]/30 text-[#2563EB]'
                      }`}
                    >
                      <Icon className="h-9 w-9" strokeWidth={1.75} />
                      <span
                        className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-lg font-display text-xs font-bold tabular-nums text-white shadow-xs ${
                          isOrange ? 'bg-[#F97316]' : 'bg-[#2563EB]'
                        }`}
                      >
                        {step.stepNumber}
                      </span>
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div
                    className={`flex-1 rounded-2xl border border-[#E5E7EB]/85 bg-[#F8FAFF]/60 p-4 transition-all duration-200 group-hover:bg-white group-hover:shadow-xs lg:mt-2 lg:w-full lg:flex-none lg:p-5 ${
                      isOrange
                        ? 'group-hover:border-[#F97316]/35'
                        : 'group-hover:border-[#2563EB]/35'
                    }`}
                  >
                    <h3 className="font-display text-base font-bold text-[#111827] sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
