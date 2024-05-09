import { useState } from "react";

function SearchPlant({ searchInput, setsearchInput }) {
  return (
    <div>
      <h4 className="font-bold text-xl">Search Plants:</h4>
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
