import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    },
    discordIcon: {
        width: 24,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 5,
        filter: 'invert()'
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
                            <Typography variant="subtitle2" className={classes.footerSubtitle}>Our aim is to be at the center of all metaverse events and to ensure that all the entertainment that is provided is nothing short of extraordinary.</Typography>
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
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}
