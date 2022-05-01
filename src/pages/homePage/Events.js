import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PokerNights from './../../assets/Images/pokernights.png';
import MusicFestival from './../../assets/Images/musicFestival.png';
const useStyles = makeStyles((theme) => ({
    events: {
        position: 'relative',
        backgroundColor: '#EFEFEF',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(9),
        },
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(8),
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
        backgroundSize:'center',
        height:'529px',
        width:'100%',
        backgroundSize:'cover',
        borderRadius: 24,
        padding: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            borderRadius: 20,
            padding: theme.spacing(4),
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(3),
            borderRadius: 16,
        }
    },
    eventCardOneTitle:{
        fontWeight: 800,
        color: '#fff',
    },
    eventsCardTwo: {
        backgroundImage: `url(${MusicFestival})`,
        backgroundSize:'center',
        height:'529px',
        width:'100%',
        backgroundSize:'cover',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding: theme.spacing(4),
        borderRadius: 24,
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(3),
            borderRadius: 20,
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(2),
            borderRadius: 16,
        }
    },
    eventCardTwoTitle:{
        fontWeight: 800,
        background: "linear-gradient(90.76deg, #F3FE77 0.34%, #FF8235 99.71%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },
    eventsCardThree:{
        backgroundImage: `url(${MusicFestival})`,
        backgroundSize:'center',
        height:'529px',
        width:'100%',
        backgroundSize:'cover',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-end',
        borderRadius: 24,
        padding: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            borderRadius: 20,
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down("xs")]: {
            borderRadius: 16,
            padding: theme.spacing(2),
        }
    },
    eventCardThreeTitle:{
        fontWeight: 800,
        color: '#E65357',
    },
    eventCardBody:{
        fontWeight: 400,
        color: '#FFFFFF',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: theme.spacing(1),
        }

    },
    eventsBody: {
        fontWeight: 700,
        color: '#1F2024',
        flex:1,
    },
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
                            <Typography variant="subtitle2" className={classes.eventCardBody}>Aliquet amet dui, enim sollicitudin leo ipsum<br/> lectus mi id. Orci ultrices adipiscing interdum<br/> habitant vestibulum.</Typography>
                            <Typography variant="subtitle2" className={classes.eventCardBody}>Aliquet amet dui, enim sollicitudin leo ipsum<br/> lectus mi id. Orci ultrices adipiscing interdum<br/> habitant vestibulum.</Typography>
                            <Typography variant="subtitle2" className={classes.eventCardBody}>Aliquet amet dui, enim sollicitudin leo ipsum<br/> lectus mi id. Orci ultrices adipiscing interdum<br/> habitant vestibulum.</Typography>
                            <Typography variant="h2" className={classes.eventCardOneTitle}>Poker Night</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.eventsCardTwo}>
                            <Typography variant="h2" className={classes.eventCardTwoTitle}>Music Festival</Typography>
                            <Typography variant="subtitle2" className={classes.eventCardBody}>Aliquet amet dui, enim sollicitudin leo ipsum<br/> lectus mi id. Orci ultrices adipiscing interdum<br/> habitant vestibulum.</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.eventsCardThree}>
                            <Typography variant="h2" className={classes.eventCardThreeTitle}>Formula F1</Typography>
                            <Typography variant="subtitle2" className={classes.eventCardBody}>Aliquet amet dui, enim sollicitudin leo ipsum<br/> lectus mi id. Orci ultrices adipiscing interdum<br/> habitant vestibulum.</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
