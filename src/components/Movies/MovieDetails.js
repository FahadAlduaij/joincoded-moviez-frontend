import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

// Components
import Tags from "../Tags";
import MovieCommentInput from "./MovieCommentInput";
import MovieComments from "./MovieComments";

// stores
import movieStore from "../../stores/movieStore";
import genreStore from "../../stores/genreStore";

function MovieDetails() {
	const { movieSlug } = useParams();
	const movie = movieStore.movies.find((movie) => movie.slug === movieSlug);
	if (!movie) return <Navigate to="/movies" />;

	const genresList = movie.genres.map((genre) => (
		<Tags
			key={genre._id}
			item={genre.name}
			slug={genre.slug}
			baseUrl="genres"
		/>
	));
	const celebritiesList = movie.celebrities.map((celebrity) => (
		<Tags
			key={celebrity._id}
			item={celebrity.name}
			slug={celebrity.slug}
			baseUrl="celebrities"
		/>
	));

	const handleDelete = (event) => {
		event.preventDefault();
		movieStore.deleteMovie(movie, genreStore.genres);
	};

	return (
		<div>
			<div className="container d-flex flex-row justify-content-start align-items-center p-2">
				<img
					className="movieDetails-img"
					src={movie.image}
					alt="showing the movie"
				/>
				<div className="movieDetails-info flex-column flex-fill">
					<button className="btn btn-danger" onClick={handleDelete}>
						Delete
					</button>
					<h1 className="">{movie.title}</h1>
					<p className="">{movie.releaseDate}</p>
					<p className="">{movie.description}</p>
					<div>{genresList}</div>
					<div>{celebritiesList}</div>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center align-items-center comments-container">
				<div className="comments-input d-flex flex-column justify-content-center ">
					<MovieCommentInput movieId={movie._id} />
				</div>
				<br />
				<div className="d-flex flex-column justify-content-center align-items-center">
					<MovieComments movieId={movie._id} />
				</div>
			</div>
		</div>
	);
}

export default observer(MovieDetails);
