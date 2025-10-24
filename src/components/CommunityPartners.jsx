import React from "react";
import "@fontsource/rajdhani";
import BLOODSERVICE from "../assets/BLOOD-SERVICE.png";
import BORDERLESS from "../assets/BORDERLESS.png";
import MOLEDAO from "../assets/MOLEDAO.png";
import SMARTIN from "../assets/SMART-IN.png";
import THEMIRROR from "../assets/THE-MIRROR.png";
import WAGA from "../assets/WAGA.png";
import WETHEM from "../assets/WE-THEM.png";
import useScrollAnimation from "./Animation";

function CommunityPartners() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div
        style={{ fontFamily: "Rajdhani, sans-serif" }}
        className="text-red-700 bg-white p-20"
      >
        <h1 className="text-4xl md:text-7xl font-bold md:text-left text-center">
          Community Partners
        </h1>
        <div className="flex flex-wrap gap-15 md:gap-20 justify-center mt-10">
          <img
            src={SMARTIN}
            alt="Smart Investors Lodge Logo"
            className="md:w-40 w-32"
          />
          <img src={MOLEDAO} alt="Moldeao Logo" className="md:w-40 w-32" />
          <img
            src={BLOODSERVICE}
            alt="Blood-service Commission Logo"
            className="md:w-40 w-32"
          />
          <img
            src={BORDERLESS}
            alt="Borderless Logo"
            className="md:w-40 w-32"
          />
          <img src={THEMIRROR} alt="The Mirror Logo" className="md:w-40 w-32" />
          <img src={WAGA} alt="Waga Logo" className="md:w-40 w-32" />
          <img src={WETHEM} alt="We-Them Logo" className="md:w-40 w-32" />
        </div>
      </div>
    </div>
  );
}

export default CommunityPartners;
