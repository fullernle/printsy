import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="login-button" onClick={() => openModal("login")}>
        Login
      </button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">
        Welcome to Printsy,{" "}
        {currentUser.username.charAt(0).toUpperCase() +
          currentUser.username.slice(1)}
        !
      </h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
