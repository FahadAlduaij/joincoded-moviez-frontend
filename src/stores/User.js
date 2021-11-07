import decode from "jwt-decode";
import { action, makeObservable, observable } from "mobx";
import instance from "../api/instance";

class UserData {
	user = null;
	signed = false;

	constructor() {
		makeObservable(this, {
			user: observable,
			signed: observable,
			signIn: action,
			signUp: action,
			signOut: action,
		});
	}


	setUser = (token) => {
		localStorage.setItem("myToken", token);
		instance.defaults.headers.common.Authorization = `Bearer ${token}`;
		this.user = decode(token);
	};

	checkForToken = () => {
		const token = localStorage.getItem("myToken");
		if (token) {
			let tempUser = decode(token);
			if (tempUser.exp > Date.now()) {
				this.signed = true
				return this.setUser(token);
			} else {
				this.signed = false
				return this.signOut();
			}
		}
	};

	signIn = async (userInfo) => {
		try {
			const res = await instance.post("/user/signin", userInfo);
			this.setUser(res.data.token);
			this.signed = true;
			console.log(res.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	signUp = async (userInfo) => {
		try {
			const res = await instance.post("/user/signup", userInfo);
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
