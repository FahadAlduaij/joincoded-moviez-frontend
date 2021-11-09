import React from "react";
import { observer } from "mobx-react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

// Components
import Tag from "./Tag";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
	const genreList = movie.genres
		.slice(0, 2)
		.map((genre) => <Tag key={genre._id} item={genre.name} />);

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
				<ListGroup className="list-group-flush">
					<ListGroupItem>{movie.releaseDate}</ListGroupItem>
					<ListGroupItem>
						<ListGroup className="list-group-flush">
							<ListGroupItem className="carditem-genrerow">
								{genreList}
							</ListGroupItem>
						</ListGroup>
					</ListGroupItem>
					<ListGroupItem>Vestibulum at eros</ListGroupItem>
				</ListGroup>
			</Card>
		</div>
	);
}

export default observer(MovieCard);
