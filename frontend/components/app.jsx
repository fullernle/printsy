import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import CategoryContainer from "./category/category_container";
import SplashContainer from "./splash/splash_container";
import TopNavContainer from "./nav/top_nav_container";
import CartContainer from "./cart/cart_container";
import Modal from "./modal/modal";
import ProductContainer from "./product/product_container";

const App = () => (
  <>
    <Modal />
    <header>
      <TopNavContainer />
    </header>

    <Switch>
			<ProtectedRoute path="/carts/:id" component={CartContainer} />
      <Route path="/categories/:id" component={CategoryContainer} />
      <Route path="/products/:id" component={ProductContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
