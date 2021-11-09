import React from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import { useState } from "react";
import { default as ReactSelect } from "react-select";

// Components
import GenreOptionsMovieCreate from "./GenreOptionsMovieCreate";

// Stores
import movieStore from "../stores/movieStore";
import genreStore from "../stores/genreStore";

function MovieModal() {
	//Changed genres from '' to []
	const [movie, setMovie] = useState({
		title: "",
		image: "",
		releaseDate: "",
		genres: [],
		celebrities: "",
	});

	const [genresSelected, setGenresSelect] = useState({
		optionSelected: null,
	});

	const genreOptions = [];
	genreStore.genres.forEach((genre) => {
		genreOptions.push({ value: genre.genreName, label: genre.genreName });
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

	const reactSelectHandleChange = (selected) => {
		setGenresSelect({
			optionSelected: selected,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const genreArray = [];
		genresSelected.optionSelected.forEach((element) =>
			genreArray.push(element.value)
		);
		//elements in genreArray not being added to movie.genres for some reason
		console.log(genreArray);
		setMovie({ ...movie, genres: genreArray });
		movieStore.createMovie(movie);
		handleClose();
	};

	//   const handleSubmit = (event) => {
	//     event.preventDefault();
	//     movieData.createMovie(movie);
	//     handleClose();
	//   };

	return (
		<div>
			<button className="createbtn" variant="success" onClick={handleShow}>
				Create New Movie
			</button>

			<Modal show={show} onHide={handleClose}>
				<Form>
					<Modal.Header closeButton>
						<Modal.Title>Create Movie</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Container>
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
								{/* <Form.Control
						onChange={handleChange}
						name="genres"
						value={movie.genres}
						type="text"
						placeholder="Enter genre"
					/> */}
								<span>
									<ReactSelect
										options={genreOptions}
										isMulti
										closeMenuOnSelect={false}
										hideSelectedOptions={false}
										components={{
											GenreOptionsMovieCreate,
										}}
										onChange={reactSelectHandleChange}
										allowSelectAll={true}
										value={genresSelected.optionSelected}
									/>
								</span>
							</Form.Group>
							{/* Previous Form input for single, this below works */}
							{/* <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Genres</Form.Label>
                 <Form.Control
                   onChange={handleChange}
                   name="genres"
                   value={movie.genres}
                   type="text"
                   placeholder="Enter genre"
                 />
               </Form.Group> */}

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
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="success" onClick={handleSubmit}>
							Create
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	);
}

export default observer(MovieModal);
