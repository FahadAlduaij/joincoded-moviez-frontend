import React, { useState } from "react";
import { Form, Container, Modal } from "react-bootstrap";

// Stores
import movieStore from "../stores/movieStore";

const MovieCommentInput = ({ movieId }) => {
	const [userComment, setUserComment] = useState({ message: "" });

	const handleChange = (event) => {
		setUserComment({ message: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		movieStore.createCommentForMovie(movieId, userComment);
		setUserComment({ message: "" });
	};
	return (
		<Form className="" onSubmit={handleSubmit}>
			<Modal.Header>
				<Modal.Title>Review</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Container>
					<Form.Group className="mb-1 " controlId="formBasicTitle">
						<Form.Label>Share your Thoughts!</Form.Label>
						<Form.Control
							className="p-2"
							onChange={handleChange}
							name="comment"
							value={userComment.message}
							type="text"
							placeholder="Add a Comment!"
						/>
					</Form.Group>
					<button className="sigin-up-btn mt-2" type="submit">
						Submit
					</button>
				</Container>
			</Modal.Body>
		</Form>
	);
};

export default MovieCommentInput;
