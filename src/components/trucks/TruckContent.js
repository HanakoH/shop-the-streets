import React from "react";
import { TruckCard } from "./TruckCard";
import { Grid } from "@material-ui/core";


export const FoodTrucksContent = ({trucks, userSellers}) => {

    const getFoodTruckCard = (foodTruckObj) => {
        
        if (foodTruckObj.truckTypeId === 1 ){
            
            const foundUserSeller = userSellers.find(userSeller => {
                if (userSeller.sellerId === foodTruckObj.id) {
                    return userSeller
                    }
                }) 

            if (foundUserSeller) {
                return (
                <Grid item xs={12} sm={6} md={4}>
                    <TruckCard {...foodTruckObj} check={true} userSellerId={foundUserSeller.id}/>
                </Grid>
                );
            } else {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <TruckCard {...foodTruckObj} check={false} />
                    </Grid>
                    );
            }
        }
    };

    return (
        <Grid container spacing={2}>
        {trucks.map(foodTruckObj => 
            getFoodTruckCard(foodTruckObj))}
        </Grid>
    );
};

export const StreetVendorsContent = ({trucks, userSellers}) => {
    const getStreetVendorCard = (streetVendorObj) => {

        if (streetVendorObj.truckTypeId === 2 ){
            
            const foundUserSeller = userSellers.find(userSeller => {
                if (userSeller.sellerId === streetVendorObj.id) {
                    return userSeller
                    }
                }) 

            if (foundUserSeller) {
                return (
                <Grid item xs={12} sm={6} md={4}>
                    <TruckCard {...streetVendorObj} check={true} userSellerId={foundUserSeller.id}/>
                </Grid>
                );
            } else {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <TruckCard {...streetVendorObj} check={false} />
                    </Grid>
                    );
            }
        }
    };

    return (
        <Grid container spacing={2}>
            {trucks.map(streetVendorObj => 
            getStreetVendorCard(streetVendorObj))}
        </Grid>
    );
};

export const MobileServicesContent = ({trucks, userSellers}) => {
    const getMobileServicesCard = (mobileServicesObj) => {
        if (mobileServicesObj.truckTypeId === 3 ){
            
            const foundUserSeller = userSellers.find(userSeller => {
                if (userSeller.sellerId === mobileServicesObj.id) {
                    return userSeller
                    }
                }) 

            if (foundUserSeller) {
                return (
                <Grid item xs={12} sm={6} md={4}>
                    <TruckCard {...mobileServicesObj} check={true} userSellerId={foundUserSeller.id}/>
                </Grid>
                );
            } else {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <TruckCard {...mobileServicesObj} check={false} />
                    </Grid>
                    );
            }
        }
    };

    return (
        <Grid container spacing={2}>
        {trucks.map(mobileServicesObj => 
            getMobileServicesCard(mobileServicesObj))}
        </Grid>
    );
};

export const LovedTrucksContent = ({trucks, userSellers}) => {
    const getLovedTrucksCard = (lovedTrucksObj) => {

        const foundUserSeller = userSellers.find(userSeller => {
            if (userSeller.sellerId === lovedTrucksObj.id) {
                return userSeller
                }
            }) 

        if (foundUserSeller) {
            return (
            <Grid item xs={12} sm={6} md={4}>
                <TruckCard {...lovedTrucksObj} check={true} userSellerId={foundUserSeller.id}/>
            </Grid>
            );
        }
    };

    return (
        <Grid container spacing={2}>
        {trucks.map(lovedTrucksObj => 
            getLovedTrucksCard(lovedTrucksObj))}
        </Grid>
    );
};