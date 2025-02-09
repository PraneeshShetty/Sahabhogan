import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to the Local Food Donation Network
            </Typography>
            <Typography variant="body1">
                Join us in making a difference by donating food to those in need.
            </Typography>
        </Container>
    );
};

export default Home;
