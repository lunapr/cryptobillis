import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'relative',
        backgroundColor: '#000000',
        padding: theme.spacing(10, 0, 10, 0),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(9, 0, 9, 0),
        },
        [theme.breakpoints.down("xs")]: {
            padding : theme.spacing(8, 0, 8, 0),
        }
    },
    footerTitle: {
        fontSize:'72px',
        fontWeight: 700,
        color: '#FFFFFF',
        [theme.breakpoints.down("sm")]: {
            fontSize:'56px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize:'48px',
        }
    },
    footerBody: {
        fontWeight: 400,
        color: '#FFFFFF',
    },
    footerSubtitle: {
        fontWeight: 400,
        color: '#FFFFFF',
        padding: theme.spacing(5, 0, 0, 0),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(4, 0, 0, 0),
        },
        [theme.breakpoints.down("xs")]: {
            padding : theme.spacing(3, 0, 0, 0),
        }
    },
    footerSubscribeFlex:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    footerIcons:{
        width:'40px',
        display:'block',
        color:'#fff',
    },
    footerLabel:{
        background:'#383838',
        padding: theme.spacing(5, 0, 5, 0),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(4, 0, 4, 0),
        },
        [theme.breakpoints.down("xs")]: {
            padding : theme.spacing(3, 0, 3, 0),
        }
    },
    footerLabelFlex:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    footerLabelText:{
        color:'#FFFFFF',
        fontWeight:'400',
    },
    withLove:{
        color:'rgb(191,192,245)',
        fontWeight:'400',
    },
}));

export default function Footer(props) {

    const classes = useStyles();

    return (
        <div>
            <div  className={classes.footer}>
                <Container >
                    <Grid container alignItems='center' justifyContent='space-between'>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant="h4" className={classes.footerTitle}>CRYPTOBILLI$</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className={classes.footerSubscribeFlex}>
                            <Typography variant="subtitle2" className={classes.footerBody}>Subscribe for updates & newsletters.</Typography>
                            <Twitter className={classes.footerIcons}/>
                            <Twitter className={classes.footerIcons}/>
                            <Twitter className={classes.footerIcons}/>
                            </div>
                        </Grid>
                    </Grid> 
                    <Grid container alignItems='center' justifyContent='space-between'>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant="subtitle2" className={classes.footerSubtitle}>Aliquet amet dui, enim sollicitudin leo ipsum<br/> lectus mi id. Orci ultrices adipiscing interdum<br/> habitant vestibulum.</Typography>
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
                                <Typography variant="subtitle2" className={classes.footerLabelText}>Made with Love by<span className={classes.withLove}> Luna PR</span></Typography>
                            </div>
                        </Grid>
                    </Grid>        
                </Container>
            </div>
        </div>
    );
}
