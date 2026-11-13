import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  accentColor?: 'blue' | 'orange';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  accentColor = 'blue',
}) => {
  const isCenter = align === 'center';
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`${
        isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'
      }`}
    >
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight ${
            accentColor === 'orange' ? 'text-[#F97316]' : 'text-[#2563EB]'
          }`}
        >
          <span
            aria-hidden="true"
            className={`inline-block h-2.5 w-2.5 rotate-12 rounded-[2px] ${
              accentColor === 'orange' ? 'bg-[#F97316]' : 'bg-[#2563EB]'
            }`}
          />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-[#111827] text-balance sm:text-4xl">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className={`mt-4 flex items-center gap-1.5 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="h-1 w-9 rounded-full bg-[#2563EB]" />
        <span className="h-1 w-3 rounded-full bg-[#F97316]" />
      </div>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#64748B] sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};
