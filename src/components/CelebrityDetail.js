import React from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { useState } from "react";

// Components
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

// Stores
import singleStore from "../stores/singleStore";

const CelebrityDetail = () => {
	const [query, setQuery] = useState("");
	const { celebSlug } = useParams();

	const celeb = singleStore.celebrities.find(
		(celebrity) => celebrity.slug === celebSlug
	);

	const movieList = celeb.movies
		.filter((_movies) =>
			_movies.title.toLowerCase().includes(query.toLowerCase())
		)
		.map((movie) => <MovieCard key={movie._id} movie={movie} />);
	if (!celeb) return <Navigate to="/movies" />;

	return (
		<div className="genre-details-container">
			<div>
				<SearchBar className="searchBar-movie-list" setItem={setQuery} />
			</div>
			<div>
				<img  src={celeb.image} alt={celeb.name} />
				<h1> <strong>Name:</strong> {celeb.name}</h1>
				<p><strong>Age:</strong> {celeb.age}</p>
				<p><strong>Bio:</strong> {celeb.bio}</p>
			</div>
			<div className="genre-details-header scrolling-wrapper row flex-column flex-nowrap pb-1 pt-2">
				{movieList}
			</div>
		</div>
	);
};

export default observer(CelebrityDetail);
