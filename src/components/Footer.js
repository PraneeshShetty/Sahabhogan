import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container>
            <Typography variant="body2" color="textSecondary" align="center">
                © {new Date().getFullYear()} Local Food Donation Network. All rights reserved.
            </Typography>
        </Container>
    );
};

export default Footer;
