import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const sampleOrder = {
  id: "ORD12345",
  customerName: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  address: "123 Main Street, Springfield, USA",
  state: "Illinois",
  pincode: "62704",
  orderDate: "Feb 20, 2025",
  paymentMethod: "Credit Card",
  packageOwner: "TravelCo Ltd.",
  numberOfPeople: {
    men: 2,
    women: 1,
    children: 2,
  },
  items: [
    { name: "Holiday Package - Bali", price: 1200 },
    { name: "Travel Insurance", price: 100 },
    { name: "Airport Pickup", price: 50 },
  ],
};

const OrderPage = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      navigate("/payment");
    }, 2000);
  };

  const totalAmount = sampleOrder.items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800"
      >
        Order Confirmation
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg mt-6"
      >
        <p className="text-lg text-gray-600 text-center">
          Order ID: {sampleOrder.id}
        </p>
        <p className="text-md text-gray-600 mt-2">
          <strong>Customer:</strong> {sampleOrder.customerName}
        </p>
        <p className="text-md text-gray-600">
          <strong>Email:</strong> {sampleOrder.email}
        </p>
        <p className="text-md text-gray-600">
          <strong>Phone:</strong> {sampleOrder.phone}
        </p>
        <p className="text-md text-gray-600">
          <strong>Address:</strong> {sampleOrder.address}
        </p>
        <p className="text-md text-gray-600">
          <strong>State:</strong> {sampleOrder.state}
        </p>
        <p className="text-md text-gray-600">
          <strong>Pincode:</strong> {sampleOrder.pincode}
        </p>
        <p className="text-md text-gray-600">
          <strong>Order Date:</strong> {sampleOrder.orderDate}
        </p>
        <p className="text-md text-gray-600">
          <strong>Payment Method:</strong> {sampleOrder.paymentMethod}
        </p>
        <p className="text-md text-gray-600">
          <strong>Package Owner:</strong> {sampleOrder.packageOwner}
        </p>
        <p className="text-md text-gray-600">
          <strong>Number of People:</strong>
        </p>
        <ul className="ml-4 text-gray-600">
          <li>
            <strong>Men:</strong> {sampleOrder.numberOfPeople.men}
          </li>
          <li>
            <strong>Women:</strong> {sampleOrder.numberOfPeople.women}
          </li>
          <li>
            <strong>Children:</strong> {sampleOrder.numberOfPeople.children}
          </li>
        </ul>

        <ul className="mt-4">
          {sampleOrder.items.map((item, index) => (
            <li key={index} className="flex justify-between py-2 border-b">
              <span>{item.name}</span>
              <span className="font-semibold">${item.price}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span>${totalAmount}</span>
        </div>

        {!isSuccess ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg font-semibold text-lg hover:bg-blue-600 transition"
            onClick={handleOrder}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </motion.button>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mt-6"
          >
            <FaCheckCircle className="text-green-500 text-4xl" />
            <p className="text-green-600 font-semibold mt-2">
              Order Placed Successfully!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default OrderPage;
