import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    roadmap: {
        position: 'relative',
        backgroundColor: '#EFEFEF',
        // padding: theme.spacing(10, 0, 10, 0),
        // [theme.breakpoints.down("sm")]: {
        //     padding: theme.spacing(9, 0, 9, 0),
        // },
        // [theme.breakpoints.down("xs")]: {
        //     padding : theme.spacing(8, 0, 8, 0),
        // }
    },
    roadmapTitle: {
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
    roadmapCard:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background:'#ffffff',
        borderRadius:'25px',
        boxShadow: "0px 0px 50px rgba(192, 192, 254, 0.25)",
        padding: theme.spacing(4),
        margin: theme.spacing(0, 0, 5, 0),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(0, 0, 4, 0),
        },
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(0, 0, 3, 0),
        }
    },
    roadmapCardTwo:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background:'#F9F9F9',
        borderRadius:'25px',
        padding: theme.spacing(4),
        margin: theme.spacing(0, 0, 5, 0),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(0, 0, 4, 0),
        },
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(0, 0, 3, 0),
        }
    },
    roadmapDate:{
        fontWeight: 600,
        color: '#000000',
    },
    green:{
        color:'#3ABB53'
    },
    orange:{
        color:'#FB9E65'
    },
    roadmapBody: {
        fontWeight: 600,
        color: '#1F2024',
    },
}));

export default function Roadmap(props) {

    const classes = useStyles();

    return (
        <div  className={classes.roadmap}>
            <Container >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.roadmapTitle}>Roadmap</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.roadmapCard}>
                            <Typography variant="h2" className={classes.roadmapDate}>
                            <span className={classes.green}>
                            Q1 - 2022
                            </span>
                            </Typography>
                                    <Typography variant="h3" className={classes.roadmapBody}>500 Community Members are Choosen for the whitelist. Each<br/> member gets two Free NFTs for each Minted</Typography>
                        </div>
                        <div className={classes.roadmapCardTwo}>
                            <Typography variant="h2" className={classes.roadmapDate}>
                            <span className={classes.orange}>
                            Q1 - 2022
                            </span>
                            </Typography>
                                    <Typography variant="h3" className={classes.roadmapBody}>500 Community Members are Choosen for the whitelist. Each<br/> member gets two Free NFTs for each Minted</Typography>
                        </div>
                        <div className={classes.roadmapCardTwo}>
                            <Typography variant="h2" className={classes.roadmapDate}>
                            Q1 - 2022
                            </Typography>
                                    <Typography variant="h3" className={classes.roadmapBody}>500 Community Members are Choosen for the whitelist. Each<br/> member gets two Free NFTs for each Minted</Typography>
                        </div>
                        <div className={classes.roadmapCardTwo}>
                            <Typography variant="h2" className={classes.roadmapDate}>
                            Q1 - 2022
                            </Typography>
                                    <Typography variant="h3" className={classes.roadmapBody}>500 Community Members are Choosen for the whitelist. Each<br/> member gets two Free NFTs for each Minted</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
