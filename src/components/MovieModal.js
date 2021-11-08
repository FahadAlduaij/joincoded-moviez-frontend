import React from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import { useState } from "react";
import movieData from "../stores/MovieData";

function MovieModal() {
	const [movie, setMovie] = useState({
		title: "",
		image: "",
		releaseDate: "",
		genres: "",
		celebrities: "",
	});

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleChange = (event) => {
		setMovie({ ...movie, [event.target.name]: event.target.value });
	};
	const handleImage = (event) => {
		setMovie({ ...movie, image: event.target.files[0] });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		movieData.createMovie(movie);
		handleClose();
	};

	return (
		<div>
			<Button variant="success" onClick={handleShow}>
				Create New Movie
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create Movie</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Container>
						<Form>
							<Form.Group className="mb-3" controlId="formBasicUsername">
								<Form.Label>Title</Form.Label>
								<Form.Control
									onChange={handleChange}
									name="title"
									value={movie.title}
									type="text"
									placeholder="Enter title"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicUsername">
								<Form.Label>Image</Form.Label>
								<Form.Control onChange={handleImage} name="image" type="file" />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Release Date</Form.Label>
								<Form.Control
									onChange={handleChange}
									name="releaseDate"
									value={movie.releaseDate}
									type="text"
									placeholder="Enter release date"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Genres</Form.Label>
								<Form.Control
									onChange={handleChange}
									name="genres"
									value={movie.genres}
									type="text"
									placeholder="Enter genre"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Celebrities</Form.Label>
								<Form.Control
									onChange={handleChange}
									name="celebrities"
									value={movie.celebrities}
									type="text"
									placeholder="Enter celebrities"
								/>
							</Form.Group>
						</Form>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="success" onClick={handleSubmit}>
						Create
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default MovieModal;
