import React from "react";
import image from "../assets/image.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top section with logos and title */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-12 py-4 border-b gap-4 sm:gap-0">
        <img src={image} alt="Logo Left" className="h-12 sm:h-16 w-auto" />

        <div className="text-center">
          <h1 className="text-2xl sm:text-6xl font-extrabold text-blue-900 tracking-wide">
            MIRACLE IT CAREER ACADEMY
          </h1>
          <p className="text-xs sm:text-xl sm:font-bold text-gray-600 mt-1">
            Empowering IT Professionals
          </p>
        </div>

        <img src={image} alt="Logo Right" className="h-12 sm:h-16 w-auto" />
      </div>

      {/* Course offerings in two rows */}
      <div className="bg-orange-500 text-white font-semibold text-xs sm:text-sm px-2 sm:px-8 py-2">
        <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:justify-between">
          {/* First Row */}
          <ul>
            <li>Introduction to Programming (C/C++)</li>
            <li>Java: SpringBoot</li>
          </ul>
          <ul>
            <li>Full Stack Web Development</li>
            <li>DevOps Certification</li>
          </ul>
          <ul>
            <li>AI and Machine Learning</li>
            <li>Generative AI Certification</li>
          </ul>
          <ul>
            <li>Data Analytics</li>
            <li>Data Science</li>
          </ul>
          <ul>
            <li>Cloud Computing</li>
            <li>Big Data Hadoop Certification</li>
          </ul>
          <ul>
            <li>Software Testing Certification</li>
            <li>Cyber Security & Ethical Hacking</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
