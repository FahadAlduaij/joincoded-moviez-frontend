import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";

// Components
import SearchBar from "./SearchBar";
import MoviesGenre from "./MoviesGenre";

// Stores
import genreStore from "../stores/genreStore";

function MovieList() {
  const [query, setQuery] = useState("");

  const movieList = genreStore.genres.map((genre) => (
    <MoviesGenre key={genre._id} genre={genre} query={query} />
  ));

  return (
    <div>
      <div>
        <SearchBar className={"searchBar-movie-list"} setItem={setQuery} />
      </div>
      <div className="mt-4 ">
        <div>{movieList}</div>
      </div>
      {/* <div className="container-lg row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
				{movieList}
			</div> */}
    </div>
  );
}

export default observer(MovieList);
