import React from "react";
import Image from "../assets/_MG_7991.jpg";
import useScrollAnimation from "./Animation";
import "@fontsource/rajdhani";
function AboutEvent() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ fontFamily: "Rajdhani, sans-serif" }}
    >
      <div className="  p-20 bg-red-950 ">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mt-10 text-white mb-8">
          About Web3 <br />
          Gombe Conference
        </h1>
        <div className=" flex flex-col flex-wrap md:flex-row mt-10 md:mt-20 justify-center space-y-10 md:space-y-0 md:space-x-15 text-black">
          <div>
            <img
              src={Image}
              alt="Web3 Gombe Conference 1.0"
              className="w-700 rounded-lg"
            />
          </div>
          <div className="mt-2 text-white">
            <h2 className="text-4xl  text-center md:mt-10 font-semibold">
              Web3 Gombe Conference 2.0
            </h2>
            <p className="text-md md:text-left text-center  mt-4">
              The WEB3 GOMBE CONFERENCE 2.0 is an upcoming blockchain and web3
              focused conference in Gombe state, Nigeria, aimed at fostering
              innovation, education, and community building in decentralized
              technologies. It is organized by MEDICSINWEB3DAO a community
              bridging healthcare and Web3 through education, preventive
              medicine, public health education on the blockchain. The
              conference will emphasize practical applications of Web3 across
              sectors like healthcare, startups, and social impact. The
              conference will be a yearly event which will be advocating for the
              adoption of Web3 in the African ecosystem. The second edition will
              highlight the evolution of Web3 adoption in underrepresented
              regions which the northeast Nigeria region is one of them.
            </p>
            <div className="flex flex-col justify-center md:flex-row md:mt-8 gap-20 mt-5 text-center ">
              <div className="  rounded-lg max-w-sm">
                <p className="text-6xl text-red-400">1000+</p>
                <p className="">Participants</p>
              </div>
              <div className="  rounded-lg w-smin">
                <p className="text-6xl text-red-400">5</p>
                <p className="">Speakers</p>
              </div>
              <div className="  rounded-lg  ">
                <p className="text-6xl text-red-400">2</p>
                <p className="">Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEvent;
