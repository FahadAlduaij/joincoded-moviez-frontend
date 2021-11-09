import { makeAutoObservable } from "mobx";
import instance from "../api/instance";
import userStore from "./userStore";

class MovieStore {
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

	createMovie = async (movieInfo) => {
		try {
			const formData = new FormData();
			for (const key in movieInfo) {
				formData.append(key, movieInfo[key]);
			}
			const res = await instance.post("/movies", formData);
			this.movies.push(res.data);
			// REVIEW: You need to add the movie int he genre as well. We'll discuss this
		} catch (error) {
			console.log(error);
		}
	};
}

const movieStore = new MovieStore();
movieStore.fetchMovies();
export default movieStore;
