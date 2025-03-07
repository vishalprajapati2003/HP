import { useState } from "react";
import { motion } from "framer-motion";
import {
  StarIcon,
  MapPinIcon,
  WifiIcon,
  TvIcon,
  HomeIcon,
  UsersIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

const HotelPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const images = [
    "https://picsum.photos/500/300?random=10",
    "https://picsum.photos/500/300?random=11",
    "https://picsum.photos/500/300?random=12",
    "https://picsum.photos/500/300?random=13",
    "https://picsum.photos/500/300?random=14",
  ];

  const amenities = [
    { icon: WifiIcon, name: "Free WiFi" },
    { icon: TvIcon, name: "Flat-screen TV" },
    { icon: HomeIcon, name: "Coffee Maker" },
    { icon: UsersIcon, name: "Family Rooms" },
    { name: "24/7 Room Service" },
    { name: "Swimming Pool" },
    { name: "Spa & Wellness Center" },
    { name: "Fitness Center" },
    { name: "Restaurant" },
    { name: "Parking" },
  ];

  const rooms = [
    { type: "Standard", price: 150, size: "25m²", beds: "1 Queen Bed" },
    { type: "Deluxe", price: 220, size: "35m²", beds: "1 King Bed" },
    {
      type: "Suite",
      price: 350,
      size: "50m²",
      beds: "1 King Bed + Living Area",
    },
  ];

  const reviews = [
    {
      user: "John D.",
      rating: 4.8,
      comment: "Excellent service and beautiful rooms!",
    },
    {
      user: "Sarah M.",
      rating: 4.5,
      comment: "Amazing location and comfortable stay.",
    },
  ];

  const calculateTotal = () => {
    const nights =
      checkInDate && checkOutDate
        ? (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 3600 * 24)
        : 0;
    return nights * rooms[0].price * guests;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-4 gap-4 h-96">
            <motion.img
              key={activeImage}
              src={images[activeImage]}
              alt="Hotel"
              className="col-span-4 md:col-span-2 w-full h-96 object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="hidden md:grid grid-cols-2 col-span-2 gap-4">
              {images.slice(1, 5).map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt="Hotel"
                  className="w-full h-48 object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setActiveImage(index + 1)}
                  whileHover={{ scale: 1.02 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hotel Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Luxury Grand Hotel
          </h1>
          <div className="flex items-center mt-2">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 text-gray-700">4.8 (245 reviews)</span>
            <MapPinIcon className="w-5 h-5 text-gray-600 ml-4" />
            <span className="ml-1 text-gray-700">Downtown, New York</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Left Column */}
          <div className="md:col-span-2">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-4">About the Hotel</h2>
              <p className="text-gray-600 leading-relaxed">
                Experience luxury at its finest in the heart of the city. Our
                5-star hotel offers spacious rooms with modern amenities, a
                world-class spa, and stunning city views. Perfect for both
                business and leisure travelers.
              </p>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-white p-6 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities
                  .slice(0, showAllAmenities ? amenities.length : 6)
                  .map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {amenity.icon && (
                        <amenity.icon className="w-5 h-5 text-blue-600" />
                      )}
                      <span className="text-gray-600">{amenity.name}</span>
                    </div>
                  ))}
              </div>
              {!showAllAmenities && (
                <button
                  onClick={() => setShowAllAmenities(true)}
                  className="mt-4 text-blue-600 hover:underline cursor-pointer"
                >
                  Show all amenities
                </button>
              )}
            </motion.div>

            {/* Rooms */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <h2 className="text-2xl font-semibold mb-4">Room Types</h2>
              {rooms.map((room, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm mb-4"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{room.type}</h3>
                      <p className="text-gray-600 mt-2">
                        {room.size} • {room.beds}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">
                        ${room.price}
                      </p>
                      <p className="text-gray-600">per night</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Booking Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-white p-6 rounded-xl shadow-sm h-fit sticky top-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Book Your Stay</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Check-in Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Check-out Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Guests</label>
                <input
                  type="number"
                  min="1"
                  className="w-full p-2 border rounded-lg"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
              <div className="pt-4 border-t mt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
                <button className="w-full mt-4 cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 bg-white p-6 rounded-xl shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-4">Guest Reviews</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold">{review.user}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8 bg-white p-6 rounded-xl shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map component */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map placeholder
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fixed Mobile Booking Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold text-blue-600">${rooms[0].price}</p>
            <p className="text-gray-600">per night</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
