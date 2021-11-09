import decode from "jwt-decode";
import { action, makeObservable, observable } from "mobx";
import instance from "../api/instance";

// REVIEW: Bad file naming. File should be called userStore or authStore

class UserData {
  constructor() {
    // REVIEW: Why not use makeAutoObservable?
    makeObservable(this, {
      user: observable,
      signed: observable,
      signIn: action,
      signUp: action,
      signOut: action,
    });
  }

  user = null;
  signed = false;
  // REVIEW: You don't need `signed`. When `user` is `null` it's false, so user is not logged in. When it has a user object, it's true so user is logged in.

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      // REVIEW: const not let :)
      let tempUser = decode(token);
      const time = tempUser.exp * 1000;
      if (time > Date.now()) {
        this.signed = true;
        return this.setUser(token);
      } else {
        this.signed = false;
        return this.signOut();
      }
    }
  };

  signIn = async (userInfo) => {
    try {
      const res = await instance.post("/user/signin", userInfo);
      this.setUser(res.data.token);
      this.signed = true;
    } catch (error) {
      console.log(error);
    }
  };

  signUp = async (userInfo) => {
    try {
      const res = await instance.post("/user/signup", userInfo);
      this.setUser(res.data.token);
      this.signed = true;
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
