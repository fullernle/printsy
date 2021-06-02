import React from "react";
import {Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util"

import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal"
import Home from "./home/home"

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
        <h3>Printsy</h3>
      </Link>
      <GreetingContainer />
    </header>

    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>

  </div>
);

export default App;