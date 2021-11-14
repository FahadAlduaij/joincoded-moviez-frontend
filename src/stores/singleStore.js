// import instance from "../api/instance";
// import { makeAutoObservable } from "mobx";
// import { toast } from "react-toastify";

// class genreStore {
// 	constructor() {
// 		makeAutoObservable(this);
// 	}

// 	genres = [];
// 	celebrities = [];

// 	// Fetch's
// 	fetchGenres = async () => {
// 		try {
// 			const res = await instance.get("/genres");
// 			this.genres = res.data;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	fetchCelebrities = async () => {
// 		try {
// 			const res = await instance.get("/celebrities");
// 			this.celebrities = res.data;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	// Create Genre
// 	createGenre = async (newGenre) => {
// 		try {
// 			const res = await instance.post("/genres", newGenre);
// 			this.genres.push(res.data);
// 			toast.success("Created a Genre Successfully");
// 		} catch (error) {
// 			toast.warn("Something went wrong!");
// 			console.log(error);
// 		}
// 	};

// 	// Create Movie
// 	// createMovie = async (movieInfo) => {
// 	// 	try {
// 	// 		const formData = new FormData();
// 	// 		for (const key in movieInfo) {
// 	// 			formData.append(key, movieInfo[key]);
// 	// 		}
// 	// 		const res = await instance.post("/movies", formData);

// 	// 		res.data.genres.forEach((resGenre) => {
// 	// 			const genreToUpdate = this.genres.find(
// 	// 				(storeGenre) => storeGenre._id === resGenre._id
// 	// 			);
// 	// 			genreToUpdate.movies.push(res.data);
// 	// 		});

// 	// 		// res.data.celebrities.forEach((resCeleb) => {
// 	// 		// 	const celebToUpdate = this.genres.celebrities.find(
// 	// 		// 		(storeCeleb) => storeCeleb._id === resCeleb._id
// 	// 		// 	);
// 	// 		// 	celebToUpdate.movies.push(res.data);
// 	// 		// });
// 	// 		toast.success("Created a Movie Successfully");
// 	// 	} catch (error) {
// 	// 		toast.warn("Something Went wrong!");
// 	// 		console.log(error);
// 	// 	}
// 	// };

// 	// Greate Celebrity
// 	createCelebrity = async (celebInfo) => {
// 		try {
// 			const res = await instance.post("/celebrities", celebInfo);
// 			this.celebrities.push(res.data);
// 			toast.success("Created a Celebrity Successfully");
// 		} catch (error) {
// 			toast.warn("Something went wrong!");
// 			console.log(error);
// 		}
// 	};
// }

// const genreStore = new genreStore();

// genreStore.fetchGenres();
// genreStore.fetchCelebrities();

// export default genreStore;
