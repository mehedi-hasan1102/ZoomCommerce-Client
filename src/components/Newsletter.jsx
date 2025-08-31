import React from 'react';

const Newsletter = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Subscribe to our Newsletter
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Get the latest updates, exclusive deals, and special offers straight to your inbox.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 flex-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition"
          />
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
