import React, { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  mode: 'get-started' | 'contact';
  initialPlan?: string;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  mode,
  initialPlan,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [planInterest, setPlanInterest] = useState(initialPlan || 'Professional');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPlanInterest(initialPlan || 'Professional');
      setSubmitted(false);
      setError('');
    }
  }, [isOpen, initialPlan, mode]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setError('Please enter your full name.');
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid work email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/45 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#E5E7EB] text-[#64748B] transition-colors hover:bg-[#F8FAFF] hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-[#2563EB]"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3
              id="contact-modal-title"
              className="mt-5 font-display text-2xl font-bold text-[#111827]"
            >
              Request Received
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B] sm:text-base">
              Thank you, <span className="font-semibold text-[#111827]">{name}</span>. Our team will follow up at{' '}
              <span className="font-semibold text-[#111827]">{email}</span> regarding{' '}
              {mode === 'get-started' ? `the ${planInterest} plan` : 'your inquiry'}.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-7 inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-xl bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xs font-semibold tracking-tight text-[#2563EB]">
              {mode === 'get-started' ? 'Early Access & Onboarding' : 'Contact Istrava'}
            </p>
            <h3
              id="contact-modal-title"
              className="mt-1 font-display text-2xl font-bold text-[#111827]"
            >
              {mode === 'get-started'
                ? 'Get Started with Istrava'
                : 'Connect with Our Team'}
            </h3>
            <p className="mt-2 text-sm text-[#64748B]">
              Share your details below and we will reach out to help organize your QA workflow.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label
                  htmlFor="istrava-name"
                  className="block text-sm font-medium text-[#111827]"
                >
                  Full Name
                </label>
                <input
                  id="istrava-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="istrava-email"
                  className="block text-sm font-medium text-[#111827]"
                >
                  Work Email
                </label>
                <input
                  id="istrava-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="istrava-company"
                    className="block text-sm font-medium text-[#111827]"
                  >
                    Company / Team
                  </label>
                  <input
                    id="istrava-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Software"
                    className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="istrava-plan"
                    className="block text-sm font-medium text-[#111827]"
                  >
                    Plan Interest
                  </label>
                  <select
                    id="istrava-plan"
                    value={planInterest}
                    onChange={(e) => setPlanInterest(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                  >
                    <option value="Starter">Starter</option>
                    <option value="Professional">Professional</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="istrava-message"
                  className="block text-sm font-medium text-[#111827]"
                >
                  How can we help?
                </label>
                <textarea
                  id="istrava-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your team size or QA workflow goals..."
                  className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs font-medium text-[#F97316]">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="cursor-pointer rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-sm font-medium text-[#64748B] transition-colors hover:bg-[#F8FAFF] hover:text-[#111827]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1D4ED8]"
                >
                  {mode === 'get-started' ? 'Request Access' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
