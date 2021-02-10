import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '../components/Typography';
import Button from '../components/Button';
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Link from "@material-ui/core/Link";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom"


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

export default function AppBarNav() {
  const classes = styles();
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const activeUser = sessionStorage.getItem("activeUser")

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clearStorage = () => {
    sessionStorage.clear()
    history.push("/")
    window.location.reload();
  };

  const goToDash = () => {
    history.push("/dashboard")
  }

  return (
    <>  
    <div className={classes.root}>
      <AppBar position="static" style={{background: "white"}}>
        <Toolbar>
          <IconButton className={classes.logo} href="/">
            <img src="/images/NoTextLogo.png" className={classes.logo} alt='Logo with an outer circle of green and an inner circle of green'/>
          </IconButton>
          <Typography variant="h4" className={classes.title} component={Link} href="/" color="textPrimary" underline={'none'} >
            Shop the Streets
          </Typography>
          <Button href="/food-trucks">Food Trucks</Button>
          <Button href="/street-vendors">Street Vendors</Button>
          <Button href="/mobile-services">Mobile Services</Button>
          {!activeUser && (
          <>
          <Button variant="outlined" color="inherit" background="white" href="/login">Login</Button>
          <Button variant="contained" color="primary" href="/register">Register</Button>
          </>  
          )}
          {activeUser && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={goToDash}>Dashboard</MenuItem>
                <MenuItem onClick={clearStorage}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}