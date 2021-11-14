import { makeAutoObservable } from "mobx";
import instance from "../api/instance";
import { toast } from "react-toastify";

class MovieStore {
	constructor() {
		makeAutoObservable(this);
	}

	movies = [];

	fetchMovies = async () => {
		try {
			const res = await instance.get("/movies");
			this.movies = res.data;
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

			// res.data.genres.forEach((resGenre) => {
			// 	const genreToUpdate = this.genres.find(
			// 		(storeGenre) => storeGenre._id === resGenre._id
			// 	);
			// 	genreToUpdate.movies.push(res.data);
			// });

			// res.data.celebrities.forEach((resCeleb) => {
			// 	const celebToUpdate = this.genres.celebrities.find(
			// 		(storeCeleb) => storeCeleb._id === resCeleb._id
			// 	);
			// 	celebToUpdate.movies.push(res.data);
			// });

			toast.success("Created a Movie Successfully");
		} catch (error) {
			toast.warn("Something Went wrong!");
			console.log(error);
		}
	};

	//Comments on Movies
	createCommentForMovie = async (movieId, commentInfo) => {
		try {
			const upDateMovie = this.movies.find((movie) => movie._id === movieId);
			const res = await instance.post(
				`/movies/${movieId}/comments`,
				commentInfo
			);
			console.log("before", upDateMovie);
			upDateMovie.comments.push(res.data);
			console.log("after", upDateMovie);

			toast.success("Comment Sent Successfully!");
		} catch (error) {
			toast.warn("Something went wrong!");
			console.log(error);
		}
	};
}

const movieStore = new MovieStore();
movieStore.fetchMovies();
export default movieStore;
