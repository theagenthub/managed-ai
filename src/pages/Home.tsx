import React from 'react';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import SecurityCompliance from '../components/SecurityCompliance';
import Services from '../components/Services';
import SupportedModels from '../components/SupportedModels';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Metrics />
      <SecurityCompliance />
      <Services />
      <SupportedModels />
      <Features />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;

