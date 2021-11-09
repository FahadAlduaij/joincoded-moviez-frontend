import React from "react";
import { Form, Button, Container, Modal, Dropdown } from "react-bootstrap";
import { useState } from "react";
import userData from "../stores/userStore";
import { observer } from "mobx-react-lite";

function Sign() {
	const [data, setData] = useState({
		username: "",
		password: "",
		email: "",
	});

	const [showCreateNewUser, setShowCreateNewUser] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
		setShowCreateNewUser(false);
	};

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const showSignUp = (event) => {
		event.preventDefault();
		setShow(true);
		setShowCreateNewUser(true);
	};
	const showSignIn = (event) => {
		event.preventDefault();
		setShowCreateNewUser(false);
	};

	const handleSignIn = (event) => {
		event.preventDefault();
		userData.signIn(data);
		setShowCreateNewUser(false);
		handleClose();
	};

	const handleSignUp = (event) => {
		event.preventDefault();
		userData.signUp(data);
		setShowCreateNewUser(false);
		handleClose();
	};

	const handleSignOut = (event) => {
		event.preventDefault();
		userData.signOut();
	};

	return (
		<div>
			{/* This should be in it's own component */}
			{userData.user ? (
				<>
					<h5 className=" nav-item badge bg-secondary text-wrap">
						Welcome Back {userData.user.username}!
					</h5>
					<button
						className="logoutbtn"
						variant="danger"
						onClick={handleSignOut}
					>
						Logout
					</button>
				</>
			) : (
				<Dropdown>
					<Dropdown.Toggle variant="dark" id="dropdown-basic">
						Sign in
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item onClick={handleShow} href="#/action-3">
							Sign in
						</Dropdown.Item>
						<Dropdown.Item onClick={showSignUp} href="#/action-3">
							Sign Up
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			)}
			{showCreateNewUser ? (
				//  REVIEW: Those should be in their own components
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>SIGN UP</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<Form>
								<Form.Group className="mb-3" controlId="formBasicUsername">
									<Form.Label>Email</Form.Label>
									<Form.Control
										onChange={handleChange}
										name="email"
										value={data.email}
										type="text"
										placeholder="Enter username"
									/>
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicUsername">
									<Form.Label>Username</Form.Label>
									<Form.Control
										onChange={handleChange}
										name="username"
										value={data.username}
										type="text"
										placeholder="Enter username"
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										onChange={handleChange}
										name="password"
										value={data.password}
										type="password"
										placeholder="Password"
									/>
								</Form.Group>
							</Form>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="link" onClick={showSignIn}>
							Sign in
						</Button>
						<Button variant="success" onClick={handleSignUp}>
							Sign up
						</Button>
					</Modal.Footer>
				</Modal>
			) : (
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>SIGN IN</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<Form>
								<Form.Group className="mb-3" controlId="formBasicUsername">
									<Form.Label>Username</Form.Label>
									<Form.Control
										onChange={handleChange}
										name="username"
										value={data.username}
										type="text"
										placeholder="Enter username"
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										onChange={handleChange}
										name="password"
										value={data.password}
										type="password"
										placeholder="Password"
									/>
								</Form.Group>
							</Form>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="link dark" onClick={showSignUp}>
							Create New Account
						</Button>
						<Button variant="success" onClick={handleSignIn}>
							Sign in
						</Button>
					</Modal.Footer>
				</Modal>
			)}
			);
		</div>
	);
}

export default observer(Sign);
