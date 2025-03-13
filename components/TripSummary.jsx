import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneArrival, faTrain } from "@fortawesome/free-solid-svg-icons";    

const TripSummary = ({ itinerary }) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Trip Summary</h1>
        <div className="bg-green-100 p-4 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Itinerary Overview</h2>
          </div>
        </div>
        <div className="border border-gray-200">
          {/* Display Itinerary */}
          {itinerary.map((day, index) => (
            <div
              key={index}
              className="grid grid-cols-4 border-b border-gray-200"
            >
              {/* Day Column */}
              <div className="p-4 border-r border-gray-200">
                <div className="flex items-center mb-2">
                  <span className="text-xl font-semibold text-gray-500">
                    Day {day.day}
                  </span>
                </div>
              </div>

              {/* Morning Column */}
              <div className="p-4 border-r border-gray-200">
                <div className="space-y-2">
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">Morning:</span> {day.morning}
                  </div>
                </div>
              </div>

              {/* Afternoon Column */}
              <div className="p-4 border-r border-gray-200">
                <div className="space-y-2">
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">Afternoon:</span>{" "}
                     {day.afternoon}
                  </div>
                </div>
              </div>

              {/* Evening Column */}
              <div className="p-4">
                <div className="space-y-2">
                  {day.evening && (
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Evening:</span>{" "}
                      {day.evening}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripSummary;
