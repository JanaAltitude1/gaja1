import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { CheckCircle2, Globe, Mail, MapPin, Send } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface RegionalHub {
  id: string;
  region: string;
  city: string;
  timezone: string;
  coords: { lat: number; lng: number };
}

const REGIONAL_HUBS: RegionalHub[] = [
  {
    id: 'americas',
    region: 'Americas',
    city: 'San Francisco Bay Area',
    timezone: 'Pacific Time (PT)',
    coords: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 'emea',
    region: 'Europe & UK',
    city: 'London Tech Hub',
    timezone: 'Greenwich Mean Time (GMT)',
    coords: { lat: 51.5072, lng: -0.1276 },
  },
  {
    id: 'apac',
    region: 'Asia-Pacific',
    city: 'Singapore Hub',
    timezone: 'Singapore Time (SGT)',
    coords: { lat: 1.3521, lng: 103.8198 },
  },
];

interface HubMarkerProps {
  hub: RegionalHub;
}

const HubMarker: React.FC<HubMarkerProps> = ({ hub }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={hub.coords}
        title={`Istrava — ${hub.city}`}
        onClick={() => setInfoOpen(true)}
      >
        <Pin
          background="#2563EB"
          borderColor="#1D4ED8"
          glyphColor="#FFFFFF"
          scale={1.15}
        />
      </AdvancedMarker>

      {infoOpen && marker && (
        <InfoWindow
          anchor={marker}
          maxWidth={240}
          onCloseClick={() => setInfoOpen(false)}
        >
          <div className="p-1 text-[#111827]">
            <div className="font-display text-sm font-bold">
              Istrava · {hub.region}
            </div>
            <div className="mt-0.5 text-xs text-[#64748B]">{hub.city}</div>
            <div className="mt-1 text-[11px] font-medium text-[#2563EB]">
              {hub.timezone}
            </div>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export const ContactSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  const [selectedHubId, setSelectedHubId] = useState<string>('americas');
  const selectedHub =
    REGIONAL_HUBS.find((hub) => hub.id === selectedHubId) || REGIONAL_HUBS[0];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Request Product Demo');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid work email address.');
      return;
    }
    if (!message.trim()) {
      setError('Please share a brief note about your QA needs.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-[#E5E7EB]/80 bg-[#F8FAFF] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact & Global Presence"
          title="Connect with the Istrava Team."
          description="Have questions about QA workflows, enterprise rollouts, or early access? Send us a message or explore our regional coverage hubs."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-xs sm:p-9 lg:col-span-6"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#F97316]"
            />
            {submitted ? (
              <div className="my-auto py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-[#111827]">
                  Message Sent
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#64748B] sm:text-base">
                  Thank you, <span className="font-semibold text-[#111827]">{name}</span>.
                  We will reply to <span className="font-semibold text-[#111827]">{email}</span>{' '}
                  regarding <span className="font-medium">{topic}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-xl border border-[#E5E7EB] px-5 py-2.5 text-sm font-semibold text-[#111827] transition-colors hover:border-[#2563EB]/40 hover:text-[#2563EB]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-section-name"
                      className="block text-sm font-medium text-[#111827]"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-section-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jordan Taylor"
                      className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#64748B]/65 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-section-email"
                      className="block text-sm font-medium text-[#111827]"
                    >
                      Work Email
                    </label>
                    <input
                      id="contact-section-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jordan@company.com"
                      className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#64748B]/65 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-section-topic"
                    className="block text-sm font-medium text-[#111827]"
                  >
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-section-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                  >
                    <option value="Request Product Demo">Request Product Demo</option>
                    <option value="Enterprise Solutions">Enterprise Solutions</option>
                    <option value="Early Access Waitlist">Early Access Waitlist</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-section-message"
                    className="block text-sm font-medium text-[#111827]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-section-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your team size, testing goals, or questions..."
                    className="mt-1.5 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#64748B]/65 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-[#F97316]">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

            {/* Direct Business Contact Metadata */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E7EB] pt-5 text-xs text-[#64748B] sm:text-sm">
              <a
                href="mailto:contact@istrava.net"
                className="inline-flex items-center gap-2 font-medium text-[#111827] transition-colors hover:text-[#2563EB]"
              >
                <Mail className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                <span>contact@istrava.net</span>
              </a>
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#F97316]" aria-hidden="true" />
                <span>istrava.net</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Google Map with Regional Hubs */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-xs lg:col-span-6"
          >
            <div
              aria-hidden="true"
              className="h-1 w-full bg-gradient-to-r from-[#F97316] to-[#2563EB]"
            />
            {/* Hub Switcher Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E7EB] bg-white px-5 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                <MapPin className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                <span>Regional Coverage</span>
              </div>

              <div className="flex flex-wrap items-center gap-1 rounded-xl border border-[#E5E7EB] bg-[#F8FAFF] p-1">
                {REGIONAL_HUBS.map((hub) => (
                  <button
                    key={hub.id}
                    type="button"
                    onClick={() => setSelectedHubId(hub.id)}
                    className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                      selectedHubId === hub.id
                        ? 'bg-[#2563EB] text-white'
                        : 'text-[#64748B] hover:text-[#111827]'
                    }`}
                  >
                    {hub.region}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Map Viewport (Explicit Height Required per CF2) */}
            <div className="relative h-[360px] w-full flex-1 bg-[#F8FAFF] lg:min-h-[380px]">
              {mapsApiKey ? (
                <APIProvider apiKey={mapsApiKey} libraries={['marker']}>
                  <GoogleMap
                    key={selectedHub.id}
                    mapId="DEMO_MAP_ID"
                    internalUsageAttributionIds={[
                      'gmp_mcp_codeassist_v1_aistudio',
                    ]}
                    defaultCenter={selectedHub.coords}
                    defaultZoom={11}
                    gestureHandling="cooperative"
                    disableDefaultUI={false}
                    className="h-full w-full"
                  >
                    <HubMarker hub={selectedHub} />
                  </GoogleMap>
                </APIProvider>
              ) : (
                <div className="bg-dot-matrix flex h-full w-full flex-col items-center justify-center p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2563EB]/20 bg-white text-[#2563EB] shadow-xs">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-[#111827]">
                    {selectedHub.city}
                  </h4>
                  <p className="mt-1 text-sm text-[#64748B]">
                    {selectedHub.region} · {selectedHub.timezone}
                  </p>
                </div>
              )}
            </div>

            {/* Hub Footer Summary */}
            <div className="flex items-center justify-between gap-4 border-t border-[#E5E7EB] bg-[#F8FAFF]/70 px-5 py-3.5 text-xs text-[#64748B]">
              <span>
                Selected Hub:{' '}
                <strong className="font-semibold text-[#111827]">
                  {selectedHub.city}
                </strong>
              </span>
              <span>{selectedHub.timezone}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
