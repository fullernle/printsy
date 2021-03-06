import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../search/search_bar";
import DropDown from "./dropdown";

const NavBar = ({ currentUser, logout, openModal }) => {
  const login_button = () => (
    <nav className="login-signup">
      <button className="login nav-bttn" onClick={() => openModal("login")}>
        Sign In
      </button>
    </nav>
  );

  const requireLogin = () => {
    openModal("requireLogin");
  };

  const cart_button = () => {
    if (currentUser) {
      return (
        <NavLink className="cart nav-bttn" to={`/carts/${currentUser.id}`}>
          <i className="fas fa-shopping-cart"></i>
        </NavLink>
      );
    } else {
      return (
        <button className="cart nav-bttn" onClick={requireLogin}>
          <i className="fas fa-shopping-cart"></i>
        </button>
      );
    }
  };

  const dropdown_menu = () => <DropDown user={currentUser} logout={logout} />;

  return (
    <nav className="nav-bottom-border">
      <nav className="nav-wrapper">
        <nav className="top-nav">
          <Link to="/" className="home-link">
            <span className="home-logo">Printsy</span>
          </Link>
          <SearchBar />

          {currentUser ? dropdown_menu() : login_button()}
          {cart_button()}
          <a className="nav-links" href="https://github.com/fullernle/printsy">
            <i className="fab fa-github"></i>
          </a>

          <a className="nav-links" href="https://linkedin.com/in/fullernle">
            <i className="fab fa-linkedin"></i>
          </a>
        </nav>

        <nav className="bottom-nav">
          <NavLink
            activeClassName="active-link"
            className="bottom-nav-link"
            to="/categories/2"
          >
            <div className="border-underline"></div>
            Fashion
          </NavLink>

          <NavLink
            activeClassName="active-link"
            className="bottom-nav-link"
            to="/categories/3"
          >
            <div className="border-underline"></div>
            Games
          </NavLink>

          <NavLink
            activeClassName="active-link"
            className="bottom-nav-link"
            to="/categories/4"
          >
            <div className="border-underline"></div>
            Home
          </NavLink>

          <NavLink
            activeClassName="active-link"
            className="bottom-nav-link"
            to="/categories/1"
          >
            <div className="border-underline"></div>
            Accesories
          </NavLink>

          <NavLink
            activeClassName="active-link"
            className="bottom-nav-link"
            to="/categories/5"
          >
            <div className="border-underline"></div>
            Toys
          </NavLink>

          <NavLink
            activeClassName="active-link"
            className="bottom-nav-link"
            to="/categories/6"
          >
            <div className="border-underline"></div>
            Entertainment
          </NavLink>

          <NavLink
            activeClassName="active-link"
            className="bottom-nav-link"
            to="/categories/7"
          >
            <div className="border-underline"></div>
            Art
          </NavLink>

          <NavLink
            activeClassName="active-link"
            className="bottom-nav-link"
            to="/categories/8"
          >
            <div className="border-underline"></div>
            Tools
          </NavLink>
        </nav>
      </nav>
    </nav>
  );
};

export default NavBar;
