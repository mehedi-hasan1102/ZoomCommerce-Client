import React from 'react';

const NewArrivals = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Demo Items */}
        <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg">
          <img src="https://via.placeholder.com/150" alt="New Arrival 1" className="w-full h-48 object-cover mb-2" />
          <h3 className="font-bold">Smart Watch</h3>
          <p className="text-gray-600">Stay connected on the go.</p>
          <p className="font-bold text-lg mt-2">$199.99</p>
        </div>
        <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg">
          <img src="https://via.placeholder.com/150" alt="New Arrival 2" className="w-full h-48 object-cover mb-2" />
          <h3 className="font-bold">Wireless Earbuds</h3>
          <p className="text-gray-600">Immersive sound quality.</p>
          <p className="font-bold text-lg mt-2">$89.99</p>
        </div>
        <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg">
          <img src="https://via.placeholder.com/150" alt="New Arrival 3" className="w-full h-48 object-cover mb-2" />
          <h3 className="font-bold">VR Headset</h3>
          <p className="text-gray-600">Experience virtual reality.</p>
          <p className="font-bold text-lg mt-2">$499.99</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;