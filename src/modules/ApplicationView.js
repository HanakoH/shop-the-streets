import React from 'react';
import { Route, Redirect, Switch} from "react-router-dom"
import { UserDashboard } from "./fullViews/UserDashboard";
import { LandingPage } from "./fullViews/LandingPage";
import { Login } from "./fullViews/Login";
import { Register } from "./fullViews/Register";
import FoodTrucks from './fullViews/FoodTrucks';
import StreetVendors from "./fullViews/StreetVendors";
import MobileServices from './fullViews/MobileServices';

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
      <Route exact path="/food-trucks">
        <FoodTrucks />
      </Route>
      <Route exact path="/street-vendors">
        <StreetVendors />
      </Route>
      <Route exact path="/mobile-services">
        <MobileServices />
      </Route>
      <Route exact path="/dashboard">
        {activeUser ? <UserDashboard /> : <Redirect to="LandingPage" /> }
      </Route>
    </Switch>
  )  
}