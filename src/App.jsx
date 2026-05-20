import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";

export default function App() {
  let [data, setData] = useState([]);
  let [idx, setIdx] = useState(1);
  let [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${idx}&limit=30`
    );
    setData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [idx]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      <h1 className="text-3xl font-bold text-center py-5 tracking-wide">
        Image Gallery 🚀
      </h1>

      {loading && (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-4 pb-24">
          {data.map((d, i) => (
            <div
              key={i}
              className="transform hover:scale-105 transition duration-300"
            >
              <Card d={d} />
            </div>
          ))}
        </div>
      )}

      <div className="fixed bottom-0 left-0 w-full backdrop-blur-lg bg-white/10 border-t border-white/20 py-4">
        <div className="flex justify-center items-center gap-6">

          <button
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${idx === 1
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-500 hover:scale-105 active:scale-95"
              }`}
            disabled={idx === 1}
            onClick={() => {
              if (idx > 1) {
                setIdx(idx - 1);
                setData([]);
              }
            }}
          >
            Prev
          </button>

          <h4 className="text-lg font-semibold bg-white/10 px-4 py-1 rounded-lg shadow">
            Page {idx}
          </h4>

          <button
            className="px-4 py-2 rounded-lg font-medium bg-green-600 hover:bg-green-500 hover:scale-105 active:scale-95 transition-all duration-300"
            onClick={() => {
              setIdx(idx + 1);
              setData([]);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}