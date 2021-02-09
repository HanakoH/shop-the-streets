import React from "react";
import TruckCard from "../components/TruckCard";
import { Grid } from "@material-ui/core";
import { sellers }  from "../api/database.json";

const StreetVendorsContent = () => {
  const getFoodTruckCard = foodTruckObj => {
      if (foodTruckObj.truckTypeId === 2 ){
        return (
        <Grid item xs={12} sm={4}>
            <TruckCard {...foodTruckObj} />
        </Grid>
        );
      }
  };

  return (
    <Grid container spacing={2}>
      {sellers.map(foodTruckObj => 
        getFoodTruckCard(foodTruckObj))}
    </Grid>
  );
};

export default StreetVendorsContent;