import React, { useState } from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import { observer } from "mobx-react";
import celebrityStore from "../stores/celebrityStore";

const CelebrityModal = () => {
  const [celebrity, setCelebrity] = useState({
    name: "",
    bio: "",
    age: "",
    image: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setCelebrity({ ...celebrity, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setCelebrity({ ...celebrity, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    celebrityStore.createCelebrity(celebrity);
    handleClose();
  };

  return (
    <>
      <button className="adminButtons"  variant="success" onClick={handleShow}>
        New Celebrity
      </button>

      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Add Celebrity</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  value={celebrity.name}
                  type="text"
                  placeholder="Enter Fullname"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="bio"
                  value={celebrity.bio}
                  type="bio"
                  placeholder="Enter bio"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="age"
                  value={celebrity.age}
                  type="age"
                  placeholder="Enter Age"
                />

                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    onChange={handleImage}
                    name="image"
                    type="file"
                  />
                </Form.Group>
              </Form.Group>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleSubmit}>
            Create New
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default observer(CelebrityModal);
