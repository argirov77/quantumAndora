import React from 'react';

import LazyShow from './LazyShow';

const AboutCard: React.FC<{
  imgSrc: string;
  imgAlt: string;
  heading: string;
  body: string;
  reverse?: boolean;
}> = ({ imgSrc, imgAlt, heading, body, reverse }) => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 items-center`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          className="w-full h-72 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
          style={{ borderRadius: '12px' }}
        />
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="w-12 h-0.5 mb-6" style={{ background: '#00D4FF' }} />
        <h2
          className="font-bold text-white mb-5"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            lineHeight: 1.15,
          }}
        >
          {heading}
        </h2>
        <p
          className="leading-relaxed mb-8"
          style={{
            color: '#A0AEC0',
            fontFamily: 'DM Sans, sans-serif',
            lineHeight: 1.8,
          }}
        >
          {body}
        </p>
        <button
          onClick={scrollToContact}
          className="self-start px-6 py-3 text-sm font-semibold rounded transition-all duration-200 focus:outline-none"
          style={{
            border: '1px solid #00D4FF',
            color: '#00D4FF',
            background: 'transparent',
            fontFamily: 'DM Sans, sans-serif',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = '#00D4FF';
            (e.currentTarget as HTMLButtonElement).style.color = '#0A0F1E';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              'transparent';
            (e.currentTarget as HTMLButtonElement).style.color = '#00D4FF';
          }}
        >
          Tell me more
        </button>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: '#0A0F1E' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <LazyShow>
          <AboutCard
            imgSrc="/assets/images/about1.jpg"
            imgAlt="Quantum Advertising team"
            heading="ABOUT QUANTUM ADVERTISING"
            body="We are a performance-driven advertising agency specialising in CPA and CPS affiliate models. Our mission is to connect advertisers with high-intent audiences through a curated ecosystem of traffic channels and partner networks."
          />
        </LazyShow>

        <LazyShow>
          <AboutCard
            imgSrc="/assets/images/about2.jpg"
            imgAlt="Quantum Advertising edge"
            heading="OUR EDGE IN THE MARKET"
            body="Quantum's strength lies in our proprietary review network, hand-picked affiliate partners, and a multi-channel traffic engine. We combine paid media, SEO content, and social placements into one seamless performance loop."
            reverse
          />
        </LazyShow>
      </div>
    </section>
  );
};

export default About;
