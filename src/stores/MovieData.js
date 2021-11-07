import { makeAutoObservable } from "mobx";
import instance from "../api/instance";

class MovieData {
	constructor() {
		makeAutoObservable(this);
	}

	movies = [];

	fetchMovies = async () => {
		try {
			const res = await instance.get("/movies");
			this.movies = res.data;
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};
}

const movieData = new MovieData();
movieData.fetchMovies();
export default movieData;
