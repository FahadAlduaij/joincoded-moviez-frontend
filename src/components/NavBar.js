import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import Sign from "./Sign";

// Stores
import userStore from "../stores/userStore";

function NavBar() {
	return (
		<div className="nav-bar">
			<nav>
				<Link to="/">
					<img
						alt="its a logo image for website"
						src="https://cdn.discordapp.com/attachments/906929616076279850/906954671556546610/6333050220_d29fb116-496b-4625-bd30-b8305e54703f.png"
						className="logo"
					/>
				</Link>

				<ul className="nav-links">
					<Link to="/">
						<li>
							<a>Home</a>
						</li>
					</Link>
					<Link to="/admin">
						<li>
							<a>{userStore.user && "Admin"}</a>
						</li>
					</Link>
					<Link to="/movies">
						<li>
							<a>Movies</a>
						</li>
					</Link>
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
