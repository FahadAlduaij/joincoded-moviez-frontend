import React from "react";
import { observer } from "mobx-react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="item col-2 m-3 movie-shadow ">
      <Card style={{ width: "15rem" }} bg="dark" text="light" border="dark">
        <Link to={`/movies/${movie.slug}`}>
          <Card.Img variant="top" src={movie.image} />
          {/* <Card.ImgOverlay>
						<h2 className="genre-header">{movie.title}</h2>
					</Card.ImgOverlay> */}
        </Link>
      </Card>
    </div>
  );
}

export default observer(MovieCard);
