import instance from "../api/instance";
import { makeAutoObservable } from "mobx";

class CelebrityStore {
  constructor() {
    makeAutoObservable(this);
  }

  celebrities = [];

  fetchCelebrities = async () => {
    try {
      const res = await instance.get("/celebrities");
      this.celebrities = res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const celebrityStore = new CelebrityStore();
celebrityStore.fetchGenres();
export default celebrityStore;
