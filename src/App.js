import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ApplicationView } from './modules/ApplicationView';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#B0BC8F',
      main: '#708044',
      dark: "#000000"
    },
    secondary: {
      light: '#fff5f8',
      main: '#F9E5E4',
      dark: '#E27E79',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 16,
    fontWeightLight: 300, // Montserrat
    fontWeightRegular: 400, // Montserrat, Satisfy
    fontWeightMedium: 700, // Montserrat
    fontFamilySecondary: "'Satisfy', cursive",
    textTransform: "none",
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightRegular,
  fontFamily: rawTheme.typography.fontFamilySecondary
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      fontWeight: rawTheme.typography.fontWeightRegular,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 24,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <ApplicationView />
      </Router>
    </ThemeProvider>
  );
}

export default App;
