import React from "react";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="p-20">
      <div className="mb-10 text-center mx-auto bg-white p-10 rounded-full flex justify-center md:w-170  items-center flex-wrap gap-6 md:gap-15">
        <p className="text-red-700 text-4xl text-center font-bold">
          Secure your slot now!
        </p>
        <button className="bg-red-600 cursor-pointer text-center text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
          Register Now
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <img
          src={Logo}
          alt="Medics in web3 Logo"
          className="w-32 md:-ml-12 md:w-50 mb-5 md:mb-0"
        />
        <p className="text-white text-center md:text-left">
          &copy; {new Date().getFullYear()} Medics in Web3 DAO. All rights
          reserved.
        </p>
      </div>
      <a
        href="https://x.com/Medicsinweb3?t=1F8Xa1DRC4-sv2b04glNDg&s=09"
        // aria-label={label}
        className="text-white font-bold"
      >
        X (Twitter)MEDICS IN WEB3 DAO
      </a>
    </div>
  );
}

export default Footer;
