import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaPaypal,
  FaBitcoin,
  FaApplePay,
  FaGooglePay,
  FaMoneyBillAlt,
  FaQrcode,
  FaMobileAlt,
} from "react-icons/fa";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit Card",
      icon: <FaCreditCard />,
      color: "#1E90FF",
    },
    { id: "paypal", name: "PayPal", icon: <FaPaypal />, color: "#FFD700" },
    { id: "bitcoin", name: "Bitcoin", icon: <FaBitcoin />, color: "#FFA500" },
    {
      id: "apple-pay",
      name: "Apple Pay",
      icon: <FaApplePay />,
      color: "#000000",
    },
    {
      id: "google-pay",
      name: "Google Pay",
      icon: <FaGooglePay />,
      color: "#4285F4",
    },
    {
      id: "cash",
      name: "Cash on Delivery",
      icon: <FaMoneyBillAlt />,
      color: "#228B22",
    },
  ];

  const handleConfirmPayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const paymentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const renderPaymentForm = () => {
    switch (selectedPayment) {
      case "credit-card":
        return (
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-2 border rounded"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <div className="space-y-2">
              <p className="font-medium">Billing Address</p>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full p-2 border rounded"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        );
      case "paypal":
        return (
          <div className="mt-6">
            <p className="text-gray-600 mb-4">
              You will be securely redirected to PayPal to complete your
              payment.
            </p>
            <button className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Continue to PayPal
            </button>
          </div>
        );
      case "bitcoin":
        return (
          <div className="mt-6 space-y-4">
            <p className="font-semibold">Bitcoin Address:</p>
            <p className="break-words">1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</p>
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Math.random()}`}
                alt="QR Code"
                className="h-30 w-30"
              />
            </div>
            <p className="text-sm text-gray-600">
              Scan the QR code or copy the address to send the exact BTC amount.
            </p>
          </div>
        );
      case "apple-pay":
        return (
          <div className="mt-6 space-y-4">
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full p-2 border rounded"
            />
            <div className="text-sm text-gray-600">
              <p>
                You'll be redirected to Apple Pay. Ensure your device supports
                Face/Touch ID.
              </p>
            </div>
          </div>
        );

      case "google-pay":
        return (
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Enter UPI ID"
              className="w-full p-2 border rounded"
            />
            <div className="border-2 border-dashed p-4 rounded-lg text-center">
              <p className="mb-2">Scan QR Code</p>
              <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Math.random()}`}
                    alt="QR Code"
                    className="h-32 w-32"
                  />
                </span>
              </div>
            </div>
          </div>
        );

      case "cash":
        return (
          <div className="mt-6">
            <textarea
              placeholder="Add delivery instructions (optional)"
              className="w-full p-2 border rounded h-24"
            />
            <p className="mt-2 text-sm text-gray-600">
              Please have exact change ready.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-6"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 mt-20">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-6 text-center"
          >
            Select Payment Method
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <motion.div
                key={method.id}
                variants={paymentVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                className={`flex items-center justify-center p-4 rounded-lg shadow-md cursor-pointer border border-gray-200`}
                style={{ backgroundColor: "#f9f9f9" }}
                onClick={() => setSelectedPayment(method.id)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl" style={{ color: method.color }}>
                    {method.icon}
                  </span>
                  <span className="text-lg font-semibold">{method.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {renderPaymentForm()}
          {selectedPayment && (
            <motion.button
              onClick={handleConfirmPayment}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mt-8 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold shadow-lg cursor-pointer"
            >
              Confirm Payment
            </motion.button>
          )}
          {paymentSuccess && (
            <p className="mt-4 text-green-600 text-center font-semibold">
              Payment Successful! Redirecting...
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
