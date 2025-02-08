import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";

const FindVet = () => {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative bg-gradient-to-br from-pink-200 mt-3 max-w-6xl m-auto to-pink-200 min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-10 rounded-3xl shadow-xl">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-white">Find the Best Vet for Your Pet</h1>
      <p className="text-lg text-white mt-3 opacity-90">Search for top veterinary doctors, clinics, and hospitals</p>

      {/* Search Bar */}
      <div className="bg-white flex items-center w-full max-w-3xl mt-6 p-2 rounded-full shadow-md">
        {/* Location Input */}
        <div className="flex items-center border-r border-gray-300 px-4">
          <MapPin className="text-gray-500" />
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none px-2 py-2 text-gray-700 w-40"
          />
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for vet doctors, clinics, hospitals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-2 text-gray-700 outline-none"
        />

        {/* Search Button */}
        <button className="bg-red-400 text-white px-6 py-2 rounded-full hover:bg-green-700 flex items-center gap-2">
          <Search size={20} />
          Search
        </button>
      </div>

      {/* Popular Searches */}
      <div className="flex gap-4 mt-4 text-white">
        <span className="cursor-pointer bg-red-400 px-4 py-2 rounded-full text-sm shadow-md hover:bg-green-700">
          🐶 Dog Specialist
        </span>
        <span className="cursor-pointer bg-red-400 px-4 py-2 rounded-full text-sm shadow-md hover:bg-green-700">
          🐱 Cat Vet
        </span>
        <span className="cursor-pointer bg-red-400 px-4 py-2 rounded-full text-sm shadow-md hover:bg-green-700">
          🦜 Bird Care
        </span>
        <span className="cursor-pointer bg-red-400 px-4 py-2 rounded-full text-sm shadow-md hover:bg-green-700">
          🐴 Horse Clinic
        </span>
        <span className="cursor-pointer bg-red-400 px-4 py-2 rounded-full text-sm shadow-md hover:bg-green-700">
          🐢 Exotic Pets
        </span>
      </div>
    </div>
  );
};

export default FindVet;
