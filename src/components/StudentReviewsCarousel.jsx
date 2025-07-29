import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import imgkk from "../assets/imgkk.jpg"
import imgk from "../assets/imgk.jpg"

const reviews = [
  {
    name: "Vinod",
    image: imgk,
    review: "Miracle IT Career Academy is an amazing institute for learning coding and preparing for your career.",
    rating: 5,
  },
  {
    name: "Mohit",
    image: imgk,
    review: "It's one of the best institutes in MP for getting professional knowledge in the IT field.",
    rating: 5,
  },
  {
    name: "Ankita",
    image: imgkk,
    review: "I had a great time during the full stack course. I look forward to recommending this course to my friends.",
    rating: 5,
  },
];

const StudentReviewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Students Reviews</h2>
        <p className="text-gray-600 mb-10">
          "Miracle IT Career Academy in Bhopal is dedicated to shaping the future of aspiring IT professionals.
          With expert faculty, hands-on training, and a career-oriented approach, we ensure that every student
          gains the skills and confidence needed to excel in the IT industry. Join us to kickstart your journey
          toward a successful career in technology!"
        </p>

        <Slider {...settings}>
          {reviews.map((student, index) => (
            <div key={index} className="px-3">
              <div className="bg-gray-50 rounded-xl p-6 relative text-left shadow-md h-full">
                <div className="flex justify-center mb-4">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>
                <FaQuoteLeft className="text-blue-700 text-2xl absolute top-4 left-4" />
                <p className="text-gray-700 mb-4">{student.review}</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{student.name}</p>
                  <div className="flex text-yellow-500">
                    {[...Array(student.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <FaQuoteRight className="text-blue-700 text-2xl absolute bottom-4 right-4" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default StudentReviewsCarousel;
