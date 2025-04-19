"use client";

import React from 'react';
import HeroContent from './HeroContent';
import HeroActions from './HeroActions';
import HeroSearch from './HeroSearch';

const HeroSection = () => {
  return (
    <section className="hero-section flex items-center justify-center text-center text-white pt-16 pb-20 md:pb-24">
      <div className="px-6 max-w-4xl mx-auto">
        <HeroContent />
        <HeroActions />
        <HeroSearch />
      </div>
      {/* Basic styling for hero-section background */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          min-height: calc(100vh - 4rem);
          display: flex; 
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
