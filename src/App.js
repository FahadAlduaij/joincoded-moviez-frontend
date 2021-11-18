import "./App.css";
import { Route, Routes } from "react-router";

// Components
import NavBar from "./components/NavBar";
import HomePage from "./components/Home/HomePage";
import MovieList from "./components/Movies/MovieList";
import MovieDetails from "./components/Movies/MovieDetails";
import AdminPage from "./components/Admin/AdminPage";
import GenreDetails from "./components/GenreDetails";
import CelebrityDetail from "./components/CelebrityDetail";

function App() {
	return (
		<div className="container">
			<NavBar />

			<Routes>
				<Route path="/movies/:movieSlug" element={<MovieDetails />} />
				<Route path="/genres/:genreSlug" element={<GenreDetails />} />
				<Route path="celebrities/:celebSlug" element={<CelebrityDetail />} />
				<Route path="/movies" element={<MovieList />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
