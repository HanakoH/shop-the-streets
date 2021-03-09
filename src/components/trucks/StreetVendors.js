import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "../parts/Typography";
import AppBarNav from "../containers/AppBarNav";
import { StreetVendorsContent } from "./TruckContent";

const StreetVendors = ({trucks, userSellers}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <AppBarNav />
        <Typography variant="h1" gutterBottom marked="center" align="center">
            Street Vendors
        </Typography>
      </Grid>
      <Grid item container>
      <Grid item xs={1}/>
        <Grid item xs={10} >
          <StreetVendorsContent trucks={trucks} userSellers={userSellers}/>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    </Grid>
  );
};

export default StreetVendors;