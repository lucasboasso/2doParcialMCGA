import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import MainLayout from "./components/MainLayout/MainLayout"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


const Routes = () => {
  return (
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productos" component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </MainLayout>
  )
};

export default Routes;