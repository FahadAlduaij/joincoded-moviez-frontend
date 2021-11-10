import React from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

// Stores
import genreStore from "../stores/genreStore";

function GenreDetails() {
	const { genreSlug } = useParams();
	const genre = genreStore.genres.find((genre) => genre.slug === genreSlug);
    if (!genre) return <Navigate to="/movies/:movieSlug" />;

  
	return <div>
        <h1>Genre List</h1>
    </div>;
}

export default GenreDetails;
