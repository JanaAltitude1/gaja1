import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  Bug,
  ChartNoAxesCombined,
  FolderKanban,
  Layers,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onOpenModal: (mode: 'get-started' | 'contact', plan?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
    >
      {/* Subtle architectural background grid */}
      <div
        aria-hidden="true"
        className="bg-fine-grid pointer-events-none absolute inset-0 opacity-45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typography & Primary Actions */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="mb-4 inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#2563EB] sm:text-base">
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 -rotate-12 rounded-[2px] bg-[#F97316]"
              />
              <span>One Platform. Complete QA Visibility.</span>
            </p>

            <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-[#111827] text-balance">
              Build Better Software. Deliver Quality with{' '}
              <span className="relative inline-block text-[#2563EB]">
                Confidence.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 180 12"
                  fill="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9.5C45 2.5 135 2.5 178 9.5"
                    stroke="#F97316"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#64748B] sm:text-lg">
              Istrava brings testing projects, test cases, execution records, defect
              tracking, and QA reporting together in one organized platform designed
              for modern software teams.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onOpenModal('get-started')}
                className="inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] whitespace-nowrap shrink-0"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#features"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#F97316]/50 hover:bg-[#F8FAFF] hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] whitespace-nowrap shrink-0"
              >
                Explore Platform
              </a>
            </div>
          </motion.div>

          {/* Right Column: Abstract Geometric Technology Composition */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6"
            aria-hidden="true"
          >
            {/* Outer subtle tilted frame */}
            <div className="relative mx-auto aspect-[10/9] w-full max-w-[560px]">
              <div className="absolute inset-2 -rotate-2 rounded-3xl border border-[#2563EB]/15 bg-[#F8FAFF]/60" />

              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F8FAFF] p-6 shadow-xs sm:p-10">
                {/* Dotted matrix inset */}
                <div className="bg-dot-matrix absolute inset-5 rounded-2xl opacity-75" />

                {/* Architectural connector lines */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 500 450"
                  fill="none"
                >
                  <path
                    d="M120 110 L250 225 L385 225"
                    stroke="#2563EB"
                    strokeOpacity="0.22"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                  />
                  <path
                    d="M250 225 L145 345"
                    stroke="#F97316"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                  />
                </svg>

                {/* Large tilted geometric background planes */}
                <div className="absolute right-8 top-8 h-36 w-36 -rotate-6 rounded-3xl bg-[#2563EB]/10 sm:h-44 sm:w-44" />
                <div className="absolute bottom-8 left-8 h-28 w-28 rotate-6 rounded-2xl bg-[#F97316]/12 sm:h-36 sm:w-36" />

                {/* Tilted accent square outlines */}
                <div className="absolute left-12 top-14 h-12 w-12 rotate-12 rounded-xl border-2 border-[#2563EB]/30 bg-white/70" />
                <div className="absolute bottom-14 right-14 h-10 w-10 -rotate-12 rounded-lg border-2 border-[#F97316]/45 bg-white/80" />

                {/* Central Geometric QA Architecture Frame */}
                <div className="relative z-10 flex h-52 w-52 rotate-3 items-center justify-center rounded-3xl border border-[#2563EB]/20 bg-white shadow-[0_20px_50px_-15px_rgba(37,99,235,0.18)] sm:h-60 sm:w-60">
                  <div className="flex h-40 w-40 -rotate-3 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-6 text-white shadow-inner sm:h-48 sm:w-48">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xs sm:h-16 sm:w-16">
                      <ShieldCheck className="h-9 w-9 text-white" strokeWidth={1.8} />
                    </div>
                    <div className="h-1.5 w-16 rounded-full bg-white/35" />
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="h-2 w-8 rounded-full bg-[#F97316]" />
                      <span className="h-2 w-5 rounded-full bg-white/45" />
                    </div>
                  </div>
                </div>

                {/* Floating Feature Label 1: Top Left */}
                <motion.div
                  animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-3 top-6 z-20 flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_12px_28px_-8px_rgba(17,24,39,0.08)] sm:left-5 sm:top-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
                    <FolderKanban className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold text-[#111827] sm:text-sm">
                      Test Management
                    </div>
                    <div className="text-[11px] text-[#64748B]">
                      Projects, cases &amp; suites
                    </div>
                  </div>
                </motion.div>

                {/* Floating Feature Label 2: Middle Right */}
                <motion.div
                  animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
                  transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.4,
                  }}
                  className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_12px_28px_-8px_rgba(17,24,39,0.08)] sm:right-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316]/12 text-[#F97316]">
                    <Bug className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold text-[#111827] sm:text-sm">
                      Defect Tracking
                    </div>
                    <div className="text-[11px] text-[#64748B]">
                      Severity &amp; resolution
                    </div>
                  </div>
                </motion.div>

                {/* Floating Feature Label 3: Bottom Left */}
                <motion.div
                  animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
                  transition={{
                    duration: 5.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.8,
                  }}
                  className="absolute bottom-5 left-5 z-20 flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_12px_28px_-8px_rgba(17,24,39,0.08)] sm:bottom-7 sm:left-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
                    <ChartNoAxesCombined className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold text-[#111827] sm:text-sm">
                      QA Analytics
                    </div>
                    <div className="text-[11px] text-[#64748B]">
                      Progress &amp; completion
                    </div>
                  </div>
                </motion.div>

                {/* Small tilted Layers tile at bottom right */}
                <div className="absolute bottom-6 right-8 z-20 hidden -rotate-6 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white p-3 shadow-sm sm:flex">
                  <Layers className="h-5 w-5 text-[#F97316]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width Architectural Capability Bar */}
        <div className="mt-14 grid grid-cols-1 divide-y divide-[#E5E7EB] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F8FAFF]/70 sm:grid-cols-2 sm:divide-y-0 lg:mt-18 lg:grid-cols-4 lg:divide-x">
          {[
            { title: 'Testing Projects', desc: 'Team & release structure', accent: 'blue' },
            { title: 'Test Cases & Suites', desc: 'Categorized test coverage', accent: 'orange' },
            { title: 'Execution Tracking', desc: 'Pass, fail & blocked logs', accent: 'blue' },
            { title: 'Defect Reporting', desc: 'Severity & quality insights', accent: 'orange' },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex items-start gap-3.5 px-6 py-5 transition-colors duration-150 hover:bg-white"
            >
              <span
                aria-hidden="true"
                className={`mt-1.5 h-2.5 w-2.5 shrink-0 rotate-12 rounded-[2px] transition-transform duration-150 group-hover:rotate-45 ${
                  item.accent === 'orange' ? 'bg-[#F97316]' : 'bg-[#2563EB]'
                }`}
              />
              <div>
                <div className="font-display text-sm font-bold text-[#111827]">
                  {item.title}
                </div>
                <div className="mt-0.5 text-xs text-[#64748B]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
