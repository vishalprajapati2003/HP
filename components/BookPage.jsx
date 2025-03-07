import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaInfoCircle,
  FaCalendarAlt,
  FaUserFriends,
  FaStar,
  FaDollarSign,
  FaClipboardList,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
} from "react-icons/fa";

const BookPage = () => {
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
   },
 ];
  const { tourId } = useParams();
  const tour = tourData.find((t) => t.id === Number(tourId));
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: 1,
    date: "",
    requests: "",
  });
  if (!tour) return <div>Tour not found</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto p-6"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 mt-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-6 text-center"
          >
            Booking for: {tour.title}
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Side: Tour Details */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />

              {/* Tour Info */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-lg">
                  <FaInfoCircle className="mr-2 text-blue-500" />
                  <span className="font-semibold">Tour Type:</span>
                  <span className="ml-2">{tour.type}</span>
                </div>
                <div className="flex items-center text-lg">
                  <FaCalendarAlt className="mr-2 text-green-500" />
                  <span className="font-semibold">Duration:</span>
                  <span className="ml-2">{tour.duration}</span>
                </div>
                <div className="flex items-center text-lg">
                  <FaUserFriends className="mr-2 text-purple-500" />
                  <span className="font-semibold">Group Size:</span>
                  <span className="ml-2">{tour.groupSize}</span>
                </div>
                <div className="flex items-center text-lg">
                  <FaStar className="mr-2 text-yellow-500" />
                  <span className="font-semibold">Rating:</span>
                  <span className="ml-2">{tour.rating} / 5</span>
                </div>
                <div className="flex items-center text-lg">
                  <FaDollarSign className="mr-2 text-green-500" />
                  <span className="font-semibold">Price:</span>
                  <span className="ml-2">${tour.price} per person</span>
                </div>
              </div>

              {/* Itinerary Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
                  <FaClipboardList className="mr-2 text-blue-500" />
                  Itinerary Overview
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {tour.itinerary.map((day, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {day}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Side: Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Booking Details
              </h2>
              <form className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    Number of Travelers
                  </label>
                  <select className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative flex items-center">
                    <FaUser className="absolute top-2 left-3 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <FaEnvelope className="absolute top-2 left-3 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <FaPhone className="absolute left-3 text-gray-500" />
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="pl-10 block py-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Special Requests
                  </label>
                  <div className="relative">
                    <FaCommentDots className="absolute top-1 left-3 text-gray-500" />
                    <textarea
                      placeholder="Any special requirements?"
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                </div>
                <Link to={`/confirm/${tour.id}`} state={{ formData }}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold shadow-lg"
                  >
                    Confirm Booking - ${tour.price}
                  </motion.button>
                </Link>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookPage;
