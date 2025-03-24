// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaBars, FaRegUserCircle } from "react-icons/fa";

// const TravelLandingPage = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
//       {/* Navigation Bar */}
//       <nav className="flex items-center justify-between p-6">
//         <FaBars className="text-2xl cursor-pointer" />
//         <ul className="hidden md:flex space-x-8">
//           <li className="cursor-pointer hover:text-gray-300">Home</li>
//           <li className="cursor-pointer hover:text-gray-300">Tours</li>
//           <li className="cursor-pointer hover:text-gray-300">
//             Holiday Packages
//           </li>
//           <li className="cursor-pointer hover:text-gray-300">Flights</li>
//           <li className="cursor-pointer hover:text-gray-300">Hotels</li>
//         </ul>
//         <FaRegUserCircle className="text-2xl cursor-pointer" />
//       </nav>

//       {/* Hero Section */}
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10 py-20">
//         {/* Image Grid */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-2 gap-4 md:gap-6 md:w-1/2"
//         >
//           <img
//             src="https://picsum.photos/200/250?random=1"
//             alt="Desert"
//             className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
//           />
//           <img
//             src="https://picsum.photos/200/250?random=10"
//             alt="Mosque"
//             className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
//           />
//           <img
//             src="https://picsum.photos/200/250?random=20"
//             alt="Beach"
//             className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
//           />
//         </motion.div>

//         {/* Hero Text */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
//         >
//           <h1 className="text-4xl font-bold mb-4">
//             Planning a trip should be very exciting adventure
//           </h1>
//           <p className="text-lg text-gray-200">
//             We're dedicated to offering exceptional value for your travel
//             investment. Our relationships with trusted travel partners.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TravelLandingPage;

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"; // Added Link import
// import {
//   Home,
//   Map,
//   Gift,
//   Plane,
//   Building,
//   Search,
//   Menu,
//   PlaneTakeoff,
// } from "lucide-react";

// const TravelLandingPage = () => {
//   const [mounted, setMounted] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
//       {/* Navigation */}
//       <nav
//         className={`fixed z-50 top-0 left-0 w-full px-6 py-4 transition-all duration-300 ${
//           scrolling ? "bg-white shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <div className="container mx-auto flex items-center justify-between">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.2 }}
//             className="text-2xl font-bold text-blue-600 flex items-center gap-2"
//           >
//             <PlaneTakeoff size={28} className="text-blue-500" />
//             TravelHub
//           </motion.div>

//           {/* Updated Navigation Links with Link component */}
//           <div className="hidden md:flex space-x-8">
//             {[
//               { name: "Home", icon: <Home size={20} />, path: "/" },
//               { name: "Tours", icon: <Map size={20} />, path: "/tours" },
//               { name: "Holiday Packages", icon: <Gift size={20} />, path: "/packages" },
//               { name: "Flights", icon: <Plane size={20} />, path: "/flights" },
//               { name: "Hotels", icon: <Building size={20} />, path: "/hotels" },
//             ].map((item, index) => (
//               <motion.div
//                 key={item.name}
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.1 + 0.3 }}
//               >
//                 <Link
//                   to={item.path}
//                   className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2"
//                 >
//                   {item.icon}
//                   {item.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           <div className="md:hidden">
//             <Menu size={28} className="text-gray-600 cursor-pointer" />
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section remains the same */}
//       <div className="container mx-auto px-6 py-20 pt-24">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
//             Planning a trip should be a very
//             <br />
//             <motion.span
//               className="text-blue-600"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               exciting adventure
//             </motion.span>
//           </h1>
//           <div className="mt-12 flex justify-center">
//             {!showSearch ? (
//               <motion.button
//                 key="main-button"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setShowSearch(true)}
//                 className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2"
//               >
//                 <PlaneTakeoff size={24} /> Start Your Journey
//               </motion.button>
//             ) : (
//               <motion.div
//                 key="search-bar"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="flex flex-col md:flex-row gap-4 justify-center items-center"
//               >
//                 <div className="relative w-full md:w-96">
//                   <input
//                     type="text"
//                     placeholder="Search for destinations..."
//                     className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg pl-12"
//                     autoFocus
//                   />
//                   <Search
//                     size={20}
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//                   />
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 w-full md:w-auto"
//                 >
//                   <Search size={20} /> Search
//                 </motion.button>
//               </motion.div>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TravelLandingPage;

// TravelLandingPage.jsx

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Search, PlaneTakeoff } from "lucide-react";
import Navbar from "./Navbar";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

const TravelLandingPage = () => {
  const [mounted, setMounted] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("Economy/Premium Economy");
  const [showTravellersClassDropdown, setShowTravellersClassDropdown] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
      <Navbar />
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Planning a trip should be a very
            <br />
            <motion.span
              className="text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              exciting adventure
            </motion.span>
          </h1>
          {/*<div className="mt-12 flex justify-center">
            {!showSearch ? (
              <motion.button
                key="main-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg cursor-pointer flex items-center gap-2"
              >
                <PlaneTakeoff size={24} /> Start Your Journey
              </motion.button>
            ) : (
              <motion.div
                key="search-bar"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col md:flex-row gap-4 justify-center items-center"
              >
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    placeholder="Search for destinations..."
                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg pl-12"
                    autoFocus
                  />
                  <Search
                    size={20}
                    className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all cursor-pointer shadow-lg flex items-center gap-2 w-full md:w-auto"
                >
                  <Search size={20} /> Search
                </motion.button>
              </motion.div>
            )}
          </div>*/}

          <div className="mt-12 flex justify-center w-full">
            {!showSearch ? (
              <motion.button
                key="main-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg cursor-pointer flex items-center gap-2"
              >
                <FaPlaneDeparture size={24} /> Start Your Journey
              </motion.button>
            ) : (
              <motion.div
                key="search-bar"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-100 p-6 rounded-lg shadow-2xl w-full max-w-4xl"
              >
                {/* Title */}
                <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
                  Plan Your Trip
                </h2>

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* From */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="From"
                      className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-12"
                      autoFocus
                      value={fromInput}
                      onChange={(e) => {
                        setFromInput(e.target.value);
                        setShowFromDropdown(true); // Show dropdown when typing
                      }}
                      onClick={() => setShowFromDropdown(true)}
                      onBlur={() =>
                        setTimeout(() => setShowFromDropdown(false), 200)
                      }
                    />
                    <FaPlaneDeparture
                      size={20}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />

                    {showFromDropdown && (
                      <div className="absolute bg-white shadow-md rounded-lg w-full mt-2 z-10 max-h-64 overflow-y-auto">
                        {/* Popular Cities Header */}
                        <div className="px-4 py-2 z-10 font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-400 bg-gray-100 flex items-center gap-2">
                          <FaSearch size={14} className="text-gray-500" />{" "}
                          {/* Search Icon */}
                          <span>Popular Cities</span>
                        </div>

                        {/* Popular Cities List */}
                        {[
                          {
                            city: "Mumbai, India",
                            code: "BOM",
                            airport:
                              "Chhatrapati Shivaji International Airport",
                          },
                          {
                            city: "New Delhi, India",
                            code: "DEL",
                            airport: "Indira Gandhi International Airport",
                          },
                          {
                            city: "Bangkok, Thailand",
                            code: "BKK",
                            airport: "Bangkok",
                          },
                          {
                            city: "Bengaluru, India",
                            code: "BLR",
                            airport: "Bengaluru International Airport",
                          },
                          { city: "Pune, India", code: "PNQ", airport: "Pune" },
                        ]
                          .filter(
                            ({ city, code, airport }) =>
                              city
                                .toLowerCase()
                                .includes(fromInput.toLowerCase()) ||
                              code
                                .toLowerCase()
                                .includes(fromInput.toLowerCase()) ||
                              airport
                                .toLowerCase()
                                .includes(fromInput.toLowerCase())
                          )
                          .map(({ city, code, airport }) => (
                            <div
                              key={code}
                              className="px-4 py-3 hover:bg-gray-200 cursor-pointer transition duration-200"
                              onClick={() => {
                                setFromInput(city); // Set the selected city in the input field
                                setShowFromDropdown(false); // Close the dropdown
                              }}
                            >
                              <div className="flex items-center gap-3">
                                {/* Plane Icon */}
                                <FaPlaneDeparture
                                  size={16}
                                  className="text-gray-500 flex-shrink-0"
                                />

                                {/* City and Airport Details */}
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-gray-700 truncate">
                                    {city}
                                  </div>
                                  <div className="text-sm text-gray-500 truncate">
                                    {airport}
                                  </div>
                                </div>

                                {/* Airport Code */}
                                <span className="text-gray-600 font-semibold flex-shrink-0">
                                  {code}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>

                  {/* To */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="To"
                      className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-12"
                      value={toInput}
                      onChange={(e) => {
                        setToInput(e.target.value);
                        setShowToDropdown(true); // Show dropdown when typing
                      }}
                      onClick={() => setShowToDropdown(true)}
                      onBlur={() =>
                        setTimeout(() => setShowToDropdown(false), 200)
                      }
                    />
                    <FaPlaneArrival
                      size={20}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                    {showToDropdown && (
                      <div className="absolute bg-white shadow-md rounded-lg w-full mt-2 z-10 max-h-64 overflow-y-auto">
                        {/* Popular Cities Header */}
                        <div className="px-4 py-2 z-10 font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-400 bg-gray-100 flex items-center gap-2">
                          <FaSearch size={14} className="text-gray-500" />{" "}
                          {/* Search Icon */}
                          <span>Popular Cities</span>
                        </div>

                        {/* Popular Cities List */}
                        {[
                          {
                            city: "Mumbai, India",
                            code: "BOM",
                            airport:
                              "Chhatrapati Shivaji International Airport",
                          },
                          {
                            city: "New Delhi, India",
                            code: "DEL",
                            airport: "Indira Gandhi International Airport",
                          },
                          {
                            city: "Bangkok, Thailand",
                            code: "BKK",
                            airport: "Bangkok",
                          },
                          {
                            city: "Bengaluru, India",
                            code: "BLR",
                            airport: "Bengaluru International Airport",
                          },
                          { city: "Pune, India", code: "PNQ", airport: "Pune" },
                        ]
                          .filter(
                            ({ city, code, airport }) =>
                              city
                                .toLowerCase()
                                .includes(toInput.toLowerCase()) ||
                              code
                                .toLowerCase()
                                .includes(toInput.toLowerCase()) ||
                              airport
                                .toLowerCase()
                                .includes(toInput.toLowerCase())
                          )
                          .map(({ city, code, airport }) => (
                            <div
                              key={code}
                              className="px-4 py-3 hover:bg-gray-200 cursor-pointer transition duration-200"
                              onClick={() => {
                                setToInput(city); // Set the selected city in the input field
                                setShowToDropdown(false); // Close the dropdown
                              }}
                            >
                              <div className="flex items-center gap-3">
                                {/* Plane Icon */}
                                <FaPlaneArrival
                                  size={16}
                                  className="text-gray-500 flex-shrink-0"
                                />

                                {/* City and Airport Details */}
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-gray-700 truncate">
                                    {city}
                                  </div>
                                  <div className="text-sm text-gray-500 truncate">
                                    {airport}
                                  </div>
                                </div>

                                {/* Airport Code */}
                                <span className="text-gray-600 font-semibold flex-shrink-0">
                                  {code}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>

                  {/* Departure */}
                  <div className="relative">
                    <input
                      type="date"
                      placeholder="Departure"
                      className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-12"
                    />
                    <FaCalendarAlt
                      size={20}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                  </div>

                  {/* Return */}
                  <div className="relative">
                    <input
                      type="date"
                      placeholder="Return"
                      className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-12"
                    />
                    <FaCalendarAlt
                      size={20}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                  </div>

                  {/* Travellers & Class */}
                  <div className="relative col-span-1 md:col-span-2">
                    {/* Input Field for Travellers & Class */}
                    <input
                      type="text"
                      placeholder={`${adults} Adult | ${children} Child | ${infants} Infants| ${travelClass}`}
                      className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-12"
                      onClick={() =>
                        setShowTravellersClassDropdown(
                          !showTravellersClassDropdown
                        )
                      }
                      readOnly // Make the input field read-only
                    />
                    <FaUserCircle
                      size={20}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />

                    {/* Dropdown for Travellers & Class */}
                    {showTravellersClassDropdown && (
                      <div className="absolute bg-white shadow-md rounded-lg w-full mt-2 z-10 p-4">
                        {/* Adults Section */}
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            ADULTS (12y +)
                            <p className="text-xs text-gray-500">
                              on the day of travel
                            </p>
                          </label>
                          <div className="flex gap-2">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ">9"].map(
                              (value) => (
                                <button
                                  key={value}
                                  className={`px-2 py-1 rounded-lg border ${
                                    adults === value
                                      ? "bg-blue-600 text-white border-blue-600"
                                      : "bg-white text-gray-700 border-gray-300"
                                  } hover:bg-blue-100 transition-all`}
                                  onClick={() => setAdults(value)}
                                >
                                  {value}
                                </button>
                              )
                            )}
                          </div>
                        </div>

                        {/* Children Section */}
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CHILDREN (2y - 12y)
                            <p className="text-xs text-gray-500">
                              on the day of travel
                            </p>
                          </label>
                          <div className="flex gap-2">
                            {[0, 1, 2, 3, 4, 5, 6, ">6"].map((value) => (
                              <button
                                key={value}
                                className={`px-2 py-1 rounded-lg border ${
                                  children === value
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300"
                                } hover:bg-blue-100 transition-all`}
                                onClick={() => setChildren(value)}
                              >
                                {value}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Infants Section */}
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            INFANTS (below 2y)
                            <p className="text-xs text-gray-500">
                              on the day of travel
                            </p>
                          </label>
                          <div className="flex gap-2">
                            {[0, 1, 2, 3, 4, 5, 6, ">6"].map((value) => (
                              <button
                                key={value}
                                className={`px-2 py-1 rounded-lg border ${
                                  infants === value
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300"
                                } hover:bg-blue-100 transition-all`}
                                onClick={() => setInfants(value)}
                              >
                                {value}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Travel Class Section */}
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CHOOSE TRAVEL CLASS
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              "Economy/Premium Economy",
                              "Premium Economy",
                              "Business",
                              "First Class",
                            ].map((classOption) => (
                              <button
                                key={classOption}
                                className={`px-1 py-1 rounded-lg border ${
                                  travelClass === classOption
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300"
                                } hover:bg-blue-100 transition-all`}
                                onClick={() => setTravelClass(classOption)}
                              >
                                {classOption}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Apply Button */}
                        <button
                          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                          onClick={() => setShowTravellersClassDropdown(false)}
                        >
                          APPLY
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Search Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 w-full"
                >
                  <FaSearch size={20} /> Search Flights
                </motion.button>

                {/* Close Button */}
                <button
                  className="text-gray-500 cursor-pointer text-sm mt-4 w-full text-center hover:underline"
                  onClick={() => setShowSearch(false)}
                >
                  Cancel
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TravelLandingPage;
