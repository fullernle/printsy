import React from "react";
import {Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util"

import GreetingContainer from "./splash/greeting_container"
import TopNavContainer from "./nav/top_nav_container";
import Modal from "./modal/modal"
import Home from "./home/home"

const App = () => (
  <>
    <Modal />
    <header>
      <TopNavContainer />
    </header>

    {/* <section>
      <GreetingContainer />
    </section> */}

    <Switch>
      <ProtectedRoute exact path="/home" component={Home} />
      <Route exact path="/" component={GreetingContainer} />
      <Redirect to="/" />
    </Switch>

  </>
);

export default App;