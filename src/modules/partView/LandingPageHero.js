import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from '../components/ProductHeroLayout';


const backgroundImage =
  'https://images.unsplash.com/photo-1505496704829-37e28089504e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80';

const styles = (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        height: '80vh',
        minHeight: 500,
        maxHeight: 1300,
    },
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundColor: 'linear-gradient(89.92deg, #F9E5E4 26.55%, rgba(250, 234, 233, 0.54) 56.07%, rgba(255, 255, 255, 0) 73.41%)',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>    
        <img style={{ display: 'none'}} src={backgroundImage} alt="Food truck with people milling about in black and white" />
        <Typography color="primary" align="left" variant="h1" marked="left">
            Where the road meets the internet
        </Typography>
        <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            href="/register"
        >
            Join Today
        </Button>
    </ProductHeroLayout>  
  );
}

ProductHero.propTypes = { 
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);