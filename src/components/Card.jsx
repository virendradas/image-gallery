import React from "react";

export default function Card({ d }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      
      <img
        src={d.download_url}
        alt="img"
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <h2 className="text-base font-semibold">{d.author}</h2>
      </div>
    </div>
  );
}