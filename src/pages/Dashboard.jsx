import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold my-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Users</h2>
            <p>Manage users</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Products</h2>
            <p>Manage products</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Orders</h2>
            <p>Manage orders</p>
          </div>
        </div>
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;