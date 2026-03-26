import React, { Fragment, useEffect, useState } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Advantages', href: '#advantages' },
  { name: 'Traffic Sources', href: '#traffic' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string, close?: () => void) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (close) close();
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 15, 30, 0.92)'
          : 'rgba(10, 15, 30, 0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col leading-none focus:outline-none"
          >
            <span
              className="text-white font-display font-bold tracking-wider"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.4rem',
                letterSpacing: '0.1em',
              }}
            >
              QUANTUM
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                color: '#00D4FF',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.25em',
              }}
            >
              advertising
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((item) =>
              item.name === 'Contact' ? (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="px-5 py-2 rounded text-sm font-medium transition-all duration-200 focus:outline-none"
                  style={{
                    background: '#00D4FF',
                    color: '#0A0F1E',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      '#00b8db';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      '#00D4FF';
                  }}
                >
                  {item.name}
                </button>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm font-medium transition-colors duration-200 focus:outline-none"
                  style={{
                    color: '#A0AEC0',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      '#A0AEC0';
                  }}
                >
                  {item.name}
                </button>
              ),
            )}
          </nav>

          {/* Mobile burger */}
          <Popover className="md:hidden">
            {({ open, close }) => (
              <>
                <Popover.Button className="focus:outline-none text-white p-2">
                  {open ? (
                    <XIcon className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )}
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    className="absolute top-full left-0 right-0 mt-0"
                    style={{
                      background: 'rgba(10, 15, 30, 0.97)',
                      backdropFilter: 'blur(20px)',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <nav className="flex flex-col px-6 py-4 space-y-1">
                      {NAV_LINKS.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => scrollTo(item.href, close)}
                          className="text-left py-3 text-base font-medium border-b focus:outline-none"
                          style={{
                            color: '#A0AEC0',
                            borderColor: 'rgba(255,255,255,0.06)',
                            fontFamily: 'DM Sans, sans-serif',
                          }}
                        >
                          {item.name}
                        </button>
                      ))}
                    </nav>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
