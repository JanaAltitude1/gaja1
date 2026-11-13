import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenModal: (mode: 'get-started' | 'contact') => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenModal }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-[#2563EB] px-6 py-14 text-center text-white shadow-[0_24px_56px_-18px_rgba(37,99,235,0.42)] sm:px-12 sm:py-20"
        >
          {/* Subtle Orange & Translucent Geometric Accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 -rotate-6 rounded-3xl border border-white/15 bg-white/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-8 h-52 w-52 rotate-12 rounded-3xl bg-[#F97316]/25"
          />
          <motion.div
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute right-12 top-10 hidden h-12 w-12 rotate-12 rounded-xl border-2 border-[#F97316]/80 sm:block"
          />
          <motion.div
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="pointer-events-none absolute bottom-10 left-14 hidden h-8 w-8 -rotate-6 rounded-lg bg-[#F97316]/80 sm:block"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Ready to Bring Clarity to Your QA Workflow?
            </h2>

            <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
              Organize testing activities, track defects, and gain better visibility
              into software quality with Istrava.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onOpenModal('get-started')}
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#2563EB] shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#F8FAFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onOpenModal('contact')}
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
