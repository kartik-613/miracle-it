import React from "react";
import candc from "../assets/candc.png"
import java from "../assets/java.jpg"


const courses = [
  {
    title: "Introduction to Programming (C/C++)",
    image: candc,
  },
  {
    title: "Java: SpringBoot",
    image: java,
  },
  {
    title: "Full Stack Web Development",
    image: candc,
  },
  {
    title: "DevOps Certification",
    image: candc,
  },
  {
    title: "AI and Machine Learning",
    image: candc,
  },
  {
    title: "Generative AI Certification",
    image: candc,
  },
  {
    title: "Data Analytics",
    image: candc,
  },
  {
    title: "Data Science",
    image: candc,
  },
  {
    title: "Cloud Computing",
    image: candc,
  },
  {
    title: "Big Data Hadoop Certification",
    image: candc,
  },
  {
    title: "Software Testing Certification",
    image: candc,
  },
  {
    title: "Cyber Security & Ethical Hacking",
    image: candc,
  }
];

const CoursesSection = () => {
  return (
    <section className="bg-blue-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Popular Certification Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {course.title}
                </h3>
                <button className="mt-auto bg-rose-500 text-white px-4 py-2 rounded-xl hover:bg-rose-600 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
