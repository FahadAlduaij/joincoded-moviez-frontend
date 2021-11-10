import React, { useState } from "react";
import singleStore from "../stores/singleStore";
import { Form, Container, Modal } from "react-bootstrap";

const MovieCommentInput = ({ movieId }) => {
  const [userComment, setUserComment] = useState({ message: "" });

  handleChange = (event) => {
    setUserComment({ message: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    singleStore(movieId, userComment);
    setUserComment({ message: "" });
  };
  return (
    <Form>
      <Modal.Header>
        <Modal.Title>Create Movie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Share your Thoughts!</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="comment"
              value={userComment.message}
              type="text"
              placeholder="Add a Comment!"
            />
          </Form.Group>
        </Container>
      </Modal.Body>
      <button className="" onClick={handleSubmit}>
        Submit
      </button>
    </Form>
  );
};

export default MovieCommentInput;
