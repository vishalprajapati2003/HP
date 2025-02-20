import React from "react";

const CustomerList = ({ customers }) => (
  <div className="w-[80%] bg-white p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-2xl font-bold mb-3">Customers List</h2>
    <ul className="space-y-2">
      {customers.map((c) => (
        <li key={c._id} className="border p-3 rounded-lg bg-gray-100">
          <strong>{c.name}</strong> - {c.email}
          <p>📞 {c.phoneNumber}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default CustomerList;
