import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sign from "./Sign";

function NavBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Link to="/">
						<Navbar.Brand>
							<img
								alt=""
								src="https://cdn.discordapp.com/attachments/906929616076279850/906954671556546610/6333050220_d29fb116-496b-4625-bd30-b8305e54703f.png"
								width="180"
								height="55"
								className="d-inline-block align-top"
							/>
						</Navbar.Brand>
					</Link>
				</Container>

				<Sign />
			</Navbar>
		</>
	);
}

export default NavBar;
