import React from 'react';
import { Grid, Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'relative',
        backgroundColor: '#000000',
        padding: theme.spacing(10, 0, 10, 0),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(9, 0, 9, 0),
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(8, 0, 8, 0),
        }
    },
    footerTitle: {
        fontWeight: 700,
        color: '#FFFFFF',
    },
    footerBody: {
        fontWeight: 400,
        color: '#FFFFFF',
    },
    footerSubtitle: {
        fontWeight: 400,
        color: '#FFFFFF',
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(1),
        }
    },
    footerSubscribeFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            alignItems: 'flex-start',
            flexDirection: 'column',
        }
    },
    footerIcons: {
        width: '40px',
        display: 'block',
        color: '#fff',
    },
    footerLabel: {
        background: '#383838',
        padding: theme.spacing(5, 0, 5, 0),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(4, 0, 4, 0),
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(3, 0, 3, 0),
        }
    },
    footerLabelFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerLabelText: {
        color: '#FFFFFF',
        fontWeight: '400',
    },
    withLove: {
        color: 'rgb(191,192,245)',
        fontWeight: '400',
    },
    subscribeWrapper: {
        background: '#383838',
        borderRadius: 24,
        padding: theme.spacing(1, 2),
        display: 'flex',
        alignItems: 'center',
        marginTop: 32,
        [theme.breakpoints.down("sm")]: {
            borderRadius: 20,
        },
        [theme.breakpoints.down("xs")]: {
            borderRadius: 16,
        },
        '& input': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            border: 0,
            fontSize: 16,
            flex: 1,
            color: '#fff',
            '&:focus': {
                boxShadow: 'none',
                border: 0,
                outline: 0
            }
        }
    }
}));

export default function Footer(props) {

    const classes = useStyles();

    return (
        <>
            <div className={classes.footer}>
                <Container >
                    <Grid container justifyContent='space-between'>
                        <Grid item xs={12} sm={12} md={'auto'}>
                            <Typography variant="h4" className={classes.footerTitle}>CRYPTOBILLI$</Typography>
                            <Typography variant="subtitle2" className={classes.footerSubtitle}>Aliquet amet dui, enim sollicitudin leo ipsum<br /> lectus mi id. Orci ultrices adipiscing interdum<br /> habitant vestibulum.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={'auto'}>
                            <div className={classes.footerSubscribeFlex}>
                                <Typography variant="subtitle2" className={classes.footerBody}>Subscribe for updates & newsletters.</Typography>
                                <div className={classes.footerLabelFlex}>
                                    <Twitter className={classes.footerIcons} />
                                    <Twitter className={classes.footerIcons} />
                                    <Twitter className={classes.footerIcons} />
                                </div>
                            </div>
                            <Paper component="form" className={classes.subscribeWrapper}>
                                <input placeholder="i.e jon.doe@gmail.com" />
                                <Button type="submit" color='primary'>
                                    SUBSCRIBE
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.footerLabel}>
                <Container >
                    <Grid container>
                        <Grid item xs={12}>
                            <div className={classes.footerLabelFlex}>
                                <Typography variant="subtitle2" className={classes.footerLabelText}>All Rights Reserved.</Typography>
                                <Typography variant="subtitle2" className={classes.footerLabelText}>Made with Love by<span className={classes.withLove}>Luna PR</span></Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}
