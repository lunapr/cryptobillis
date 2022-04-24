import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
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
    footerTitle: {
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
    footerBody: {
        fontWeight: 600,
        color: '#1F2024',
    },
}));

export default function Footer(props) {

    const classes = useStyles();

    return (
        <div  className={classes.footer}>
            <Container >
                
            </Container>
        </div>
    );
}
