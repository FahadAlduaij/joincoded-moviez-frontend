import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";

// Stores
import instance from "./instance";

class MovieStore {
	constructor() {
		makeAutoObservable(this);
	}

	movies = [];

	fetchMovies = async () => {
		try {
			const res = await instance.get("/movies");
			runInAction(() => {
				this.movies = res.data;
			});
		} catch (error) {
			console.log(error);
		}
	};

	createMovie = async (movieInfo, genres, celebrities) => {
		try {
			const formData = new FormData();
			for (const key in movieInfo) {
				formData.append(key, movieInfo[key]);
			}
			const res = await instance.post("/movies", formData);
			this.movies.push(res.data);

			res.data.genres.forEach((resGenre) => {
				const genreToUpdate = genres.find(
					(storeGenre) => storeGenre._id === resGenre._id
				);
				genreToUpdate.movies.push(res.data);
			});

			res.data.celebrities.forEach((resCeleb) => {
				const celebToUpdate = celebrities.find(
					(storeCeleb) => storeCeleb._id === resCeleb._id
				);
				celebToUpdate.movies.push(res.data);
			});

			toast.success("Movie Created");
		} catch (error) {
			toast.warn("Something Went wrong!");
			console.log(error);
		}
	};

	deleteMovie = async (movie, genres) => {
		try {
			await instance.delete(`/movies/${movie._id}`);
			genres.forEach((genreMovie) => {
				const updatedGenre = genreMovie.movies.filter(
					(_movie) => _movie._id !== movie._id
				);

				genreMovie.movies = updatedGenre;
			});
			runInAction(() => {
				this.movies = this.movies.filter((_movie) => _movie._id !== movie._id);
			});
			toast.error("Movie Deleted");
		} catch (error) {
			console.error(error);
			toast.warn("Something Went wrong!");
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
			runInAction(() => {
				upDateMovie.comments.push(res.data);
				upDateMovie.comments.reverse();
			});

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
