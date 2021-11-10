import React from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { Card } from "react-bootstrap";

import MovieCard from "./MovieCard";

import singleStore from "../stores/singleStore";

const CelebrityDetail = () => {
  const { celebSlug } = useParams();

  const celeb = singleStore.celebrities.find(
    (celebrity) => celebrity.slug === celebSlug
  );

  const movieList = celeb.movies.map((movie) => (
    <MovieCard key={movie._id} movie={movie} />
  ));
  if (!celeb) return <Navigate to="/movies" />;
  return (
    <div>
      <div>
        <img src={celeb.image} alt={celeb.name} />
        <h1>${celeb.name}</h1>
        <p>{celeb.age}</p>
        <p>${celeb.bio}</p>
      </div>
      <div>{movieList}</div>
    </div>
  );
};

export default observer(CelebrityDetail);
