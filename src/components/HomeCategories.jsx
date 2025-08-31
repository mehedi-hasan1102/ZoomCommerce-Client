import React from 'react';

const HomeCategories = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Demo Categories */}
        <div className="border p-4 rounded-lg text-center cursor-pointer hover:shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Category 1" className="w-full h-32 object-cover mb-2" />
          <h3 className="font-bold">Electronics</h3>
        </div>
        <div className="border p-4 rounded-lg text-center cursor-pointer hover:shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Category 2" className="w-full h-32 object-cover mb-2" />
          <h3 className="font-bold">Fashion</h3>
        </div>
        <div className="border p-4 rounded-lg text-center cursor-pointer hover:shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Category 3" className="w-full h-32 object-cover mb-2" />
          <h3 className="font-bold">Home & Garden</h3>
        </div>
        <div className="border p-4 rounded-lg text-center cursor-pointer hover:shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Category 4" className="w-full h-32 object-cover mb-2" />
          <h3 className="font-bold">Toys & Games</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;