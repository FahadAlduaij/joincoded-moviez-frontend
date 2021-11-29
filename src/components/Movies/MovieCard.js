import React from "react";
import { observer } from "mobx-react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
	return (
		<div className="item col-8  col-sm-6 col-md-5 col-lg-3 col-xl-3 col-xxl-2 m-4 ">
			<Card style={{ width: "15rem" }} bg="dark" text="light" border="dark">
				<Link to={`/movies/${movie.slug}`}>
					<Card.Img variant="top" src={movie.image} />
				</Link>
			</Card>
		</div>
	);
}

export default observer(MovieCard);
