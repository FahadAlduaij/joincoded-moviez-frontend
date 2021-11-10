import React from "react";
import { Form, Container, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import { useState } from "react";
import { default as ReactSelect } from "react-select";

// Components
import GenreOptionsMovieCreate from "./GenreOptionsMovieCreate";
import celebrityOptionsMovieCreate from "./celebrityOptionsMovieCreate";

// Stores
// import movieStore from "../stores/movieStore";
// import genreStore from "../stores/genreStore";
// import celebrityStore from "../stores/celebrityStore";
import singleStore from "../stores/singleStore";

function MovieModal() {
  const [movie, setMovie] = useState({
    title: "",
    image: "",
    releaseDate: "",
    genres: [],
    celebrities: [],
  });

  const [genresSelected, setGenresSelect] = useState({
    optionSelected: null,
  });
  const [celebritySelected, setCelebritySelect] = useState({
    optionSelected: null,
  });

  // const genreOptions = genreStore.genres.map((genre) => ({
  //   value: genre.name,
  //   label: genre.name,
  // }));

  // const celebrityOptions = celebrityStore.celebrities.map((celebrity) => ({
  //   value: celebrity.name,
  //   label: celebrity.name,
  // }));

  const genreOptions = singleStore.genres.map((genre) => ({
    value: genre.name,
    label: genre.name,
  }));

  const celebrityOptions = singleStore.celebrities.map((celebrity) => ({
    value: celebrity.name,
    label: celebrity.name,
  }));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setMovie({ ...movie, image: event.target.files[0] });
  };

  const genreSelectHandleChange = (selected) => {
    setGenresSelect({
      optionSelected: selected,
    });
  };

  const celebritySelectHandleChange = (selected) => {
    setCelebritySelect({
      optionSelected: selected,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   let genreArray = [];
  //   let celebrityArray = [];
  //   if (genresSelected.optionSelected) {
  //     genreArray = genresSelected.optionSelected.map(
  //       (element) => element.value
  //     );
  //   }
  //   if (celebritySelected.optionSelected) {
  //     celebrityArray = celebritySelected.optionSelected.map(
  //       (element) => element.value
  //     );
  //   }
  //   const newMovie = {
  //     ...movie,
  //     genres: genreArray,
  //     celebrities: celebrityArray,
  //   };
  //   movieStore.createMovie(newMovie);
  //   handleClose();
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    let genreArray = [];
    let celebrityArray = [];
    if (genresSelected.optionSelected) {
      genreArray = genresSelected.optionSelected.map(
        (element) => element.value
      );
    }
    if (celebritySelected.optionSelected) {
      celebrityArray = celebritySelected.optionSelected.map(
        (element) => element.value
      );
    }
    const newMovie = {
      ...movie,
      genres: genreArray,
      celebrities: celebrityArray,
    };
    singleStore.createMovie(newMovie);
    handleClose();
  };

  return (
    <>
      <button className="adminButtons" variant="success" onClick={handleShow}>
        New Movie
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
                <span>
                  <ReactSelect
                    options={genreOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{
                      GenreOptionsMovieCreate,
                    }}
                    onChange={genreSelectHandleChange}
                    allowSelectAll={true}
                    value={genresSelected.optionSelected}
                  />
                </span>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Celebrities</Form.Label>
                <span>
                  <ReactSelect
                    options={celebrityOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{
                      celebrityOptionsMovieCreate,
                    }}
                    onChange={celebritySelectHandleChange}
                    allowSelectAll={true}
                    value={celebritySelected.optionSelected}
                  />
                </span>
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

export default observer(MovieModal);
