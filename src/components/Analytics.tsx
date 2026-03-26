import React from 'react';

import LazyShow from './LazyShow';

const Contact: React.FC = () => {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: '#0A0F1E' }}
      >
        <div className="max-w-7xl mx-auto">
          <LazyShow>
            <div className="max-w-2xl">
              <p
                className="text-sm font-medium tracking-widest uppercase mb-4"
                style={{
                  color: '#00D4FF',
                  fontFamily: 'DM Sans, sans-serif',
                  letterSpacing: '0.2em',
                }}
              >
                Get in Touch
              </p>
              <h2
                className="font-bold text-white mb-4"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.1,
                }}
              >
                LET&apos;S BUILD SOMETHING BIG
              </h2>
              <p
                className="mb-12 text-lg"
                style={{ color: '#A0AEC0', fontFamily: 'DM Sans, sans-serif' }}
              >
                Ready to scale? Get in touch with the Quantum team.
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-6 mb-10">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,212,255,0.1)' }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00D4FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-1"
                      style={{
                        color: '#00D4FF',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      Address
                    </p>
                    <address
                      className="not-italic leading-relaxed"
                      style={{
                        color: '#A0AEC0',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      Carrer Bisbe Príncep Iglesias, Núm. 1, 8 A<br />
                      Andorra la Vella
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,212,255,0.1)' }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00D4FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-1"
                      style={{
                        color: '#00D4FF',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      Phone
                    </p>
                    <p
                      style={{
                        color: '#A0AEC0',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      +376 333364
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,212,255,0.1)' }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00D4FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-1"
                      style={{
                        color: '#00D4FF',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:main@quantumads.online"
                      className="transition-colors duration-200"
                      style={{
                        color: '#A0AEC0',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          '#00D4FF';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          '#A0AEC0';
                      }}
                    >
                      main@quantumads.online
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <a
                href="mailto:main@quantumads.online"
                className="inline-block px-8 py-4 rounded text-base font-semibold transition-all duration-200"
                style={{
                  background: '#00D4FF',
                  color: '#0A0F1E',
                  fontFamily: 'DM Sans, sans-serif',
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.25)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    '0 0 45px rgba(0, 212, 255, 0.45)';
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    '0 0 30px rgba(0, 212, 255, 0.25)';
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    'translateY(0)';
                }}
              >
                Send Us a Message
              </a>
            </div>
          </LazyShow>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Logo */}
            <div>
              <div
                className="font-bold text-white"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '1.2rem',
                  letterSpacing: '0.08em',
                }}
              >
                QUANTUM
              </div>
              <div
                className="text-xs tracking-widest uppercase mt-0.5"
                style={{
                  color: '#00D4FF',
                  fontFamily: 'DM Sans, sans-serif',
                  letterSpacing: '0.22em',
                }}
              >
                advertising
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap gap-6">
              {[
                '#about',
                '#advantages',
                '#traffic',
                '#pricing',
                '#contact',
              ].map((href, i) => {
                const labels = [
                  'About',
                  'Advantages',
                  'Traffic Sources',
                  'Pricing',
                  'Contact',
                ];
                return (
                  <button
                    key={href}
                    onClick={() => {
                      const el = document.querySelector(href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm transition-colors duration-200 focus:outline-none"
                    style={{
                      color: '#A0AEC0',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        '#00D4FF';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        '#A0AEC0';
                    }}
                  >
                    {labels[i]}
                  </button>
                );
              })}
            </nav>
          </div>

          <div
            className="h-px my-8"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          />

          <p
            className="text-sm"
            style={{ color: '#A0AEC0', fontFamily: 'DM Sans, sans-serif' }}
          >
            © 2025 Quantum Advertising SLU. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
