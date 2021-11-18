import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";

// Stores
import instance from "../stores/instance";

class GenreStore {
	constructor() {
		makeAutoObservable(this);
	}

	genres = [];

	// Fetch's
	fetchGenres = async () => {
		try {
			const res = await instance.get("/genres");
			runInAction(() => {
				this.genres = res.data;
			});
		} catch (error) {
			console.log(error);
		}
	};

	// Create Genre
	createGenre = async (newGenre) => {
		try {
			const res = await instance.post("/genres", newGenre);
			this.genres.push(res.data);
			toast.success("Created a Genre Successfully");
		} catch (error) {
			toast.warn("Something went wrong!");
			console.log(error);
		}
	};
}

const genreStore = new GenreStore();

genreStore.fetchGenres();

export default genreStore;
