import React, { useState } from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import { observer } from "mobx-react";

// Stores
import genreStore from "../stores/genreStore";

function GenreModal() {
	const [genre, setGenre] = useState({
		name: "",
	});

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleChange = (event) => {
		setGenre({ ...genre, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		genreStore.createGenre(genre);
		handleClose();
	};

	return (
		<>
			<button className="adminButtons" variant="success" onClick={handleShow}>
				New Genre
			</button>

			<Modal show={show} onHide={handleClose}>
				<Form>
					<Modal.Header closeButton>
						<Modal.Title>Create New Genre</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Container>
							<Form.Group className="mb-3" controlId="formBasicUsername">
								<Form.Label>Name</Form.Label>
								<Form.Control
									onChange={handleChange}
									name="name"
									value={genre.name}
									type="text"
									placeholder="Enter name"
								/>
							</Form.Group>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<button className="sigin-up-btn" onClick={handleSubmit}>
							Create New
						</button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
}

export default observer(GenreModal);
