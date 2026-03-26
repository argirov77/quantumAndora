import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Features from '../components/Features';
import Header from '../components/Header';
import MainHero from '../components/MainHero';
import Pricing from '../components/Pricing';
import Product from '../components/Product';

const HomePage: React.FC = () => {
  return (
    <div style={{ background: '#0A0F1E' }}>
      <Header />
      <MainHero />
      <About />
      <Features />
      <Product />
      <Pricing />
      <Analytics />
    </div>
  );
};

export default HomePage;
