import instance from "../api/instance";
import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";

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
      // const formData = new FormData();
      // for (const key in movieInfo) {
      // 	formData.append(key, movieInfo[key]);
      // }
      const res = await instance.post("/movies", movieInfo);
      this.movies.push(res.data);

      res.data.genres.forEach((resGenre) => {
        const genreToUpdate = this.genres.find(
          (storeGenre) => storeGenre._id === resGenre._id
        );
        genreToUpdate.movies.push(res.data);
      });

      res.data.celebrities.forEach((resCeleb) => {
        const celebToUpdate = this.celebrities.find(
          (storeCeleb) => storeCeleb._id === resCeleb._id
        );
        celebToUpdate.movies.push(res.data);
      });
      toast.success("Created a Movie Successfully");
    } catch (error) {
      toast.warn("Something went wrong!");
      console.log(error);
    }
  };

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

  createCelebrity = async (celebInfo) => {
    try {
      const res = await instance.post("/celebrities", celebInfo);
      this.celebrities.push(res.data);
      toast.success("Created a Celebrity Successfully");
    } catch (error) {
      toast.warn("Something went wrong!");
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

      toast.warn("Comment Sent Successfully!");
    } catch (error) {
      toast.warn("Something went wrong!");
      console.log(error);
    }
  };
}

const singleStore = new SingleStore();
singleStore.fetchMovies();
singleStore.fetchGenres();
singleStore.fetchCelebrities();

export default singleStore;
