import React from "react";

const ActionButtons = ({ fetchAllCustomers, fetchAllTravelAgencies }) => (
  <div className="space-x-4 mb-6">
    <button
      onClick={fetchAllCustomers}
      className="bg-blue-500 text-white px-6 py-2 rounded-lg"
    >
      Get All Customers
    </button>
    <button
      onClick={fetchAllTravelAgencies}
      className="bg-green-500 text-white px-6 py-2 rounded-lg"
    >
      Get All Travel Agencies
    </button>
  </div>
);

export default ActionButtons;
