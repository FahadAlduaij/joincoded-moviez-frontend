import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

// Components
import Tags from "./Tags";

// stores
import movieStore from "../stores/movieStore";

function MovieDetails() {
  const { movieSlug } = useParams();
  const movie = movieStore.movies.find((movie) => movie.slug === movieSlug);
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
        <img className="imged" src={movie.image} alt="showing the movie" />
        <h1 className="titled">{movie.title}</h1>
        <p className="rdd">{movie.releaseDate}</p>
        <span className="genbtn">{genresList}</span>
        {celebritiesList}
      </div>
    </div>
  );
}

export default observer(MovieDetails);
