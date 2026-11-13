/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactModal } from './components/ContactModal';
import { ContactSection } from './components/ContactSection';
import { DemoSection } from './components/DemoSection';
import { FaqSection } from './components/FaqSection';
import { FeaturesBento } from './components/FeaturesBento';
import { FinalCta } from './components/FinalCta';
import { Footer, ResourceTopic } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Navbar } from './components/Navbar';
import { PricingSection } from './components/PricingSection';
import { ResourceModal } from './components/ResourceModal';
import { TechnologySection } from './components/TechnologySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhoWeServe } from './components/WhoWeServe';
import { WhyChooseSection } from './components/WhyChooseSection';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'get-started' | 'contact';
    plan?: string;
  }>({
    isOpen: false,
    mode: 'get-started',
  });

  const [resourceTopic, setResourceTopic] = useState<ResourceTopic | null>(null);
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuotaExceeded = () => {
      setMapsQuotaExceeded(true);
    };
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () =>
      window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
  }, []);

  const openModal = (mode: 'get-started' | 'contact', plan?: string) => {
    setModalState({ isOpen: true, mode, plan });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] overflow-x-clip">
      {mapsQuotaExceeded && (
        <div className="sticky top-0 z-50 border-b border-amber-200 bg-amber-50 px-4 py-2.5 text-center text-xs text-amber-900 shadow-sm md:text-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-950 underline hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar onOpenModal={openModal} />

      <main>
        {/* Hero Section */}
        <Hero onOpenModal={openModal} />

        {/* About Istrava */}
        <AboutSection />

        {/* Platform Features (Bento Grid) */}
        <FeaturesBento />

        {/* Interactive Demo Section */}
        <DemoSection />

        {/* How It Works */}
        <HowItWorks />

        {/* AI & Technology */}
        <TechnologySection />

        {/* Who We Serve (Bento Grid) */}
        <WhoWeServe />

        {/* Why Choose Istrava (Split + Bento) */}
        <WhyChooseSection />

        {/* Testimonials / What Teams Can Expect */}
        <TestimonialsSection />

        {/* Pricing */}
        <PricingSection onSelectPlan={openModal} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Interactive Map Section (above Final CTA) */}
        <ContactSection />

        {/* Final Call to Action */}
        <FinalCta onOpenModal={openModal} />
      </main>

      {/* Footer */}
      <Footer onOpenResource={(topic) => setResourceTopic(topic)} />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        initialPlan={modalState.plan}
        onClose={closeModal}
      />

      <ResourceModal
        topic={resourceTopic}
        onClose={() => setResourceTopic(null)}
      />
    </div>
  );
}
