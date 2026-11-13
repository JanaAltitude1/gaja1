import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/landingData';
import { SectionHeading } from './SectionHeading';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  const toggleIndex = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Sticky Header Column */}
          <div className="lg:sticky lg:top-28 lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions."
              description="Clear answers about Istrava’s capabilities, supported teams, technology roadmap, and enterprise options."
              align="left"
            />

            <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFF] p-5">
              <div className="font-display text-sm font-bold text-[#111827]">
                Still have questions?
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-[#64748B] sm:text-sm">
                Reach out directly to our team for rollout guidance or product walkthroughs.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#F97316]"
              >
                <span>Go to Contact Section</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Accordion Column */}
          <div className="space-y-3.5 lg:col-span-8">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${idx}`;
              const buttonId = `faq-button-${idx}`;

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-150 ${
                    isOpen
                      ? 'border-[#2563EB]/45 shadow-xs'
                      : 'border-[#E5E7EB] hover:border-[#2563EB]/25'
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleIndex(idx)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#2563EB]"
                    >
                      <span className="flex items-center gap-3.5 font-display text-base font-semibold text-[#111827] sm:text-lg">
                        <span
                          className={`font-display text-xs font-bold tabular-nums ${
                            isOpen
                              ? 'text-[#2563EB]'
                              : idx % 2 === 1
                              ? 'text-[#F97316]'
                              : 'text-[#64748B]'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span>{item.question}</span>
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'rotate-180 text-[#2563EB]'
                            : 'rotate-0 text-[#64748B]'
                        }`}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={
                          prefersReducedMotion
                            ? { opacity: 1 }
                            : { opacity: 0, height: 0 }
                        }
                        animate={
                          prefersReducedMotion
                            ? { opacity: 1 }
                            : { opacity: 1, height: 'auto' }
                        }
                        exit={
                          prefersReducedMotion
                            ? { opacity: 0 }
                            : { opacity: 0, height: 0 }
                        }
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#E5E7EB]/70 px-6 pb-5 pt-4 text-sm leading-relaxed text-[#64748B] sm:text-base">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
