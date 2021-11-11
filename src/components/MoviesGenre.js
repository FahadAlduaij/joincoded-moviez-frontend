import { observer } from "mobx-react";
import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function MoviesGenre({ genre, query }) {
  const movies = genre.movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => <MovieCard key={movie._id} movie={movie} />);

  return (
    <div>
      <Link className="genre-header-links" to={`/genres/${genre.slug}`}>
        <h1>{genre.name}</h1>
      </Link>
      <div className="scrolling-wrapper row flex-row flex-nowrap pb-1 pt-2">
        {movies}
      </div>
    </div>
  );
}

export default observer(MoviesGenre);
