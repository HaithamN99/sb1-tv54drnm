import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Features from '../components/home/Features';
import Statistics from '../components/home/Statistics';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import Partners from '../components/home/Partners';
import FAQ from '../components/home/FAQ';
import Pricing from '../components/home/Pricing';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Statistics />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <FAQ />
      <Pricing />
      <Contact />
    </>
  );
};

export default HomePage;