import React from "react";
import { useState } from "react";
import { speakers, host } from "./SpeakersData";

function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const readMore = (index) => {
    setSelectedSpeaker(selectedSpeaker === index ? null : index);
  };

  const [hostReadMore, setHostReadMore] = useState(null);

  const hostReadMoreToggle = () => {
    setHostReadMore(!hostReadMore);
  };
  return (
    <section className="py-16 bg-gray-50" id="speakers">
      {/* Host Section */}
      <div className="mt-10 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
          Event Host
        </h3>
        <div className="bg-white inline-block rounded-2xl shadow-md p-8 max-w-60 md:max-w-sm">
          <img
            src={host.image}
            alt={host.name}
            className="md:w-70 md:h-70  rounded-full object-cover mx-auto mb-4 border-4 border-gray-200"
          />
          <h3 className="text-xl font-semibold text-gray-800">{host.name}</h3>
          <p className="text-gray-500 text-sm mb-2">{host.title}</p>
          <p className="text-gray-600 text-sm">{host.profile}</p>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-15 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-red-800">
          Meet Our <br className="md:hidden" /> Speakers
        </h2>
        <p className="text-gray-500 mt-2">
          Inspiring minds leading <br className="md:hidden" /> the Web3
          revolution
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-2xl md:max-w-6xl mx-auto px-4">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl mx-auto max-w-60 md:max-w-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition-all"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-40 h-40  md:w-60 md:h-60 rounded-full object-cover mb-4 border-4 border-gray-200"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {speaker.name}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{speaker.title}</p>
            {speaker.profile && (
              <div className="text-gray-600 text-sm text-center">
                <p>
                  {selectedSpeaker === index
                    ? speaker.profile
                    : `${speaker.profile.substring(0, 80)}...`}
                </p>
                <button
                  onClick={() => readMore(index)}
                  className="mt-2 text-red-700 hover:text-blue-800 font-medium"
                >
                  {selectedSpeaker === index ? "Read less" : "Read more"}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;
