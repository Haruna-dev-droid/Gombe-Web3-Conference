import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black ">
      <div className="flex justify-between  md:mt-0 mt-5 md:justify-between items-center md:p-2  p-5   text-white">
        <img
          src={Logo}
          alt="Medics in web3 Logo"
          className="w-32 -ml-7 md:ml-0 -mt-10 md:-mt-15 md:w-50"
        />
        <button
          className="md:hidden -mt-10 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
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

        <ul className="hidden md:flex space-x-8 font-semibold text-lg -mt-15">
          <li className="hover:text-red-200 cursor-pointer">Home</li>
          <li className="hover:text-red-200 cursor-pointer">About</li>
          <li className="hover:text-red-200 cursor-pointer">Speakers</li>

          <li className="hover:text-red-200 cursor-pointer">Agenda</li>
        </ul>
        <button className="cursor-pointer bg-white hidden md:block text-gray-700 p-3 mr-10 -mt-15 rounded-full font-semibold">
          Register Now
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-b mt-8 from-black to-red-900 flex flex-col   space-y-8 text-2xl font-semibold z-50">
          <button
            className="absolute top-6 right-6 text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-2 font-semibold text-lg  text-white p-4 rounded-lg mx-2">
            <li className="hover:text-red-200 cursor-pointer">Home</li>
            <li className="hover:text-red-200 cursor-pointer">About</li>
            <li className="hover:text-red-200 cursor-pointer">Speakers</li>
            <li className="hover:text-red-200 cursor-pointer">Sponsors</li>
          </ul>
          <button className="cursor-pointer bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold">
            Register Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
