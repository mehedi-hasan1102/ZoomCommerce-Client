import React from 'react';
import { Link } from 'react-router-dom';

// Correctly named imports
import offerImg1 from '../assets/offers/offers1.jpg';
import offerImg2 from '../assets/offers/offers2.jpg';
import offerImg3 from '../assets/offers/offers3.jpg';

const offers = [
  {
    title: 'End of Season Sale',
    description: 'Up to 70% off on premium fashion wear. Limited time only!',
    img: offerImg1,
    link: '/sale',
  },
  {
    title: 'Buy 1 Get 1 Free',
    description: 'Trendy jackets, shirts & shoes – grab the hottest deal now.',
    img: offerImg2,
    link: '/category/fashion',
  },
  {
    title: 'Get Your Gift Box',
    description: 'Discover the latest styles in streetwear & luxury fashion.',
    img: offerImg3,
    link: '/new-arrivals',
  },
];
const SpecialOffers = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Special Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <Link
            to={offer.link}
            key={index}
            className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white dark:bg-gray-800"
          >
            <div className="relative">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                {offer.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {offer.description}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Shop Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
