// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const flights = [
//   {
//     id: 1,
//     flightNumber: "AA-202",
//     airline: "American Airlines",
//     departure: "New York (JFK)",
//     arrival: "Los Angeles (LAX)",
//     duration: "5h 45m",
//     price: "$450",
//     departureTime: "8:00 AM",
//     arrivalTime: "1:45 PM",
//     status: "Delayed",
//     gate: "B12",
//     terminal: "T4",
//     baggage: "Belt 5",
//     aircraft: "Boeing 737",
//     seatClass: "Economy",
//     meal: "Standard",
//   },
//   {
//     id: 2,
//     flightNumber: "BA-305",
//     airline: "British Airways",
//     departure: "London (LHR)",
//     arrival: "New York (JFK)",
//     duration: "7h 10m",
//     price: "$700",
//     departureTime: "10:15 AM",
//     arrivalTime: "3:25 PM",
//     status: "On Time",
//     gate: "D5",
//     terminal: "T3",
//     baggage: "Belt 8",
//     aircraft: "Airbus A380",
//     seatClass: "Business Class",
//     meal: "Vegetarian",
//   },
//   {
//     id: 4,
//     flightNumber: "SQ-318",
//     airline: "Singapore Airlines",
//     departure: "Singapore (SIN)",
//     arrival: "London (LHR)",
//     duration: "13h 50m",
//     price: "$950",
//     departureTime: "11:30 PM",
//     arrivalTime: "5:20 AM",
//     status: "On Time",
//     gate: "A3",
//     terminal: "T2",
//     baggage: "Belt 9",
//     aircraft: "Boeing 777",
//     seatClass: "First Class",
//     meal: "Halal",
//   },
//   {
//     id: 5,
//     flightNumber: "LH-760",
//     airline: "Lufthansa",
//     departure: "Frankfurt (FRA)",
//     arrival: "Delhi (DEL)",
//     duration: "8h 10m",
//     price: "$600",
//     departureTime: "1:20 PM",
//     arrivalTime: "11:30 PM",
//     status: "On Time",
//     gate: "C10",
//     terminal: "T1",
//     baggage: "Belt 6",
//     aircraft: "Airbus A350",
//     seatClass: "Premium Economy",
//     meal: "Gluten-Free",
//   },
//   {
//     id: 6,
//     flightNumber: "CX-708",
//     airline: "Cathay Pacific",
//     departure: "Hong Kong (HKG)",
//     arrival: "Bangkok (BKK)",
//     duration: "2h 45m",
//     price: "$300",
//     departureTime: "7:00 AM",
//     arrivalTime: "9:45 AM",
//     status: "Cancelled",
//     gate: "E2",
//     terminal: "T1",
//     baggage: "Belt 1",
//     aircraft: "Boeing 787",
//     seatClass: "Economy",
//     meal: "Vegan",
//   },
//   {
//     id: 7,
//     flightNumber: "AF-228",
//     airline: "Air France",
//     departure: "Paris (CDG)",
//     arrival: "Mumbai (BOM)",
//     duration: "9h 20m",
//     price: "$750",
//     departureTime: "9:30 PM",
//     arrivalTime: "10:50 AM",
//     status: "On Time",
//     gate: "G7",
//     terminal: "T2E",
//     baggage: "Belt 4",
//     aircraft: "Airbus A330",
//     seatClass: "Business Class",
//     meal: "Kosher",
//   },
//   {
//     id: 8,
//     flightNumber: "QF-9",
//     airline: "Qantas",
//     departure: "Melbourne (MEL)",
//     arrival: "London (LHR)",
//     duration: "23h 15m (1 stop)",
//     price: "$1,200",
//     departureTime: "9:55 PM",
//     arrivalTime: "5:10 AM",
//     status: "On Time",
//     gate: "F5",
//     terminal: "T3",
//     baggage: "Belt 10",
//     aircraft: "Boeing 787 Dreamliner",
//     seatClass: "First Class",
//     meal: "Seafood",
//   },
//   {
//     id: 9,
//     flightNumber: "EK-215",
//     airline: "Emirates",
//     departure: "Dubai (DXB)",
//     arrival: "Los Angeles (LAX)",
//     duration: "16h 20m",
//     price: "$980",
//     departureTime: "3:45 AM",
//     arrivalTime: "2:05 PM",
//     status: "On Time",
//     gate: "H4",
//     terminal: "T3",
//     baggage: "Belt 7",
//     aircraft: "Airbus A380",
//     seatClass: "Economy",
//     meal: "Vegetarian",
//   },
//   {
//     id: 10,
//     flightNumber: "JL-45",
//     airline: "Japan Airlines",
//     departure: "Tokyo (NRT)",
//     arrival: "San Francisco (SFO)",
//     duration: "10h 30m",
//     price: "$850",
//     departureTime: "6:10 PM",
//     arrivalTime: "10:40 AM",
//     status: "Delayed",
//     gate: "K12",
//     terminal: "T2",
//     baggage: "Belt 11",
//     aircraft: "Boeing 787",
//     seatClass: "Business Class",
//     meal: "Standard",
//   },
//   {
//     id: 11,
//     flightNumber: "AI-187",
//     airline: "Air India",
//     departure: "Delhi (DEL)",
//     arrival: "Toronto (YYZ)",
//     duration: "14h 45m",
//     price: "$1,050",
//     departureTime: "3:15 AM",
//     arrivalTime: "7:00 AM",
//     status: "On Time",
//     gate: "M9",
//     terminal: "T3",
//     baggage: "Belt 2",
//     aircraft: "Boeing 777",
//     seatClass: "Economy",
//     meal: "Jain Meal",
//   },
// ];

// const FlightPage = () => {
//   const [expandedRow, setExpandedRow] = useState(null);

//   const toggleRow = (id) => {
//     setExpandedRow(expandedRow === id ? null : id);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto p-6">
//         <motion.h2
//           className="text-2xl font-bold text-center mb-4 mt-15"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Flight Schedule
//         </motion.h2>
//         <div className="overflow-x-auto">
//           <motion.table
//             className="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <thead className="bg-blue-500 text-white">
//               <tr>
//                 <th className="py-2 px-4">More</th>
//                 <th className="py-2 px-4">Flight No.</th>
//                 <th className="py-2 px-4">Airline</th>
//                 <th className="py-2 px-4">Departure</th>
//                 <th className="py-2 px-4">Arrival</th>
//                 <th className="py-2 px-4">Duration</th>
//                 <th className="py-2 px-4">Price</th>
//                 <th className="py-2 px-4">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flights.map((flight, index) => (
//                 <React.Fragment key={flight.id}>
//                   <motion.tr
//                     className={`border-b cursor-pointer ${
//                       index % 2 === 0 ? "bg-gray-100" : "bg-white"
//                     }`}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 }}
//                     onClick={() => toggleRow(flight.id)}
//                   >
//                     <td className="py-2 px-4 text-center">
//                       {expandedRow === flight.id ? "▼" : "▶"}
//                     </td>
//                     <td className="py-2 px-4 text-center">
//                       {flight.flightNumber}
//                     </td>
//                     <td
//                       className="py-2 px-4 text-center hover:bg-blue-100 transition-colors duration-300 relative group"
//                       onMouseEnter={() => setExpandedRow(flight.id)}
//                       onMouseLeave={() => setExpandedRow(null)}
//                     >
//                       {flight.airline}
//                       <motion.div
//                         className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
//                         initial={{ width: 0 }}
//                         animate={{
//                           width: expandedRow === flight.id ? "100%" : 0,
//                         }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </td>
//                     <td className="py-2 px-4 text-center">
//                       {flight.departure}
//                     </td>
//                     <td className="py-2 px-4 text-center">{flight.arrival}</td>
//                     <td className="py-2 px-4 text-center">{flight.duration}</td>
//                     <td className="py-2 px-4 text-center font-bold">
//                       {flight.price}
//                     </td>
//                     <td
//                       className={`py-2 px-4 text-center font-bold ${
//                         flight.status === "Delayed" ||
//                         flight.status === "Cancelled"
//                           ? "text-red-500"
//                           : "text-green-500"
//                       }`}
//                     >
//                       {flight.status}
//                     </td>
//                   </motion.tr>

//                   <AnimatePresence>
//                     {expandedRow === flight.id && (
//                       <motion.tr
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="bg-blue-50 overflow-hidden"
//                       >
//                         <td colSpan="8" className="py-4 px-4">
//                           <div className="grid grid-cols-4 gap-4 text-sm p-2">
//                             <div>
//                               <span className="font-bold">Departure:</span>{" "}
//                               {flight.departureTime}
//                             </div>
//                             <div>
//                               <span className="font-bold">Arrival:</span>{" "}
//                               {flight.arrivalTime}
//                             </div>
//                             <div>
//                               <span className="font-bold">Gate:</span>{" "}
//                               {flight.gate}
//                             </div>
//                             <div>
//                               <span className="font-bold">Terminal:</span>{" "}
//                               {flight.terminal}
//                             </div>
//                             <div>
//                               <span className="font-bold">Baggage:</span>{" "}
//                               {flight.baggage}
//                             </div>
//                             <div>
//                               <span className="font-bold">Aircraft:</span>{" "}
//                               {flight.aircraft}
//                             </div>
//                             <div>
//                               <span className="font-bold">Class:</span>{" "}
//                               {flight.seatClass}
//                             </div>
//                             <div>
//                               <span className="font-bold">Meal:</span>{" "}
//                               {flight.meal}
//                             </div>
//                           </div>
//                         </td>
//                       </motion.tr>
//                     )}
//                   </AnimatePresence>
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </motion.table>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default FlightPage;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar"; // Ensure you have a Navbar component
import Footer from "./Footer"; // Ensure you have a Footer component

const flights = [
  {
    id: 1,
    flightNumber: "AA-202",
    airline: "American Airlines",
    departure: "New York (JFK)",
    arrival: "Los Angeles (LAX)",
    duration: "5h 45m",
    price: "₹450",
    departureTime: "8:00 AM",
    arrivalTime: "1:45 PM",
    status: "Delayed",
    gate: "B12",
    terminal: "T4",
    baggage: "Belt 5",
    aircraft: "Boeing 737",
    seatClass: "Economy",
    meal: "Standard",
  },
  {
    id: 2,
    flightNumber: "BA-305",
    airline: "British Airways",
    departure: "London (LHR)",
    arrival: "New York (JFK)",
    duration: "7h 10m",
    price: "₹700",
    departureTime: "10:15 AM",
    arrivalTime: "3:25 PM",
    status: "On Time",
    gate: "D5",
    terminal: "T3",
    baggage: "Belt 8",
    aircraft: "Airbus A380",
    seatClass: "Business Class",
    meal: "Vegetarian",
  },
  {
    id: 4,
    flightNumber: "SQ-318",
    airline: "Singapore Airlines",
    departure: "Singapore (SIN)",
    arrival: "London (LHR)",
    duration: "13h 50m",
    price: "₹950",
    departureTime: "11:30 PM",
    arrivalTime: "5:20 AM",
    status: "On Time",
    gate: "A3",
    terminal: "T2",
    baggage: "Belt 9",
    aircraft: "Boeing 777",
    seatClass: "First Class",
    meal: "Halal",
  },
  {
    id: 5,
    flightNumber: "LH-760",
    airline: "Lufthansa",
    departure: "Frankfurt (FRA)",
    arrival: "Delhi (DEL)",
    duration: "8h 10m",
    price: "₹600",
    departureTime: "1:20 PM",
    arrivalTime: "11:30 PM",
    status: "On Time",
    gate: "C10",
    terminal: "T1",
    baggage: "Belt 6",
    aircraft: "Airbus A350",
    seatClass: "Premium Economy",
    meal: "Gluten-Free",
  },
  {
    id: 6,
    flightNumber: "CX-708",
    airline: "Cathay Pacific",
    departure: "Hong Kong (HKG)",
    arrival: "Bangkok (BKK)",
    duration: "2h 45m",
    price: "₹300",
    departureTime: "7:00 AM",
    arrivalTime: "9:45 AM",
    status: "Cancelled",
    gate: "E2",
    terminal: "T1",
    baggage: "Belt 1",
    aircraft: "Boeing 787",
    seatClass: "Economy",
    meal: "Vegan",
  },
  {
    id: 7,
    flightNumber: "AF-228",
    airline: "Air France",
    departure: "Paris (CDG)",
    arrival: "Mumbai (BOM)",
    duration: "9h 20m",
    price: "₹750",
    departureTime: "9:30 PM",
    arrivalTime: "10:50 AM",
    status: "On Time",
    gate: "G7",
    terminal: "T2E",
    baggage: "Belt 4",
    aircraft: "Airbus A330",
    seatClass: "Business Class",
    meal: "Kosher",
  },
  {
    id: 8,
    flightNumber: "QF-9",
    airline: "Qantas",
    departure: "Melbourne (MEL)",
    arrival: "London (LHR)",
    duration: "23h 15m (1 stop)",
    price: "₹1,200",
    departureTime: "9:55 PM",
    arrivalTime: "5:10 AM",
    status: "On Time",
    gate: "F5",
    terminal: "T3",
    baggage: "Belt 10",
    aircraft: "Boeing 787 Dreamliner",
    seatClass: "First Class",
    meal: "Seafood",
  },
  {
    id: 9,
    flightNumber: "EK-215",
    airline: "Emirates",
    departure: "Dubai (DXB)",
    arrival: "Los Angeles (LAX)",
    duration: "16h 20m",
    price: "₹980",
    departureTime: "3:45 AM",
    arrivalTime: "2:05 PM",
    status: "On Time",
    gate: "H4",
    terminal: "T3",
    baggage: "Belt 7",
    aircraft: "Airbus A380",
    seatClass: "Economy",
    meal: "Vegetarian",
  },
  {
    id: 10,
    flightNumber: "JL-45",
    airline: "Japan Airlines",
    departure: "Tokyo (NRT)",
    arrival: "San Francisco (SFO)",
    duration: "10h 30m",
    price: "₹850",
    departureTime: "6:10 PM",
    arrivalTime: "10:40 AM",
    status: "Delayed",
    gate: "K12",
    terminal: "T2",
    baggage: "Belt 11",
    aircraft: "Boeing 787",
    seatClass: "Business Class",
    meal: "Standard",
  },
  {
    id: 11,
    flightNumber: "AI-187",
    airline: "Air India",
    departure: "Delhi (DEL)",
    arrival: "Toronto (YYZ)",
    duration: "14h 45m",
    price: "₹1,050",
    departureTime: "3:15 AM",
    arrivalTime: "7:00 AM",
    status: "On Time",
    gate: "M9",
    terminal: "T3",
    baggage: "Belt 2",
    aircraft: "Boeing 777",
    seatClass: "Economy",
    meal: "Jain Meal",
  },
];

const FlightPage = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
  });
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [sortCriteria, setSortCriteria] = useState("price");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate an API call with a delay
    setTimeout(() => {
      const { departure, arrival } = formData;
      const filtered = flights.filter(
        (flight) =>
          flight.departure.toLowerCase().includes(departure.toLowerCase()) &&
          flight.arrival.toLowerCase().includes(arrival.toLowerCase())
      );

      if (filtered.length === 0) {
        setError("No flights found matching your criteria.");
      } else {
        setFilteredFlights(filtered);
      }

      setLoading(false);
      setSearchSubmitted(true);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const sortFlights = (flights, criteria) => {
    return flights.sort((a, b) => {
      if (criteria === "price") {
        return (
          parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
          parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
        );
      } else if (criteria === "duration") {
        const aDuration = parseDuration(a.duration);
        const bDuration = parseDuration(b.duration);
        return aDuration - bDuration;
      }
      return 0;
    });
  };

  const parseDuration = (duration) => {
    const [hours, minutes] = duration.split("h ");
    return parseInt(hours) * 60 + parseInt(minutes.replace("m", ""));
  };

  useEffect(() => {
    if (searchSubmitted) {
      const sortedFlights = sortFlights([...filteredFlights], sortCriteria);
      setFilteredFlights(sortedFlights);
    }
  }, [sortCriteria, searchSubmitted]);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[600px] bg-blue-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <motion.div
            className="w-full max-w-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">Explore the Skies</h1>
              <p className="text-xl">
                Find the best flight deals for your next adventure
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <input
                    type="text"
                    name="departure"
                    placeholder="From where?"
                    className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    value={formData.departure}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="arrival"
                    placeholder="To where?"
                    className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    value={formData.arrival}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="departureDate"
                    className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    value={formData.departureDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="returnDate"
                    className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    value={formData.returnDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Passengers:</span>
                  <select
                    name="passengers"
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    value={formData.passengers}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Passenger" : "Passengers"}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Search Flights
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Flight Results */}
      {searchSubmitted && (
        <div className="container mx-auto p-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 mt-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Available Flights
          </motion.h2>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <>
              <div className="flex justify-end mb-4">
                <select
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  value={sortCriteria}
                  onChange={handleSortChange}
                >
                  <option value="price">Sort by Price</option>
                  <option value="duration">Sort by Duration</option>
                </select>
              </div>
              <div className="overflow-x-auto">
                <motion.table
                  className="min-w-full bg-white shadow-xl rounded-xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th className="py-2 px-4">More</th>
                      <th className="py-2 px-4">Flight No.</th>
                      <th className="py-2 px-4">Airline</th>
                      <th className="py-2 px-4">Departure</th>
                      <th className="py-2 px-4">Arrival</th>
                      <th className="py-2 px-4">Duration</th>
                      <th className="py-2 px-4">Price</th>
                      <th className="py-2 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFlights.map((flight, index) => (
                      <React.Fragment key={flight.id}>
                        <motion.tr
                          className={`border-b cursor-pointer ${
                            index % 2 === 0 ? "bg-gray-100" : "bg-white"
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          onClick={() => toggleRow(flight.id)}
                        >
                          <td className="py-2 px-4 text-center">
                            {expandedRow === flight.id ? "▼" : "▶"}
                          </td>
                          <td className="py-2 px-4 text-center">
                            {flight.flightNumber}
                          </td>
                          <td
                            className="py-2 px-4 text-center hover:bg-blue-100 transition-colors duration-300 relative group"
                            onMouseEnter={() => setExpandedRow(flight.id)}
                            onMouseLeave={() => setExpandedRow(null)}
                          >
                            {flight.airline}
                            <motion.div
                              className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
                              initial={{ width: 0 }}
                              animate={{
                                width: expandedRow === flight.id ? "100%" : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </td>
                          <td className="py-2 px-4 text-center">
                            {flight.departure}
                          </td>
                          <td className="py-2 px-4 text-center">
                            {flight.arrival}
                          </td>
                          <td className="py-2 px-4 text-center">
                            {flight.duration}
                          </td>
                          <td className="py-2 px-4 text-center font-bold">
                            {flight.price}
                          </td>
                          <td
                            className={`py-2 px-4 text-center font-bold ${
                              flight.status === "Delayed" ||
                              flight.status === "Cancelled"
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {flight.status}
                          </td>
                        </motion.tr>

                        <AnimatePresence>
                          {expandedRow === flight.id && (
                            <motion.tr
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-blue-50 overflow-hidden"
                            >
                              <td colSpan="8" className="py-4 px-4">
                                <div className="grid grid-cols-4 gap-4 text-sm p-2">
                                  <div>
                                    <span className="font-bold">
                                      Departure:
                                    </span>{" "}
                                    {flight.departureTime}
                                  </div>
                                  <div>
                                    <span className="font-bold">Arrival:</span>{" "}
                                    {flight.arrivalTime}
                                  </div>
                                  <div>
                                    <span className="font-bold">Gate:</span>{" "}
                                    {flight.gate}
                                  </div>
                                  <div>
                                    <span className="font-bold">Terminal:</span>{" "}
                                    {flight.terminal}
                                  </div>
                                  <div>
                                    <span className="font-bold">Baggage:</span>{" "}
                                    {flight.baggage}
                                  </div>
                                  <div>
                                    <span className="font-bold">Aircraft:</span>{" "}
                                    {flight.aircraft}
                                  </div>
                                  <div>
                                    <span className="font-bold">Class:</span>{" "}
                                    {flight.seatClass}
                                  </div>
                                  <div>
                                    <span className="font-bold">Meal:</span>{" "}
                                    {flight.meal}
                                  </div>
                                </div>
                              </td>
                            </motion.tr>
                          )}
                        </AnimatePresence>
                      </React.Fragment>
                    ))}
                  </tbody>
                </motion.table>
              </div>
            </>
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default FlightPage;