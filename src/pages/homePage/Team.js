/** @format */

import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Ahmad from "./../../assets/Images/ahmad.jpg";
import Lillis from "./../../assets/Images/lills.png";
import Serene from "./../../assets/Images/serene.png";
import Oleg from "./../../assets/Images/oleg.jpg";
import { Instagram, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  team: {
    position: "relative",
    background: "#F2F2F2",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  teamTitle: {
    fontWeight: 800,
    color: "#000000",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(3),
    },
  },
  teamCard: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    background: "#F9F9F9",
    borderRadius: 24,
    height: '100%',
    cursor: 'pointer',
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
      borderRadius: 20,
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: 16,
      padding: theme.spacing(3),
    },
    '&:hover': {
      background: "#fff",
      boxShadow: "0px 0px 50px rgba(192, 192, 254, 0.25)",
    }
  },
  teamCardImg: {
    objectFit: "contain",
    width: "100%",
    maxWidth: 213,
    mixBlendMode: 'darken',
  },
  teamCardTitle: {
    fontWeight: 900,
    color: "#000000",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1.5),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  },
  teamCardSubtitle: {
    fontWeight: 900,
    color: "rgba(0,0,0,0.5)",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1.5),
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(1),
    },
  },
  socialWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerIcons: {
    color: '#000',
    marginLeft: 4,
    marginRight: 4,
  },
  discordIcon: {
    width: 24,
    marginLeft: 8,
    marginRight: 8,
  }
}));

export default function Team(props) {
  const classes = useStyles();

  return (
    <div className={classes.team} id="team">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.teamTitle}>
              The Team
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={4}>
            <div className={classes.teamCard}>
              <img alt="" src={Lillis} className={classes.teamCardImg}></img>
              <Typography variant="h4" className={classes.teamCardTitle}>
                LILLY
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.teamCardSubtitle}>
                CO-FOUNDER
              </Typography>
              <div className={classes.socialWrapper}>
                <a href="https://instagram.com/lillyhorani99?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer"><Instagram className={classes.footerIcons} /></a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className={classes.teamCard}>
              <img alt="" src={Serene} className={classes.teamCardImg}></img>
              <Typography variant="h4" className={classes.teamCardTitle}>
                SERENE
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.teamCardSubtitle}>
                CO-FOUNDER
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className={classes.teamCard}>
              <img alt="" src={Ahmad} className={classes.teamCardImg}></img>
              <Typography variant="h4" className={classes.teamCardTitle}>
                AHMAD
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.teamCardSubtitle}>
                CO-FOUNDER
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className={classes.teamCard}>
              <img alt="" src={Serene} className={classes.teamCardImg}></img>
              <Typography variant="h4" className={classes.teamCardTitle}>
                SHAWNEE
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.teamCardSubtitle}>
                MARKETING
              </Typography>
              <div className={classes.socialWrapper}>
                <a href="https://www.linkedin.com/in/shawnee-sande" target='_blank' rel="noreferrer"><LinkedIn className={classes.footerIcons} /></a>
                <a href="https://instagram.com/shawneesande?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer"><Instagram className={classes.footerIcons} /></a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className={classes.teamCard}>
              <img alt="" src={Oleg} className={classes.teamCardImg}></img>
              <Typography variant="h4" className={classes.teamCardTitle}>
                OLEG
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.teamCardSubtitle}>
                3D ANIMATOR
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
