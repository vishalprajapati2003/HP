import { motion } from "framer-motion";

const reviews = [
  {
    name: "Alice Johnson",
    review:
      "The Bali trip was amazing! The beaches, food, and culture were unforgettable.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Mark Smith",
    review:
      "Paris was a dream come true! Great service and smooth travel experience.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Mark Smith",
    review:
      "Paris was a dream come true! Great service and smooth travel experience.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sophia Brown",
    review:
      "Tokyo was breathtaking! The perfect balance of tradition and modernity.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Our Customers Say
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-gray-600">{review.review}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
