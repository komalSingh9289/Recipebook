import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-orange-500 text-2xl font-bold">
        Recipe Haven
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="menu-button"
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden" id="mobile-menu" style={{ display: "none" }}>
        <div className="bg-blue-700 p-4 space-y-2">
          <Link
            to="/"
            className="block text-white hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
          <a
            href="https://spoonacular.com/food-api"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white hover:text-gray-300 transition duration-200"
          >
            API
          </a>
          <Link
            to="/about"
            className="block text-white hover:text-gray-300 transition duration-200"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
