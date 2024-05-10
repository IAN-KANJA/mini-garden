import React from "react";

function SearchPlant({ searchInput, setsearchInput }) {
  return (
    <div className="font-bold text-center italic bg-green-950">
      <h4 className="font-bold text-xl text-yellow-100">Search Plants:</h4>
      <input
        type="text"
        placeholder="Type a name to search"
        className="input.com"
        value={searchInput}
        onChange={(e) => setsearchInput(e.target.value)}
       />
    </div>
  );
}

export default SearchPlant;
