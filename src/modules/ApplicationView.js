import React from 'react';
import { Route, Redirect, Switch} from "react-router-dom"
import { UserDashboard } from "./views/UserDashboard";
import { LandingPage } from "./views/LandingPage";
import { Login } from "./views/Login";
import { Register } from "./views/Register";

export const ApplicationView = () => {
  const activeUser = sessionStorage.getItem("activeUser")

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/dashboard">
        {activeUser ? <UserDashboard /> : <Redirect to="LandingPage" /> }
      </Route>
    </Switch>
  )  
}