import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/details/:id" component={ItemDetails} />
    <Redirect to="/not-found" />
  </Switch>
);
