import React from "react";

const TravelAgencyList = ({ travelAgencies }) => (
  <div className="w-[80%] bg-white p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-2xl font-bold mb-3">Travel Agencies List</h2>
    <ul className="space-y-2">
      {travelAgencies.map((agency) => (
        <li key={agency._id} className="border p-3 rounded-lg bg-gray-100">
          <strong>{agency.name}</strong> - {agency.email}
          <p>📞 {agency.phoneNumber}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default TravelAgencyList;
