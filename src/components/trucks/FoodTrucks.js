import React from "react";
import { Grid } from "@material-ui/core";
import AppBarNav from "../modules/AppBarNav";
import { FoodTrucksContent } from "./TruckContent";

const FoodTrucks = ({trucks}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <AppBarNav />
      </Grid>
      <Grid item container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <FoodTrucksContent trucks={trucks} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

export default FoodTrucks;