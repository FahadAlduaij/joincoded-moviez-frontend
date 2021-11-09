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

const celebrityStore = new CelebrityStore();
celebrityStore.fetchCelebrities();
export default celebrityStore;
