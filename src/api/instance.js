import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default instance;
// REVIEW: Move this file into the store since we only make our api calls in the store
