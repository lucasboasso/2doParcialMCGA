import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productos" component={Products} />
      </Switch>
  )
};

export default Routes;