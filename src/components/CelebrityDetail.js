import React from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { useState } from "react";

// Components
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

// Stores
import celebrityStore from "../stores/celebrityStore";

const CelebrityDetail = () => {
	const [query, setQuery] = useState("");
	const { celebSlug } = useParams();
	const celeb = celebrityStore.celebrities.find(
		(celebrity) => celebrity.slug === celebSlug
	);
	if (!celeb) return <Navigate to="/movies" />;

	const movieList = celeb.movies
		.filter((_movies) =>
			_movies.title.toLowerCase().includes(query.toLowerCase())
		)
		.map((movie) => <MovieCard key={movie._id} movie={movie} />);

	return (
		<div className="container mt-5">
			<div>
				<SearchBar className="searchBar-movie-list" setItem={setQuery} />
			</div>
			<div className="d-flex flex-column justify-content-center align-items-center genre-header d-block p-4 ">
				<img className="m-4" src={celeb.image} alt={celeb.name} />
				<h1 className="m-4">
					<strong></strong> {celeb.name}
				</h1>
				<p>
					<strong>Age:</strong> {celeb.age}
				</p>
				<p>
					<strong></strong> {celeb.bio}
				</p>
			</div>
			<div className="d-flex flex-row scrolling-wrapper  ">{movieList}</div>
		</div>
	);
};

export default observer(CelebrityDetail);
