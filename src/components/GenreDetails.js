import React from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

// Stores
// import genreStore from "../stores/genreStore";
import singleStore from "../stores/singleStore";

function GenreDetails() {
  const { genreSlug } = useParams();
  // const genre = genreStore.genres.find((genre) => genre.slug === genreSlug);
  const genre = singleStore.genres.find((genre) => genre.slug === genreSlug);

  if (!genre) return <Navigate to="/movies/:movieSlug" />;

  return (
    <div className="genre-details">
      <h1>{genre.name}</h1>
    </div>
  );
}

export default GenreDetails;
