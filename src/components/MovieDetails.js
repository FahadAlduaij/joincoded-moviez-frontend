import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

// Components
import Tags from "./Tags";

// stores
// import movieStore from "../stores/movieStore";
import singleStore from "../stores/singleStore";

function MovieDetails() {
	const { movieSlug } = useParams();
	const movie = singleStore.movies.find((movie) => movie.slug === movieSlug);
	if (!movie) return <Navigate to="/movies" />;

	const genresList = movie.genres.map((genre) => (
		<Tags
			key={genre._id}
			item={genre.name}
			slug={genre.slug}
			baseUrl="genres"
		/>
	));
	const celebritiesList = movie.celebrities.map((celebrity) => (
		<Tags
			key={celebrity._id}
			item={celebrity.name}
			slug={celebrity.slug}
			baseUrl="celebrities"
		/>
	));

	return (
		<div>
			<div>
				<img className="imged" src={movie.image} alt="showing the movie" />
			</div>
			<div>
				<h1 className="titled">{movie.title}</h1>
				<p className="rdd">{movie.releaseDate}</p>
				<p className="descrd">{movie.description}</p>
				<span className="genbtn">{genresList}</span>
				<span className="celebtn"> {celebritiesList} </span>
			</div>
		</div>
	);
}

export default observer(MovieDetails);
