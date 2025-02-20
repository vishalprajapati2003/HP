import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaStar, FaArrowLeft } from "react-icons/fa";
import Destination1 from "../assets/Destination1.png";

const packages = [
  {
    id: 1,
    title: "Maldives Luxury Escape",
    destination: "Maldives",
    duration: "5 Days / 4 Nights",
    basePrice: 1200,
    rating: 4.8,
    image: Destination1,
    description: "A 5-day luxury trip to the Maldives.",
    itinerary: [
      {
        dayNumber: 1,
        description: "Arrival and check-in at the resort in Baa Atoll.",
      },
      {
        dayNumber: 2,
        description: "Explore the Baa Atoll and enjoy water sports.",
      },
      {
        dayNumber: 3,
        description:
          "Transfer to Rangali Island and experience underwater dining.",
      },
      { dayNumber: 4, description: "Relax on the beaches of Rangali Island." },
      { dayNumber: 5, description: "Departure from Maldives." },
    ],
  },
];

export default function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const packageDetail = packages.find((pkg) => pkg.id === parseInt(id));

  const [children, setChildren] = useState(0);
  const [females, setFemales] = useState(0);
  const [males, setMales] = useState(0);

  const totalPrice = packageDetail
    ? packageDetail.basePrice + children * 300 + females * 500 + males * 500
    : 0;

  if (!packageDetail)
    return (
      <h1 className="text-center text-2xl font-bold">Package Not Found</h1>
    );

  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2"
      >
        <img
          src={packageDetail.image}
          alt={packageDetail.title}
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          {packageDetail.title}
        </h1>
        <p className="mt-2 text-gray-700">{packageDetail.description}</p>
        <div className="flex items-center text-gray-600 mt-2 space-x-4">
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-blue-500" />
            {packageDetail.destination}
          </span>
          <span className="flex items-center">
            <FaClock className="mr-2 text-orange-500" />
            {packageDetail.duration}
          </span>
        </div>
        <div className="mt-3 flex items-center space-x-3">
          <span className="text-yellow-500 font-bold flex items-center">
            <FaStar className="mr-1" />
            {packageDetail.rating}
          </span>
          <span className="text-lg font-bold text-green-600">
            ${packageDetail.basePrice}
          </span>
        </div>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Itinerary</h2>
          <ul className="list-disc list-inside">
            {packageDetail.itinerary.map((item, index) => (
              <li
                key={index}
              >{`Day ${item.dayNumber}: ${item.description}`}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Trip Planning</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Children</label>
              <input
                type="number"
                min="0"
                className="w-full p-2 border rounded"
                value={children}
                onChange={(e) => setChildren(parseInt(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-gray-700">Females</label>
              <input
                type="number"
                min="0"
                className="w-full p-2 border rounded"
                value={females}
                onChange={(e) => setFemales(parseInt(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-gray-700">Males</label>
              <input
                type="number"
                min="0"
                className="w-full p-2 border rounded"
                value={males}
                onChange={(e) => setMales(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>

        <span className="text-lg font-bold text-green-600">
          Total:${totalPrice}
        </span>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => navigate("/Packages")}
            className="flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <button
            onClick={() => navigate(`/order`)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Order Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}
