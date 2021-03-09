import React, { useEffect, useContext } from 'react';
import { Redirect, Route, Switch} from "react-router-dom";
import LovedTrucks from "./trucks/LovedTrucks";
import AppBarNav from './containers/AppBarNav';
import LandingPageHero from './containers/LandingPageHero';
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import FoodTrucks from './trucks/FoodTrucks';
import StreetVendors from "./trucks/StreetVendors";
import MobileServices from './trucks/MobileServices';
import { TruckContext } from './trucks/TruckProvider';
import { UserSellerContext } from './trucks/UserSellerProvider';

export const ApplicationView = () => {
  const activeUser = +sessionStorage.getItem("activeUser")
  const {trucks, fetchTrucks} = useContext(TruckContext)
  const {userSellers, getUserSellers} = useContext(UserSellerContext)

  useEffect(() => {
    fetchTrucks()
    .then(getUserSellers)
  }, [])

  return (
    <Switch>
      <Route exact path="/"
        render={() => {
          if (activeUser) {
            return (
              <LovedTrucks trucks={trucks} userSellers={userSellers}/>
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
        <FoodTrucks trucks={trucks} userSellers={userSellers}/>
      </Route>
      <Route exact path="/street-vendors">
        <StreetVendors trucks={trucks} userSellers={userSellers}/>
      </Route>
      <Route exact path="/mobile-services">
        <MobileServices trucks={trucks} userSellers={userSellers}/>
      </Route>
    </Switch>
  )  
}