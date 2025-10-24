import React from "react";
import useScrollAnimation from "./Animation";
function Schedule() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="p-20">
        <h1 className="text-6xl font-bold text-white">Event Schedule</h1>
        <p className="text-3xl font-semibold text-white mt-4">
          7th November, 2025 | Day 1 <br />
          Medical Outreach
        </p>
        <div className="mt-10 space-y-6">
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">
              Health Talk (Onboarding participants into the Web3 ecosystem.){" "}
            </p>
          </div>
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">Doctor's consultation</p>
          </div>
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">Hepatitis screening</p>
          </div>
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">Blood pressure measurement</p>
          </div>
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">Blood glucose test</p>
          </div>
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">
              {" "}
              Blood donation drive which is in collaboration with the National
              Blood service commission.
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-white mt-8">
          8th November, 2025 | Day 2 <br /> Main Conference
        </h1>
        <div className="mt-10 space-y-6">
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">
              Tokenizing health data for privacy
            </p>
          </div>
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">
              DeFi solutions for Africa's economic future
            </p>
          </div>
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">
              NFTs for incentivizing preventive care
            </p>
          </div>
          <div className="bg-red-400/50 p-5 rounded-lg text-white">
            <p className="text-2xl font-semibold">
              DAOs for community-driven governance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
