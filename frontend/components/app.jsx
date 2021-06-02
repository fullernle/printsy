import React from "react";
import {Route, Redirect, Switch, Link } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./auth/login_form_container";
import SignupFormContainer from "./auth/signup_form_container";


const App = () => (
  <div>
    <header>
      <h1>Printsy</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} /> 
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;