import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components
import MovieCard from "./MovieCard";

function MoviesGenre({ genre, query }) {
	const movies = genre.movies
		.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
		.map((movie) => <MovieCard key={movie._id} movie={movie} />);

	if (movies.length >= 1) {
		return (
			<div className="container">
				<Link className="genre-header-links" to={`/genres/${genre.slug}`}>
					<h1>{genre.name}</h1>
				</Link>
				<div className="scrolling-wrapper row flex-nowrap pb-1 pt-2">
					{movies}
				</div>
			</div>
		);
	} else {
		return <></>;
	}
}

export default observer(MoviesGenre);
