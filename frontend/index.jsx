import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { login, logout, signup } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, root);

  window.store = store;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
});

