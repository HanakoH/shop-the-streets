import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "../parts/Typography";
import AppBarNav from "../containers/AppBarNav";
import { LovedTrucksContent } from "./TruckContent";
import NoLovedTrucks from "./NoLovedTrucks";

const LovedTrucks = ({trucks, userSellers}) => {

  return (
    <Grid container direction="column">
      <Grid item>
        <AppBarNav />
        <Typography variant="h3" gutterBottom marked="center" align="center">
            Dashboard
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          {userSellers.length > 0 ? (<LovedTrucksContent trucks={trucks} userSellers={userSellers} />) : (<NoLovedTrucks />)}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

export default LovedTrucks;