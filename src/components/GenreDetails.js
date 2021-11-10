import React from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { useState } from "react";

// Components
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

// Stores
import singleStore from "../stores/singleStore";

function GenreDetails() {
	const [query, setQuery] = useState("");
	const { genreSlug } = useParams();
	const genre = singleStore.genres.find((genre) => genre.slug === genreSlug);
	if (!genre) return <Navigate to="/movies/:movieSlug" />;

	const movieList = genre.movies
		.filter((_movies) =>
			_movies.title.toLowerCase().includes(query.toLowerCase())
		)
		.map((_movie) => <MovieCard key={_movie._id} movie={_movie} />);

	return (
		<div className="genre-details-container">
			<div>
				<SearchBar className="searchBar-movie-list" setItem={setQuery} />
			</div>
			<h1>{genre.name}</h1>
			<div className="genre-details-header scrolling-wrapper row flex-column flex-nowrap pb-1 pt-2">
				{movieList}
			</div>
		</div>
	);
}

export default GenreDetails;
