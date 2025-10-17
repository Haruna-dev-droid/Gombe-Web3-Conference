import React from "react";

function Agenda() {
  return (
    <div className=" p-20 -mt-20 bg-red-950 ">
      {/* <p className="text-6xl">Format</p> */}
      <div className="flex flex-wrap gap-30 justify-center mt-10">
        {/* Keynotes */}
        <div className="bg-red-400 w-50 flex flex-col items-center text-white text-2xl p-5 rounded-lg hover:bg-red-500 transition">
          <i className="fa-solid fa-microphone mb-3 text-4xl"></i>
          <p>Keynotes</p>
        </div>

        {/* Panels */}
        <div className="bg-red-400 w-50 flex flex-col items-center text-white text-2xl p-5 rounded-lg hover:bg-red-500 transition">
          <i className="fa-solid fa-users mb-3 text-4xl"></i>
          <p>Panels</p>
        </div>

        {/* Workshops */}
        <div className="bg-red-400 w-50 flex flex-col items-center text-white text-2xl p-5 rounded-lg hover:bg-red-500 transition">
          <i className="fa-solid fa-screwdriver-wrench mb-3 text-4xl"></i>
          <p>Workshops</p>
        </div>

        {/* Networking */}
        <div className="bg-red-400 w-50 flex flex-col items-center text-white text-2xl p-5 rounded-lg hover:bg-red-500 transition">
          <i className="fa-solid fa-handshake mb-3 text-4xl"></i>
          <p>Networking</p>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
