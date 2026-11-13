import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Bug,
  ChartNoAxesCombined,
  ClipboardList,
  FolderKanban,
  Layers,
  PlayCircle,
} from 'lucide-react';
import { FeatureItem, PLATFORM_FEATURES } from '../data/landingData';
import { BentoGrid } from './BentoGrid';
import { SectionHeading } from './SectionHeading';

const ICON_MAP = {
  FolderKanban,
  ClipboardList,
  Layers,
  PlayCircle,
  Bug,
  ChartNoAxesCombined,
};

const CardMicroVisual: React.FC<{ id: string }> = ({ id }) => {
  if (id === 'project-management') {
    return (
      <div
        aria-hidden="true"
        className="mt-6 grid grid-cols-3 gap-2.5 border-t border-[#E5E7EB]/80 pt-5"
      >
        <div className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFF] p-3">
          <div className="h-2 w-10 rounded-full bg-[#2563EB]" />
          <div className="mt-2 h-1.5 w-full rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFF] p-3">
          <div className="h-2 w-8 rounded-full bg-[#F97316]" />
          <div className="mt-2 h-1.5 w-4/5 rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFF] p-3">
          <div className="h-2 w-12 rounded-full bg-[#2563EB]/65" />
          <div className="mt-2 h-1.5 w-3/4 rounded-full bg-[#E5E7EB]" />
        </div>
      </div>
    );
  }

  if (id === 'test-case-management') {
    return (
      <div
        aria-hidden="true"
        className="mt-6 space-y-2 border-t border-[#E5E7EB]/80 pt-5"
      >
        <div className="flex items-center gap-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFF] px-3 py-2">
          <span className="h-2 w-2 rotate-45 rounded-[1px] bg-[#F97316]" />
          <span className="h-1.5 w-2/3 rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFF] px-3 py-2">
          <span className="h-2 w-2 rotate-45 rounded-[1px] bg-[#2563EB]" />
          <span className="h-1.5 w-1/2 rounded-full bg-[#E5E7EB]" />
        </div>
      </div>
    );
  }

  if (id === 'test-suite-management') {
    return (
      <div
        aria-hidden="true"
        className="mt-6 flex items-center gap-2 border-t border-[#E5E7EB]/80 pt-5"
      >
        <span className="h-2.5 flex-1 rounded-md bg-[#2563EB]/20" />
        <span className="h-2.5 flex-1 rounded-md bg-[#2563EB]/45" />
        <span className="h-2.5 flex-1 rounded-md bg-[#2563EB]" />
      </div>
    );
  }

  if (id === 'test-execution-tracking') {
    return (
      <div
        aria-hidden="true"
        className="mt-6 flex h-2.5 w-full overflow-hidden rounded-full bg-[#E5E7EB] mt-6 border-t border-transparent"
      >
        <span className="w-3/5 bg-[#2563EB]" />
        <span className="w-1/5 bg-[#F97316]" />
        <span className="w-1/5 bg-[#64748B]/35" />
      </div>
    );
  }

  if (id === 'defect-bug-management') {
    return (
      <div
        aria-hidden="true"
        className="mt-6 flex items-center gap-2 border-t border-[#E5E7EB]/80 pt-5"
      >
        <span className="h-2 w-10 rounded-full bg-[#F97316]" />
        <span className="h-2 w-7 rounded-full bg-[#F97316]/55" />
        <span className="h-2 w-12 rounded-full bg-[#2563EB]/30" />
      </div>
    );
  }

  return null;
};

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const prefersReducedMotion = useReducedMotion();
  const IconComponent = ICON_MAP[feature.iconName];
  const isOrange = feature.accent === 'orange';
  const isWideShowcase = feature.id === 'qa-reporting-analytics';
  const isLeadCard = feature.id === 'project-management';

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-[0_6px_24px_-10px_rgba(17,24,39,0.06)] transition-all duration-200 hover:-translate-y-1 ${
        isOrange
          ? 'hover:border-[#F97316]/45 hover:shadow-[0_18px_36px_-14px_rgba(249,115,22,0.14)]'
          : 'hover:border-[#2563EB]/40 hover:shadow-[0_18px_36px_-14px_rgba(37,99,235,0.14)]'
      } sm:p-8 ${feature.spanClass} ${isWideShowcase ? 'md:col-span-2' : ''}`}
    >
      {/* Top primary/secondary hairline reveal on hover */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
          isOrange
            ? 'bg-gradient-to-r from-[#F97316] to-[#2563EB]'
            : 'bg-gradient-to-r from-[#2563EB] to-[#F97316]'
        }`}
      />

      {/* Subtle tilted geometric corner accent */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
          feature.tiltAngle
        } ${isOrange ? 'bg-[#F97316]/8' : 'bg-[#2563EB]/6'}`}
      />

      {isWideShowcase ? (
        <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="relative shrink-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 rotate-6 rounded-2xl bg-[#2563EB]/12 transition-transform duration-200 group-hover:rotate-12"
              />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2563EB]/15 bg-[#F8FAFF] text-[#2563EB] transition-transform duration-200 group-hover:-rotate-3">
                <IconComponent className="h-11 w-11" strokeWidth={1.7} />
              </div>
            </div>
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#64748B] sm:text-base">
                {feature.lineOne}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#64748B] sm:text-base">
                {feature.lineTwo}
              </p>
            </div>
          </div>

          {/* Geometric Analytics Bars & Trend Line Composition */}
          <div
            aria-hidden="true"
            className="hidden items-end gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFF] px-6 py-5 lg:flex shrink-0"
          >
            <div className="h-8 w-3.5 rounded-t-md bg-[#2563EB]/30 transition-all duration-200 group-hover:h-10" />
            <div className="h-12 w-3.5 rounded-t-md bg-[#2563EB]/60 transition-all duration-200 group-hover:h-14" />
            <div className="h-16 w-3.5 rounded-t-md bg-[#2563EB]" />
            <div className="h-10 w-3.5 rounded-t-md bg-[#F97316] transition-all duration-200 group-hover:h-12" />
            <div className="h-14 w-3.5 rounded-t-md bg-[#2563EB]/80" />
            <div className="h-18 w-3.5 rounded-t-md bg-[#F97316]/85" />
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <div className="relative mb-6 inline-block">
              <div
                aria-hidden="true"
                className={`absolute inset-0 rounded-2xl transition-transform duration-200 group-hover:rotate-12 ${
                  feature.tiltAngle
                } ${isOrange ? 'bg-[#F97316]/15' : 'bg-[#2563EB]/12'}`}
              />
              <div
                className={`relative flex items-center justify-center rounded-2xl border bg-[#F8FAFF] transition-transform duration-200 group-hover:-rotate-3 ${
                  isLeadCard ? 'h-16 w-16' : 'h-14 w-14'
                } ${
                  isOrange
                    ? 'border-[#F97316]/20 text-[#F97316]'
                    : 'border-[#2563EB]/15 text-[#2563EB]'
                }`}
              >
                <IconComponent
                  className={isLeadCard ? 'h-11 w-11' : 'h-10 w-10'}
                  strokeWidth={1.7}
                />
              </div>
            </div>

            <h3
              className={`font-display font-bold tracking-tight text-[#111827] ${
                isLeadCard ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
              }`}
            >
              {feature.title}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-[#64748B] sm:text-base">
              {feature.lineOne}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#64748B] sm:text-base">
              {feature.lineTwo}
            </p>
          </div>

          <CardMicroVisual id={feature.id} />
        </div>
      )}
    </motion.article>
  );
};

export const FeaturesBento: React.FC = () => {
  return (
    <section id="platform" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform Capabilities"
          title="Everything Your QA Workflow Needs."
          description="Manage every stage of your software testing lifecycle through one organized platform."
          align="center"
        />

        <div id="features" className="mt-14 scroll-mt-24">
          <BentoGrid>
            {PLATFORM_FEATURES.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};
