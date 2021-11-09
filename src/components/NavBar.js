import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";

// Components
import Sign from "./Sign";

// Stores
import userStore from "../stores/userStore";

function NavBar() {
	return (
		<div>
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
					<a href="/" className="Homebtn ">
						Home
					</a>
					<a href="/movies" className="Moviebtn ">
						Movies
					</a>

					{userStore.user ? (
						<>
							<h5 className=" nav-item badge bg-secondary text-wrap">
								Welcome Back {userStore.user.username}!
							</h5>
							<button
								className="logoutbtn"
								variant="danger"
								onClick={userStore.signOut}
							>
								Logout
							</button>
						</>
					) : (
						<Sign />
					)}
				</Container>
			</Navbar>
		</div>
	);
}

export default observer(NavBar);
