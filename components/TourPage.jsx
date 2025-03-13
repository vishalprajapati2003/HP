// import { motion } from "framer-motion";
// import Navbar from "./Navbar";
// import {
//   FaStar,
//   FaMapMarkerAlt,
//   FaClock,
//   FaDollarSign,
//   FaUsers,
//   FaMountain,
// } from "react-icons/fa";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";
// import {
//   FiStar,
//   FiMapPin,
//   FiClock,
//   FiHeart,
//   FiChevronRight,
//   FiChevronLeft,
// } from "react-icons/fi";
// import { useState } from "react";
// import Footer from "./Footer";
// import {useCallback} from "react"

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 3,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 2,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const tourData = [
//   {
//     id: 1,
//     title: "Majestic Paris Getaway",
//     location: "Paris, France",
//     image: "https://picsum.photos/500/300?random=1",
//     price: 1200,
//     duration: "5 Days / 4 Nights",
//     rating: 4.8,
//     type: "City Tour",
//     groupSize: "2-10 People",
//     description:
//       "Explore the Eiffel Tower, Louvre Museum, and charming streets of Paris in this unforgettable getaway.",
//     itinerary: [
//       "Day 1: Arrival & Eiffel Tower Visit",
//       "Day 2: Louvre Museum & Seine River Cruise",
//       "Day 3: Versailles Palace Tour",
//       "Day 4: Shopping & Local Cuisine",
//       "Day 5: Departure",
//     ],
//   },
//   {
//     id: 2,
//     title: "Tokyo Cherry Blossom Tour",
//     location: "Tokyo, Japan",
//     image: "https://picsum.photos/500/300?random=2",
//     price: 1500,
//     duration: "6 Days / 5 Nights",
//     rating: 4.9,
//     type: "Nature & City Tour",
//     groupSize: "2-12 People",
//     description:
//       "Experience the breathtaking cherry blossoms, historic temples, and vibrant city life in Tokyo.",
//     itinerary: [
//       "Day 1: Arrival & Shinjuku Exploration",
//       "Day 2: Cherry Blossoms at Ueno Park",
//       "Day 3: Mount Fuji Day Trip",
//       "Day 4: Akihabara & Asakusa",
//       "Day 5: Tokyo Disneyland",
//       "Day 6: Departure",
//     ],
//   },
//   {
//     id: 3,
//     title: "Grand Egyptian Adventure",
//     location: "Cairo, Egypt",
//     image: "https://picsum.photos/500/300?random=3",
//     price: 1100,
//     duration: "7 Days / 6 Nights",
//     rating: 4.7,
//     type: "Historical Tour",
//     groupSize: "4-15 People",
//     description:
//       "Discover the pyramids, explore ancient tombs, and sail along the Nile River.",
//     itinerary: [
//       "Day 1: Arrival & Giza Pyramids Tour",
//       "Day 2: Egyptian Museum & Khan El Khalili Bazaar",
//       "Day 3: Nile River Cruise",
//       "Day 4: Luxor Temple & Valley of the Kings",
//       "Day 5: Aswan & Abu Simbel",
//       "Day 6: Alexandria Day Trip",
//       "Day 7: Departure",
//     ],
//   },
//   {
//     id: 4,
//     title: "Santorini Romantic Escape",
//     location: "Santorini, Greece",
//     image: "https://picsum.photos/500/300?random=4",
//     price: 2000,
//     duration: "5 Days / 4 Nights",
//     rating: 4.9,
//     type: "Romantic Getaway",
//     groupSize: "2-6 People",
//     description:
//       "Relax on the stunning white beaches, enjoy sunset views, and explore picturesque villages in Santorini.",
//     itinerary: [
//       "Day 1: Arrival & Oia Sunset Dinner",
//       "Day 2: Boat Tour to Volcanic Hot Springs",
//       "Day 3: Beach Relaxation & Wine Tasting",
//       "Day 4: Fira & Traditional Greek Cuisine",
//       "Day 5: Departure",
//     ],
//   },
//   {
//     id: 5,
//     title: "Amazon Rainforest Expedition",
//     location: "Amazon, Brazil",
//     image: "https://picsum.photos/500/300?random=5",
//     price: 1800,
//     duration: "6 Days / 5 Nights",
//     rating: 4.6,
//     type: "Adventure Tour",
//     groupSize: "4-12 People",
//     description:
//       "Immerse yourself in the wild Amazon, explore hidden trails, and experience exotic wildlife up close.",
//     itinerary: [
//       "Day 1: Arrival & Jungle Lodge Stay",
//       "Day 2: Amazon River Canoeing",
//       "Day 3: Wildlife Safari & Night Exploration",
//       "Day 4: Indigenous Village Visit",
//       "Day 5: Fishing & Birdwatching",
//       "Day 6: Departure",
//     ],
//   },
//   {
//     id: 6,
//     title: "African Safari Adventure",
//     location: "Serengeti, Tanzania",
//     image: "https://picsum.photos/500/300?random=6",
//     price: 2200,
//     duration: "8 Days / 7 Nights",
//     rating: 4.8,
//     type: "Wildlife Safari",
//     groupSize: "4-10 People",
//     description:
//       "Witness the Great Migration and experience close encounters with Africa's iconic wildlife.",
//     itinerary: [
//       "Day 1: Arrival & Camp Orientation",
//       "Day 2: Serengeti Game Drives",
//       "Day 3: Hot Air Balloon Safari",
//       "Day 4: Ngorongoro Crater Exploration",
//       "Day 5: Maasai Village Visit",
//       "Day 6: Lake Manyara National Park",
//       "Day 7: Tarangire Elephant Safari",
//       "Day 8: Departure",
//     ],
//   },
//   {
//     id: 7,
//     title: "Nordic Aurora Expedition",
//     location: "Lapland, Finland",
//     image: "https://picsum.photos/500/300?random=7",
//     price: 2500,
//     duration: "6 Days / 5 Nights",
//     rating: 4.7,
//     type: "Northern Lights Tour",
//     groupSize: "2-8 People",
//     description:
//       "Chase the magical Northern Lights and experience Arctic winter wonderland activities.",
//     itinerary: [
//       "Day 1: Arrival & Ice Hotel Stay",
//       "Day 2: Husky Sledding Adventure",
//       "Day 3: Snowmobile Safari",
//       "Day 4: Aurora Borealis Camp",
//       "Day 5: Reindeer Farm Visit",
//       "Day 6: Departure",
//     ],
//   },
//   {
//     id: 8,
//     title: "Great Barrier Reef Discovery",
//     location: "Queensland, Australia",
//     image: "https://picsum.photos/500/300?random=8",
//     price: 1900,
//     duration: "7 Days / 6 Nights",
//     rating: 4.9,
//     type: "Marine Adventure",
//     groupSize: "4-12 People",
//     description:
//       "Explore the world's largest coral reef system and its vibrant marine life.",
//     itinerary: [
//       "Day 1: Arrival & Cairns Orientation",
//       "Day 2: Green Island Snorkeling",
//       "Day 3: Outer Reef Scuba Diving",
//       "Day 4: Rainforest Skyrail Experience",
//       "Day 5: Kuranda Village Tour",
//       "Day 6: White Water Rafting",
//       "Day 7: Departure",
//     ],
//   },
//   {
//     id: 9,
//     title: "Inca Trail Trekking",
//     location: "Cusco, Peru",
//     image: "https://picsum.photos/500/300?random=9",
//     price: 1700,
//     duration: "6 Days / 5 Nights",
//     rating: 4.8,
//     type: "Hiking Adventure",
//     groupSize: "4-10 People",
//     description:
//       "Follow ancient paths to Machu Picchu through stunning Andean landscapes.",
//     itinerary: [
//       "Day 1: Cusco Arrival & Acclimatization",
//       "Day 2: Sacred Valley Exploration",
//       "Day 3: Start Inca Trail Trek",
//       "Day 4: Dead Woman's Pass Crossing",
//       "Day 5: Machu Picchu Sunrise",
//       "Day 6: Return to Cusco",
//     ],
//   },
//   {
//     id: 10,
//     title: "Dubai Luxury Experience",
//     location: "Dubai, UAE",
//     image: "https://picsum.photos/500/300?random=10",
//     price: 2800,
//     duration: "5 Days / 4 Nights",
//     rating: 4.9,
//     type: "Luxury City Tour",
//     groupSize: "2-6 People",
//     description:
//       "Experience ultimate luxury with desert safaris, skyscraper tours, and premium shopping.",
//     itinerary: [
//       "Day 1: Arrival & Burj Khalifa Visit",
//       "Day 2: Desert Safari & Bedouin Dinner",
//       "Day 3: Luxury Yacht Cruise",
//       "Day 4: Gold Souk & Dubai Mall",
//       "Day 5: Departure",
//     ],
//   },
//   {
//     id: 11,
//     title: "Himalayan Trekking Journey",
//     location: "Nepal",
//     image: "https://picsum.photos/500/300?random=11",
//     price: 1600,
//     duration: "10 Days / 9 Nights",
//     rating: 4.6,
//     type: "Mountain Expedition",
//     groupSize: "4-12 People",
//     description:
//       "Trek through breathtaking Himalayan landscapes and experience Sherpa culture.",
//     itinerary: [
//       "Day 1: Kathmandu Arrival",
//       "Day 2: Flight to Lukla",
//       "Day 3: Namche Bazaar Trek",
//       "Day 4: Acclimatization Day",
//       "Day 5: Tengboche Monastery",
//       "Day 6: Dingboche Village",
//       "Day 7: Everest Base Camp",
//       "Day 8: Kala Patthar Summit",
//       "Day 9: Return Trek",
//       "Day 10: Departure",
//     ],
//   },
//   {
//     id: 12,
//     title: "Italian Cultural Odyssey",
//     location: "Rome, Italy",
//     image: "https://picsum.photos/500/300?random=12",
//     price: 2100,
//     duration: "8 Days / 7 Nights",
//     rating: 4.8,
//     type: "Cultural Tour",
//     groupSize: "2-10 People",
//     description:
//       "Explore ancient ruins, Renaissance art, and authentic Italian cuisine.",
//     itinerary: [
//       "Day 1: Rome Arrival & Colosseum Tour",
//       "Day 2: Vatican City Exploration",
//       "Day 3: Florence Transfer & Duomo Visit",
//       "Day 4: Uffizi Gallery & Ponte Vecchio",
//       "Day 5: Pisa & Tuscan Countryside",
//       "Day 6: Venice Canals & Gondola Ride",
//       "Day 7: Murano Glass Workshop",
//       "Day 8: Departure",
//     ],
//   },
//   {
//     id: 13,
//     title: "Costa Rica Eco Adventure",
//     location: "Monteverde, Costa Rica",
//     image: "https://picsum.photos/500/300?random=13",
//     price: 1750,
//     duration: "7 Days / 6 Nights",
//     rating: 4.7,
//     type: "Eco Tourism",
//     groupSize: "4-8 People",
//     description:
//       "Zipline through cloud forests and discover rich biodiversity in natural reserves.",
//     itinerary: [
//       "Day 1: San José Arrival",
//       "Day 2: Monteverde Cloud Forest",
//       "Day 3: Canopy Zipline Adventure",
//       "Day 4: Arenal Volcano & Hot Springs",
//       "Day 5: Manuel Antonio National Park",
//       "Day 6: Pacific Beach Relaxation",
//       "Day 7: Departure",
//     ],
//   },
//   {
//     id: 14,
//     title: "Southeast Asia Explorer",
//     location: "Thailand & Cambodia",
//     image: "https://picsum.photos/500/300?random=14",
//     price: 2400,
//     duration: "9 Days / 8 Nights",
//     rating: 4.8,
//     type: "Multi-Country Tour",
//     groupSize: "4-12 People",
//     description:
//       "Discover ancient temples, floating markets, and tropical beaches across two countries.",
//     itinerary: [
//       "Day 1: Bangkok Arrival",
//       "Day 2: Grand Palace & Wat Pho",
//       "Day 3: Floating Market Tour",
//       "Day 4: Fly to Siem Reap",
//       "Day 5: Angkor Wat Sunrise Tour",
//       "Day 6: Ta Prohm Exploration",
//       "Day 7: Phuket Beach Transfer",
//       "Day 8: Island Hopping Cruise",
//       "Day 9: Departure",
//     ],
//   },
//   {
//     id: 15,
//     title: "Patagonian Wilderness Trek",
//     location: "Chile & Argentina",
//     image: "https://picsum.photos/500/300?random=15",
//     price: 2600,
//     duration: "10 Days / 9 Nights",
//     rating: 4.9,
//     type: "Wilderness Adventure",
//     groupSize: "4-8 People",
//     description:
//       "Hike through dramatic landscapes of glaciers, mountains, and pristine lakes.",
//     itinerary: [
//       "Day 1: Punta Arenas Arrival",
//       "Day 2: Torres del Paine National Park",
//       "Day 3: Grey Glacier Trek",
//       "Day 4: French Valley Hike",
//       "Day 5: Lake Pehoé Navigation",
//       "Day 6: Cross to Argentina",
//       "Day 7: Perito Moreno Glacier",
//       "Day 8: El Chaltén Exploration",
//       "Day 9: Fitz Roy Summit View",
//       "Day 10: Departure",
//     ],
//   },
// ];

// const TourPage = () => {
//   const toggleWishlist = useCallback((id) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   }, []);

//   const LeftArrow = ({ onClick }) => (
//     <button
//       className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
//       aria-label="Previous"
//       onClick={onClick}
//     >
//       <FiChevronLeft className="w-6 h-6 text-gray-800" />
//     </button>
//   );

//   const RightArrow = ({ onClick }) => (
//     <button
//       className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
//       aria-label="Next"
//       onClick={onClick}
//     >
//       <FiChevronRight className="w-6 h-6 text-gray-800" />
//     </button>
//   );
//   const [wishlist, setWishlist] = useState([]);
//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100 py-12 px-6">
//         {/* Carousel Section */}
        // <Carousel
        //   responsive={responsive}
        //   autoPlay={true}
        //   infinite={true}
        //   autoPlaySpeed={3000}
        //   className="z-10"
        //   customLeftArrow={<LeftArrow />}
        //   customRightArrow={<RightArrow />}
        // >
        //   {tourData.slice(3, 10).map((pkg) => (
        //     <div key={pkg.id} className="relative p-2 mt-12">
        //       {/* Package Image */}
        //       <img
        //         src={pkg.image}
        //         alt={pkg.title}
        //         className="w-full h-64 object-cover rounded-xl"
        //       />

        //       {/* Overlay Info */}
        //       <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
        //         <h3 className="text-lg font-semibold">{pkg.title}</h3>
        //         <p className="text-sm flex items-center gap-1">
        //           <FiMapPin /> {pkg.location}
        //         </p>
        //         <p className="text-sm flex items-center gap-1">
        //           <FiClock /> {pkg.duration}
        //         </p>
        //         <p className="text-sm flex items-center gap-1">
        //           <FiStar className="text-yellow-400" /> {pkg.rating} / 5
        //         </p>
        //         <p className="text-md font-bold">₹ {pkg.price}</p>
        //       </div>

        //       {/* Heart Icon for Wishlist */}
        //       <button
        //         onClick={() => toggleWishlist(pkg.id)}
        //         className="absolute top-4 right-4 z-10 cursor-pointer p-2 shadow-md rounded-full bg-white/80 hover:bg-white"
        //       >
        //         <FiHeart
        //           className={`w-6 h-6 ${
        //             wishlist.includes(pkg.id) ? "text-red-500 fill-red-500" : ""
        //           }`}
        //         />
        //       </button>
        //     </div>
        //   ))}
        // </Carousel>

//         {/* Page Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center text-gray-800 mb-10 mt-10"
//         >
//           🌍 Explore Our Exciting Tours ✈️
//         </motion.h1>

//         {/* Tour Cards */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {tourData.map((tour, index) => (
//             <motion.div
//               key={tour.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05 }} // This will scale the entire card
//               transition={{ duration: 0.1, delay: index * 0 }}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:shadow-2xl"
//             >
//               <img
//                 src={tour.image}
//                 alt={tour.title}
//                 className="w-full h-56 object-cover"
//               />

//               <div className="p-5">
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   {tour.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-4 mt-3">
//                   <div className="flex items-center text-gray-600 text-sm">
//                     <FaMapMarkerAlt className="mr-2 text-red-500" />
//                     <span>{tour.location}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600 text-sm">
//                     <FaClock className="mr-2 text-blue-500" />
//                     <span>{tour.duration}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600 text-sm">
//                     <FaMountain className="mr-2 text-green-500" />
//                     <span>{tour.type}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600 text-sm">
//                     <FaUsers className="mr-2 text-purple-500" />
//                     <span>{tour.groupSize}</span>
//                   </div>
//                 </div>

//                 <p className="text-gray-600 mt-3 text-sm h-20 overflow-hidden">
//                   {tour.description}
//                 </p>

//                 <div className="flex justify-between items-center mt-4">
//                   <div className="flex items-center text-lg text-green-600 font-semibold">
//                     <FaDollarSign className="mr-1 text-green-500" />
//                     {tour.price}
//                   </div>
//                   <div className="flex items-center text-yellow-500">
//                     <FaStar className="mr-1" />
//                     {tour.rating}
//                   </div>
//                 </div>

//                 <Link to={`/book/${tour.id}`}>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-4 w-full bg-blue-600 cursor-pointer text-white font-semibold py-2 rounded-lg transition-all hover:bg-blue-700 shadow-md hover:shadow-lg"
//                   >
//                     Book Now
//                   </motion.button>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default TourPage;
























import { motion } from "framer-motion";
import Navbar from "./Navbar";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaMountain,
} from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import {
  FiStar,
  FiMapPin,
  FiClock,
  FiHeart,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { useState } from "react";
import Footer from "./Footer";

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

const tourData = [
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
  },
];

const TourPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredTours = tourData.filter((tour) => {
    const matchesLocation = tour.location
      .toLowerCase()
      .includes(locationFilter.toLowerCase());
    const matchesDate = dateFilter
      ? tour.availableDates.includes(dateFilter)
      : true;
    return matchesLocation && matchesDate;
  });

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

      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={3000}
          className="z-10"
          customLeftArrow={<LeftArrow />}
          customRightArrow={<RightArrow />}
        >
          {tourData.slice(3, 10).map((pkg) => (
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
                  <FiClock /> {pkg.duration}
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

        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-10 mt-10"
        >
          🌍 Explore Our Exciting Tours ✈️
        </motion.h1>
        {/* Filters Section */}
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
        {/* Tour Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1, delay: index * 0 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:shadow-2xl"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {tour.title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaMapMarkerAlt className="mr-2 text-red-500" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaClock className="mr-2 text-blue-500" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaMountain className="mr-2 text-green-500" />
                    <span>{tour.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaUsers className="mr-2 text-purple-500" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-3 text-sm h-20 overflow-hidden">
                  {tour.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-lg text-green-600 font-semibold">
                    <FaDollarSign className="mr-1 text-green-500" />
                    {tour.price}
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    {tour.rating}
                  </div>
                </div>
                <Link to={`/book/${tour.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-blue-600 cursor-pointer text-white font-semibold py-2 rounded-lg transition-all hover:bg-blue-700 shadow-md hover:shadow-lg"
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TourPage;