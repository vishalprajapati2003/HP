import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-primary text-white text-center"
      ></motion.div>

      {/* Services Section */}
      <div className="container mx-auto py-5   px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h6 className="text-lg text-blue-600 font-semibold">Services</h6>
          <h1 className="text-3xl font-bold">What We Offer</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "WorldWide Tours", icon: "fa-globe" },
            { title: "Hotel Reservation", icon: "fa-hotel" },
            { title: "Travel Guides", icon: "fa-user" },
            { title: "Event Management", icon: "fa-cog" },
          ].map((service, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              triggerOnce: false,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="exit"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg hover:bg-amber-300 shadow-lg text-center hover:shadow-xl transition"
              >
                <i
                  className={`fa ${service.icon} text-4xl text-blue-600 mb-4`}
                ></i>
                <h5 className="text-xl font-semibold mb-2">{service.title}</h5>
                <p className="text-gray-600">
                  Experience the best with our premium services designed for
                  your needs.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
