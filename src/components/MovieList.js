import React from "react";
import MovieCard from "./MovieCard";
import movieData from "../stores/MovieData";
import { observer } from "mobx-react";
import MovieModal from "./MovieModal";
import SearchBar from "./SearchBar";
import { useState } from "react";

function MovieList() {

  const movieList = movieData.movies.map((movie) => (
    <MovieCard key={movie._id} movie={movie} />
  ));
  return (
    <div className="container-lg row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      {movieList}
    </div>
  );

// 	const [query, setQuery] = useState("");
// 	const movieList = movieData.movies
// 		.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
// 		.map((movie) => <MovieCard key={movie._id} movie={movie} />);
// 	return (
// 		<div>
// 			<SearchBar setitem={setQuery} />
// 			<MovieModal />
// 			{movieList}
// 		</div>
// 	);

}

export default observer(MovieList);
