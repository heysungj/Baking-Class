import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="authPageContainer">
      {showSignUp ? (
        <h1 className="lobster">Sign Up Page</h1>
      ) : (
        <h1 className="lobster">Log In Page</h1>
      )}

      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}

      <button
        className="btn btn-warning btn-lg"
        onClick={() => setShowSignUp(!showSignUp)}
      >
        {showSignUp ? "Existing User Log In" : "New User Sign Up"}
      </button>
    </main>
  );
}
