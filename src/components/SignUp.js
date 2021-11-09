import React from "react";
import { Form, Button, Container, Modal, Dropdown } from "react-bootstrap";
import { useState } from "react";

function SignUp({
	show,
	data,
	handleChange,
	handleClose,
	showSignIn,
	handleSignUp,
}) {
	return (
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
	);
}

export default SignUp;
