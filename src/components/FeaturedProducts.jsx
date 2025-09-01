import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Men’s Leather Jacket',
    img: 'https://i.ibb.co/HLtCJ8VG/Feature2.jpg',
    price: '$120',
    link: '/product/mens-leather-jacket',
  },
  {
    name: 'Women’s Summer Dress',
    img: 'https://i.ibb.co/vxBgmd0d/Feature1.jpg',
    price: '$89',
    link: '/product/womens-summer-dress',
  },
  {
    name: 'Baby Romper',
    img: 'https://i.ibb.co/bgSXswqP/Feature3.jpg',
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
                srcSet={`${product.img}?w=400 400w, ${product.img}?w=800 800w`}
                sizes="(max-width: 640px) 400px, 800px"
                alt={product.name}
                loading="lazy"
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
