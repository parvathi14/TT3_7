import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import logo from 'Z:/Desktop/tt3_7/src/assets/icon.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="TT3_7" height="25px" className={classes.image} /> TT3_7
                    </Typography>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;