import React from 'react';
import AdmissionSection from './AdmissionSection';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section bg-blue-100 py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Welcome to MIRACLE IT CAREER ACADEMY
      </h1>
      <p className="text-xl font-bold text-gray-700 mb-6">
        #1 Education Institute In Bhopal With Highest Number Of Placements
      </p>
        <AdmissionSection />
    </section>
  );
};

export default HeroSection;
