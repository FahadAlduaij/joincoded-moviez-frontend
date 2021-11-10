import React from "react";
import { useState } from "react";
import { observer } from "mobx-react-lite";

// Components
import SignIn from "./SignIn";
import SignUp from "./SignUp";

// Stores
import userData from "../stores/userStore";

function Sign() {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [showCreateNewUser, setShowCreateNewUser] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const handleChange = (event) =>
    setData({ ...data, [event.target.name]: event.target.value });

  const showSignUp = (event) => {
    event.preventDefault();
    setShow(true);
    setShowCreateNewUser(true);
  };

  const showSignIn = (event) => {
    event.preventDefault();
    setShowCreateNewUser(false);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    userData.signIn(data);
    setShowCreateNewUser(false);
    handleClose();
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    userData.signUp(data);
    setShowCreateNewUser(false);
    handleClose();
  };

  return (
    <div>
      <button className="sigin-up-btn" onClick={showSignUp}>
        Sign Up
      </button>

      {showCreateNewUser ? (
        <SignUp
          show={show}
          data={data}
          handleChange={handleChange}
          handleClose={handleClose}
          handleSignUp={handleSignUp}
          showSignUp={showSignUp}
          showSignIn={showSignIn}
        />
      ) : (
        <SignIn
          show={show}
          data={data}
          handleChange={handleChange}
          handleClose={handleClose}
          handleSignIn={handleSignIn}
          showSignUp={showSignUp}
          showSignIn={showSignIn}
        />
      )}
    </div>
  );
}

export default observer(Sign);
