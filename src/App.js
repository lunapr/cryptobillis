import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
// import Logo from './assets/images/nftNewLogo.png';
import HomePage from "./pages/homePage/Index";
import { Grid, Container } from '@material-ui/core';
// import { HashLink } from 'react-router-hash-link';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff !important",
    boxShadow:"none",
    "&.MuiPaper-elevation4": {
      backgroundColor: "#fff !important",
      boxShadow:"none",
    },
  },
  lunaHeaderLogo: {
    width: 80,
    display: "block",
    [theme.breakpoints.down("sm")]: {
      width: 72,
    },
    [theme.breakpoints.down("xs")]: {
      width: 64,
    },
  },
  mainBody: {
    marginTop: "-64px",
  },
  title: {
    flexGrow: 1,
  },
  headerNavLink: {
    fontFamily: 'Titillium Web',
    fontWeight: 600,
    fontSize: 16,
    color: '#1F2024',
    marginLeft: 16,
    textDecoration:'none',
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      marginLeft: 12,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      marginLeft: 8,
    },
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
          <Container>
            <Grid Container>
              <Grid item xs={12}>
                <Toolbar disableGutters>
                  <div className={classes.title}>
                    <a href="/">
                      <img
                        // src={Logo}
                        alt=""
                        className={classes.lunaHeaderLogo}
                      />
                    </a>
                  </div>
                  <div>
                    {/* <Link className={classes.headerNavLink}>
                      LINK
                    </Link> */}
                    {/* <HashLink
                    className={classes.headerNavLink}
                      to="#aboutUs"
                      scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    >
                      ABOUT
                    </HashLink> */}
                    {/* <HashLink
                    className={classes.headerNavLink}
                      to="#ourAdvisors"
                      scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    >
                      ADVISORS
                    </HashLink> */}
                    {/* <HashLink
                    className={classes.headerNavLink}
                      to="#services"
                      scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    >
                      SERVICES
                    </HashLink> */}
                    {/* <Link className={classes.headerNavLink}>
                      LINK
                    </Link> */}
                    {/* <Link className={classes.headerNavLink}>
                      LINK
                    </Link> */}
                  </div>
                </Toolbar>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <div className={classes.mainBody}>
        <HomePage />
      </div>
    </React.Fragment>
  );
}
