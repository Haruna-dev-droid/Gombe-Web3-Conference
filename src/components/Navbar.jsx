import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "@fontsource/rajdhani";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ fontFamily: "Rajdhani, sans-serif" }}>
      <div className=" text-white">
        <div className="flex fixed top-0 left-0 w-full z-50 bg-black/50 -mt-10 md:mt-0 md:h-20 backdrop-blur-md justify-between  items-center p-5 md:p-3">
          {/* Logo */}
          <img
            src={Logo}
            alt="Medics in web3 Logo"
            className="w-25 md:-mt-3  md:w-40"
          />

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden  h-10 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex  space-x-8 font-semibold text-lg">
            <li>
              <Link to="/" className="hover:text-red-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/speakers" className="hover:text-red-200">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/schedule" className="hover:text-red-200">
                Agenda
              </Link>
            </li>
          </ul>

          {/* Register button (desktop only) */}
          <a
            href="https://luma.com/iqbt2ojp"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-white text-gray-700 px-4 py-2 rounded-full font-bold hover:bg-red-200 transition-colors duration-300"
          >
            Register Now
          </a>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed  inset-0 bg-gradient-to-b  from-black to-red-900 flex flex-col items-center justify-center space-y-6 text-2xl font-semibold z-50">
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            <ul className="space-y-4 text-center">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/speakers" onClick={() => setIsOpen(false)}>
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/schedule" onClick={() => setIsOpen(false)}>
                  Agenda
                </Link>
              </li>
              <li>
                <Link to="/communitypartners" onClick={() => setIsOpen(false)}>
                  Sponsors
                </Link>
              </li>
            </ul>

            <a
              href="https://luma.com/iqbt2ojp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-700 px-6 py-2 rounded-lg font-semibold"
            >
              Register Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
