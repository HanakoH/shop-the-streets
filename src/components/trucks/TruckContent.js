import React from "react";
import { TruckCard } from "./TruckCard";
import { Grid } from "@material-ui/core";

export const FoodTrucksContent = ({trucks}) => {
    const getFoodTruckCard = foodTruckObj => {
        if (foodTruckObj.truckTypeId === 1 ){
            return (
            <Grid item xs={12} sm={6} md={4}>
                <TruckCard {...foodTruckObj} />
            </Grid>
            );
        }
    };

    return (
        <Grid container spacing={2}>
        {trucks.map(foodTruckObj => 
            getFoodTruckCard(foodTruckObj))}
        </Grid>
    );
};

export const StreetVendorsContent = ({trucks}) => {
    const getStreetVendorCard = streetVendorObj => {
        if (streetVendorObj.truckTypeId === 2 ){
        return (
        <Grid item xs={12} sm={6} md={4}>
            <TruckCard {...streetVendorObj} />
        </Grid>
        );
        }
    };

    return (
        <Grid container spacing={2}>
            {trucks.map(streetVendorObj => 
            getStreetVendorCard(streetVendorObj))}
        </Grid>
    );
};

export const MobileServicesContent = ({trucks}) => {
    const getMobileServicesCard = mobileServicesObj => {
        if (mobileServicesObj.truckTypeId === 3 ){
            return (
            <Grid item xs={12} sm={6} md={4}>
                <TruckCard {...mobileServicesObj} />
            </Grid>
            );
        }
    };

    return (
        <Grid container spacing={2}>
        {trucks.map(mobileServicesObj => 
            getMobileServicesCard(mobileServicesObj))}
        </Grid>
    );
};

export const LovedTrucksContent = ({userSellers}) => {
    const getLovedTrucksCard = lovedTrucksObj => {
        if (lovedTrucksObj.checked){
            return (
            <Grid item xs={12} sm={6} md={4}>
                <TruckCard {...lovedTrucksObj.seller}/>
            </Grid>
            );
        }
    };

    return (
        <Grid container spacing={2}>
        {userSellers.map(lovedTrucksObj => 
            getLovedTrucksCard(lovedTrucksObj))}
        </Grid>
    );
};