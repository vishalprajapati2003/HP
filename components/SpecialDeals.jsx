import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaTag } from "react-icons/fa";

const deals = [
  {
    title: "50% Off on Bali Adventure",
    image: "https://picsum.photos/400/250?random=11",
    destination: "Bali, Indonesia",
    price: "₹499",
    originalPrice: "₹999",
    duration: "5 Nights / 6 Days",
    rating: 4.8,
    discount: 50,
  },
  {
    title: "20% Off on Paris Getaway",
    image: "https://picsum.photos/400/250?random=12",
    destination: "Paris, France",
    price: "₹1,200",
    originalPrice: "₹1,500",
    duration: "3 Nights / 4 Days",
    rating: 4.6,
    discount: 20,
  },
  {
    title: "Buy 1 Get 1 Free - Tokyo Explorer",
    image: "https://picsum.photos/400/250?random=13",
    destination: "Tokyo, Japan",
    price: "₹1,800",
    originalPrice: "₹3,600",
    duration: "4 Nights / 5 Days",
    rating: 4.9,
    discount: 50,
  },
];

const SpecialDeals = () => {
  return (
    <section className="py-16 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        ✨ Special Deals & Discounts ✨
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {deals.map((deal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, delay: index * 0 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all hover:shadow-2xl relative"
          >
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white font-semibold text-xs px-3 py-1 rounded-full flex items-center">
              <FaTag className="mr-1" /> {deal.discount}% OFF
            </div>

            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                {deal.title}
              </h3>

              {/* Destination */}
              <p className="flex items-center text-gray-600 mt-2">
                <FaMapMarkerAlt className="text-red-500 mr-2" />
                {deal.destination}
              </p>

              {/* Duration */}
              <p className="text-gray-500 text-sm mt-1">{deal.duration}</p>

              {/* Price */}
              <div className="flex items-center mt-2">
                <p className="text-red-600 font-bold text-lg line-through mr-2">
                  {deal.originalPrice}
                </p>
                <p className="text-blue-600 font-bold text-xl">{deal.price}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-3">
                <FaStar className="text-yellow-500" />
                <span className="ml-2 font-semibold text-gray-700">
                  {deal.rating} / 5
                </span>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all hover:bg-blue-700"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialDeals;
