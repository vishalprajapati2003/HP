import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  StarIcon,
  MapPinIcon,
  WifiIcon,
  TvIcon,
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  HeartIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  UserCircleIcon,
  ClockIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HotelBook = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [specialRequests, setSpecialRequests] = useState("");
  const [activeTab, setActiveTab] = useState("details");
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    "https://picsum.photos/500/300?random=10",
    "https://picsum.photos/500/300?random=11",
    "https://picsum.photos/500/300?random=12",
    "https://picsum.photos/500/300?random=13",
    "https://picsum.photos/500/300?random=14",
  ];

  const amenities = [
    { icon: WifiIcon, name: "Free WiFi" },
    { icon: TvIcon, name: "4K Flat-screen TV" },
    { icon: HomeIcon, name: "Nespresso Coffee Maker" },
    { icon: UsersIcon, name: "Family Rooms" },
    { icon: BuildingLibraryIcon, name: "24/7 Room Service" },
    { icon: CreditCardIcon, name: "Digital Key" },
    { icon: SunIcon, name: "Heated Pool" },
    { icon: MoonIcon, name: "Spa & Wellness Center" },
    { icon: ClockIcon, name: "24-hour Fitness Center" },
    { icon: UserCircleIcon, name: "Concierge Service" },
  ];

  const rooms = [
    {
      type: "Standard",
      price: 150,
      size: "25m²",
      beds: "1 Queen Bed",
      occupancy: 2,
      image: "https://picsum.photos/300/200?random=20",
      amenities: ["Work desk", "Mini-bar", "Air conditioning"],
    },
    {
      type: "Deluxe",
      price: 220,
      size: "35m²",
      beds: "1 King Bed",
      occupancy: 2,
      image: "https://picsum.photos/300/200?random=21",
      amenities: ["Balcony", "Bathrobes", "Premium toiletries"],
    },
    {
      type: "Suite",
      price: 350,
      size: "50m²",
      beds: "1 King Bed + Living Area",
      occupancy: 4,
      image: "https://picsum.photos/300/200?random=22",
      amenities: ["Separate living room", "Jacuzzi", "Private terrace"],
    },
  ];

  const reviews = [
    {
      user: "John D.",
      rating: 4.8,
      date: "March 2024",
      comment:
        "Exceptional service and stunning city views. The spa was phenomenal!",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      user: "Sarah M.",
      rating: 4.5,
      date: "February 2024",
      comment:
        "Perfect location for exploring the city. The concierge gave great dining recommendations!",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      user: "Michael R.",
      rating: 5.0,
      date: "January 2024",
      comment:
        "Best hotel experience we've ever had. The executive lounge access was worth every penny!",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ];

  const calculateTotal = () => {
    const nights =
      checkInDate && checkOutDate
        ? Math.ceil(
            (new Date(checkOutDate) - new Date(checkInDate)) /
              (1000 * 3600 * 24)
          )
        : 0;
    return nights * rooms[selectedRoom].price * guests;
  };

  const ratingBreakdown = [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-8 mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-4 gap-4 h-[450px] relative">
              <motion.img
                key={activeImage}
                src={images[activeImage]}
                alt="Hotel"
                className="col-span-4 md:col-span-2 w-full h-full object-cover rounded-2xl shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="hidden md:grid grid-cols-2 col-span-2 gap-4">
                {images.slice(1, 5).map((img, index) => (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer group"
                    onClick={() => setActiveImage(index + 1)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={img}
                      alt="Hotel"
                      className="w-full h-full object-cover rounded-xl transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-xl" />
                  </motion.div>
                ))}
              </div>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                <HeartIcon
                  className={`w-6 h-6 cursor-pointer ${
                    isFavorite ? "text-red-500 fill-current" : "text-gray-600"
                  }`}
                />
              </button>
            </div>
          </motion.div>

          {/* Hotel Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-between items-start"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 font-serif">
                Luxury Grand Hotel
              </h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <span className="ml-1 text-gray-700">4.8 (245 reviews)</span>
                </div>
                <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                  <MapPinIcon className="w-5 h-5 text-gray-600" />
                  <span className="ml-1 text-gray-700">Downtown, New York</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-3xl font-bold text-blue-600">
                ${rooms[selectedRoom].price}
              </p>
              <p className="text-gray-600">per night</p>
            </div>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="mt-8 border-b border-gray-200 ">
            <nav className="flex space-x-8">
              {["details", "rooms", "reviews", "location"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-1 capitalize font-medium cursor-pointer ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {activeTab === "details" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid md:grid-cols-3 gap-8"
                >
                  {/* Description & Amenities */}
                  <div className="md:col-span-2">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <h2 className="text-3xl font-serif font-bold mb-6">
                        Property Details
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Nestled in the heart of Manhattan, Luxury Grand Hotel
                        redefines urban sophistication. Our award-winning
                        property features 300 exquisitely designed rooms and
                        suites, three signature restaurants, and a
                        15,000-square-foot spa. Enjoy panoramic city views from
                        our rooftop infinity pool and experience personalized
                        service that anticipates your every need.
                      </p>

                      <div className="mt-8">
                        <h3 className="text-2xl font-serif font-bold mb-6">
                          Featured Amenities
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {amenities.map((amenity, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                            >
                              <amenity.icon className="w-6 h-6 text-blue-600" />
                              <span className="text-gray-700">
                                {amenity.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-fit sticky top-8">
                    <h3 className="text-2xl font-serif font-bold mb-6">
                      At a Glance
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <ClockIcon className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-semibold">Check-in/out</p>
                          <p className="text-gray-600">3:00 PM / 11:00 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <UserCircleIcon className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-semibold">Guest Services</p>
                          <p className="text-gray-600">24-hour concierge</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CreditCardIcon className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-semibold">Payment Options</p>
                          <p className="text-gray-600">
                            All major cards accepted
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "rooms" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  {rooms.map((room, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                      whileHover={{ scale: 1.005 }}
                    >
                      <div className="flex flex-col md:flex-row">
                        <img
                          src={room.image}
                          alt={room.type}
                          className="md:w-1/3 object-cover"
                        />
                        <div className="p-8 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-2xl font-serif font-bold">
                                {room.type}
                              </h3>
                              <p className="text-gray-600 mt-2 text-lg">
                                {room.size} • {room.beds} • Sleeps{" "}
                                {room.occupancy}
                              </p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {room.amenities.map((amenity, idx) => (
                                  <span
                                    key={idx}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                  >
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-3xl font-bold text-blue-600">
                                ${room.price}
                              </p>
                              <p className="text-gray-600">per night</p>
                              <button
                                onClick={() => setSelectedRoom(index)}
                                className={`mt-4 px-6 py-2 cursor-pointer rounded-full ${
                                  selectedRoom === index
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                              >
                                {selectedRoom === index
                                  ? "Selected"
                                  : "Select Room"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Reviews Tab Content */}
              {activeTab === "reviews" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid md:grid-cols-4 gap-8"
                >
                  <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-lg h-fit">
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      Rating Breakdown
                    </h3>
                    {ratingBreakdown.map((rating, index) => (
                      <div key={index} className="flex items-center mb-3">
                        <div className="w-16 flex space-x-1">
                          {[...Array(rating.stars)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className="w-4 h-4 text-yellow-400"
                            />
                          ))}
                        </div>
                        <div className="flex-1 bg-gray-200 h-2 rounded-full mx-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${rating.percentage}%` }}
                          />
                        </div>
                        <span className="text-gray-600 w-12">
                          {rating.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="md:col-span-3">
                    <div className="grid gap-6">
                      {reviews.map((review, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-2xl shadow-lg"
                        >
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar}
                              alt={review.user}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold">
                                    {review.user}
                                  </h4>
                                  <p className="text-gray-500 text-sm">
                                    {review.date}
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <StarIcon className="w-5 h-5 text-yellow-400" />
                                  <span className="ml-1 font-semibold">
                                    {review.rating}
                                  </span>
                                </div>
                              </div>
                              <p className="mt-3 text-gray-600">
                                {review.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Location Tab Content */}
              {activeTab === "location" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <h2 className="text-3xl font-serif font-bold mb-6">
                      Location & Nearby
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
                        {/* Replace with actual map component */}
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          Interactive Map Placeholder
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Nearby Attractions
                        </h3>
                        <div className="space-y-4">
                          {[
                            { name: "Central Park", distance: "0.5 mi" },
                            {
                              name: "Museum of Modern Art",
                              distance: "0.3 mi",
                            },
                            { name: "Times Square", distance: "0.8 mi" },
                            { name: "5th Avenue Shopping", distance: "0.2 mi" },
                          ].map((attraction, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <span>{attraction.name}</span>
                              <span className="text-gray-500">
                                {attraction.distance}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Booking Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Complete Your Booking
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Check-in
                      </label>
                      <input
                        type="date"
                        className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Check-out
                      </label>
                      <input
                        type="date"
                        className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Guests
                      </label>
                      <select
                        className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Room Type
                      </label>
                      <select
                        className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={selectedRoom}
                        onChange={(e) =>
                          setSelectedRoom(Number(e.target.value))
                        }
                      >
                        {rooms.map((room, index) => (
                          <option key={index} value={index}>
                            {room.type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Special Requests
                    </label>
                    <textarea
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      rows={4}
                      placeholder="Add any special requests or notes..."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-6">Price Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>
                      {rooms[selectedRoom].price} x{" "}
                      {calculateTotal() / rooms[selectedRoom].price} nights
                    </span>
                    <span>
                      $
                      {rooms[selectedRoom].price *
                        (calculateTotal() / rooms[selectedRoom].price)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span>${(calculateTotal() * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${(calculateTotal() * 1.18).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold">Payment Details</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="p-3 border-2 border-gray-200 rounded-xl"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="p-3 border-2 border-gray-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg">
                    Confirm Booking
                  </button>
                  <p className="text-center text-gray-500 text-sm">
                    By booking, you agree to our Terms of Service and Privacy
                    Policy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HotelBook;
