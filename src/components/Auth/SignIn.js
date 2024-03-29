import React from "react";
import { Form, Container, Modal } from "react-bootstrap";

function SignIn({
	show,
	data,
	handleChange,
	handleClose,
	handleSignIn,
	showSignUp,
}) {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header  closeButton  >
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
				<button className="sign-link" onClick={showSignUp}>
					Create New Account
				</button>
				<button className="sigin-up-btn" onClick={handleSignIn}>
					Sign In
				</button>
			</Modal.Footer>
		</Modal>
	);
}

export default SignIn;
