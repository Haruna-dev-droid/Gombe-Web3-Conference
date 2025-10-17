import React from "react";

function Schedule() {
  return (
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
    </div>
  );
}

export default Schedule;
