import decode from "jwt-decode";
import { action, makeObservable, observable } from "mobx";
import instance from "./instance";
import { toast } from "react-toastify";

class UserStore {
	constructor() {
		makeObservable(this, {
			user: observable,
			isUserAdmin: observable,
			setUser: action,
			signIn: action,
			signUp: action,
			signOut: action,
			checkRole: action,
		});
	}

	// To check if the user is admin.
	isUserAdmin = false;
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

	checkRole = () => {
		const token = localStorage.getItem("myToken");
		if (token) {
			const tempUser = decode(token);
			if (tempUser.admin) {
				this.isUserAdmin = true;
			} else {
				this.isUserAdmin = false;
			}
		}
	};

	signIn = async (userInfo) => {
		try {
			const res = await instance.post("/signin", userInfo);
			this.setUser(res.data.token);
			toast.success(`Welcome ${this.user.username}`);
		} catch (error) {
			console.log(error);
			toast.warn("Your username or password is wrong.");
		}
	};

	signUp = async (userInfo) => {
		try {
			const res = await instance.post("/signup", userInfo);
			this.setUser(res.data.token);
			toast.success(`Welcome ${this.user.username}`);
		} catch (error) {
			console.log(error);
			toast.warn("Try again please.");
		}
	};

	signOut = () => {
		delete instance.defaults.headers.common.Authorization;
		localStorage.removeItem("myToken");
		this.user = null;
		this.isUserAdmin = false;
	};
}

const userStore = new UserStore();
userStore.checkForToken();
export default userStore;
