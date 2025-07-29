import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f2f45] text-white pt-10 px-6 lg:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-600">
        {/* Logo & Quote */}
        <div>
          <img src="/images/logo.png" alt="Miracle IT Logo" className="w-24 mb-4" />
          <p className="text-sm">
            "Empowering minds with cutting-edge technology and practical skills for a brighter future." Join us to shape your future.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
          <p className="flex items-start gap-2 text-sm"><FaMapMarkerAlt className="mt-1" />Plot No.80, 3rd Floor, Aakriti Complex, Zone-2, M.P. Nagar, Bhopal, M.P.</p>
          <p className="mt-2 flex items-center gap-2 text-sm"><FaPhoneAlt />0755-49-07790</p>
          <p className="flex items-center gap-2 text-sm"><FaPhone />+91 9179001399</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Get Started</h4>
          <p className="text-sm mb-4">Begin your learning journey today. Master the skills that shape the future of technology!</p>
          <div className="flex gap-3 text-xl">
            <FaWhatsapp className="text-green-400" />
            <FaFacebookF className="text-blue-500" />
            <FaInstagram className="text-pink-500" />
            <FaLinkedinIn className="text-blue-400" />
            <FaPhone className="text-blue-300" />
          </div>
        </div>
      </div>

      {/* Course Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-gray-600 text-sm">
        {/* Development Hub */}
        <div>
          <h5 className="font-semibold mb-2">Development Hub</h5>
          <ul className="space-y-1">
            <li>MERN</li>
            <li>MEAN</li>
            <li>Full Stack Web Development</li>
            <li>C/C++ Data Structure</li>
            <li>JAVA</li>
            <li>PYTHON</li>
            <li>PHP</li>
          </ul>
        </div>

        {/* AI & ML Track */}
        <div>
          <h5 className="font-semibold mb-2">AI & ML Track</h5>
          <ul className="space-y-1">
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Big Data</li>
            <li>Data Science</li>
            <li>Data Analytics</li>
          </ul>
        </div>

        {/* Cloud & Security */}
        <div>
          <h5 className="font-semibold mb-2">Cloud & Security</h5>
          <ul className="space-y-1">
            <li>IT Security & Ethical Hacking</li>
            <li>Cloud Computing</li>
            <li>AWS / AZURE</li>
            <li>DEVOPS</li>
          </ul>
        </div>

        {/* Data Science Courses */}
        <div>
          <h5 className="font-semibold mb-2">Data Science Courses</h5>
          <ul className="space-y-1">
            <li>PGDSE</li>
            <li>PGDFE</li>
            <li>PGDIE</li>
            <li>PGDDA</li>
            <li>AIML (Advance Diploma)</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm">
        <p>© miracle-it-career-academy. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <img src="/images/bajaj.png" alt="bajaj" className="h-6" />
          <img src="/images/credenc.png" alt="credenc" className="h-6" />
          <img src="/images/varthana.png" alt="varthana" className="h-6" />
        </div>
        <div className="flex gap-3 text-xl">
          <FaGooglePlay className="text-white" />
          <FaApple className="text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
