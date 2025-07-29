import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import CompaniesSection from '../components/CompaniesSection';
import StudentReviewsCarousel from '../components/StudentReviewsCarousel';
import PlacedStudentsCarousel from '../components/PlacedStudentsCarousel';
import Footer from '../components/Footer';

const MillenniumPage = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />
      <HeroSection />
      <CoursesSection />
      <CompaniesSection />
      <PlacedStudentsCarousel />
      <StudentReviewsCarousel />
      <Footer />
    </div>
  );
};

export default MillenniumPage;
