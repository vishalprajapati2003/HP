// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/userSlice";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import headerImage from "../assets/header.jpg";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// function Header() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((store) => store.user);
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);

//   // Change navbar background & logo color on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };

//   return (
//     <>
//       <div
//         className="relative w-full h-[70vh] bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${headerImage})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Navbar */}
//         <div
//           className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//             scrolling ? "bg-white shadow-md" : "bg-transparent"
//           }`}
//         >
//           <nav className="container mx-auto flex justify-between items-center py-4 px-5 lg:px-10">
//             {/* Logo with Dynamic Color Change */}
//             <Link
//               to="/"
//               className={`text-2xl font-bold flex items-center transition-colors duration-300 ${
//                 scrolling ? "text-green-500" : "text-black"
//               }`}
//             >
//               <i
//                 className={`fas fa-map-marker-alt text-green-500 mr-2 transition-colors duration-300 `}
//               ></i>
//               Tourist
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden text-gray-700"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <i className="fas fa-bars text-2xl"></i>
//             </button>

//             {/* Navigation Links */}
//             <div
//               className={`lg:flex items-center space-x-6 ${
//                 isOpen
//                   ? "flex flex-col w-full mt-4 space-y-4 lg:mt-0 lg:flex-row lg:space-y-0"
//                   : "hidden lg:flex"
//               }`}
//             >
//               <Link to="/" className="hover:text-primary">
//                 Home
//               </Link>
//               <Link to="/About" className="hover:text-primary">
//                 About
//               </Link>
//               <Link to="/Services" className="hover:text-primary">
//                 Services
//               </Link>
//               <Link to="/Packages" className="hover:text-primary">
//                 Packages
//               </Link>
//               <Link to="/Contact" className="hover:text-primary">
//                 Contact
//               </Link>

//               {/* Login / Logout Button */}
//               {user ? (
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <Link
//                   to="/login"
//                   className="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600 transition"
//                 >
//                   Create Account
//                 </Link>
//               )}
//             </div>
//           </nav>
//         </div>

//         {/* Text Above Search Box */}
//         <div className="absolute inset-0 flex justify-center items-center flex-col text-center space-y-7">
//           <h2 className="text-5xl font-semibold text-gray-100">
//             Enjoy Your Vacation With Us
//           </h2>

//           {/* Search Box */}
//           <div className="bg-white p-4 rounded-full shadow-lg flex items-center w-[80%] max-w-lg">
//             <input
//               type="text"
//               placeholder="Search for destinations..."
//               className="w-full px-4 py-2 border-none focus:outline-none"
//             />
//             <button className="bg-orange-500 text-white cursor-pointer px-4 py-2 rounded-full">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;

// import { motion } from "framer-motion";
// import { NavLink, useLocation } from "react-router-dom";
// import {
//   Home,
//   Map,
//   Gift,
//   Plane,
//   Building,
//   Menu,
//   PlaneTakeoff,
//   History,
// } from "lucide-react";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const location = useLocation(); // Get current route

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 50);
//     };

//     // Check scroll position on mount
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [location]); // Re-run when route changes

//   return (
//     <nav
//       className={`fixed z-50 top-0 left-0 w-full px-6 py-4 transition-all duration-300 ${
//         scrolling ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         <NavLink to="/">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.2 }}
//             className="text-2xl font-bold text-blue-600 flex items-center gap-2"
//           >
//             <PlaneTakeoff size={28} className="text-blue-500" />
//             Travio
//           </motion.div>
//         </NavLink>
//         <div className="hidden md:flex space-x-8">
//           {[
//             { name: "Home", icon: <Home size={20} />, path: "/" },
//             { name: "Tours", icon: <Map size={20} />, path: "/tours" },
//             {
//               name: "Holiday Packages",
//               icon: <Gift size={20} />,
//               path: "/packages",
//             },
//             { name: "Flights", icon: <Plane size={20} />, path: "/flight" },
//             { name: "Hotels", icon: <Building size={20} />, path: "/hotel" },
//             { name: "History", icon: <History size={20} />, path: "/history" },
//           ].map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.1 + 0.3 }}
//             >
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 transition-colors ${
//                     isActive ? "text-blue-500 font-semibold" : "text-gray-600"
//                   } hover:text-blue-500`
//                 }
//               >
//                 {item.icon}
//                 {item.name}
//               </NavLink>
//             </motion.div>
//           ))}
//         </div>

//         <div className="md:hidden">
//           <Menu size={28} className="text-gray-600 cursor-pointer" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { motion } from "framer-motion";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import {
//   Home,
//   Map,
//   Gift,
//   Plane,
//   Building,
//   Menu,
//   PlaneTakeoff,
//   History,
//   Settings,
//   User,
// } from "lucide-react";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const location = useLocation(); // Get current route
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 50);
//     };

//     // Check scroll position on mount
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [location]); // Re-run when route changes

//   return (
//     <nav
//       className={`fixed z-50 top-0 left-0 w-full px-6 py-4 transition-all duration-300 ${
//         scrolling ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         <NavLink to="/">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.2 }}
//             className="text-2xl font-bold text-blue-600 flex items-center gap-2"
//           >
//             <PlaneTakeoff size={28} className="text-blue-500" />
//             Travio
//           </motion.div>
//         </NavLink>
//         <div className="hidden md:flex space-x-8">
//           {[
//             { name: "Home", icon: <Home size={20} />, path: "/" },
//             { name: "Tours", icon: <Map size={20} />, path: "/tours" },
//             {
//               name: "Holiday Packages",
//               icon: <Gift size={20} />,
//               path: "/packages",
//             },
//             { name: "Flights", icon: <Plane size={20} />, path: "/flight" },
//             { name: "Hotels", icon: <Building size={20} />, path: "/hotel" },
//             { name: "History", icon: <History size={20} />, path: "/history" },
//           ].map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.1 + 0.3 }}
//             >
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center gap-2 transition-colors ${
//                     isActive ? "text-blue-500 font-semibold" : "text-gray-600"
//                   } hover:text-blue-500`
//                 }
//               >
//                 {item.icon}
//                 {item.name}
//               </NavLink>
//             </motion.div>
//           ))}
//         </div>

//         <div className="md:hidden">
//           <Menu size={28} className="text-gray-600 cursor-pointer" />
//         </div>
//       </div>

//       {/* Custom Button for Navigation */}
//       <motion.button
//         className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 flex items-center gap-2 rounded-full shadow-lg hover:bg-blue-700"
//         onClick={() => navigate("/customize")}
//         whileHover={{ scale: 1.1 }}
//       >
//         <User size={24} /> Custom Package
//       </motion.button>
//     </nav>
//   );
// };

// export default Navbar;

import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Map,
  Gift,
  Plane,
  Building,
  Menu,
  PlaneTakeoff,
  History,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    handleScroll(); // Check scroll position on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Tours", icon: <Map size={20} />, path: "/tours" },
    {
      name: "Holiday Packages",
      icon: <Gift size={20} />,
      path: "/packages",
    },
    { name: "Flights", icon: <Plane size={20} />, path: "/flight" },
    { name: "Hotels", icon: <Building size={20} />, path: "/hotel" },
    { name: "History", icon: <History size={20} />, path: "/history" },
  ];

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-xl sm:text-2xl font-bold text-blue-600 flex items-center gap-2"
          >
            <PlaneTakeoff size={24} className="text-blue-500" />
            Travio
          </motion.div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors ${
                    isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                  } hover:text-blue-500`
                }
              >
                {item.icon}
                <span className="text-sm lg:text-base">{item.name}</span>
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <Menu
            size={28}
            className="text-gray-600 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50"
          >
            <div className="p-6">
              {/* Close Button */}
              <X
                size={28}
                className="text-gray-600 cursor-pointer mb-6"
                onClick={closeMenu}
              />

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 text-lg ${
                        isActive
                          ? "text-blue-500 font-semibold"
                          : "text-gray-600"
                      } hover:text-blue-500`
                    }
                    onClick={closeMenu}
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Custom Button for Navigation */}
      <motion.button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 flex items-center gap-2 rounded-full cursor-pointer shadow-lg hover:bg-blue-700"
        onClick={() => navigate("/customize")}
        whileHover={{ scale: 1.1 }}
      >
        <User size={20} className="sm:size-6" />
        <span className="text-sm sm:text-base">Custom Package</span>
      </motion.button>
    </nav>
  );
};

export default Navbar;
