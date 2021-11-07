import "./App.css";
import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import HomePage from "./components/HomePage";
import Sign from "./components/Sign";

function App() {
	return (
		<div>
			<NavBar />
			<Container>
				<Routes>
					<Route path="/user/signin" element={<Sign />} />
					<Route path="/movies" element={<MovieList />} />
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
