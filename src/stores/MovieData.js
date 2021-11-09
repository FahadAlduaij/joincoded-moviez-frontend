import { makeAutoObservable } from "mobx";
import instance from "../api/instance";
import userData from "./User";

// REVIEW: Bad file naming. File should be called movieStore

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
      // REVIEW: userStore or authStore not userData :)
      // REVIEW: This checking should not be in the store, you should check before triggering the createMovie function
      if (!userData.user.admin) {
        return console.log("You are not admin");
      } else {
        const formData = new FormData();
        for (const key in movieInfo) {
          formData.append(key, movieInfo[key]);
        }
        const res = await instance.post("/movies", formData);
        this.movies.push(res.data);
        // REVIEW: You need to add the movie int he genre as well. We'll discuss this
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const movieData = new MovieData();
movieData.fetchMovies();
export default movieData;
