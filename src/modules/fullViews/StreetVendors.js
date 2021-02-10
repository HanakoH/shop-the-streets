import React from "react";
import { Grid } from "@material-ui/core";
import AppBarNav from "../partView/AppBarNav";
import StreetVendorsContent from "../partView/StreetVendorsContent";

const StreetVendors = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <AppBarNav />
      </Grid>
      <Grid item container>
      <Grid item xs={false} sm={1} md={2} />
        <Grid item xs={12} sm={10} md={8}>
          <StreetVendorsContent />
        </Grid>
        <Grid item xs={false} sm={1} md={2}/>
      </Grid>
    </Grid>
  );
};

export default StreetVendors;