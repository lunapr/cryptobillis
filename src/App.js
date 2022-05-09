/** @format */

import { Container, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Twitter, Instagram } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "./assets/Images/cryptologo.png";
import Discord from "./assets/Images/discord.png";
import HomePage from "./pages/homePage/Index";
import Crypto from './assets/Images/crypto.png';
import Star from './assets/Images/star.png';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

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
    display: "block",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      height: 24,
    },
    [theme.breakpoints.down("xs")]: {
      height: 16,
      margin: "unset",
    },
  },
  socialWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  footerIcons: {
    color: '#000',
  },
  discordIcon: {
    width: 24,
    marginLeft: 8,
    marginRight: 8,
  },
  blackHeader: {
    backgroundColor: '#000',
    padding: theme.spacing(0, 1),
    '& img': {
      // width: '1%',
      display: 'block',
      // flex: 1,
      marginLeft: 4,
      marginRight: 4,
      // width: 'fit-content'
    },
    '& .slick-track': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& .slick-initialized .slick-slide':{
      width: 'fit-content !important'
    }
  },
  star: {
    maxWidth: 24,
    // width: 'fit-content !important'
  },
  flexWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crypto: {
    padding: 16,
    width:'282px !important'
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

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const settings = {
    focusOnSelect: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    initialSlide: 0,
    cssEase: "linear"
  };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Container>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between">
                <Hidden smUp>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="top"
                    open={open}
                    classes={{
                      paper: classes.drawerPaper,
                    }}>
                    <List>
                      <ListItem button>
                        <ListItemText>
                          <Link
                            smooth
                            to="/#about-us"
                            className={classes.headerNavLink}>
                            ABOUT US
                          </Link>
                        </ListItemText>
                      </ListItem>
                      <ListItem button>
                        <ListItemText>
                          <Link
                            smooth
                            to="/#roadmap"
                            className={classes.headerNavLink}>
                            ROADMAP
                          </Link>
                        </ListItemText>
                      </ListItem>
                      <ListItem button>
                        <ListItemText>
                          <Link
                            smooth
                            to="/#team"
                            className={classes.headerNavLink}>
                            TEAM
                          </Link>
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Drawer>
                </Hidden>
                <Hidden xsDown>
                  <Grid item xs>
                    <Link
                      smooth
                      to="/#about-us"
                      className={classes.headerNavLink}>
                      ABOUT US
                    </Link>
                    <Link
                      smooth
                      to="/#roadmap"
                      className={classes.headerNavLink}>
                      ROADMAP
                    </Link>
                    <Link smooth to="/#team" className={classes.headerNavLink}>
                      TEAM
                    </Link>
                  </Grid>
                </Hidden>
                <Grid item xs>
                  <a href="/">
                    <img src={Logo} alt="" className={classes.logo} />
                  </a>
                </Grid>
                <Grid item xs>
                  <div className={classes.socialWrapper}>
                    <a href="https://twitter.com/CryptoBillisNFT" target='_blank' rel="noreferrer"><Twitter className={classes.footerIcons} /></a>
                    <a href="https://discord.com/invite/VXxhFHARrT" target='_blank' rel="noreferrer">
                      <img alt="" src={Discord} className={classes.discordIcon} />
                    </a>
                    <a href="https://www.instagram.com/cryptobilli/" target='_blank' rel="noreferrer"><Instagram className={classes.footerIcons} /></a>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
          <div className={classes.blackHeader}>
            <Slider {...settings}>
              <img alt="" src={Star} className={classes.star} />
              <img alt="" src={Crypto} className={classes.crypto} />
              <img alt="" src={Star} className={classes.star} />
              <img alt="" src={Crypto} className={classes.crypto} />
              <img alt="" src={Star} className={classes.star} />
              <img alt="" src={Crypto} className={classes.crypto} />
              <img alt="" src={Star} className={classes.star} />
              <img alt="" src={Crypto} className={classes.crypto} />
              <img alt="" src={Star} className={classes.star} />
            </Slider>
          </div>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
}
