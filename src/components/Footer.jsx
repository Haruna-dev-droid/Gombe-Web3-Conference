import React from "react";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="p-20">
      <div className="mb-10 text-center mx-auto bg-white md:p-10 p-5 rounded-lg md:rounded-full  flex  flex-wrap justify-center md:w-170  items-center  gap-6 md:gap-15">
        <p className="text-red-700 text-lg  md:text-4xl text-center font-bold">
          Secure your slot now!
        </p>
        <a
          href="https://luma.com/iqbt2ojp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 cursor-pointer md:text-lg text-sm w-32 text-white px-6 py-3 md:w-40 rounded-full hover:bg-red-700 transition"
        >
          Register
        </a>
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
        target="_blank"
        // rel="noopener noreferrer"
      >
        X (Twitter)MEDICS IN WEB3 DAO
      </a>
    </div>
  );
}

export default Footer;
