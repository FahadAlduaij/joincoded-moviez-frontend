import { makeAutoObservable } from "mobx";
import instance from "../api/instance";
import userData from "./User";

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

	createMovie = async (movieInfo) => {
		try {
			if (!userData.user.isAdmin === true) {
				return console.log("You are not admin");
			} else {
				const formData = new FormData();
				for (const key in movieInfo) {
					formData.append(key, movieInfo[key]);
				}
				const res = await instance.post("", formData);
			}
		} catch (error) {
			console.log(error);
		}
	};
}

const movieData = new MovieData();
movieData.fetchMovies();
export default movieData;
