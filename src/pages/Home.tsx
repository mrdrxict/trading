import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Courses from '../components/sections/Courses';
import Mentorship from '../components/sections/Mentorship';
import Testimonials from '../components/sections/Testimonials';
import MarketInsights from '../components/sections/MarketInsights';
import TradingResources from '../components/sections/TradingResources';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Courses />
      <Mentorship />
      <Testimonials />
      <MarketInsights />
      <TradingResources />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;