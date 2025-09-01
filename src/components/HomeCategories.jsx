import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Men',
    img: 'https://i.ibb.co/kVnYNXHC/Catagory3.jpg',
    link: '/category/men',
  },
  {
    name: 'Women',
    img: 'https://i.ibb.co/Qv9sqJ8F/Catagory1.jpg',
    link: '/category/women',
  },
  {
    name: 'Kids',
    img: 'https://i.ibb.co/bjXFqbx0/Catagory2.jpg',
    link: '/category/kids',
  },
];

const HomeCategories = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            to={category.link}
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={category.img}
              srcSet={`${category.img}?w=400 400w, ${category.img}?w=800 800w`}
              sizes="(max-width: 640px) 400px, 800px"
              alt={category.name}
              loading="lazy"
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-xl font-semibold text-center">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
