import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

// Components
import Tag from "./Tag";

// stores
import movieStore from "../stores/movieStore";

function MovieDetails() {
	const { movieSlug } = useParams();
	const movie = movieStore.movies.find((movie) => movie.slug === movieSlug);
	if (!movie) return <Navigate to="/movies" />;

	const genresList = movie.genres.map((genre) => (
		<Tag key={genre._id} item={genre.name} />
	));
	const celebritiesList = movie.celebrities.map((celebrity) => celebrity.name);

	return (
		<div>
			<div>
				<img src={movie.image} />
				<h1>{movie.title}</h1>
				<p>{movie.releaseDate}</p>
				{genresList}
				{celebritiesList}
			</div>
		</div>
	);
}

export default observer(MovieDetails);
