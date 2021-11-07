import decode from "jwt-decode";
import { makeObservable, observable, makeObservable, action } from "mobx";
import instance from "./instance";

class UserData {
	user = null;
	signed = false;

	constructor() {
		makeObservable(this, {
			user: observable,
			signIn: action,
			signUp: action,
			signOut: action,
		});
	}

	setUser = (token) => {
		try {
			localStorage.setItem("myToken", token);
			instance.defaults.headers.common.Authorization = `Bearer ${token}`;
			this.user = decode(token);
		} catch (error) {
			console.log(error);
		}
	};

	checkForToken = () => {
		const token = localStorage.getItem("myToken");
		if (token) {
			let tempUser = decode(token);
			if (tempUser.exp > Date.now()) {
				return this.setUser(token);
			} else {
				return this.signOut();
			}
		}
	};

	signIn = async (userInfo) => {
		try {
			const res = instance.post("/signin", userInfo);
			this.setUser(res.data.token);
			this.signed = true;
		} catch (error) {
			console.log(error);
		}
	};

	signUp = async (userInfo) => {
		try {
			const res = instance.post("/signup", userInfo);
			this.setUser(res.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	signOut = () => {
		delete instance.defaults.headers.common.Authorization;
		localStorage.removeItem("myToken");
		this.user = null;
		this.signed = false;
	};
}

const userData = new UserData();
userData.checkForToken();
export default userData;
