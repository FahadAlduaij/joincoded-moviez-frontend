import React from "react";
import MovieCard from "./MovieCard";

function MoviesGenre({ genre, query }) {
	const movies = genre.movies
		.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
		.map((movie) => <MovieCard key={movie._id} movie={movie} />);

	return (
		<div>
			<h1 className="genre-header">{genre.name}</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap pb-1 pt-2">
				{movies}
			</div>
		</div>
	);
}

export default MoviesGenre;
