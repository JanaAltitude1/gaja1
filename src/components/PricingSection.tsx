import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { PRICING_TIERS } from '../data/landingData';
import { SectionHeading } from './SectionHeading';

interface PricingSectionProps {
  onSelectPlan: (mode: 'get-started' | 'contact', plan: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="border-y border-[#E5E7EB]/80 bg-[#F8FAFF] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple Plans. Flexible Growth."
          description="Istrava follows a straightforward monthly per-user subscription model designed to scale cleanly from focused QA teams to enterprise IT organizations."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {PRICING_TIERS.map((tier, index) => {
            const isHighlighted = Boolean(tier.highlighted);
            const isEnterprise = tier.id === 'enterprise';

            return (
              <motion.article
                key={tier.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-200 hover:-translate-y-1 ${
                  isHighlighted
                    ? 'border-2 border-[#2563EB] bg-white shadow-[0_24px_50px_-16px_rgba(37,99,235,0.22)] lg:-my-2 lg:py-10'
                    : 'border border-[#E5E7EB] bg-white shadow-xs hover:border-[#F97316]/45 hover:shadow-md'
                }`}
              >
                {isHighlighted && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#F97316]"
                  />
                )}
                <div>
                  <div className="min-h-[22px]">
                    {tier.kicker && (
                      <p className="text-xs font-semibold tracking-tight text-[#F97316]">
                        {tier.kicker}
                      </p>
                    )}
                  </div>

                  <h3 className="mt-1 font-display text-2xl font-bold text-[#111827]">
                    {tier.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
                      {tier.statusLabel}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                    {tier.summary}
                  </p>

                  <ul className="mt-7 space-y-3.5 border-t border-[#E5E7EB] pt-6">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-[#111827]"
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isHighlighted ? 'text-[#2563EB]' : 'text-[#F97316]'
                          }`}
                          strokeWidth={2.4}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectPlan(
                        isEnterprise ? 'contact' : 'get-started',
                        tier.name
                      )
                    }
                    className={`inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] whitespace-nowrap ${
                      isHighlighted
                        ? 'bg-[#2563EB] text-white shadow-xs hover:bg-[#1D4ED8]'
                        : 'border border-[#E5E7EB] bg-white text-[#111827] hover:border-[#2563EB]/40 hover:bg-[#F8FAFF] hover:text-[#2563EB]'
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
