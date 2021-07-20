import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import CategoryContainer from "./category/category_container";
import SplashContainer from "./splash/splash_container";
import CartContainer from "./cart/cart_container";
import Modal from "./modal/modal";
import ProductContainer from "./product/product_container";
import NavBarContainer from "./nav/nav_bar_container";
import SearchResultContainer from "./search/search_results_container";

const App = () => (
  <>
    <Modal />
    <header>
      <NavBarContainer />
    </header>

    <Switch>
      <ProtectedRoute path="/carts/:id" component={CartContainer} />
      <Route path="/categories/:id" component={CategoryContainer} />
      <Route path='/search/query=":query"'component={SearchResultContainer} />
      <Route path="/products/:id" component={ProductContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
