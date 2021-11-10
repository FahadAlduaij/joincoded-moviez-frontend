import instance from "../api/instance";
import { makeAutoObservable } from "mobx";

class SingleStore {
	constructor() {
		makeAutoObservable(this);
	}

	movies = [];
	genres = [];
	celebrities = [];

	// Fetch
	fetchMovies = async () => {
		try {
			const res = await instance.get("/movies");
			this.movies = res.data;
		} catch (error) {
			console.log(error);
		}
	};

	fetchGenres = async () => {
		try {
			const res = await instance.get("/genres");
			this.genres = res.data;
		} catch (error) {
			console.log(error);
		}
	};

	fetchCelebrities = async () => {
		try {
			const res = await instance.get("/celebrities");
			this.celebrities = res.data;
		} catch (error) {
			console.log(error);
		}
	};

	// Create
	createMovie = async (movieInfo) => {
		try {
			const formData = new FormData();
			for (const key in movieInfo) {
				formData.append(key, movieInfo[key]);
			}
			const res = await instance.post("/movies", formData);
			this.movies.push(res.data);


			//This below is a draft for testing later!!!!!!!!! We might make one store for all data!
			// res.data.genres.forEach((genreInMovie) => {
			//   const updateGenre = genreStore.genres.filter(
			//     (genre) => genre._id === genreInMovie._id
			//   );
			//   updateGenre.push(res.data);
			//   console.log(updateGenre);
			// });
		} catch (error) {
			console.log(error);
		}
	};

	createGenre = async (newGenre) => {
		try {
			const res = await instance.post("/genres", newGenre);
			this.genres.push(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	createCelebrity = async (celebInfo) => {
		try {
			const formData = new FormData();
			for (const key in celebInfo) {
				formData.append(key, celebInfo[key]);
			}
			const res = await instance.post("/celebrities", formData);
			this.celebrities.push(res.data);
		} catch (error) {
			console.log(error);
		}
	};
}

const singleStore = new SingleStore();
singleStore.fetchMovies();
singleStore.fetchGenres();
singleStore.fetchCelebrities();

export default singleStore;
