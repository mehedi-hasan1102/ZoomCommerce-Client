import { FaFacebookF, FaInstagram, FaTwitter, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="px-4 md:px-12 py-10 border-t border-gray-300 
      bg-gray-100 text-gray-900 
      dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300
      min-h-[180px]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4"
          >
            <FaShoppingCart className="text-blue-600 dark:text-blue-400" />
            ZoomCommerce
          </Link>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Your one-stop online store for the latest products and unbeatable deals. Shop smart, save more, and enjoy seamless online shopping.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">
            Contact
          </h3>
          <p className="text-sm">Email: support@zoomcommerce.com</p>
          <p className="text-sm mb-3">Phone: +880 1700-123456</p>

          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com/zoomcommerce"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xl transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/zoomcommerce"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xl transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/zoomcommerce"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xl transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t mt-10 pt-4 text-center text-sm text-gray-700 dark:text-gray-400">
        &copy; {new Date().getFullYear()} ZoomCommerce — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
