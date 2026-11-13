import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/landingData';
import { IstravaLogo } from './IstravaLogo';

interface NavbarProps {
  onOpenModal: (mode: 'get-started' | 'contact', plan?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Left: Brand */}
        <a
          href="#home"
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
          aria-label="Istrava home"
        >
          <IstravaLogo />
        </a>

        {/* Center: Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 lg:flex xl:gap-7"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm font-medium text-[#64748B] transition-colors duration-150 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] whitespace-nowrap shrink-0"
            >
              <span>{item.label}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[#2563EB] transition-transform duration-150 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Right: Contact & Get Started */}
        <div className="hidden items-center gap-4 lg:flex shrink-0">
          <a
            href="#contact"
            className="rounded-lg px-3 py-2 text-sm font-medium text-[#64748B] transition-colors duration-150 hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] whitespace-nowrap shrink-0"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => onOpenModal('get-started')}
            className="cursor-pointer rounded-xl bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-150 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] whitespace-nowrap shrink-0"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-[#E5E7EB] text-[#111827] transition-colors hover:bg-[#F8FAFF] focus-visible:outline-2 focus-visible:outline-[#2563EB] lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#E5E7EB] bg-white px-4 pb-6 pt-4 shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[#111827] transition-colors hover:bg-[#F8FAFF] hover:text-[#2563EB]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-[#E5E7EB] pt-4">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-center text-sm font-semibold text-[#111827] transition-colors hover:bg-[#F8FAFF]"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenModal('get-started');
              }}
              className="w-full cursor-pointer rounded-xl bg-[#2563EB] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
