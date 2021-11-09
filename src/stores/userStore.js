import decode from "jwt-decode";
import { action, makeObservable, observable } from "mobx";
import instance from "../api/instance";

class UserStore {
	constructor() {
		makeObservable(this, {
			user: observable,
			setUser: action,
			signIn: action,
			signUp: action,
			signOut: action,
		});
	}

	user = null;

	setUser = (token) => {
		localStorage.setItem("myToken", token);
		instance.defaults.headers.common.Authorization = `Bearer ${token}`;
		this.user = decode(token);
	};

	checkForToken = () => {
		const token = localStorage.getItem("myToken");
		if (token) {
			const tempUser = decode(token);
			const time = tempUser.exp * 1000;
			if (time > Date.now()) {
				return this.setUser(token);
			} else {
				return this.signOut();
			}
		}
	};

	signIn = async (userInfo) => {
		try {
			const res = await instance.post("/signin", userInfo);
			this.setUser(res.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	signUp = async (userInfo) => {
		try {
			const res = await instance.post("/signup", userInfo);
			this.setUser(res.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	signOut = () => {
		delete instance.defaults.headers.common.Authorization;
		localStorage.removeItem("myToken");
		this.user = null;
	};
}

const userStore = new UserStore();
userStore.checkForToken();
export default userStore;
