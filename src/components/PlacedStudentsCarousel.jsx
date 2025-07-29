import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgkk from "../assets/imgkk.jpg"
import imgk from "../assets/imgk.jpg"

// 🔹 Sample student data (update with real images & names)
const students = [
  { name: "Ankita Singh", company: "Google", image: imgkk, },
  { name: "Rahul Verma", company: "Cognizant", image: imgk, },
  { name: "Megha Sharma", company: "Wipro", image: imgkk, },
  { name: "Amit Patel", company: "Accenture", image: imgk, },
  { name: "Priya Mehta", company: "Infosys", image: imgkk, },
  { name: "Nikhil Roy", company: "TCS", image: imgk, },
  // Add more as needed
];

const PlacedStudentsCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="bg-[#102243] py-10 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Our Placed Students
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {students.map((student, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-[#102243]"
                />
                <h3 className="text-xl font-semibold text-[#102243]">{student.name}</h3>
                <p className="text-sm text-gray-600">{student.company}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PlacedStudentsCarousel;
