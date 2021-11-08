import React from "react";

function SearchBar({ item, setItem }) {
	return (
		<div>
			<div className="position-relative">
				<div className="position-absolute top-20 end-0 m-2 w-25 form-control ">
					<input
						className=" position-static w-100  "
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
