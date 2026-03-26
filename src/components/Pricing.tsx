import React from 'react';

import LazyShow from './LazyShow';

const PRICING_MODELS = [
  {
    model: 'CPS',
    label: 'Cost Per Sale',
    description:
      'You pay only when a conversion is confirmed. Pure performance accountability.',
    highlight: false,
  },
  {
    model: 'RevShare',
    label: 'Revenue Share',
    description:
      'A percentage of generated revenue — aligning our incentives directly with your growth.',
    highlight: true,
  },
  {
    model: 'CPL',
    label: 'Cost Per Lead',
    description:
      'Pay per qualified lead delivered to your funnel. Predictable scaling.',
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'rgba(255,255,255,0.02)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              Flexible Models
            </p>
            <h2
              className="font-bold text-white"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
              }}
            >
              PRICING MODELS
            </h2>
            <div
              className="mx-auto mt-5 h-px w-24"
              style={{
                background: 'linear-gradient(90deg, #00D4FF, transparent)',
              }}
            />
          </div>
        </LazyShow>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_MODELS.map((item) => (
            <LazyShow key={item.model}>
              <div
                className="relative flex flex-col p-8 rounded-xl transition-all duration-300 h-full"
                style={{
                  background: item.highlight
                    ? 'rgba(0, 212, 255, 0.07)'
                    : 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: `1px solid ${
                    item.highlight
                      ? 'rgba(0,212,255,0.2)'
                      : 'rgba(255,255,255,0.08)'
                  }`,
                  borderTop: '2px solid #00D4FF',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-6px)';
                  el.style.boxShadow = '0 12px 40px rgba(0, 212, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                {item.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: '#00D4FF',
                      color: '#0A0F1E',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    POPULAR
                  </div>
                )}

                <div
                  className="text-4xl font-bold mb-1"
                  style={{ color: '#00D4FF', fontFamily: 'Syne, sans-serif' }}
                >
                  {item.model}
                </div>
                <div
                  className="text-sm font-medium mb-6"
                  style={{
                    color: '#A0AEC0',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {item.label}
                </div>

                <div
                  className="h-px mb-6"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                />

                <p
                  className="leading-relaxed flex-1"
                  style={{
                    color: '#A0AEC0',
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: 1.75,
                  }}
                >
                  {item.description}
                </p>

                <button
                  onClick={scrollToContact}
                  className="mt-8 w-full py-3 rounded text-sm font-semibold transition-all duration-200 focus:outline-none"
                  style={{
                    border: '1px solid #00D4FF',
                    color: '#00D4FF',
                    background: 'transparent',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      '#00D4FF';
                    (e.currentTarget as HTMLButtonElement).style.color =
                      '#0A0F1E';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      'transparent';
                    (e.currentTarget as HTMLButtonElement).style.color =
                      '#00D4FF';
                  }}
                >
                  Get Started
                </button>
              </div>
            </LazyShow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
