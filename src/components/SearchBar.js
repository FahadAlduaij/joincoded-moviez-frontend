import React from "react";

// REVIEW: Remove item if you're not using it
function SearchBar({ item, setItem }) {
  return (
    <div>
      <div className="wrap position-relative ">
        <div className="search">
          <img
            className="searchimg"
            src="http://www.clker.com/cliparts/R/6/l/K/8/R/search-icon-red-md.png"
          />
          <input
            className=" searchTerm  "
            type="search"
            onChange={(e) => setItem(e.target.value)}
            placeholder="Search for a Movie!"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
