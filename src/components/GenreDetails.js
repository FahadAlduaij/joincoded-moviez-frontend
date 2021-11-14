import React from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { useState } from "react";

// Components
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

// Stores
import genreStore from "../stores/genreStore";
import { observer } from "mobx-react";

function GenreDetails() {
	const [query, setQuery] = useState("");
	const { genreSlug } = useParams();
	const genre = genreStore.genres.find((genre) => genre.slug === genreSlug);
	if (!genre) return <Navigate to="/movies/:movieSlug" />;

	const movieList = genre.movies
		.filter((_movies) =>
			_movies.title.toLowerCase().includes(query.toLowerCase())
		)
		.map((_movie) => <MovieCard key={_movie._id} movie={_movie} />);

	return (
		<div className="container  mt-5">
			<SearchBar className="searchBar-movie-list" setItem={setQuery} />
			<h1 className="genre-header d-block p-4 ms-2">{genre.name}</h1>
			<div className="d-flex flex-row flex-wrap ">{movieList}</div>
		</div>
	);
}

export default observer(GenreDetails);
