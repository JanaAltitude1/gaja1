import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Building2, Cloud, Code2, Users, Workflow } from 'lucide-react';
import { TARGET_AUDIENCES } from '../data/landingData';
import { BentoGrid } from './BentoGrid';
import { SectionHeading } from './SectionHeading';

const AUDIENCE_ICONS = {
  Code2,
  Users,
  Cloud,
  Building2,
  Workflow,
};

const SPAN_OVERRIDES = [
  'lg:col-span-5',
  'lg:col-span-7',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
];

export const WhoWeServe: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="solutions" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Designed for Modern Software Teams."
          description="Built to adapt to the workflows of product organizations, dedicated QA specialists, and enterprise engineering teams."
          align="center"
        />

        <div className="mt-14">
          <BentoGrid>
            {TARGET_AUDIENCES.map((audience, index) => {
              const Icon = AUDIENCE_ICONS[audience.iconName];
              const isOrange = audience.accent === 'orange';
              const isWide = index === 1;
              const spanClass = SPAN_OVERRIDES[index] || audience.spanClass;

              return (
                <motion.article
                  key={audience.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F8FAFF]/45 p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:bg-white sm:p-8 ${
                    isOrange
                      ? 'hover:border-[#F97316]/45 hover:shadow-[0_16px_32px_-14px_rgba(249,115,22,0.12)]'
                      : 'hover:border-[#2563EB]/40 hover:shadow-[0_16px_32px_-14px_rgba(37,99,235,0.12)]'
                  } ${spanClass}`}
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
                      isOrange ? 'bg-[#F97316]' : 'bg-[#2563EB]'
                    }`}
                  />
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                      index % 2 === 0 ? 'rotate-6' : '-rotate-6'
                    } ${isOrange ? 'bg-[#F97316]/10' : 'bg-[#2563EB]/8'}`}
                  />

                  <div
                    className={`relative z-10 flex h-full ${
                      isWide
                        ? 'flex-col justify-between gap-6 sm:flex-row sm:items-center'
                        : 'flex-col justify-between'
                    }`}
                  >
                    <div className={isWide ? 'max-w-lg' : ''}>
                      <div
                        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border bg-white shadow-2xs transition-transform duration-200 group-hover:-rotate-3 ${
                          isOrange
                            ? 'border-[#F97316]/25 text-[#F97316]'
                            : 'border-[#2563EB]/20 text-[#2563EB]'
                        }`}
                      >
                        <Icon className="h-9 w-9" strokeWidth={1.7} />
                      </div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-[#111827] sm:text-xl">
                        {audience.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#64748B] sm:text-base">
                        {audience.description}
                      </p>
                    </div>

                    {isWide && (
                      <div
                        aria-hidden="true"
                        className="hidden h-28 w-28 shrink-0 rotate-6 flex-col items-center justify-center gap-2 rounded-2xl border border-[#F97316]/25 bg-white p-4 shadow-xs lg:flex"
                      >
                        <div className="h-2.5 w-14 rounded-full bg-[#F97316]" />
                        <div className="h-2.5 w-10 rounded-full bg-[#2563EB]" />
                        <div className="h-2.5 w-12 rounded-full bg-[#E5E7EB]" />
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};
