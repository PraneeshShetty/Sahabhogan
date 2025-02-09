import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Local Food Donation Network
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/register">Register</Button>
                <Button color="inherit" component={Link} to="/donate">Donate</Button>
                <Button color="inherit" component={Link} to="/organizations">Organizations</Button>
                <Button color="inherit" component={Link} to="/admin/login">Admin Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
