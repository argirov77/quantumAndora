import React from 'react';

const MainHero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/images/hero-bg.jpg"
        alt="Quantum Advertising team"
        loading="eager"
        // @ts-ignore fetchpriority is a valid HTML attribute
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(10, 15, 30, 0.65)', zIndex: 1 }}
      />

      {/* Content */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-3xl">
          {/* Label */}
          <p
            className="text-sm font-medium tracking-widest uppercase mb-6"
            style={{
              color: '#00D4FF',
              fontFamily: 'DM Sans, sans-serif',
              letterSpacing: '0.2em',
            }}
          >
            Performance Marketing Agency — Andorra
          </p>

          {/* H1 */}
          <h1
            className="font-bold text-white leading-tight mb-6"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.1,
            }}
          >
            SCALE YOUR BRAND WITH{' '}
            <span style={{ color: '#00D4FF' }}>PRECISION MARKETING</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: '#A0AEC0', fontFamily: 'DM Sans, sans-serif' }}
          >
            Quantum Advertising delivers data-driven affiliate marketing
            solutions that connect brands with their ideal audience — at scale.
          </p>

          {/* CTA */}
          <button
            onClick={scrollToContact}
            className="inline-block px-8 py-4 rounded text-base font-semibold transition-all duration-200 focus:outline-none"
            style={{
              background: '#00D4FF',
              color: '#0A0F1E',
              fontFamily: 'DM Sans, sans-serif',
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 45px rgba(0, 212, 255, 0.55)';
              (e.currentTarget as HTMLButtonElement).style.transform =
                'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 30px rgba(0, 212, 255, 0.3)';
              (e.currentTarget as HTMLButtonElement).style.transform =
                'translateY(0)';
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Decorative metrics */}
        <div
          className="absolute bottom-16 right-8 hidden lg:flex flex-col gap-4"
          style={{ zIndex: 2 }}
        >
          {[
            { value: '98%', label: 'Client Retention' },
            { value: '3B+', label: 'Impressions Delivered' },
          ].map((metric) => (
            <div
              key={metric.label}
              className="text-right"
              style={{
                borderRight: '2px solid #00D4FF',
                paddingRight: '1rem',
              }}
            >
              <div
                className="text-3xl font-bold text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {metric.value}
              </div>
              <div
                className="text-sm"
                style={{ color: '#A0AEC0', fontFamily: 'DM Sans, sans-serif' }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0F1E)',
          zIndex: 2,
        }}
      />
    </section>
  );
};

export default MainHero;
