import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const DonationCreation = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [donor, setDonor] = useState('');
    const [organization, setOrganization] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/donations', { item, quantity, donor, organization });
            alert('Donation created successfully: ' + response.data._id);
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Create Donation</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Item" fullWidth required onChange={(e) => setItem(e.target.value)} />
                <TextField label="Quantity" type="number" fullWidth required onChange={(e) => setQuantity(e.target.value)} />
                <TextField label="Donor ID" fullWidth required onChange={(e) => setDonor(e.target.value)} />
                <TextField label="Organization ID" fullWidth required onChange={(e) => setOrganization(e.target.value)} />
                <Button type="submit" variant="contained" color="primary">Create Donation</Button>
            </form>
        </Container>
    );
};

export default DonationCreation;
