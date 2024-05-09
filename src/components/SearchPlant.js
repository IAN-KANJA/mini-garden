<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3af8bde63d8fa2d932b376455aaa632ff6645d22
const Search = () => {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Plants:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={(e) => console.log("Searching...")}
            />
        </div>
    );
<<<<<<< HEAD

};
=======
import React from "react";
function Search({search,setsearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value ={search}
        onChange={(e) => setsearch(e.target.value)}
      />
    </div>
>>>>>>> b9069bdecf35811c7213a1899bbd3a0038bf1638

=======

};

>>>>>>> 3af8bde63d8fa2d932b376455aaa632ff6645d22
export d