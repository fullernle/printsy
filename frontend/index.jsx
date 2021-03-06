import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { login, logout, signup } from "./actions/session_actions";
import { fetchCart } from "./actions/cart_action";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { currentUserId: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    store.dispatch(fetchCart(window.currentUser.id));
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);

  window.store = store;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
});
