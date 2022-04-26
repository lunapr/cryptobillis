import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Kyle from './../../assets/Images/serene.png';
import WelcomeArrows from './../../assets/Images/welcomeArrows.png';
const useStyles = makeStyles((theme) => ({
    welcome: {
        backgroundColor: '#EFEFEF',
        padding: theme.spacing(10, 0, 10, 0),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(9, 0, 9, 0),
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(8, 0, 8, 0),
        }
    },
    welcomeTopWrapper:{
        display:'flex',
        justifyContent:'space-between',
        margin: theme.spacing(0, 0, 5, 0),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(0, 0, 4, 0),
        },
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(0, 0, 3, 0),
        }
    },
    welcomeArrow:{
        objectFit:'contain',
        maxWidth:'400px',
    },
    welcomePreTitle:{
        fontWeight: 700,
        color: '#000000',
        textAlign:'right',
    },
    welcomeTitle: {
        fontSize:'72px',
        fontWeight: 700,
        color: '#000000',
        [theme.breakpoints.down("sm")]: {
            fontSize:'56px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize:'48px',
        }
    },
    welcomeCard:{
        position:'relative',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background:'#ffffff',
        borderRadius:'25px',
        boxShadow: "0px 0px 50px rgba(192, 192, 254, 0.25)",
        margin: theme.spacing(0, 0, 5, 0),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(0, 0, 4, 0),
        },
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(0, 0, 3, 0),
        }
    },
    welcomeFeature:{
        position:'absolute',
        objectFit:'contain',
        width:'100%',
        maxWidth:'213px',
        // margin: theme.spacing(0, 5, 0, 0),
    },
    welcomeBody: {
        fontWeight: 500,
        color: '#1F2024',
        margin: theme.spacing(0, 2, 0, 2),
    },
}));

export default function Welcome(props) {

    const classes = useStyles();

    return (
        <div  className={classes.welcome}>
            <Container >
                <Grid container>
                    <Grid item xs={12}>
                    <Typography variant="h3" className={classes.welcomePreTitle}>WELCOME TO</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.welcomeTopWrapper}>
                            <img src={WelcomeArrows} className={classes.welcomeArrow}></img>
                            <Typography className={classes.welcomeTitle}>METAVERSE</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.welcomeCard}>
                                    <img src={Kyle} className={classes.welcomeFeature}></img>
                                    <Typography variant="h5" className={classes.welcomeBody}>The CRYPTOBILLI$ are hosting a concert in WEB3. We love to listen to LIVE music, so we are putting together a music festival for NFTS! The CRYPTOBILLI$ are NFTS afterall, providing access to musical performances and SPECIAL EVENTS. Our community is all-inclusive, so why not check out the ROADMAP below to see what’s in the works?</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
