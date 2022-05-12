/** @format */

import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Kyle from "./../../assets/Images/serene.png";
import WelcomeArrows from "./../../assets/Images/welcomeArrows.png";

const useStyles = makeStyles((theme) => ({
  welcome: {
    backgroundColor: "#E5E5E5ff",
  },
  welcomeTopWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(3),
    },
  },
  welcomeArrow: {
    objectFit: "contain",
    maxWidth: "400px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "200px",
    },
  },
  welcomePreTitle: {
    fontWeight: 800,
    color: "#000000",
    textAlign: "right",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
  welcomeTitle: {
    fontWeight: 800,
    color: "#000000",
  },
  welcomeCard: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    background: "#ffffff",
    borderRadius: 24,
    boxShadow: "0px 0px 50px rgba(192, 192, 254, 0.25)",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3),
      flexDirection: "column",
    },
  },
  welcomeFeature: {
    objectFit: "contain",
    width: "100%",
    maxWidth: "213px",
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(3),
    },
  },
  welcomeBody: {
    fontWeight: 500,
    color: "#1F2024",
  },
}));

export default function Welcome(props) {
  const classes = useStyles();

  return (
    <div className={classes.welcome} id="about-us">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.welcomePreTitle}>
              WELCOME TO THE
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.welcomeTopWrapper}>
              <img alt="" src={WelcomeArrows} className={classes.welcomeArrow}></img>
              <Typography variant="h2" className={classes.welcomeTitle}>
                METAVERSE
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.welcomeCard}>
              <img alt="" src={Kyle} className={classes.welcomeFeature}></img>
              <Typography variant="h6" className={classes.welcomeBody}>
                CryptoBillis is more than just an NFT that allows you access to events, it’s to remind holders about the path of those that are on their way to becoming Billionaire Billi$ and having a supportive and like-minded community.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
