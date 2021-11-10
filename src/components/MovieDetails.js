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
  // const movie = movieStore.movies.find((movie) => movie.slug === movieSlug);
  const movie = singleStore.movies.find((movie) => movie.slug === movieSlug);

  if (!movie) return <Navigate to="/movies" />;

  const genresList = movie.genres.map((genre) => (
    <Tags key={genre._id} item={genre.name} />
  ));
  const celebritiesList = movie.celebrities.map((celebrity) => (
    <Tags key={celebrity._id} item={celebrity.name} />
  ));

  return (
    <div>
      <div>
        <img src={movie.image} alt="showing the movie" />
        <h1>{movie.title}</h1>
        <p>{movie.releaseDate}</p>
        <span>{genresList}</span>
        {celebritiesList}
      </div>
    </div>
  );
}

export default observer(MovieDetails);
