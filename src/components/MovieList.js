import React from "react";
import { useState } from "react";
import { observer } from "mobx-react";

// Components
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import SearchBar from "./SearchBar";

// Stores
import movieData from "../stores/MovieData";

// REVIEW: Organize imports in all your files please

function MovieList() {
  const [query, setQuery] = useState("");

  const movieList = movieData.movies
    .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieCard key={movie._id} movie={movie} />);
  return (
    // REVIEW: Remove the Fragments please <></>
    <>
      <div>
        <MovieModal />
        {/* REVIEW: Why setItem? It should be setQuery */}
        <SearchBar setItem={setQuery} />
      </div>
      <div className="container-lg row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {movieList}
      </div>
    </>
  );
}

export default observer(MovieList);
