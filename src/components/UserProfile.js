import React from 'react';
import { Container, Typography } from '@mui/material';

const UserProfile = ({ user }) => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom>User Profile</Typography>
            <Typography variant="body1">Name: {user.name}</Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
            <Typography variant="body1">Role: {user.role}</Typography>
        </Container>
    );
};

UserProfile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
};

export default UserProfile;
