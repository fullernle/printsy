import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar"
import DropDown from "./dropdown"

const TopNav = ({ currentUser, logout, openModal}) => {
  const loggedout = () => (
    <nav className="login-signup">
      <button className="login-button" onClick={() => openModal("login")}>
        Sign In
      </button>
    </nav>
  );


  // return currentUser ? personalGreeting() : sessionLinks();

  // const loggedin = () => (
  //   <button className="header-button" onClick={logout}>
  //         Log Out
  //   </button>
  // )

  const loggedin = () => (
    <DropDown user={currentUser} logout={logout} />
  )

  return (
    <nav className="top-nav">
      <Link to="/" className="home-link">
        <span className="home-logo">Printsy</span>
      </Link>

      <SearchBar /> 

      {currentUser ? loggedin() : loggedout()}

    </nav>
  );
};

export default TopNav;