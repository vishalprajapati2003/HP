// import React from "react";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import Destination1 from "../assets/Destination1.png";
// import Destination2 from "../assets/Destination2.png";
// import Destination3 from "../assets/Destination3.png";
// import Destination4 from "../assets/Destination4.png";
// import Destination5 from "../assets/Destination5.png";
// import Destination6 from "../assets/Destination6.png";
// import Navbar from "./Navbar";
// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const packages = [
//   {
//     id: 1,
//     title: "Maldives Luxury Escape",
//     destination: "Maldives",
//     duration: "5 Days / 4 Nights",
//     price: "$1,200",
//     rating: 4.8,
//     image: Destination1,
//   },
//   {
//     id: 2,
//     title: "Swiss Alps Adventure",
//     destination: "Switzerland",
//     duration: "7 Days / 6 Nights",
//     price: "$2,500",
//     rating: 4.9,
//     image: Destination2,
//   },
//   {
//     id: 3,
//     title: "Bali Honeymoon Special",
//     destination: "Bali, Indonesia",
//     duration: "6 Days / 5 Nights",
//     price: "$1,500",
//     rating: 4.7,
//     image: Destination3,
//   },
//   {
//     id: 4,
//     title: "Paris Romantic Getaway",
//     destination: "Paris, France",
//     duration: "5 Days / 4 Nights",
//     price: "$1,800",
//     rating: 4.9,
//     image: Destination4,
//   },
//   {
//     id: 5,
//     title: "Dubai Desert Safari",
//     destination: "Dubai, UAE",
//     duration: "4 Days / 3 Nights",
//     price: "$1900",
//     rating: 4.6,
//     image: Destination5,
//   },
//   {
//     id: 6,
//     title: "Santorini Sunset Retreat",
//     destination: "Santorini, Greece",
//     duration: "6 Days / 5 Nights",
//     price: "$2,100",
//     rating: 4.8,
//     image: Destination6,
//   },
// ];

// export default function Packages() {
//   const navigate = useNavigate();

//   const handleCardClick = (id) => {
//     navigate(`/PackageDetail/${id}`);
//   };

//   return (
//     <div className="container mx-auto py-16 px-6">
//       <Navbar />
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={fadeInUp}
//         className="text-center mb-12"
//       >
//         <h1 className="text-3xl font-bold text-gray-800">
//           Explore Our Best Packages
//         </h1>
//         <hr className="w-full border-1 border-blue-500 my-5" />
//       </motion.div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {packages.map((pkg, index) => (
//           <motion.div
//             key={pkg.id}
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden flex flex-col h-full"
//             onClick={() => handleCardClick(pkg.id)}
//           >
//             <div className="relative h-48">
//               <img
//                 src={pkg.image}
//                 alt={pkg.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-lg shadow-md">
//                 <span className="text-yellow-500 font-bold flex items-center">
//                   <FaStar className="mr-1" />
//                   {pkg.rating}
//                 </span>
//               </div>
//             </div>

//             <div className="p-4 flex flex-col justify-between flex-grow">
//               <h2 className="text-xl font-semibold text-gray-900 mb-2">
//                 {pkg.title}
//               </h2>

//               <div className="flex items-center text-gray-600 mb-3 space-x-4">
//                 <span className="flex items-center">
//                   <FaMapMarkerAlt className="mr-2 text-blue-500" />
//                   {pkg.destination}
//                 </span>
//                 <span className="flex items-center">
//                   <FaClock className="mr-2 text-orange-500" />
//                   {pkg.duration}
//                 </span>
//               </div>

//               <div className="flex justify-between items-center mt-auto space-x-3">
//                 <span className="text-lg font-bold text-green-600">
//                   {pkg.price}
//                 </span>
//                 <div className="flex w-full gap-3">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleCardClick(pkg.id);
//                     }}
//                     className="flex-1 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition ease-in-out duration-300"
//                   >
//                     Explore
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleCardClick(pkg.id);
//                     }}
//                     className="flex-1 bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition ease-in-out duration-300"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <button
//         onClick={() => navigate(`/`)}
//         className="bg-blue-500 text-white px-5 py-2 mt-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
//       >
//         Back
//       </button>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FiStar, FiMapPin, FiClock, FiHeart } from "react-icons/fi";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    title: "Maldives Getaway",
    price: 2500,
    image: "https://picsum.photos/500/300?random=1",
    description: "Luxury beach resort with ocean views",
    duration: "7 Days",
    location: "Maldives",
    rating: 4.8,
    category: "beach",
    inclusions: ["Overwater Bungalow", "Snorkeling", "All Meals"],
    available: true,
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    price: 1800,
    image: "https://picsum.photos/500/300?random=2",
    description: "Guided tours and skiing",
    duration: "10 Days",
    location: "Switzerland",
    rating: 4.5,
    category: "adventure",
    inclusions: ["Equipment Rental", "Lodge Stay", "Breakfast"],
    available: true,
  },
  {
    id: 3,
    title: "Tokyo City Lights",
    price: 2000,
    image: "https://picsum.photos/500/300?random=3",
    description: "Explore the vibrant culture of Tokyo",
    duration: "5 Days",
    location: "Japan",
    rating: 4.7,
    category: "city",
    inclusions: ["Hotel Stay", "City Tour", "Local Food"],
    available: true,
  },
  {
    id: 4,
    title: "Amazon Rainforest Expedition",
    price: 1600,
    image: "https://picsum.photos/500/300?random=4",
    description: "Jungle trekking and wildlife experience",
    duration: "8 Days",
    location: "Brazil",
    rating: 4.3,
    category: "nature",
    inclusions: ["Guided Trekking", "Camping", "Meals"],
    available: true,
  },
  {
    id: 5,
    title: "Santorini Sunset Retreat",
    price: 2200,
    image: "https://picsum.photos/500/300?random=5",
    description: "Enjoy Greece's stunning sunsets",
    duration: "6 Days",
    location: "Greece",
    rating: 4.9,
    category: "romantic",
    inclusions: ["Luxury Stay", "Sunset Cruise", "Breakfast"],
    available: true,
  },
  {
    id: 6,
    title: "African Safari Adventure",
    price: 2800,
    image: "https://picsum.photos/500/300?random=6",
    description: "Witness the Big Five in their natural habitat",
    duration: "12 Days",
    location: "Kenya",
    rating: 4.6,
    category: "wildlife",
    inclusions: ["Safari Tours", "Luxury Camp Stay", "Meals"],
    available: true,
  },
  {
    id: 7,
    title: "Bali Wellness Escape",
    price: 1500,
    image: "https://picsum.photos/500/300?random=7",
    description: "Yoga, spa, and beach relaxation",
    duration: "7 Days",
    location: "Indonesia",
    rating: 4.8,
    category: "wellness",
    inclusions: ["Yoga Sessions", "Spa Treatments", "Healthy Meals"],
    available: true,
  },
  {
    id: 8,
    title: "New York City Explorer",
    price: 1900,
    image: "https://picsum.photos/500/300?random=8",
    description: "Experience the hustle and bustle of NYC",
    duration: "4 Days",
    location: "USA",
    rating: 4.5,
    category: "city",
    inclusions: ["Hotel Stay", "City Pass", "Broadway Show"],
    available: true,
  },
  {
    id: 9,
    title: "Dubai Luxury Escape",
    price: 3000,
    image: "https://picsum.photos/500/300?random=9",
    description: "Stay in a 5-star hotel with desert tours",
    duration: "5 Days",
    location: "UAE",
    rating: 4.9,
    category: "luxury",
    inclusions: ["Luxury Hotel", "Desert Safari", "Fine Dining"],
    available: true,
  },
  {
    id: 10,
    title: "Patagonia Hiking Expedition",
    price: 2200,
    image: "https://picsum.photos/500/300?random=10",
    description: "Trekking through breathtaking landscapes",
    duration: "9 Days",
    location: "Argentina",
    rating: 4.7,
    category: "adventure",
    inclusions: ["Guided Hikes", "Camping Gear", "All Meals"],
    available: true,
  },
  {
    id: 11,
    title: "Paris Romantic Getaway",
    price: 2500,
    image: "https://picsum.photos/500/300?random=11",
    description: "Experience the city of love",
    duration: "6 Days",
    location: "France",
    rating: 4.8,
    category: "romantic",
    inclusions: ["Eiffel Tower Dinner", "Cruise", "Luxury Hotel"],
    available: true,
  },
  {
    id: 12,
    title: "Great Barrier Reef Dive",
    price: 2100,
    image: "https://picsum.photos/500/300?random=12",
    description: "Scuba dive in one of the world's best reefs",
    duration: "7 Days",
    location: "Australia",
    rating: 4.6,
    category: "adventure",
    inclusions: ["Scuba Gear", "Boat Tour", "Resort Stay"],
    available: true,
  },
  {
    id: 13,
    title: "Iceland Northern Lights Tour",
    price: 2600,
    image: "https://picsum.photos/500/300?random=13",
    description: "Chase the Aurora Borealis",
    duration: "5 Days",
    location: "Iceland",
    rating: 4.9,
    category: "nature",
    inclusions: ["Aurora Viewing", "Thermal Spa", "Hotel Stay"],
    available: true,
  },
  {
    id: 14,
    title: "Hawaii Island Hopping",
    price: 2800,
    image: "https://picsum.photos/500/300?random=14",
    description: "Explore multiple Hawaiian islands",
    duration: "10 Days",
    location: "USA",
    rating: 4.7,
    category: "beach",
    inclusions: ["Inter-Island Flights", "Resort Stay", "Snorkeling"],
    available: true,
  },
  {
    id: 15,
    title: "Venice Gondola Romance",
    price: 2300,
    image: "https://picsum.photos/500/300?random=15",
    description: "Romantic getaway in Italy",
    duration: "5 Days",
    location: "Italy",
    rating: 4.8,
    category: "romantic",
    inclusions: ["Gondola Ride", "Luxury Hotel", "Fine Dining"],
    available: true,
  },
  {
    id: 16,
    title: "Swiss Alps Adventure",
    price: 1800,
    image: "https://picsum.photos/500/300?random=21",
    description: "Guided tours and skiing in the breathtaking Swiss Alps.",
    duration: "10 Days",
    location: "Switzerland",
    rating: 4.8,
    category: "mountain",
    inclusions: ["Ski Equipment Rental", "Mountain Lodge Stay", "Breakfast"],
    available: true,
  },
  {
    id: 18,
    title: "Himalayan Trekking Expedition",
    price: 2000,
    image: "https://picsum.photos/500/300?random=23",
    description:
      "Challenge yourself with an adventurous trek in the Himalayas.",
    duration: "12 Days",
    location: "Nepal",
    rating: 4.9,
    category: "mountain",
    inclusions: ["Sherpa Guide", "Base Camp Stay", "All Meals"],
    available: true,
  },
  {
    id: 19,
    title: "Andes Mountain Exploration",
    price: 1700,
    image: "https://picsum.photos/500/300?random=24",
    description:
      "Discover the beauty of the Andes with guided treks and camping.",
    duration: "9 Days",
    location: "Peru",
    rating: 4.6,
    category: "mountain",
    inclusions: ["Trekking Permits", "Tent Accommodation", "Local Cuisine"],
    available: true,
  },

];

export default function HolidayPackages() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("price");
  const [wishlist, setWishlist] = useState([]);

  const categories = ["all", "beach", "adventure", "city", "mountain"];

  const filteredPackages = packages
    .filter((pkg) => pkg.title.toLowerCase().includes(search.toLowerCase()))
    .filter((pkg) =>
      selectedCategory === "all" ? true : pkg.category === selectedCategory
    )
    .filter((pkg) => pkg.price >= priceRange[0] && pkg.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      {/* Carousel Section */}
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
        {packages.slice(0, 10).map((pkg) => (
          <div key={pkg.id} className="relative p-2 mt-12">
            {/* Package Image */}
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-64 object-cover rounded-xl"
            />

            {/* Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{pkg.title}</h3>
              <p className="text-sm flex items-center gap-1">
                <FiMapPin /> {pkg.location}
              </p>
              <p className="text-sm flex items-center gap-1">
                <FiClock /> {pkg.duration} Days
              </p>
              <p className="text-sm flex items-center gap-1">
                <FiStar className="text-yellow-400" /> {pkg.rating} / 5
              </p>
              <p className="text-md font-bold">₹ {pkg.price}</p>
            </div>

            {/* Heart Icon for Wishlist */}
            <button
              onClick={() => toggleWishlist(pkg.id)}
              className="absolute top-4 right-4 z-10 cursor-pointer p-2 shadow-md rounded-full bg-white/80 hover:bg-white"
            >
              <FiHeart
                className={`w-6 h-6 ${
                  wishlist.includes(pkg.id) ? "text-red-500 fill-red-500" : ""
                }`}
              />
            </button>
          </div>
        ))}
      </Carousel>

      {/* Hero Section */}
      <div className="text-center mb-10 mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Find Your Dream Holiday
        </h1>
        <p className="text-lg text-gray-600">
          Explore our exclusive travel packages
        </p>
      </div>

      {/* Filters Section */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Input
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-lg"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {/* Package Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <button
                onClick={() => toggleWishlist(pkg.id)}
                className="absolute top-5 right-5 z-10 cursor-pointer p-2 rounded-full bg-white/80 hover:bg-white"
              >
                <FiHeart
                  className={`w-6 h-6 ${
                    wishlist.includes(pkg.id) ? "text-red-500 fill-red-500" : ""
                  }`}
                />
              </button>

              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-56 object-cover"
              />

              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-800">
                    {pkg.title}
                  </h2>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    {pkg.available ? "Available" : "Sold Out"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <FiMapPin />
                  <span>{pkg.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <FiClock />
                  <span>{pkg.duration}</span>
                </div>

                <p className="text-gray-600 mb-4">{pkg.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.inclusions.map((inc) => (
                    <span
                      key={inc}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                    >
                      {inc}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-yellow-400" />
                    <span className="font-semibold">{pkg.rating}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-indigo-600">
                      ${pkg.price}
                    </p>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                </div>
                <Link to={`/book/${pkg.id}`}>
                  <Button className="w-full mt-4 cursor-pointer bg-indigo-600 hover:bg-indigo-700">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
