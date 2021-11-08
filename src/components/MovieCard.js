import { observer } from "mobx-react";
import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Tag from "./tag";

function MovieCard({ movie }) {
  const genreList = movie.genres
    .slice(0, 2)
    .map((x) => <Tag key={x._id} genre={x} />);

  return (
    <div className="item col-2 m-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{movie.releaseDate}</ListGroupItem>
          <ListGroupItem>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="carditem-genrerow">
                {genreList}{" "}
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
