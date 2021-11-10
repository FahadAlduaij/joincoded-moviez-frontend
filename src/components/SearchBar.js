import React from "react";

function SearchBar({ className, setItem }) {
	return (
		<div>
			<div className={className}>
				<form>
					<img
						className="searchimg"
						src="http://www.clker.com/cliparts/R/6/l/K/8/R/search-icon-red-md.png"
						alt="a logo for searching"
					/>
					<input
						type="text"
						placeholder=" Search for a movie"
						onChange={(e) => setItem(e.target.value)}
					/>
				</form>
			</div>

			{/* <div className="wrap position-relative ">
				<div className="search">
					<img
						className="searchimg"
						src="http://www.clker.com/cliparts/R/6/l/K/8/R/search-icon-red-md.png"
						alt="a logo for searching"
					/>
					<input
						className=" searchTerm  "
						type="search"
						onChange={(e) => setItem(e.target.value)}
						placeholder="Search for a Movie!"
					/>
				</div>
			</div> */}
		</div>
	);
}

export default SearchBar;
