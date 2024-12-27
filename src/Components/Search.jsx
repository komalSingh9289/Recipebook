import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput, filter);
  };

  return (
    <div className="mb-6">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center space-x-2"
      >
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search recipes..."
          className="w-3/4 md:w-1/2 px-4 py-2 border border-gray-300 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-2 py-2 text-sm border border-gray-300 rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-r-lg hover:bg-blue-500 transition duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
