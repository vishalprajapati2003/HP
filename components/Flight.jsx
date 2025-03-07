import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const flights = [
  {
    id: 1,
    flightNumber: "AA-202",
    airline: "American Airlines",
    departure: "New York (JFK)",
    arrival: "Los Angeles (LAX)",
    duration: "5h 45m",
    price: "$450",
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
    price: "$700",
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
    price: "$950",
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
    price: "$600",
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
    price: "$300",
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
    price: "$750",
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
    price: "$1,200",
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
    price: "$980",
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
    price: "$850",
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
    price: "$1,050",
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

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="container mx-auto p-6">
      <Navbar />
      <motion.h2
        className="text-2xl font-bold text-center mb-4 mt-15"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Flight Schedule
      </motion.h2>
      <div className="overflow-x-auto">
        <motion.table
          className="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
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
            {flights.map((flight, index) => (
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
                  <td className="py-2 px-4 text-center">{flight.departure}</td>
                  <td className="py-2 px-4 text-center">{flight.arrival}</td>
                  <td className="py-2 px-4 text-center">{flight.duration}</td>
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
                            <span className="font-bold">Departure:</span>{" "}
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
    </div>
  );
};

export default FlightPage;
