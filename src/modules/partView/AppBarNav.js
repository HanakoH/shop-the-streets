import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '../components/Typography';
import Button from '../components/Button';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "2.8125rem",
  }
}));

export default function ButtonAppBar() {
  const classes = styles();

  return (
    <>  
    <div className={classes.root}>
      <AppBar position="static" style={{background: "white"}}>
        <Toolbar>
          <Button className={classes.logo} href="/">
            <img src="/images/NoTextLogo.png" className={classes.logo} alt='Logo with an outer circle of green and an inner circle of green'/>
          </Button>
          <Typography variant="h4" className={classes.title} color="primary.dark" >
            Shop the Streets
          </Typography>
          <Button href="/food-trucks">Food Trucks</Button>
          <Button href="/street-vendors">Street Vendors</Button>
          <Button href="/mobile-services">Mobile Services</Button>
          <Button variant="outlined" color="inherit" background="white" href="/login">Login</Button>
          <Button variant="contained" color="primary" href="/register">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}
