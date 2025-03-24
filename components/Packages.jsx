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
import {
  FiStar,
  FiMapPin,
  FiClock,
  FiHeart,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const packages = [
  {
    id: 1,
    title: "Majestic Paris Getaway",
    location: "Paris, France",
    image: "https://picsum.photos/500/300?random=1",
    price: 1200,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    type: "City Tour",
    groupSize: "2-10 People",
    description:
      "Explore the Eiffel Tower, Louvre Museum, and charming streets of Paris in this unforgettable getaway.",
    itinerary: [
      "Day 1: Arrival & Eiffel Tower Visit",
      "Day 2: Louvre Museum & Seine River Cruise",
      "Day 3: Versailles Palace Tour",
      "Day 4: Shopping & Local Cuisine",
      "Day 5: Departure",
    ],
    availableDates: ["2023-11-15", "2023-12-01", "2024-01-10"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "beach",
  },
  {
    id: 2,
    title: "Tokyo Cherry Blossom Tour",
    location: "Tokyo, Japan",
    image: "https://picsum.photos/500/300?random=2",
    price: 1500,
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    type: "Nature & City Tour",
    groupSize: "2-12 People",
    description:
      "Experience the breathtaking cherry blossoms, historic temples, and vibrant city life in Tokyo.",
    itinerary: [
      "Day 1: Arrival & Shinjuku Exploration",
      "Day 2: Cherry Blossoms at Ueno Park",
      "Day 3: Mount Fuji Day Trip",
      "Day 4: Akihabara & Asakusa",
      "Day 5: Tokyo Disneyland",
      "Day 6: Departure",
    ],
    availableDates: ["2023-11-20", "2023-12-05", "2024-01-15"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "beach",
  },
  {
    id: 3,
    title: "Grand Egyptian Adventure",
    location: "Cairo, Egypt",
    image: "https://picsum.photos/500/300?random=3",
    price: 1100,
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    type: "Historical Tour",
    groupSize: "4-15 People",
    description:
      "Discover the pyramids, explore ancient tombs, and sail along the Nile River.",
    itinerary: [
      "Day 1: Arrival & Giza Pyramids Tour",
      "Day 2: Egyptian Museum & Khan El Khalili Bazaar",
      "Day 3: Nile River Cruise",
      "Day 4: Luxor Temple & Valley of the Kings",
      "Day 5: Aswan & Abu Simbel",
      "Day 6: Alexandria Day Trip",
      "Day 7: Departure",
    ],
    availableDates: ["2023-11-25", "2023-12-10", "2024-01-20"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "city",
  },
  {
    id: 4,
    title: "Santorini Romantic Escape",
    location: "Santorini, Greece",
    image: "https://picsum.photos/500/300?random=4",
    price: 2000,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    type: "Romantic Getaway",
    groupSize: "2-6 People",
    description:
      "Relax on the stunning white beaches, enjoy sunset views, and explore picturesque villages in Santorini.",
    itinerary: [
      "Day 1: Arrival & Oia Sunset Dinner",
      "Day 2: Boat Tour to Volcanic Hot Springs",
      "Day 3: Beach Relaxation & Wine Tasting",
      "Day 4: Fira & Traditional Greek Cuisine",
      "Day 5: Departure",
    ],
    availableDates: ["2023-11-30", "2023-12-15", "2024-01-25"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: false,
    type1: "city",
  },
  {
    id: 5,
    title: "Amazon Rainforest Expedition",
    location: "Amazon, Brazil",
    image: "https://picsum.photos/500/300?random=5",
    price: 1800,
    duration: "6 Days / 5 Nights",
    rating: 4.6,
    type: "Adventure Tour",
    groupSize: "4-12 People",
    description:
      "Immerse yourself in the wild Amazon, explore hidden trails, and experience exotic wildlife up close.",
    itinerary: [
      "Day 1: Arrival & Jungle Lodge Stay",
      "Day 2: Amazon River Canoeing",
      "Day 3: Wildlife Safari & Night Exploration",
      "Day 4: Indigenous Village Visit",
      "Day 5: Fishing & Birdwatching",
      "Day 6: Departure",
    ],
    availableDates: ["2023-12-05", "2023-12-20", "2024-01-30"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "city",
  },
  {
    id: 6,
    title: "African Safari Adventure",
    location: "Serengeti, Tanzania",
    image: "https://picsum.photos/500/300?random=6",
    price: 2200,
    duration: "8 Days / 7 Nights",
    rating: 4.8,
    type: "Wildlife Safari",
    groupSize: "4-10 People",
    description:
      "Witness the Great Migration and experience close encounters with Africa's iconic wildlife.",
    itinerary: [
      "Day 1: Arrival & Camp Orientation",
      "Day 2: Serengeti Game Drives",
      "Day 3: Hot Air Balloon Safari",
      "Day 4: Ngorongoro Crater Exploration",
      "Day 5: Maasai Village Visit",
      "Day 6: Lake Manyara National Park",
      "Day 7: Tarangire Elephant Safari",
      "Day 8: Departure",
    ],
    availableDates: ["2023-12-10", "2023-12-25", "2024-02-05"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "mountain",
  },
  {
    id: 7,
    title: "Nordic Aurora Expedition",
    location: "Lapland, Finland",
    image: "https://picsum.photos/500/300?random=7",
    price: 2500,
    duration: "6 Days / 5 Nights",
    rating: 4.7,
    type: "Northern Lights Tour",
    groupSize: "2-8 People",
    description:
      "Chase the magical Northern Lights and experience Arctic winter wonderland activities.",
    itinerary: [
      "Day 1: Arrival & Ice Hotel Stay",
      "Day 2: Husky Sledding Adventure",
      "Day 3: Snowmobile Safari",
      "Day 4: Aurora Borealis Camp",
      "Day 5: Reindeer Farm Visit",
      "Day 6: Departure",
    ],
    availableDates: ["2023-12-15", "2023-12-30", "2024-02-10"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "mountain",
  },
  {
    id: 8,
    title: "Great Barrier Reef Discovery",
    location: "Queensland, Australia",
    image: "https://picsum.photos/500/300?random=8",
    price: 1900,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    type: "Marine Adventure",
    groupSize: "4-12 People",
    description:
      "Explore the world's largest coral reef system and its vibrant marine life.",
    itinerary: [
      "Day 1: Arrival & Cairns Orientation",
      "Day 2: Green Island Snorkeling",
      "Day 3: Outer Reef Scuba Diving",
      "Day 4: Rainforest Skyrail Experience",
      "Day 5: Kuranda Village Tour",
      "Day 6: White Water Rafting",
      "Day 7: Departure",
    ],
    availableDates: ["2023-12-20", "2024-01-05", "2024-02-15"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "mountain",
  },
  {
    id: 9,
    title: "Inca Trail Trekking",
    location: "Cusco, Peru",
    image: "https://picsum.photos/500/300?random=9",
    price: 1700,
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    type: "Hiking Adventure",
    groupSize: "4-10 People",
    description:
      "Follow ancient paths to Machu Picchu through stunning Andean landscapes.",
    itinerary: [
      "Day 1: Cusco Arrival & Acclimatization",
      "Day 2: Sacred Valley Exploration",
      "Day 3: Start Inca Trail Trek",
      "Day 4: Dead Woman's Pass Crossing",
      "Day 5: Machu Picchu Sunrise",
      "Day 6: Return to Cusco",
    ],
    availableDates: ["2023-12-25", "2024-01-10", "2024-02-20"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "adventure",
  },
  {
    id: 10,
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    image: "https://picsum.photos/500/300?random=10",
    price: 2800,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    type: "Luxury City Tour",
    groupSize: "2-6 People",
    description:
      "Experience ultimate luxury with desert safaris, skyscraper tours, and premium shopping.",
    itinerary: [
      "Day 1: Arrival & Burj Khalifa Visit",
      "Day 2: Desert Safari & Bedouin Dinner",
      "Day 3: Luxury Yacht Cruise",
      "Day 4: Gold Souk & Dubai Mall",
      "Day 5: Departure",
    ],
    availableDates: ["2023-12-30", "2024-01-15", "2024-02-25"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: false,
    type1: "adventure",
  },
  {
    id: 11,
    title: "Himalayan Trekking Journey",
    location: "Nepal",
    image: "https://picsum.photos/500/300?random=11",
    price: 1600,
    duration: "10 Days / 9 Nights",
    rating: 4.6,
    type: "Mountain Expedition",
    groupSize: "4-12 People",
    description:
      "Trek through breathtaking Himalayan landscapes and experience Sherpa culture.",
    itinerary: [
      "Day 1: Kathmandu Arrival",
      "Day 2: Flight to Lukla",
      "Day 3: Namche Bazaar Trek",
      "Day 4: Acclimatization Day",
      "Day 5: Tengboche Monastery",
      "Day 6: Dingboche Village",
      "Day 7: Everest Base Camp",
      "Day 8: Kala Patthar Summit",
      "Day 9: Return Trek",
      "Day 10: Departure",
    ],
    availableDates: ["2024-01-05", "2024-01-20", "2024-03-01"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "adventure",
  },
  {
    id: 12,
    title: "Italian Cultural Odyssey",
    location: "Rome, Italy",
    image: "https://picsum.photos/500/300?random=12",
    price: 2100,
    duration: "8 Days / 7 Nights",
    rating: 4.8,
    type: "Cultural Tour",
    groupSize: "2-10 People",
    description:
      "Explore ancient ruins, Renaissance art, and authentic Italian cuisine.",
    itinerary: [
      "Day 1: Rome Arrival & Colosseum Tour",
      "Day 2: Vatican City Exploration",
      "Day 3: Florence Transfer & Duomo Visit",
      "Day 4: Uffizi Gallery & Ponte Vecchio",
      "Day 5: Pisa & Tuscan Countryside",
      "Day 6: Venice Canals & Gondola Ride",
      "Day 7: Murano Glass Workshop",
      "Day 8: Departure",
    ],
    availableDates: ["2024-01-10", "2024-01-25", "2024-03-05"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "mountain",
  },
  {
    id: 13,
    title: "Costa Rica Eco Adventure",
    location: "Monteverde, Costa Rica",
    image: "https://picsum.photos/500/300?random=13",
    price: 1750,
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    type: "Eco Tourism",
    groupSize: "4-8 People",
    description:
      "Zipline through cloud forests and discover rich biodiversity in natural reserves.",
    itinerary: [
      "Day 1: San José Arrival",
      "Day 2: Monteverde Cloud Forest",
      "Day 3: Canopy Zipline Adventure",
      "Day 4: Arenal Volcano & Hot Springs",
      "Day 5: Manuel Antonio National Park",
      "Day 6: Pacific Beach Relaxation",
      "Day 7: Departure",
    ],
    availableDates: ["2024-01-15", "2024-01-30", "2024-03-10"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: true,
    type1: "city",
  },
  {
    id: 14,
    title: "Southeast Asia Explorer",
    location: "Thailand & Cambodia",
    image: "https://picsum.photos/500/300?random=14",
    price: 2400,
    duration: "9 Days / 8 Nights",
    rating: 4.8,
    type: "Multi-Country Tour",
    groupSize: "4-12 People",
    description:
      "Discover ancient temples, floating markets, and tropical beaches across two countries.",
    itinerary: [
      "Day 1: Bangkok Arrival",
      "Day 2: Grand Palace & Wat Pho",
      "Day 3: Floating Market Tour",
      "Day 4: Fly to Siem Reap",
      "Day 5: Angkor Wat Sunrise Tour",
      "Day 6: Ta Prohm Exploration",
      "Day 7: Phuket Beach Transfer",
      "Day 8: Island Hopping Cruise",
      "Day 9: Departure",
    ],
    availableDates: ["2024-01-20", "2024-02-05", "2024-03-15"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: false,
    type1: "adventure",
  },
  {
    id: 15,
    title: "Patagonian Wilderness Trek",
    location: "Chile & Argentina",
    image: "https://picsum.photos/500/300?random=15",
    price: 2600,
    duration: "10 Days / 9 Nights",
    rating: 4.9,
    type: "Wilderness Adventure",
    groupSize: "4-8 People",
    description:
      "Hike through dramatic landscapes of glaciers, mountains, and pristine lakes.",
    itinerary: [
      "Day 1: Punta Arenas Arrival",
      "Day 2: Torres del Paine National Park",
      "Day 3: Grey Glacier Trek",
      "Day 4: French Valley Hike",
      "Day 5: Lake Pehoé Navigation",
      "Day 6: Cross to Argentina",
      "Day 7: Perito Moreno Glacier",
      "Day 8: El Chaltén Exploration",
      "Day 9: Fitz Roy Summit View",
      "Day 10: Departure",
    ],
    availableDates: ["2024-01-25", "2024-02-10", "2024-03-20"],
    inclusions: ["Accommodation", "Guided Tours", "Meals"],
    available: false,
    type1: "beach",
  },
];

export default function HolidayPackages() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("price");
  const [wishlist, setWishlist] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState(""); 
  const categories = ["all", "beach", "adventure", "city", "mountain"];
 
  const filteredPackages = packages
    .filter((pkg) => pkg.title.toLowerCase().includes(search.toLowerCase()))
    .filter((pkg) =>
      selectedCategory === "all" 
        ? true  
        : pkg.type1.toLowerCase() === selectedCategory.toLowerCase()
    )   
    .filter((pkg) => pkg.price >= priceRange[0] && pkg.price <= priceRange[1])
    .filter((pkg) =>
      pkg.location.toLowerCase().includes(locationFilter.toLowerCase())
    )
    .filter((pkg) =>
      dateFilter ? pkg.availableDates.includes(dateFilter) : true
    )
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

  const LeftArrow = ({ onClick }) => (
    <button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
      aria-label="Previous"
      onClick={onClick}
    >
      <FiChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );

  const RightArrow = ({ onClick }) => (
    <button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
      aria-label="Next"
      onClick={onClick}
    >
      <FiChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        {/* Carousel Section */}
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={3000}
          className="z-10"
          customLeftArrow={<LeftArrow />}
          customRightArrow={<RightArrow />}
        >
          {packages.slice(3, 10).map((pkg) => (
            <div key={pkg.id} className="relative p-2 mt-12">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{pkg.title}</h3>
                <p className="text-sm flex items-center gap-1">
                  <FiMapPin /> {pkg.location}
                </p>
                <p className="text-sm flex items-center gap-1">
                  <FiClock /> {pkg.duration}
                </p>
                <p className="text-sm flex items-center gap-1">
                  <FiStar className="text-yellow-400" /> {pkg.rating} / 5
                </p>
                <p className="text-md font-bold">₹ {pkg.price}</p>
              </div>
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

        {/* Location and Date Filters */}
        <div className="max-w-7xl mx-auto mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Where you go?"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
                      wishlist.includes(pkg.id)
                        ? "text-red-500 fill-red-500"
                        : ""
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
                    <span
                      className={`text-sm px-2 py-1 rounded ${
                        pkg.available
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
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
                        ₹{pkg.price}
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
      <Footer />
    </>
  );
}   