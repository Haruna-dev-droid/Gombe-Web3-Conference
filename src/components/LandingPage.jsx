import React from "react";
import "@fontsource/rajdhani";
import useScrollAnimation from "./Animation";
function LandingPage() {
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
        className="text-white bg-linear-to-t from-red-900 to-black min-h-screen md:mt-10 flex flex-col justify-center items-center -mt-10"
      >
        <h1 className="text-4xl md:text-9xl font-bold text-center mt-10">
          Web3 Gombe <br /> Conference 2.0
        </h1>
        <h1 className="flex text-center text-2xl mt-5 mx-auto justify-center font-semibold md:text-3xl">
          Building a Decentralized
          <br className="md:hidden" /> Future for All
        </h1>
        <p className="text-center mt-2 text-sm md:text-xl ">
          Join us for an exciting event exploring the{" "}
          <br className="md:hidden" /> intersection of healthcare
          <br /> and blockchain technology.
        </p>
        <h1 className="flex text-center mt-2 mx-auto text-red-500 justify-center font-semibold text-2xl">
          7th - 8th November, 2025 | Gombe, Nigeria
        </h1>
        {/* <div className="flex justify-center mt-8">
        <button className="bg-red-300 hover:bg-red-100 text-red-700 text-lg font-bold py-3 px-6 rounded-lg mr-4">
          Register
        </button>
      </div> */}
      </div>
    </div>
  );
}

export default LandingPage;
