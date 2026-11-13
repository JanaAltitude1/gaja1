import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TEAM_EXPECTATIONS } from '../data/landingData';
import { SectionHeading } from './SectionHeading';

export const TestimonialsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What QA Teams Need"
          title="What Teams Can Expect from Istrava."
          description="Built around the needs of modern software testing and development teams."
          align="center"
          accentColor="orange"
        />

        {/* Horizontal scroll carousel on mobile, clean 3-column grid on desktop */}
        <div className="mt-14 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {TEAM_EXPECTATIONS.map((item, index) => {
            const isBlueCard = index === 1;

            return (
              <motion.article
                key={item.perspective}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative flex w-[85vw] max-w-[360px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl border bg-white p-7 shadow-[0_6px_24px_-12px_rgba(17,24,39,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-md md:w-auto md:max-w-none md:shrink ${
                  isBlueCard
                    ? 'border-[#2563EB]/30 md:-translate-y-2 hover:border-[#2563EB]/55'
                    : 'border-[#E5E7EB] hover:border-[#F97316]/45'
                }`}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:-rotate-6 ${
                        isBlueCard
                          ? 'bg-[#2563EB]/10 text-[#2563EB]'
                          : 'bg-[#F97316]/12 text-[#F97316]'
                      }`}
                    >
                      <Quote className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <div
                      aria-hidden="true"
                      className={`h-3 w-3 rotate-12 rounded-[3px] ${
                        isBlueCard ? 'bg-[#F97316]/40' : 'bg-[#2563EB]/30'
                      }`}
                    />
                  </div>

                  <p className="text-base leading-relaxed text-[#111827]">
                    “{item.statement}”
                  </p>
                </div>

                <div className="mt-7 border-t border-[#E5E7EB] pt-5">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold ${
                        isBlueCard
                          ? 'bg-[#F97316]/12 text-[#F97316]'
                          : 'bg-[#2563EB]/10 text-[#2563EB]'
                      }`}
                    >
                      {item.perspective
                        .split(' ')
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join('')}
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-[#111827]">
                        {item.perspective}
                      </div>
                      <div className="text-xs text-[#64748B]">
                        {item.context} · {item.focusLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
