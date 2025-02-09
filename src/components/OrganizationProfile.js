import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@mui/material';

const OrganizationProfile = ({ organization }) => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom>Organization Profile</Typography>
            <Typography variant="body1">Name: {organization.name}</Typography>
            <Typography variant="body1">Address: {organization.address}</Typography>
            <Typography variant="body1">Contact: {organization.contact}</Typography>
        </Container>
    );
};
OrganizationProfile.propTypes = {
    organization: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired,
    }).isRequired,
};
export default OrganizationProfile;
