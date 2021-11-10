import { makeAutoObservable } from "mobx";
import instance from "../api/instance";

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
      //This below is a draft for testing later!!!!!!!!! We might make one store for all data!
      // res.data.genres.forEach((genreInMovie) => {
      //   const updateGenre = genreStore.genres.filter(
      //     (genre) => genre._id === genreInMovie._id
      //   );
      //   updateGenre.push(res.data);
      //   console.log(updateGenre);
      // });
      // REVIEW: You need to add the movie int he genre as well. We'll discuss this
    } catch (error) {
      console.log(error);
    }
  };
}

const movieStore = new MovieStore();
movieStore.fetchMovies();
export default movieStore;
