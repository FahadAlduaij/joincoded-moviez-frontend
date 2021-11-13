import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";

// Components
import MovieCard from "./MovieCard";

function MoviesGenre({ genre, query }) {
	const movies = genre.movies
		.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
		.map((movie) => <MovieCard key={movie._id} movie={movie} />);

<<<<<<< HEAD
	if (movies.length >= 1) {
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
	} else {
		return (
			<>
				<h1 className="genre-header">There Is no Movies</h1>
			</>
		);
	}
=======
    if (movies.length >= 1){
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
  } else {
    return(    
      <>
      </>
    )

  }
>>>>>>> d856de1b33665243d94ebf22312e48faecf4596d
}

export default observer(MoviesGenre);
