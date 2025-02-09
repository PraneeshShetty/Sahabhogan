import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
    const [donations, setDonations] = useState([]);
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        const fetchDonations = async () => {
            const response = await axios.get('/api/donations');
            setDonations(response.data);
        };

        const fetchOrganizations = async () => {
            const response = await axios.get('/api/organizations');
            setOrganizations(response.data);
        };

        fetchDonations();
        fetchOrganizations();
    }, []);

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Dashboard</Typography>
            <Typography variant="h6">Donations</Typography>
            <List>
                {donations.map((donation) => (
                    <ListItem key={donation._id}>
                        <ListItemText primary={`${donation.item} - Quantity: ${donation.quantity}`} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="h6">Organizations</Typography>
            <List>
                {organizations.map((organization) => (
                    <ListItem key={organization._id}>
                        <ListItemText primary={organization.name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Dashboard;
