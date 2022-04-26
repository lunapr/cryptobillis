import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    roadmap: {
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
    roadmapTitle: {
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
    roadmapCard: {
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff',
        boxShadow: "0px 0px 50px rgba(192, 192, 254, 0.25)",
        borderRadius: 24,
        padding: theme.spacing(4),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            borderRadius: 20,
            padding: theme.spacing(3),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.down("xs")]: {
            flexDirection:'column',
            borderRadius: 16,
            padding: theme.spacing(2),
            marginBottom: theme.spacing(3),
        }
    },
    roadmapDate: {
        fontWeight: 700,
        color: '#000000',
        marginRight:theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
            marginRight:theme.spacing(6),
        },
        [theme.breakpoints.down("xs")]: {
            marginRight:theme.spacing(4),
        }
    },
    green: {
        color: '#3ABB53'
    },
    orange: {
        color: '#FB9E65'
    },
    roadmapBody: {
        fontWeight: 700,
        color: '#1F2024',
        flex:1,
    },
}));

export default function Roadmap(props) {

    const classes = useStyles();

    return (
        <div className={classes.roadmap}>
            <Container >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h2' className={classes.roadmapTitle}>Roadmap</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.roadmapCard}>
                            <Typography variant="h5" className={classes.roadmapDate}>
                                <span className={classes.green}>
                                    Q1 - 2022
                                </span>
                            </Typography>
                            <Typography variant="h6" className={classes.roadmapBody}>500 Community Members are Choosen for the whitelist. Each member gets two Free NFTs for each Minted</Typography>
                        </div>
                        <div className={classes.roadmapCard}>
                            <Typography variant="h5" className={classes.roadmapDate}>
                                <span className={classes.orange}>
                                    Q1 - 2022
                                </span>
                            </Typography>
                            <Typography variant="h6" className={classes.roadmapBody}>500 Community Members are Choosen for the whitelist. Each member gets two Free NFTs for each Minted</Typography>
                        </div>
                        <div className={classes.roadmapCard}>
                            <Typography variant="h5" className={classes.roadmapDate}>
                                Q1 - 2022
                            </Typography>
                            <Typography variant="h6" className={classes.roadmapBody}>500 Community Members are Choosen for the whitelist. Each member gets two Free NFTs for each Minted</Typography>
                        </div>
                        <div className={classes.roadmapCard}>
                            <Typography variant="h5" className={classes.roadmapDate}>
                                Q1 - 2022
                            </Typography>
                            <Typography variant="h6" className={classes.roadmapBody}>500 Community Members are Choosen for the whitelist. Each member gets two Free NFTs for each Minted</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
