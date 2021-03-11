import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "../parts/Typography";
import AppBarNav from "../containers/AppBarNav";
import { MobileServicesContent } from "./TruckContent";

const MobileServices = ({trucks, userSellers}) => {

  return (
    <Grid container direction="column">
      <Grid item>
        <AppBarNav />
        <Typography variant="h1" gutterBottom marked="center" align="center">
            Mobile Services
        </Typography>
      </Grid>
      <Grid item container>
      <Grid item sm={1}/>
        <Grid item sm={10}>
          <MobileServicesContent trucks={trucks} userSellers={userSellers}/>
        </Grid>
        <Grid item sm={1}/>
      </Grid>
    </Grid>
  );
};

export default MobileServices;