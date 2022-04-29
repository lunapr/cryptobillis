import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CoinMarket from './../../assets/Images/News/coinMarketCap.png';
import NewsBtc from './../../assets/Images/News/newsBtc.png';
import NftGems from './../../assets/Images/News/NftGems.png';
const useStyles = makeStyles((theme) => ({
    asSeenOn: {
        position: 'relative',
        backgroundColor: '#FFF',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(9),
            paddingBottom: theme.spacing(9),
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        }
    },
    asSeenOnTitle: {
        fontWeight: 800,
        color: '#000000',
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: theme.spacing(3),
        }
    },
    asSeenOnCard: {
        display: 'flex',
        alignItems: 'center',
        background: '#f9f9f9',
        // boxShadow: "0px 0px 50px rgba(192, 192, 254, 0.25)",
        borderRadius: 24,
        padding: theme.spacing(4),
        // marginBottom: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            borderRadius: 20,
            padding: theme.spacing(3),
            // marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.down("xs")]: {
            flexDirection:'column',
            borderRadius: 16,
            padding: theme.spacing(2),
            // marginBottom: theme.spacing(3),
        }
    },
    asSeenOnImage:{
        display:'block',
        width:'100%',
    },
}));

export default function AsSeenOn(props) {

    const classes = useStyles();

    return (
        <div className={classes.asSeenOn}>
            <Container >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h2' className={classes.asSeenOnTitle}>As Seen On</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.asSeenOnCard}>
                            <img src={CoinMarket} className={classes.asSeenOnImage}></img>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.asSeenOnCard}>
                            <img src={NftGems} className={classes.asSeenOnImage}></img>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.asSeenOnCard}>
                            <img src={NewsBtc} className={classes.asSeenOnImage}></img>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
