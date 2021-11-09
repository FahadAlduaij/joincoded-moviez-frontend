import instance from "../api/instance";
import { makeAutoObservable } from "mobx";

class GenreStore {
	constructor() {
		makeAutoObservable(this);
	}

	genres = [];

	fetchGenres = async () => {
		try {
			const res = await instance.get("/genres");
			this.genres = res.data;
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
}

const genreStore = new GenreStore();
genreStore.fetchGenres();
export default genreStore;
