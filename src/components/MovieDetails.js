import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

// stores
import movieStore from "../stores/movieStore";

function MovieDetails() {
	const { movieSlug } = useParams();
	const movie = movieStore.movies.find((movie) => movie.slug === movieSlug);
	if (!movie) return <Navigate to="/movies" />;

	const genresList = movie.genres.map((genre) => genre.name);
	const celebritiesList = movie.celebrities.map((celebrity) => celebrity.name);

	return (
		<div>
			<div>
				<img src={movie.image} />
				<h1>{movie.title}</h1>
				<p>{movie.releaseDate}</p>
				<p>{movie.genresList}</p>
				<p>{movie.celebritiesList}</p>
			</div>
		</div>
	);
}

export default observer(MovieDetails);