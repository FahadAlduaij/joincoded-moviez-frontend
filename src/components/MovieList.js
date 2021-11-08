import React from "react";
import MovieCard from "./MovieCard";
import movieData from "../stores/MovieData";
import { observer } from "mobx-react";
import MovieModal from "./MovieModal";

function MovieList() {
	const movieList = movieData.movies.map((movie) => (
		<MovieCard key={movie._id} movie={movie} />
	));
	return (
		<div>
			<MovieModal />
			{movieList}
		</div>
	);
}

export default observer(MovieList);
