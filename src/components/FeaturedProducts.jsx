import React from 'react';
import { Link } from 'react-router-dom';

import women from '../assets/feature/Feature1.jpg';
import men from '../assets/feature/Feature2.jpg';
import kids from '../assets/feature/Feature3.jpg';

const products = [
  {
    name: 'Men’s Leather Jacket',
    img: men,
    price: '$120',
    link: '/product/mens-leather-jacket',
  },
  {
    name: 'Women’s Summer Dress',
    img: women,
    price: '$89',
    link: '/product/womens-summer-dress',
  },
  {
    name: 'Baby Romper',
    img: kids,
    price: '$39',
    link: '/product/baby-romper',
  },
];

const Products = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Featured Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Link
            to={product.link}
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {product.name}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300 font-bold">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
