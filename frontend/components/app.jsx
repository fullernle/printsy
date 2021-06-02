import React from "react";
import {Route, Redirect, Switch, Link } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./auth/login_form_container";
import SignupFormContainer from "./auth/signup_form_container";
import HomeContainer from "./home/home_container"

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Printsy</h1>
      </Link>
      <GreetingContainer />
    </header>

    <Switch>
      <Route exact path="/login" component={LoginFormContainer} /> 
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={HomeContainer} />
    </Switch>

  </div>
);

export default App;