import React from 'react';

import LazyShow from './LazyShow';

const ADVANTAGES = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Precision Targeting',
    text: 'Age, gender, geo, device, keyword — granular audience segmentation for maximum ROI.',
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Quality Traffic',
    text: 'We blend Google Ads, Meta, and native formats to deliver engaged, conversion-ready visitors.',
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 .49-5" />
      </svg>
    ),
    title: 'Full-Cycle Campaigns',
    text: 'From content and reviews to retargeting and optimisation — we manage every stage.',
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Partner Network',
    text: "A vetted ecosystem of affiliates and publishers expanding your brand's digital footprint.",
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="advantages"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background image with strong overlay */}
      <img
        src="/assets/images/analitics.jpg"
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, opacity: 0.12 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(10, 15, 30, 0.88)', zIndex: 1 }}
      />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 2 }}>
        {/* Section header */}
        <LazyShow>
          <div className="text-center mb-16">
            <p
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{
                color: '#00D4FF',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.2em',
              }}
            >
              Why Quantum
            </p>
            <h2
              className="font-bold text-white"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
              }}
            >
              KEY ADVANTAGES
            </h2>
            <div
              className="mx-auto mt-5 h-px w-24"
              style={{
                background: 'linear-gradient(90deg, #00D4FF, transparent)',
              }}
            />
          </div>
        </LazyShow>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <LazyShow key={adv.title}>
              <div
                className="p-8 rounded-xl h-full flex flex-col gap-4 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transitionDelay: `${idx * 80}ms`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = 'rgba(0, 212, 255, 0.08)';
                  el.style.border = '1px solid rgba(0, 212, 255, 0.3)';
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = 'rgba(255,255,255,0.05)';
                  el.style.border = '1px solid rgba(255,255,255,0.1)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div className="mb-2">{adv.icon}</div>
                <h3
                  className="font-bold text-white text-lg"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {adv.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: '#A0AEC0',
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: 1.7,
                  }}
                >
                  {adv.text}
                </p>
              </div>
            </LazyShow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
