import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  BrainCircuit,
  Cpu,
  Layers3,
  ServerCog,
} from 'lucide-react';
import { PROPOSED_TECHNOLOGIES } from '../data/landingData';
import { SectionHeading } from './SectionHeading';

const TECH_ICONS = [BrainCircuit, Cpu, Layers3, ServerCog];

export const TechnologySection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="technology"
      className="border-y border-[#E5E7EB]/80 bg-[#F8FAFF] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Sticky Editorial Column */}
          <div className="lg:sticky lg:top-28 lg:col-span-4">
            <SectionHeading
              eyebrow="AI & Technology Roadmap"
              title="Built on a Modern Technology Foundation."
              description="Explore the technologies proposed for supporting future AI-assisted QA capabilities."
              align="left"
            />

            <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]">
                  <BrainCircuit className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-bold text-[#111827]">
                  Architectural Evaluation
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#64748B] sm:text-sm">
                These technologies represent proposed infrastructure options under evaluation for future AI-assisted QA workflows and are not currently active automated testing integrations.
              </p>
            </div>
          </div>

          {/* Right Column: Staggered 2x2 Architecture Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
            {PROPOSED_TECHNOLOGIES.map((tech, index) => {
              const Icon = TECH_ICONS[index % TECH_ICONS.length];
              const isOrange = tech.accent === 'orange';
              const isOffset = index % 2 === 1;

              return (
                <motion.article
                  key={tech.name}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 ${
                    isOffset ? 'sm:translate-y-5' : ''
                  } ${
                    isOrange
                      ? 'hover:border-[#F97316]/45 hover:shadow-[0_16px_32px_-14px_rgba(249,115,22,0.14)]'
                      : 'hover:border-[#2563EB]/40 hover:shadow-[0_16px_32px_-14px_rgba(37,99,235,0.14)]'
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
                      isOrange ? 'bg-[#F97316]' : 'bg-[#2563EB]'
                    }`}
                  />
                  {/* Decorative geometric square */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-2xl transition-transform duration-300 group-hover:rotate-12 ${
                      index % 2 === 0 ? 'rotate-6' : '-rotate-6'
                    } ${isOrange ? 'bg-[#F97316]/8' : 'bg-[#2563EB]/6'}`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border bg-[#F8FAFF] transition-transform duration-200 group-hover:-rotate-3 ${
                        isOrange
                          ? 'border-[#F97316]/25 text-[#F97316]'
                          : 'border-[#2563EB]/20 text-[#2563EB]'
                      }`}
                    >
                      <Icon className="h-8 w-8" strokeWidth={1.7} />
                    </div>

                    <p
                      className={`text-xs font-semibold tracking-tight ${
                        isOrange ? 'text-[#F97316]' : 'text-[#2563EB]'
                      }`}
                    >
                      {tech.role}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-[#111827]">
                      {tech.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                      {tech.description}
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="relative z-10 mt-6 flex items-center gap-2 border-t border-[#E5E7EB]/80 pt-4"
                  >
                    <span
                      className={`h-1.5 w-8 rounded-full ${
                        isOrange ? 'bg-[#F97316]/75' : 'bg-[#2563EB]/75'
                      }`}
                    />
                    <span className="text-xs font-medium text-[#64748B]">
                      Proposed Architecture
                    </span>
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
