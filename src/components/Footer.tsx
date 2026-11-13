import React from 'react';
import { Globe, Mail } from 'lucide-react';
import { IstravaLogo } from './IstravaLogo';

export type ResourceTopic = 'privacy' | 'terms' | 'documentation';

interface FooterProps {
  onOpenResource: (topic: ResourceTopic) => void;
}

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Technology', href: '#technology' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
];

export const Footer: React.FC<FooterProps> = ({ onOpenResource }) => {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#F8FAFF] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
            >
              <IstravaLogo />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#64748B]">
              Istrava is a centralized Software Testing and Quality Assurance
              Management Platform built for modern software teams.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-[#111827]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#64748B] transition-colors hover:text-[#2563EB]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-[#64748B] transition-colors hover:text-[#2563EB]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-[#111827]">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenResource('privacy')}
                  className="cursor-pointer text-left text-[#64748B] transition-colors hover:text-[#2563EB]"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenResource('terms')}
                  className="cursor-pointer text-left text-[#64748B] transition-colors hover:text-[#2563EB]"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenResource('documentation')}
                  className="cursor-pointer text-left text-[#64748B] transition-colors hover:text-[#2563EB]"
                >
                  Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-[#111827]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#64748B]">
              <li>
                <a
                  href="mailto:contact@istrava.net"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#2563EB]"
                >
                  <Mail className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                  <span>contact@istrava.net</span>
                </a>
              </li>
              <li>
                <a
                  href="https://istrava.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#2563EB]"
                >
                  <Globe className="h-4 w-4 text-[#F97316]" aria-hidden="true" />
                  <span>istrava.net</span>
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://istrava.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Istrava on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#64748B] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:text-[#2563EB]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://istrava.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Istrava on GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#64748B] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#F97316]/50 hover:text-[#F97316]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a
                href="https://istrava.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Istrava on X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#64748B] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#2563EB]/45 hover:text-[#2563EB]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E5E7EB] pt-8 text-xs text-[#64748B] sm:flex-row">
          <p>Copyright &copy; 2026 Istrava. All rights reserved.</p>
          <p>Software Testing &amp; Quality Assurance Management Platform</p>
        </div>
      </div>
    </footer>
  );
};
