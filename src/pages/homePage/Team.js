import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Kyle from './../../assets/Images/kyle.png';
import Lillis from './../../assets/Images/lills.png';
import Serene from './../../assets/Images/serene.png';
const useStyles = makeStyles((theme) => ({
    team: {
        position: 'relative',
        background: '#F2F2F2',
        padding: theme.spacing(10, 0, 10, 0),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(9, 0, 9, 0),
        },
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(8, 0, 8, 0),
        }
    },
    teamTitle: {
        fontSize:'72px',
        fontWeight: 700,
        color: '#000000',
        margin: theme.spacing(5, 0, 5, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize:'56px',
            margin: theme.spacing(4, 0, 4, 0),
        },
        [theme.breakpoints.down("xs")]: {
            fontSize:'48px',
            margin: theme.spacing(3, 0, 3, 0),
        }
    },
    teamCard:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        background:'#ffffff',
        borderRadius:'25px',
        boxShadow: "0px 0px 50px rgba(192, 192, 254, 0.25)",
        padding: theme.spacing(8,0,8,0),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(7,0,7,0),
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(6,0,6,0),
        }
    },
    teamCardTwo:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        background:'#ffffff',
        borderRadius:'25px',
        padding: theme.spacing(8,0,8,0),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(7,0,7,0),
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(6,0,6,0),
        }
    },
    teamCardImg:{
        objectFit:'contain',
        width:'100%',
        maxWidth:'213px',
    },
    // teamCardTwo:{
    //     display:'flex',
    //     justifyContent:'space-between',
    //     alignItems:'center',
    //     background:'#F9F9F9',
    //     borderRadius:'25px',
    //     padding: theme.spacing(4),
    //     margin: theme.spacing(0, 0, 5, 0),
    //     [theme.breakpoints.down("sm")]: {
    //         margin: theme.spacing(0, 0, 4, 0),
    //     },
    //     [theme.breakpoints.down("xs")]: {
    //         margin: theme.spacing(0, 0, 3, 0),
    //     }
    // },
    teamCardTitle:{
        fontWeight: 600,
        color: '#000000',
        margin: theme.spacing(2,0,2,0),
    },
    teamCardSubtitle: { 
        fontWeight: 600,
        color: 'rgba(0,0,0,0.5)',
    },
}));

export default function Team(props) {

    const classes = useStyles();

    return (
        <div  className={classes.team}>
            <Container >
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography className={classes.teamTitle}>The Team</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.teamCard}>
                            <img src={Lillis} className={classes.teamCardImg}></img>
                            <Typography variant="h1" className={classes.teamCardTitle}>
                            LILLY
                            </Typography>
                            <Typography variant="h4" className={classes.teamCardSubtitle}>CO-FOUNDER</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.teamCardTwo}>
                            <img src={Serene} className={classes.teamCardImg}></img>
                            <Typography variant="h1" className={classes.teamCardTitle}>
                            SERENE
                            </Typography>
                            <Typography variant="h4" className={classes.teamCardSubtitle}>CO-FOUNDER</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.teamCardTwo}>
                            <img src={Lillis} className={classes.teamCardImg}></img>
                            <Typography variant="h1" className={classes.teamCardTitle}>
                            OLEG
                            </Typography>
                            <Typography variant="h4" className={classes.teamCardSubtitle}>3D ANIMATOR</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.teamCardTwo}>
                            <img src={Kyle} className={classes.teamCardImg}></img>
                            <Typography variant="h1" className={classes.teamCardTitle}>
                            CALEB
                            </Typography>
                            <Typography variant="h4" className={classes.teamCardSubtitle}>MARKETING</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.teamCardTwo}>
                            <img src={Kyle} className={classes.teamCardImg}></img>
                            <Typography variant="h1" className={classes.teamCardTitle}>
                            KYLE LENOUT
                            </Typography>
                            <Typography variant="h4" className={classes.teamCardSubtitle}>DEVELOPER</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.teamCardTwo}>
                            <img src={Serene} className={classes.teamCardImg}></img>
                            <Typography variant="h1" className={classes.teamCardTitle}>
                            SHAWNEE
                            </Typography>
                            <Typography variant="h4" className={classes.teamCardSubtitle}>MARKETING</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
