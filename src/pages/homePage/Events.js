import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PokerNights from './../../assets/Images/pokernights.png';
import MusicFestival from './../../assets/Images/musicFestival.png';
import Fourmulaf1 from './../../assets/Images/fourmulaf1.png';
import FerrariMobile from './../../assets/Images/ferrariMobile.png';
const useStyles = makeStyles((theme) => ({
    events: {
        position: 'relative',
        backgroundColor: '#E5E5E5',
        paddingBottom: theme.spacing(15),
        [theme.breakpoints.down("sm")]: {
            paddingBottom: theme.spacing(12),
        },
        [theme.breakpoints.down("xs")]: {
            paddingBottom: theme.spacing(9),
        }
    },
    eventsTitle: {
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
    eventsCardOne: {
        backgroundImage: `url(${PokerNights})`,
        minHeight: 529,
        width: '100%',
        backgroundSize: 'cover',
        borderRadius: 24,
        padding: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            borderRadius: 20,
            padding: theme.spacing(4),
        },
        [theme.breakpoints.down("xs")]: {
            minHeight: 'unset',
            paddingTop: theme.spacing(3),
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingBottom: theme.spacing(15),
            borderRadius: 16,
            backgroundColor: '#000',
            backgroundSize: 'contain',
            backgroundPosition: 'bottom right',
            backgroundRepeat: 'no-repeat',
        }
    },
    eventCardOneTitle: {
        fontWeight: 800,
        color: '#fff',
    },
    eventsCardTwo: {
        backgroundImage: `url(${MusicFestival})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 529,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(4),
        borderRadius: 24,
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(3),
            borderRadius: 20,

        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(8, 2),
            borderRadius: 16,
            minHeight: 'unset',
            textAlign: 'center',
        }
    },
    eventCardBody: {
        fontWeight: 400,
        color: '#FFFFFF',
        marginBottom: theme.spacing(3),
        maxWidth: 581,
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: theme.spacing(1),
        }

    },
    eventCardTwoTitle: {
        fontWeight: 800,
        background: "linear-gradient(90.76deg, #F3FE77 0.34%, #FF8235 99.71%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },
    eventCardTwoBody: {
        fontWeight: 400,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: theme.spacing(3),
        maxWidth: 581,
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: theme.spacing(1),
        }
    },

    eventsCardThree: {
        backgroundImage: `url(${Fourmulaf1})`,
        backgroundSize: 'cover',
        minHeight: 529,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        borderRadius: 24,
        padding: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            borderRadius: 20,
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down("xs")]: {
            borderRadius: 16,
            backgroundImage: `url(${FerrariMobile})`,
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(25),
            backgroundColor: '#000',
            backgroundSize: 'contain',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'no-repeat',
            minHeight: 'unset'
        }
    },
    eventCardThreeTitle: {
        fontWeight: 800,
        color: '#E65357',
    },
    eventCardThreeBody: {
        fontWeight: 400,
        color: '#FFFFFF',
        textAlign: 'right',
        marginBottom: theme.spacing(3),
        maxWidth: 581,
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: theme.spacing(1),
        }
    }
}));

export default function Events(props) {

    const classes = useStyles();

    return (
        <div className={classes.events}>
            <Container >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h2' className={classes.eventsTitle}>Events</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <div className={classes.eventsCardOne}>
                            <Typography variant="subtitle2" className={classes.eventCardBody}>Coming Soon! We will be hosting a "Crypto Poker  Cup" once every quarter which will be held in the metaverse! Follow us on Twitter to stay tuned for upcoming updates!</Typography>
                            <Typography variant="h2" className={classes.eventCardOneTitle}>Poker Night</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.eventsCardTwo}>
                            <Typography variant="h2" className={classes.eventCardTwoTitle}>Music Festival</Typography>
                            <Typography variant="subtitle2" className={classes.eventCardTwoBody}>Stay tuned for upcoming music festivals where we will have a variety of genres, DJ's and events take place</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.eventsCardThree}>
                            <Typography variant="h2" className={classes.eventCardThreeTitle}>Formula F1</Typography>
                            <Typography variant="subtitle2" className={classes.eventCardThreeBody}>Battle of the NFTs is here, Once a quarter our community will be able to witness NFTs go head to head in a winner takes all knockout racing event! Hold on to your seats!</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
