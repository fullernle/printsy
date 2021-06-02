import React from "react";
import {Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util"

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./auth/login_form_container";
import SignupFormContainer from "./auth/signup_form_container";
import Home from "./home/home"

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Printsy</h1>
      </Link>
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} /> 
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={Home} />
    </Switch>

  </div>
);

export default App;