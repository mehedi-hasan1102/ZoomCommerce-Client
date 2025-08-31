import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/dashboard/users" className="block p-2 rounded hover:bg-gray-700">Users</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/products" className="block p-2 rounded hover:bg-gray-700">Products</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/orders" className="block p-2 rounded hover:bg-gray-700">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
