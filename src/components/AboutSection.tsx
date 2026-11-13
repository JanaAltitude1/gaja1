import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ClipboardCheck, Compass, Layers, ShieldCheck, Target } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const ABOUT_PILLARS = [
  {
    index: '01',
    title: 'The Challenge',
    copy: 'Testing records, test cases, and defect logs often live across disconnected spreadsheets and issue threads, obscuring true release readiness.',
    icon: ClipboardCheck,
    accent: 'orange' as const,
  },
  {
    index: '02',
    title: 'Our Mission',
    copy: 'To unify test planning, execution tracking, defect management, and QA reporting into an approachable platform teams genuinely enjoy using.',
    icon: Target,
    accent: 'blue' as const,
  },
  {
    index: '03',
    title: 'Our Vision',
    copy: 'Empowering modern software teams of every size to deliver dependable software with measurable quality confidence.',
    icon: Compass,
    accent: 'orange' as const,
  },
];

export const AboutSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="border-y border-[#E5E7EB]/80 bg-[#F8FAFF] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Editorial Numbered Introduction */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <SectionHeading
              eyebrow="About Istrava"
              title="Making Software Quality Management Simpler."
              description="Istrava is a centralized software testing and quality assurance management platform built to give engineering and QA organizations clarity across every release."
              align="left"
            />

            <div className="mt-10 space-y-4">
              {ABOUT_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                const isOrange = pillar.accent === 'orange';

                return (
                  <div
                    key={pillar.index}
                    className="group rounded-2xl border border-[#E5E7EB] bg-white p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#2563EB]/30 hover:shadow-xs sm:grid sm:grid-cols-12 sm:items-center sm:gap-4"
                  >
                    <div className="flex items-center gap-3.5 sm:col-span-4">
                      <span
                        className={`font-display text-xs font-bold tabular-nums ${
                          isOrange ? 'text-[#F97316]' : 'text-[#2563EB]'
                        }`}
                      >
                        {pillar.index}
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-150 group-hover:-rotate-6 ${
                          isOrange
                            ? 'bg-[#F97316]/12 text-[#F97316]'
                            : 'bg-[#2563EB]/10 text-[#2563EB]'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-base font-bold text-[#111827]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#64748B] sm:col-span-8 sm:mt-0 sm:text-base">
                      {pillar.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Staggered Architectural Composition */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
            aria-hidden="true"
          >
            <div className="relative mx-auto aspect-square max-w-[450px] rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-sm sm:p-9">
              <div className="bg-dot-matrix absolute inset-4 rounded-2xl opacity-65" />

              {/* Tilted background geometry */}
              <div className="absolute right-8 top-8 h-32 w-32 -rotate-6 rounded-2xl bg-[#2563EB]/10" />
              <div className="absolute bottom-8 left-8 h-28 w-28 rotate-6 rounded-2xl bg-[#F97316]/12" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="flex -rotate-3 flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-xs"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
                      <Layers className="h-6 w-6" />
                    </div>
                    <div className="mt-5">
                      <div className="font-display text-sm font-bold text-[#111827]">
                        Centralized
                      </div>
                      <div className="mt-0.5 text-xs text-[#64748B]">
                        Single QA workspace
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="mt-6 flex rotate-3 flex-col justify-between rounded-2xl border border-[#2563EB]/25 bg-[#2563EB] p-5 text-white shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <div className="mt-5">
                      <div className="font-display text-sm font-bold">
                        Traceable
                      </div>
                      <div className="mt-0.5 text-xs text-blue-100">
                        End-to-end coverage
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center justify-between rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F97316]/12 text-[#F97316]">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-[#111827]">
                        Built for Clarity
                      </div>
                      <div className="text-xs text-[#64748B]">
                        Structured testing from plan to sign-off
                      </div>
                    </div>
                  </div>
                  <div className="hidden h-8 w-8 rotate-12 rounded-lg border-2 border-[#F97316]/45 sm:block" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
