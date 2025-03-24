import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faBed,
  faChartLine,
  faUtensils,
  faBus,
  faUmbrellaBeach,
  faTrain,
  faMountain,
  faSubway,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

const ServicesGrid = () => {
  const services = [
    { icon: faPlane, label: "FLIGHTS" },
    { icon: faBed, label: "HOTELS" },
    { icon: faChartLine, label: "RAIL DRISHTI" },
    { icon: faUtensils, label: "E-CATERING" },
    { icon: faBus, label: "BUS" },
    { icon: faUmbrellaBeach, label: "HOLIDAY PACKAGES" },
    { icon: faTrain, label: "TOURIST TRAIN" },
    { icon: faMountain, label: "HILL RAILWAYS" },
    { icon: faSubway, label: "CHARTER TRAIN" },
    { icon: faImages, label: "GALLERY" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 ">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-7">
          Have you not found the right one?
          <br />
          Find a service suitable for you here.
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 flex items-center justify-center border rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={service.icon} className="text-2xl" />
              </div>
              <p className="mt-2 text-sm font-semibold">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
