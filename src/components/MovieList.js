import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";

// Components
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import SearchBar from "./SearchBar";

// Stores
import movieStore from "../stores/movieStore";
import GenreModal from "./GenreModal";

function MovieList() {
	const [query, setQuery] = useState("");

	const movieList = movieStore.movies
		.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
		.map((movie) => <MovieCard key={movie._id} movie={movie} />);

	return (
		<div>
			<div>
				<MovieModal />
				<GenreModal />
				<SearchBar setItem={setQuery} />
			</div>
			<div className="mt-4 ">
				<h1>Action</h1>
				<div className="scrolling-wrapper row flex-row flex-nowrap pb-1 pt-2">
					{movieList}
				</div>
			</div>
			<div className="mt-4 ">
				<h1 className="mt-4 ">Horror</h1>
				<div className="scrolling-wrapper row flex-row flex-nowrap pb-1 pt-2">
					{movieList}
				</div>
			</div>
			{/* <div className="container-lg row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
				{movieList}
			</div> */}
		</div>
	);
}

export default observer(MovieList);
