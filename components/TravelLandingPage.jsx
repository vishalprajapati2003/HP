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

const TravelLandingPage = () => {
  const [mounted, setMounted] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
          <div className="mt-12 flex justify-center">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TravelLandingPage;