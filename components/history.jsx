import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaPaypal,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaBan,
  FaThLarge,
  FaThList,
} from "react-icons/fa";
import downloadReceipt from "./DownloadReceipt";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ViewInvoice from "./PDFGenerate";
import DownloadReceipt from "./DownloadReceipt";

const tourData = [
  {
    id: 1,
    title: "Majestic Paris Getaway",
    location: "Paris, France",
    image: "https://picsum.photos/500/300?random=1",
    price: 1200,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    type: "City Tour",
    groupSize: "2-10 People",
    description:
      "Explore the Eiffel Tower, Louvre Museum, and charming streets of Paris in this unforgettable getaway.",
    itinerary: [
      "Day 1: Arrival & Eiffel Tower Visit",
      "Day 2: Louvre Museum & Seine River Cruise",
      "Day 3: Versailles Palace Tour",
      "Day 4: Shopping & Local Cuisine",
      "Day 5: Departure",
    ],
    paymentStatus: "Booking Completed",
    paymentMethod: "credit_card",
    bookingDate: "2023-07-15",
    travelDate: "2023-07-20",
    returnDate: "2023-07-25",
    totalPrice: 1200,
    numberOfTravelers: 2,
    bookingStatus: "Completed",
    userId: "USER-789456",
    ratingReview: {
      rating: 4.8,
      review: "Amazing experience! The trip was well organized and memorable.",
    },
    bookingId: "BOOK-123456",
    invoiceUrl: "https://picsum.photos/400/300?random=4",
  },
  {
    id: 2,
    title: "Tropical Bali Retreat",
    location: "Bali, Indonesia",
    image: "https://picsum.photos/500/300?random=2",
    price: 950,
    duration: "7 Days / 6 Nights",
    rating: 4.5,
    type: "Beach & Relaxation",
    groupSize: "1-6 People",
    description:
      "Relax on beautiful beaches, explore ancient temples, and experience the vibrant culture of Bali.",
    itinerary: [
      "Day 1: Arrival & Beach Relaxation",
      "Day 2: Ubud Cultural Tour",
      "Day 3: Temple Visit & Rice Terraces",
      "Day 4: Surfing & Water Activities",
      "Day 5: Spa & Wellness Day",
      "Day 6: Local Market & Cooking Class",
      "Day 7: Departure",
    ],
    paymentStatus: "Booking Cancelled",
    paymentMethod: "paypal",
    bookingDate: "2023-08-01",
    travelDate: "2023-08-15",
    returnDate: "2023-08-22",
    totalPrice: 950,
    numberOfTravelers: 1,
    bookingStatus: "Cancelled",
    userId: "USER-123789",
    ratingReview: {
      rating: 4.5,
      review: "Very relaxing and enjoyable trip. Bali is truly a paradise.",
    },
    bookingId: "BOOK-789012",
    invoiceUrl: "https://picsum.photos/400/300?random=5",
  },
  {
    id: 3,
    title: "Italian Culinary Adventure",
    location: "Rome & Florence, Italy",
    image: "https://picsum.photos/500/300?random=3",
    price: 1500,
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    type: "Food & Culture",
    groupSize: "4-12 People",
    description:
      "Indulge in authentic Italian cuisine, visit historical landmarks, and explore the art of Florence and Rome.",
    itinerary: [
      "Day 1: Arrival in Rome & Colosseum",
      "Day 2: Vatican City & Food Tour",
      "Day 3: Travel to Florence & Duomo",
      "Day 4: Uffizi Gallery & Ponte Vecchio",
      "Day 5: Tuscan Cooking Class",
      "Day 6: Wine Tasting in Tuscany",
      "Day 7: Return to Rome",
      "Day 8: Departure",
    ],
    paymentStatus: "Booking Completed",
    paymentMethod: "credit_card",
    bookingDate: "2023-09-10",
    travelDate: "2023-09-20",
    returnDate: "2023-09-28",
    totalPrice: 1500,
    numberOfTravelers: 4,
    bookingStatus: "Completed",
    userId: "USER-456123",
    ratingReview: {
      rating: 4.9,
      review:
        "The food and tours were exceptional. A truly unforgettable culinary experience.",
    },
    bookingId: "BOOK-345678",
    invoiceUrl: "https://picsum.photos/400/300?random=6",
  },
  {
    id: 4,
    title: "Japanese Cherry Blossom Tour",
    location: "Kyoto & Tokyo, Japan",
    image: "https://picsum.photos/500/300?random=7",
    price: 1800,
    duration: "10 Days / 9 Nights",
    rating: 4.7,
    type: "Cultural & Scenic",
    groupSize: "3-8 People",
    description:
      "Experience the beauty of cherry blossoms, visit ancient temples, and explore the modern cities of Japan.",
    itinerary: [
      "Day 1: Arrival in Tokyo",
      "Day 2: Tokyo City Tour",
      "Day 3: Travel to Kyoto",
      "Day 4: Kyoto Temple Visit",
      "Day 5: Arashiyama Bamboo Forest",
      "Day 6: Nara Deer Park",
      "Day 7: Return to Tokyo",
      "Day 8: Shopping in Shibuya",
      "Day 9: Day Trip to Hakone",
      "Day 10: Departure",
    ],
    paymentStatus: "Booking Pending", // Changed to Pending
    paymentMethod: "credit_card",
    bookingDate: "2024-03-15",
    travelDate: "2024-03-25",
    returnDate: "2024-04-04",
    totalPrice: 1800,
    numberOfTravelers: 3,
    bookingStatus: "Upcoming",
    userId: "USER-987654",
    ratingReview: {
      rating: 4.7,
      review:
        "The cherry blossoms were stunning. A well-organized and culturally rich tour.",
    },
    bookingId: "BOOK-654321",
    invoiceUrl: "https://picsum.photos/400/300?random=7",
  },
  {
    id: 5,
    title: "Northern Lights Adventure",
    location: "Tromsø, Norway",
    image: "https://picsum.photos/500/300?random=8",
    price: 2100,
    duration: "6 Days / 5 Nights",
    rating: 4.6,
    type: "Adventure & Nature",
    groupSize: "2-8 People",
    description:
      "Witness the breathtaking Northern Lights, dog sledding, and Arctic wilderness exploration.",
    itinerary: [
      "Day 1: Arrival & Aurora Camp",
      "Day 2: Husky Safari",
      "Day 3: Fjord Cruise",
      "Day 4: Snowmobile Expedition",
      "Day 5: Sami Culture Experience",
      "Day 6: Departure",
    ],
    paymentStatus: "Booking Failed", // Failed payment example
    paymentMethod: "bank_transfer",
    bookingDate: "2023-11-01",
    travelDate: "2024-01-15",
    returnDate: "2024-01-21",
    totalPrice: 2100,
    numberOfTravelers: 2,
    bookingStatus: "Cancelled",
    userId: "USER-321654",
    ratingReview: null,
    bookingId: "BOOK-987654",
    invoiceUrl: "https://picsum.photos/400/300?random=8",
  },
  {
    id: 6,
    title: "Egyptian Pyramid Expedition",
    location: "Cairo, Egypt",
    image: "https://picsum.photos/500/300?random=9",
    price: 1350,
    duration: "7 Days / 6 Nights",
    rating: 4.4,
    type: "Historical Adventure",
    groupSize: "4-12 People",
    description:
      "Explore ancient pyramids, cruise the Nile River, and discover Egyptian history.",
    itinerary: [
      "Day 1: Cairo Arrival",
      "Day 2: Giza Pyramids & Sphinx",
      "Day 3: Egyptian Museum",
      "Day 4: Nile River Cruise",
      "Day 5: Luxor Temple",
      "Day 6: Valley of the Kings",
      "Day 7: Departure",
    ],
    paymentStatus: "Booking Pending",
    paymentMethod: "paypal",
    bookingDate: "2023-12-01",
    travelDate: "2024-02-10",
    returnDate: "2024-02-17",
    totalPrice: 1350,
    numberOfTravelers: 4,
    bookingStatus: "Pending Confirmation",
    userId: "USER-147258",
    ratingReview: null,
    bookingId: "BOOK-369258",
    invoiceUrl: "https://picsum.photos/400/300?random=9",
  },
];
const PaymentStatus = ({ status }) => {
  const statusConfig = {
    "Booking Completed": {
      color: " text-green-800 ",
      icon: <FaCheckCircle className="text-green-500" />,
    },
    "Booking Pending": { 
      color: " text-yellow-800",
      icon: <FaClock className="text-yellow-500" />,
    },
    "Booking Failed": {
      color: " text-red-800",
      icon: <FaTimesCircle className="text-red-500" />,
    },
    "Booking Cancelled": {
      color: " text-gray-800",
      icon: <FaBan className="text-gray-500" />,
    },
  };

  return (
    <span
      className={`inline-flex items-center ${statusConfig[status]?.color} px-3 py-1 rounded-full text-sm`}
    >
      {statusConfig[status]?.icon}
      <span className="ml-2 capitalize hidden md:inline ">{status}</span>
    </span>
  );
};
const PaymentMethod = ({ method }) => {
  const methodIcons = {
    credit_card: <FaCreditCard className="w-5 h-5 mr-2 text-gray-600" />,
    paypal: <FaPaypal className="w-5 h-5 mr-2 text-blue-500" />,
    bank_transfer: <span className="mr-2">🏦</span>,
  };

  return (
    <div className="flex items-center text-gray-600 text-sm">
      {methodIcons[method] || <span className="mr-2">💳</span>}
      <span className="capitalize">{method.replace("_", " ")}</span>
    </div>
  );
};
const HistoryPage = () => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("bookingDate");
  const [viewMode, setViewMode] = useState("table"); // 'card', 'table', etc.

  const filteredData = tourData
    .filter((tour) =>
      tour.paymentStatus.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const key = sortKey || "bookingDate";
      if (key === "bookingDate") {
        return new Date(b.bookingDate) - new Date(a.bookingDate); // Latest date first
      } else if (key === "paymentStatus") {
        return a.paymentStatus.localeCompare(b.paymentStatus);
      }
      return 0;
    });

  const renderCardView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredData.map((tour, index) => (
        <motion.div
          key={tour.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <PaymentStatus status={tour.paymentStatus} />
              <span className="text-sm text-gray-500">
                {new Date(tour.bookingDate).toLocaleDateString()}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {tour.title}
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Booking ID</p>
                <p className="text-sm font-medium text-gray-700 truncate">
                  {tour.bookingId}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount Paid</p>
                <p className="text-lg font-bold text-blue-600">
                  ₹{tour.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <PaymentMethod method={tour.paymentMethod} />
              <span className="text-sm text-gray-500">{tour.duration}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <ViewInvoice invoiceData={tour} />
                <DownloadReceipt tour={tour} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderTableView = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-2 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold text-gray-700">
              Booking ID
            </th>
            <th className="px-2 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold text-gray-700">
              Title
            </th>
            <th className="px-2 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold text-gray-700">
              Amount Paid
            </th>
            <th className="px-2 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold text-gray-700">
              Payment Status
            </th>
            <th className="px-2 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold text-gray-700">
              Payment Method
            </th>
            <th className="px-2 py-2 sm:px-6 sm:py-3 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((tour) => (
            <tr key={tour.id} className="hover:bg-gray-50">
              <td className="px-2 py-2 sm:px-6 sm:py-4 border-b border-gray-200 text-xs sm:text-sm text-gray-700">
                {tour.bookingId}
              </td>
              <td className="px-2 py-2 sm:px-6 sm:py-4 border-b border-gray-200 text-xs sm:text-sm text-gray-700">
                {tour.title}
              </td>
              <td className="px-2 py-2 sm:px-6 sm:py-4 border-b border-gray-200 text-xs sm:text-sm text-gray-700">
                ₹{tour.price.toLocaleString()}
              </td>
              <td className="px-6 py-4 border-b border-gray-200  text-gray-700">
                <PaymentStatus status={tour.paymentStatus}/>
              </td>
              <td className="px-2 py-2 sm:px-6 sm:py-4 border-b border-gray-200 text-xs sm:text-sm text-gray-700">
                <PaymentMethod method={tour.paymentMethod} />
              </td>
              <td className="px-2 py-2 sm:px-6 sm:py-4 border-b border-gray-200 text-xs sm:text-sm text-gray-700">
                <div className="flex space-x-2 sm:space-x-4 justify-between">
                  <ViewInvoice invoiceData={tour} />
                  <DownloadReceipt tour={tour} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-18 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">
            Booking History
          </h1>

          {/* Filters Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by status (Completed, Pending, Cancelled, Failed)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border rounded w-full md:w-1/2"
            />
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              className="p-2 cursor-pointer border rounded w-full md:w-auto"
            >
              <option value="bookingDate">
                Sort by Date
              </option>
              <option value="paymentStatus">Sort by Payment Status</option>
            </select>
            <div className="flex space-x-2 justify-end">
              <button
                onClick={() => setViewMode("card")}
                className={`p-2 cursor-pointer rounded ${
                  viewMode === "card" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                <FaThLarge/>
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2  cursor-pointer rounded ${
                  viewMode === "table"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"       
                }`}
              >
                <FaThList />
              </button>
            </div>
          </div>

          {/* Render Views */}
          <div className="overflow-x-auto">
            {viewMode === "card" ? renderCardView() : renderTableView()}
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default HistoryPage;
