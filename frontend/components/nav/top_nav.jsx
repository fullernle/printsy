import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar"

const TopNav = ({ currentUser, logout, openModal}) => {
  const loggedout = () => (
    <nav className="login-signup">
      <button className="login-button" onClick={() => openModal("login")}>
        Login
      </button>
    </nav>
  );


  // return currentUser ? personalGreeting() : sessionLinks();

  const loggedin = () => (
    <button className="header-button" onClick={logout}>
          Log Out
    </button>
  )

  return (
    <nav className="top-nav-wrapper">
      <Link to="/" className="home-logo">
        <h3>Printsy</h3>
      </Link>

      <SearchBar /> 

      {currentUser ? loggedin() : loggedout()}

    </nav>
  );
};

export default TopNav;