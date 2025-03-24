import { motion } from "framer-motion";
import {
  FaClock,
  FaArrowRight,
  FaUser,
  FaCalendarAlt,
  FaTag,
} from "react-icons/fa";

const travelTips = [
  {
    title: "Top 10 Must-Visit Places in Paris",
    image: "https://picsum.photos/400/250?random=14",
    description:
      "Discover the most iconic attractions in the City of Love, from the Eiffel Tower to hidden cafés.",
    link: "https://parisguide.com",
    readingTime: "5 min read",
    author: "John Doe",
    date: "Feb 20, 2025",
    category: "Europe Travel",
  },
  {
    title: "How to Explore Bali on a Budget",
    image: "https://picsum.photos/400/250?random=15",
    description:
      "A complete guide to experiencing Bali’s beauty without breaking the bank.",
    link: "https://baliguide.com",
    readingTime: "7 min read",
    author: "Jane Smith",
    date: "Mar 5, 2025",
    category: "Budget Travel",
  },
  {
    title: "Ultimate Guide to Tokyo’s Hidden Gems",
    image: "https://picsum.photos/400/250?random=16",
    description:
      "Explore the secret spots and off-the-beaten-path experiences Tokyo has to offer.",
    link: "https://tokyoguide.com",
    readingTime: "6 min read",
    author: "Mike Johnson",
    date: "Jan 15, 2025",
    category: "Asia Travel",
  },
];

const TravelTips = () => {
  return (
    <section className="py-16 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        🌍 Travel Guides & Tips ✈️
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {travelTips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:shadow-2xl"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                {tip.title}
              </h3>

              {/* Author and Date */}
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <FaUser className="mr-2 text-gray-400" />
                <span>{tip.author}</span>
                <FaCalendarAlt className="ml-4 mr-2 text-gray-400" />
                <span>{tip.date}</span>
              </div>

              {/* Category */}
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <FaTag className="mr-2 text-green-500" />
                <span className="font-medium">{tip.category}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mt-3">{tip.description}</p>

              {/* Reading Time */}
              <div className="flex items-center text-gray-500 text-sm mt-3">
                <FaClock className="mr-2 text-blue-500" />
                <span>{tip.readingTime}</span>
              </div>

              {/* Read More Button */}
              <motion.a
                href={tip.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="mt-4 flex items-center justify-center bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all hover:bg-blue-700 w-full shadow-md hover:shadow-lg"
              >
                Read More <FaArrowRight className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelTips;
