import React from 'react';
import { FaDownload, FaBook } from 'react-icons/fa';

const courses = [
  "Introduction to Programming (C/C++)",
  "Java: SpringBoot",
  "Full Stack Web Development",
  "DevOps Certification",
  "AI and Machine Learning",
  "Generative AI Certification",
  "Data Analytics",
  "Data Science",
  "Cloud Computing",
  "Big Data Hadoop Certification",
  "Software Testing Certification",
  "Cyber Security & Ethical Hacking"
];

const AdmissionPage = () => {
  return (
    <section className="bg-gradient-to-b bg-[#8e9baf] to-[#1f2f45] text-white py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border p-8 rounded-md">

        {/* Left: Course List */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">COURSES OFFERED</h2>
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li key={index} className="flex items-center">
                <FaBook className="text-yellow-400 mr-2" />
                {course}
              </li>
            ))}
          </ul>

          <p className="text-sm mt-4 text-yellow-300">
            Rated <strong>4.7/5</strong> ⭐ by 24,367 Students, Parents and Educators across India.
          </p>

          <button className="mt-4 bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-400 flex items-center">
            <FaDownload className="mr-2" />
            Download Brochure
          </button>
        </div>

        {/* Right: Admission Form */}
        <div className="bg-[#102243] p-6 rounded-md">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">REGISTER FOR ADMISSION 2025</h2>
            <form className="space-y-4">
              <div className="flex flex-col text-left">
                <label htmlFor="fullName" className="mb-1 text-sm font-medium text-white">Full Name</label>
                <input id="fullName" type="text" placeholder="Enter your full name here" required className="p-2 rounded bg-white text-black" />
              </div>
              <div className="flex flex-col text-left">
                <label htmlFor="mobile" className="mb-1 text-sm font-medium text-white">Mobile Number</label>
                <input id="mobile" type="text" placeholder="Enter your mobile number here" required className="p-2 rounded bg-white text-black" />
              </div>
              <div className="flex flex-col text-left">
                <label htmlFor="email" className="mb-1 text-sm font-medium text-white">E-mail</label>
                <input id="email" type="email" placeholder="Enter your e-mail ID here" required className="p-2 rounded bg-white text-black" />
              </div>
              <div className="flex flex-col text-left">
                <label htmlFor="city" className="mb-1 text-sm font-medium text-white">City</label>
                <input id="city" type="text" placeholder="Mention your city here" required className="p-2 rounded bg-white text-black" />
              </div>
              <div className="flex flex-col text-left">
                <label htmlFor="course" className="mb-1 text-sm font-medium text-white">Course</label>
                <select id="course" required className="p-2 rounded bg-white text-black">
                  <option value="">Select the course you want to pursue</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full bg-yellow-300 text-black py-2 rounded hover:bg-yellow-400">
                Get One-On-One Career Guidance
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-yellow-300 text-black mt-10 p-4 rounded-lg text-center text-sm font-semibold">
        <div>25+<br />Years In Education</div>
        <div>450+<br />Highly Skilled Faculties</div>
        <div>35000+<br />Students Network</div>
        <div>15000+<br />Campus Selections</div>
        <div>5000+<br />Global Certifications</div>
      </div>
    </section>
  );
};

export default AdmissionPage;
