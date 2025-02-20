import React from "react";
import { motion } from "framer-motion";
import Destination1 from "../assets/Destination1.png";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-900 text-gray-300 py-10 mt-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  FAQs & Help
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Contact</h4>
            <p className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-400"></i> Malay
              Infotech pvt. ltd.
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-blue-400"></i> +91 12345 67890
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-400"></i> info@example.com
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {["twitter", "facebook-f", "youtube", "linkedin-in"].map(
                (icon, index) => (
                  <motion.a
                    key={index}
                    href="/"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-xl text-gray-400 hover:text-blue-400 transition"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">
              Newsletter
            </h4>
            <p>Subscribe to get latest updates and offers.</p>
            <div className="mt-4 relative ">
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-2 px-4 rounded-full  text-gray-100 outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>© 2025 Your Site Name, All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://github.com/ParasSalunke"
              className="text-blue-400 hover:underline"
            >
              Vishal
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
