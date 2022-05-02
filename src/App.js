/** @format */

import { Container, Grid, Link } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import React from "react";
import Logo from './assets/Images/cryptologo.png';
import HomePage from "./pages/homePage/Index";
import { Twitter } from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden';

// import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff !important",
    boxShadow: "none",
    "&.MuiPaper-elevation4": {
      backgroundColor: "#fff !important",
      boxShadow: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  headerNavLink: {
    fontWeight: 600,
    fontSize: 16,
    color: "#1F2024",
    marginLeft: 16,
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      marginLeft: 12,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      marginLeft: 4,
    },
  },
  logo: {
    height: 32,
    display: 'block',
    margin: '0 auto',
    [theme.breakpoints.down("sm")]: {
      height: 24,
    },
    [theme.breakpoints.down("xs")]: {
      height: 16,
      margin:'unset'
    },
  },
  socialWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Container>
              <Grid container alignItems="center" justifyContent="space-between">
                <Hidden xsDown>
                  <Grid item xs>
                    <Link className={classes.headerNavLink}>
                      ABOUT US
                    </Link>
                    <Link className={classes.headerNavLink}>
                      ROADMAP
                    </Link>
                    <Link className={classes.headerNavLink}>
                      TEAM
                    </Link>
                  </Grid>
                </Hidden>
                <Grid item xs>
                  <a href="/">
                    <img
                      src={Logo}
                      alt=""
                      className={classes.logo}
                    />
                  </a>
                </Grid>
                <Grid item xs>
                  <div className={classes.socialWrapper}>
                    <Twitter className={classes.footerIcons} />
                    <Twitter className={classes.footerIcons} />
                    <Twitter className={classes.footerIcons} />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <HomePage />
    </React.Fragment>
  );
}
