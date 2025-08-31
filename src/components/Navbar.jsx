import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Provider/AuthProvider';
import { FaShoppingCart, FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout, isDarkMode, toggleDarkMode } = useContext(AuthContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center w-full">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">ZoomCommerce</Link>
            </div>
            <div className="hidden md:block w-full">
              <div className="flex items-baseline justify-center space-x-4">
                <Link to="/" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/products" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                <Link to="/categories" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categories</Link>
                <Link to="/faq" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</Link>
                <Link to="/support" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Support</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button onClick={toggleDarkMode} className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
              <Link to="/cart" className="ml-4 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <FaShoppingCart />
              </Link>
              {user ? (
                <div className="ml-3 relative">
                  <div>
                    <button onClick={toggleDropdown} className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <FaUserCircle className="h-8 w-8 rounded-full text-white" />
                    </button>
                  </div>
                  {isDropdownOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      {user.role === 'admin' && <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>}
                      <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">Login</Link>
                  <Link to="/register" className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">Register</Link>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} type="button" className="bg-white dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/products" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</Link>
            <Link to="/categories" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Categories</Link>
            <Link to="/faq" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQ</Link>
            <Link to="/support" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Support</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
