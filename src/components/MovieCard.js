import React from "react";
import { observer } from "mobx-react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
	return (
		<div className="item col-2 m-5">
			<Card style={{ width: "18rem" }}>
				<Link to={`/movies/${movie.slug}`}>
					<Card.Img variant="top" src={movie.image} />
				</Link>
				<Card.Body>
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text></Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default observer(MovieCard);
