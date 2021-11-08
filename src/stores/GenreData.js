import instance from "../api/instance";
import { makeAutoObservable } from "mobx";

class GenreData {

    constructor() {
        makeAutoObservable(this);
    }



    genres = [];

    fetchGenres = async () => {
        try {
            const res = await instance.get("/genres");
            this.genres = res.data;
        } catch (error) {
            console.log(error)
        }
    }


}

const genreData = new GenreData();
genreData.fetchGenres();
export default genreData;