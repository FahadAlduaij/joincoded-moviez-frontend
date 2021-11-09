import React from "react";
import { observer } from "mobx-react";
import { Navigate } from "react-router-dom";
//Stores Import
import userStore from "../stores/userStore";
import CelebrityModal from "./CelebrityModal";
const AdminPage = () => {
	if (!userStore.user || !userStore.user.admin) return <Navigate to="/" />;

	return (
		<div>
			<div></div>
			<div>
				{/* <MovieModal /> */}
				{/* <GenreModal /> */}
				<CelebrityModal />
			</div>
		</div>
	);
};

export default observer(AdminPage);
