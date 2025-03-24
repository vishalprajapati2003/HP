import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Utensils,
  Hotel,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // Import icons
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    images: [
      "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=11",
      "https://picsum.photos/400/300?random=21",
    ],
    link: "https://en.parisinfo.com/",
    price: "₹1,200",
    distance: "8,500 km",
    duration: "2 Nights / 3 Days",
    description:
      "Experience the romantic city with breathtaking views, world-class art, and delicious cuisine.",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    images: [
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=12",
      "https://picsum.photos/400/300?random=22",
    ],
    link: "https://www.bali.com/",
    price: "₹900",
    distance: "10,000 km",
    duration: "4 Nights / 5 Days",
    description:
      "A paradise for beach lovers, Bali offers exotic culture, lush landscapes, and stunning sunsets.",
  },
  {
    id: 3,
    name: "New York, USA",
    images: [
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=13",
      "https://picsum.photos/400/300?random=23",
    ],
    link: "https://www.nycgo.com/",
    price: "₹1,500",
    distance: "7,000 km",
    duration: "3 Nights / 4 Days",
    description:
      "Discover the city that never sleeps with iconic skyscrapers, Broadway shows, and diverse food.",
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    images: [
      "https://picsum.photos/400/300?random=4",
      "https://picsum.photos/400/300?random=14",
      "https://picsum.photos/400/300?random=24",
    ],
    link: "https://www.gotokyo.org/en/",
    price: "₹1,300",
    distance: "9,500 km",
    duration: " 5 Nights / 6 Days",
    description:
      "A perfect blend of tradition and technology, with ancient temples and futuristic cityscapes.",
  },
];

const PopularDestinations = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    destinations.map(() => 0)
  );
  const [currentIndex, setCurrentIndex] = useState(0); // Track visible card index

  const handleNextImage = (index) => {
    setCurrentImageIndex((prev) =>
      prev.map((imageIdx, i) =>
        i === index
          ? (imageIdx + 1) % destinations[index].images.length
          : imageIdx
      )
    );
  };

  const handlePrevImage = (index) => {
    setCurrentImageIndex((prev) =>
      prev.map((imageIdx, i) =>
        i === index
          ? (imageIdx - 1 + destinations[index].images.length) %
            destinations[index].images.length
          : imageIdx
      )
    );
  };

  const handleNextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const handlePrevCard = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gray-100 mx-auto relative ">
      <button
        onClick={handlePrevCard}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full opacity-75 hover:opacity-100 z-5"
      >
        <ChevronLeft size={30} />
      </button>
      <div className="container w-[90%] mx-auto text-center cursor-pointer relative">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Popular Destinations
        </h2>

        {/* Navigation Buttons for Cards */}

        {/* Destination Cards */}
        <div className="flex overflow-hidden justify-center">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 block w-full"
              >
                {/* Image Carousel */}
                <div className="relative">
                  <img
                    src={destination.images[currentImageIndex[index]]}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  {/* Previous Image Button */}
                  <button
                    onClick={() => handlePrevImage(index)}
                    className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2  text-white p-1 rounded-full opacity-85 hover:opacity-100"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  {/* Next Image Button */}
                  <button
                    onClick={() => handleNextImage(index)}
                    className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-white p-1 rounded-full opacity-85 hover:opacity-100"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {destination.description}
                  </p>

                  {/* Trip Details */}
                  <div className="flex justify-between items-center mt-4 text-gray-700 text-sm">
                    <span className="font-semibold">{destination.price}</span>
                    <span>{destination.distance}</span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mt-3 text-gray-600">
                    <CalendarDays size={20} />
                    <span>{destination.duration}</span>
                  </div>

                  {/* Icons */}
                  <div className="flex justify-between items-center mt-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Plane size={16} />
                      <span>Flight</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Utensils size={16} />
                      <span>Meal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Hotel size={16} />
                      <span>Hotel</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <button
        onClick={handleNextCard}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white  p-1 rounded-full opacity-75 hover:opacity-100 z-5"
      >
        <ChevronRight size={30} />
      </button>
    </section>
  );
};

export default PopularDestinations;
