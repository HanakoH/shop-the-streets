import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '../components/Typography';
import Button from '../components/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>  
    <div className={classes.root}>
      <AppBar position="static" style={{background: "white"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title} color="primary.dark">
            Shop the Streets
          </Typography>
          <Button variant="outlined" color="inherit" background="white">Login</Button>
          <Button variant="contained" color="primary">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}
