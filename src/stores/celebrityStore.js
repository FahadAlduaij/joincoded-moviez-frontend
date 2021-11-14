import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";

// Stores
import instance from "../api/instance";
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
			const res = await instance.post("/celebrities", celebInfo);
			this.celebrities.push(res.data);
			toast.success("Created a Celebrity Successfully");
		} catch (error) {
			toast.warn("Something went wrong!");
			console.log(error);
		}
	};
}

const celebrityStore = new CelebrityStore();
celebrityStore.fetchCelebrities();
export default celebrityStore;
