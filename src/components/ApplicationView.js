import React, { useEffect, useContext } from 'react';
import { Redirect, Route, Switch} from "react-router-dom";
import LovedTrucks from "./trucks/LovedTrucks";
import AppBarNav from './modules/AppBarNav';
import LandingPageHero from './modules/LandingPageHero';
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import FoodTrucks from './trucks/FoodTrucks';
import StreetVendors from "./trucks/StreetVendors";
import MobileServices from './trucks/MobileServices';
import { TruckContext } from './trucks/TruckProvider';

export const ApplicationView = () => {
  const activeUser = +sessionStorage.getItem("activeUser")
  const {trucks, fetchTrucks} = useContext(TruckContext)

  useEffect(() => {
    fetchTrucks()
  }, [])


  return (
    <Switch>
      <Route exact path="/"
        render={() => {
          if (activeUser) {
            return (
                <LovedTrucks activeUser={activeUser}/>
              );
            } else {
              return (
                <>
                  <AppBarNav />
                  <LandingPageHero />  
                </>
              )    
          }
        }}
      />
      <Route exact path="/login"
        render={() => {
          if (!activeUser) {
            return (
              <Login />
            );
          } else {
            return <Redirect to="/" />
          }
        }}
      />
      <Route exact path="/register"render={() => {
          if (!activeUser) {
            return (
              <Register />
            );
          } else {
            return <Redirect to="/" />
          }
        }}
      />
      <Route exact path="/food-trucks">
        <FoodTrucks trucks={trucks}/>
      </Route>
      <Route exact path="/street-vendors">
        <StreetVendors trucks={trucks}/>
      </Route>
      <Route exact path="/mobile-services">
        <MobileServices trucks={trucks}/>
      </Route>
    </Switch>
  )  
}