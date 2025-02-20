import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const packages = [
  {
    id: 1,
    title: "Maldives Luxury Escape",
    destination: "Maldives",
    duration: "5 Days / 4 Nights",
    price: "$1,200",
    rating: 4.8,
    image: Destination1,
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    destination: "Switzerland",
    duration: "7 Days / 6 Nights",
    price: "$2,500",
    rating: 4.9,
    image: Destination2,
  },
  {
    id: 3,
    title: "Bali Honeymoon Special",
    destination: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    price: "$1,500",
    rating: 4.7,
    image: Destination3,
  },
  {
    id: 4,
    title: "Paris Romantic Getaway",
    destination: "Paris, France",
    duration: "5 Days / 4 Nights",
    price: "$1,800",
    rating: 4.9,
    image: Destination4,
  },
  {
    id: 5,
    title: "Dubai Desert Safari",
    destination: "Dubai, UAE",
    duration: "4 Days / 3 Nights",
    price: "$1900",
    rating: 4.6,
    image: Destination5,
  },
  {
    id: 6,
    title: "Santorini Sunset Retreat",
    destination: "Santorini, Greece",
    duration: "6 Days / 5 Nights",
    price: "$2,100",
    rating: 4.8,
    image: Destination6,
  },
];

export default function Packages() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/PackageDetail/${id}`);
  };

  return (
    <div className="container mx-auto py-16 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Explore Our Best Packages
        </h1>
        <hr className="w-full border-1 border-blue-500 my-5" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            onClick={() => handleCardClick(pkg.id)}
          >
            <div className="relative h-48">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-lg shadow-md">
                <span className="text-yellow-500 font-bold flex items-center">
                  <FaStar className="mr-1" />
                  {pkg.rating}
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between flex-grow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {pkg.title}
              </h2>

              <div className="flex items-center text-gray-600 mb-3 space-x-4">
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  {pkg.destination}
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-2 text-orange-500" />
                  {pkg.duration}
                </span>
              </div>

              <div className="flex justify-between items-center mt-auto space-x-3">
                <span className="text-lg font-bold text-green-600">
                  {pkg.price}
                </span>
                <div className="flex w-full gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(pkg.id);
                    }}
                    className="flex-1 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition ease-in-out duration-300"
                  >
                    Explore
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(pkg.id);
                    }}
                    className="flex-1 bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition ease-in-out duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => navigate(`/`)}
        className="bg-blue-500 text-white px-5 py-2 mt-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
      >
        Back
      </button>
    </div>
  );
}
