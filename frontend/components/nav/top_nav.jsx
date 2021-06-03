import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar"
import DropDown from "./dropdown"

const TopNav = ({ currentUser, logout, openModal}) => {
  
  const login_button = () => (
    <nav className="login-signup">
      <button className="login-button" onClick={() => openModal("login")}>
        Sign In
      </button>
    </nav>
  );

  const dropdown_menu = () => (
    <DropDown user={currentUser} logout={logout} />
  )

  return (
    <nav className="top-nav">
      <Link to="/" className="home-link">
        <span className="home-logo">Printsy</span>
      </Link>

      <SearchBar /> 

      {currentUser ? dropdown_menu() : login_button()}

    </nav>
  );
};

export default TopNav;