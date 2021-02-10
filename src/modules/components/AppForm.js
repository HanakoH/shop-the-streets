import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Paper from './Paper';
import FormPic from "./relativeImages/FormPic.png"

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
    backgroundImage: `url(${FormPic})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 6),
    },
  },
});

function AppForm(props) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box mt={7} mb={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Box>
      </Container>
    </div>
  );
}

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);