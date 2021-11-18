import React from "react";
import { observer } from "mobx-react";
import { Navigate } from "react-router-dom";

// Components
import CelebrityModal from "./CelebrityModal";
import GenreModal from "./GenreModal";
import MovieModal from "./MovieModal";

// Stores
import userStore from "../../stores/userStore";

const AdminPage = () => {
	if (!userStore.user || !userStore.user.admin) return <Navigate to="/" />;

	return (
		<div>
			<h1 className="header-title">Admin</h1>
			<p className="header-p">Do Your Job and Create New Movies...!</p>
			<div className="adminContainer">
				<MovieModal />
				<GenreModal />
				<CelebrityModal />
			</div>
		</div>
	);
};

export default observer(AdminPage);
