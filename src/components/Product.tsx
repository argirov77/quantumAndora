import React from 'react';

import LazyShow from './LazyShow';

const TRAFFIC_SOURCES = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    name: 'Affiliate Network',
    description:
      'Our core channel — a curated network of publishers promoting your offers via sponsored reviews and content. Commissions are tied to real conversions.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    name: 'Google Ads',
    description:
      'Search and display campaigns at scale. Unmatched targeting depth and intent-driven traffic.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    name: 'Meta (Facebook / Instagram)',
    description:
      'Social audience targeting to build brand awareness and capture demand across demographics.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
    name: 'TikTok',
    description:
      "Influencer and paid video placements on the world's fastest-growing platform.",
  },
];

const Product: React.FC = () => {
  return (
    <section
      id="traffic"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: '#0A0F1E' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <LazyShow>
          <div className="mb-14">
            <p
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{
                color: '#00D4FF',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.2em',
              }}
            >
              Where We Drive Traffic From
            </p>
            <h2
              className="font-bold text-white mb-5"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
              }}
            >
              TRAFFIC SOURCES
            </h2>
            <div
              className="h-px w-24"
              style={{
                background: 'linear-gradient(90deg, #00D4FF, transparent)',
              }}
            />
          </div>
        </LazyShow>

        {/* Rows */}
        <div className="flex flex-col">
          {TRAFFIC_SOURCES.map((source) => (
            <LazyShow key={source.name}>
              <div
                className="flex items-start gap-6 py-6 px-4 rounded-xl transition-all duration-200 cursor-default"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = 'rgba(0, 212, 255, 0.05)';
                  el.style.paddingLeft = '1.5rem';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = 'transparent';
                  el.style.paddingLeft = '1rem';
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg"
                  style={{ background: 'rgba(0,212,255,0.1)' }}
                >
                  {source.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold text-white text-lg mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {source.name}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: '#A0AEC0',
                      fontFamily: 'DM Sans, sans-serif',
                      lineHeight: 1.7,
                    }}
                  >
                    {source.description}
                  </p>
                </div>
                <div
                  className="ml-auto flex-shrink-0 hidden sm:flex items-center"
                  style={{ color: '#00D4FF', opacity: 0.5 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
            </LazyShow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
