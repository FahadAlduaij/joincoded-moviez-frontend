import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Route } from "react-router";

function HomePage() {
	const handleFindMovie = () => {
		console.log("clicked");
	};

	return (
		<div className="content">
			<h1>
				The Newest Movies Rating and Reviews in <strong>Moviez</strong>
			</h1>
			<p>
				<strong>Moviez</strong> is the world's most popular and authoritative
				source for movie, TV and celebrity content. Find ratings and reviews for
				the newest movie and TV shows
			</p>
			<form>
				<input type="text" placeholder="&#x270e; Search for a movie" />
				<Link to="/movies">
					<button onClick={handleFindMovie}>Find Movie</button>
				</Link>
			</form>
		</div>
	);
}

export default HomePage;
