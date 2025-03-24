import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "./Footer";

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  // Dummy data if location.state is not available
  const dummyBookingDetails = {
    title: "Adventure in the Himalayas",
    location: "Nepal",
    duration: "7 Days",
    groupSize: 10,
    price: 1200,
    travelDate: "2024-12-15",
    numTravelers: 2,
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    specialRequests: "Vegetarian meals preferred.",
  };

  const booking = bookingDetails || dummyBookingDetails;

  if (!booking) {
    return (
      <div className="text-center text-red-500 text-lg">
        No booking details found.
      </div>
    );
  }

  const handleConfirm = () => {
    navigate("/payment", { state: booking });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto p-6"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 mt-10">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-6 text-center"
            >
              Confirm Your Booking
            </motion.h1>

            <div className="space-y-4">
              <p>
                <strong>Tour:</strong> {dummyBookingDetails.title}
              </p>
              <p>
                <strong>Location:</strong> {dummyBookingDetails.location}
              </p>
              <p>
                <strong>Duration:</strong> {dummyBookingDetails.duration}
              </p>
              <p>
                <strong>Group Size:</strong> {dummyBookingDetails.groupSize}
              </p>
              <p>
                <strong>Price:</strong> ₹{dummyBookingDetails.price} per person
              </p>
              <p>
                <strong>Travel Date:</strong> {dummyBookingDetails.travelDate}
              </p>
              <p>
                <strong>Number of Travelers:</strong>{" "}
                {dummyBookingDetails.numTravelers}
              </p>
              <p>
                <strong>Full Name:</strong> {dummyBookingDetails.fullName}
              </p>
              <p>
                <strong>Email:</strong> {dummyBookingDetails.email}
              </p>
              <p>
                <strong>Phone:</strong> {dummyBookingDetails.phone}
              </p>
              <p>
                <strong>Special Requests:</strong>{" "}
                {dummyBookingDetails.specialRequests || "None"}
              </p>
            </div>
            <Link to="/payment/:id">
              <motion.button
                onClick={handleConfirm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mt-6 w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-semibold shadow-lg flex items-center justify-center"
              >
                <FaCheckCircle className="mr-2" /> Confirm & Proceed to Payment
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmBooking;
