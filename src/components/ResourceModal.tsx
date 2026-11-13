import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ResourceTopic } from './Footer';

interface ResourceModalProps {
  topic: ResourceTopic | null;
  onClose: () => void;
}

const RESOURCE_CONTENT: Record<
  ResourceTopic,
  { title: string; subtitle: string; body: string[] }
> = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Istrava Data Stewardship Overview',
    body: [
      'Istrava respects the privacy of software teams and organizations visiting istrava.net. Contact details submitted through our inquiry forms are used solely to respond to product requests and onboarding questions.',
      'We do not sell or distribute visitor information to third-party brokers. For privacy inquiries, reach out to contact@istrava.net.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    subtitle: 'Platform Usage & Service Terms',
    body: [
      'Access to the Istrava platform is governed by subscription terms tailored to Starter, Professional, and Enterprise organizations.',
      'Proposed AI-assisted roadmap capabilities shown on our site represent architectural evaluations and are subject to release availability.',
    ],
  },
  documentation: {
    title: 'Documentation',
    subtitle: 'Getting Started with Istrava QA Management',
    body: [
      'Istrava organizes software quality workflows around five connected layers: Testing Projects, Structured Test Cases, Test Suites, Execution Tracking, and Defect Management.',
      'Comprehensive setup guides and onboarding playbooks are provided to early access and enterprise teams upon workspace activation.',
    ],
  },
};

export const ResourceModal: React.FC<ResourceModalProps> = ({
  topic,
  onClose,
}) => {
  useEffect(() => {
    if (!topic) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [topic, onClose]);

  if (!topic) return null;

  const content = RESOURCE_CONTENT[topic];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/45 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resource-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close resource dialog"
          className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#E5E7EB] text-[#64748B] transition-colors hover:bg-[#F8FAFF] hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-[#2563EB]"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-xs font-semibold tracking-tight text-[#2563EB]">
          Istrava Resources
        </p>
        <h3
          id="resource-modal-title"
          className="mt-1 font-display text-2xl font-bold text-[#111827]"
        >
          {content.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#64748B]">
          {content.subtitle}
        </p>

        <div className="mt-5 space-y-3 border-t border-[#E5E7EB] pt-5 text-sm leading-relaxed text-[#64748B]">
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-7 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
