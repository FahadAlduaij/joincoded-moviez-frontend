import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import Sign from "./Sign";

// Stores
import userStore from "../stores/userStore";

function NavBar() {
	if (userStore.user) {
		userStore.checkRole();
	}

	return (
		<div className="nav-bar">
			<nav>
				<Link to="/">
					<img
						alt="its a logo for website"
						src="https://cdn.discordapp.com/attachments/906929616076279850/906954671556546610/6333050220_d29fb116-496b-4625-bd30-b8305e54703f.png"
						className="logo"
					/>
				</Link>

				<ul className="nav-links">
					<Link to="/">
						<li>
							<p>Home</p>
						</li>
					</Link>
					<Link to="/movies">
						<li>
							<p>Movies</p>
						</li>
					</Link>

					{userStore.isUserAdmin && (
						<Link to="/admin">
							<li>
								<p>Admin</p>
							</li>
						</Link>
					)}

					<li>
						{userStore.user ? (
							<div className="logout-and-welcome-name">
								<h5>Welcome Back {userStore.user.username}!</h5>
								<button className="sigin-up-btn " onClick={userStore.signOut}>
									Logout
								</button>
							</div>
						) : (
							<Sign />
						)}
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default observer(NavBar);
