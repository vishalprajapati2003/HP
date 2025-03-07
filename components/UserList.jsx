import React from "react";

const UserList = ({ users }) => (
  <div className="w-[80%] bg-white  p-6 rounded-lg shadow-2xl mb-6">
    <h2 className="text-2xl font-bold mb-3">Users List</h2>
    {users.length > 0 ? (
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u._id} className="border p-3 rounded-lg bg-gray-100">
            <strong>{u.name}</strong> - {u.email} ({u.role})
            <p>📞 {u.phoneNumber}</p>
            <p>📦 Orders: {u.orders.length}</p>
            <p>🛒 Bookings: {u.bookings.length}</p>
            <p>📜 History: {u.history.length}</p>
            <p>🎁 Packages: {u.packages.length}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No users found.</p>
    )}
  </div>
);

export default UserList;
