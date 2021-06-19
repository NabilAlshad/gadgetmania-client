import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./Login.css";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        const { displayName, email } = user;
        const signedInUser = { name: displayName, email: email };
        console.log(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <div style={{ margin: "100px" }} className="col-md-3">
      <button className="btn btn-success" onClick={handleSignIn}>
        Sign in With google
      </button>
    </div>
  );
};

export default Login;
