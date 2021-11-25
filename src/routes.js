import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import MainLayout from "./components/MainLayout/MainLayout"

const Routes = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productos" component={Products} />
      </Switch>
    </MainLayout>
  )
};

export default Routes;