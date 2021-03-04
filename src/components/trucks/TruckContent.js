import React, { useEffect } from "react";
import { TruckCard } from "./TruckCard";
import { Grid } from "@material-ui/core";


export const FoodTrucksContent = ({trucks, userSellers}) => {
    
    // useEffect(() => {
    //     const sellers = userSellers
    //  }, [])

    const getFoodTruckCard = foodTruckObj => {
        const sellers = userSellers
        if (foodTruckObj.truckTypeId === 1 ){
            const foundUserSeller = sellers.find(userSeller => userSeller.sellerId === foodTruckObj.id)
            if (foundUserSeller && (foundUserSeller.checked === true)) {
                return (
                <Grid item xs={12} sm={6} md={4}>
                    <TruckCard {...foodTruckObj} check={true} userSellerId={foundUserSeller.id}/>
                </Grid>
                );
            } else if (foundUserSeller){
                return (
                <Grid item xs={12} sm={6} md={4}>
                    <TruckCard {...foodTruckObj} check={false} userSellerId={foundUserSeller.id} />
                </Grid>
                );
            } else {
                return (
                <Grid item xs={12} sm={6} md={4}>
                    <TruckCard {...foodTruckObj} check={false} userSellerId={null} />
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

export const MobileServicesContent = ({trucks, userSellers}) => {
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
                <TruckCard {...lovedTrucksObj.seller} />
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