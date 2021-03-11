import React from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";
import Button from "../parts/Button"
import Typography from "../parts/Typography";
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    button: {
        minWidth: 200,
      },
})

function NoLovedTrucks(props) {
    const { classes } = props;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom marked="center" align="center">
                    You don't love any of our vendors yet!
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Button
                    align="center"
                    color="primary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                    href="/food-trucks"
                >
                    Click here if you are interested in food trucks!
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button
                    align="center"
                    color="secondary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                    href="/street-vendors"
                >
                    Click here if you are interested in street vendors!
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                    href="/mobile-services"
                >
                    Click here if you are interested in mobile services!
                </Button>
            </Grid>
        </Grid>
    );
  };

  NoLovedTrucks.propTypes = { 
    classes: PropTypes.object,
  };

  export default withStyles(styles)(NoLovedTrucks);