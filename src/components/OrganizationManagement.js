import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const OrganizationManagement = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/organizations', { name, address, contact });
            alert('Organization created successfully: ' + response.data._id);
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Organization Management</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" fullWidth required onChange={(e) => setName(e.target.value)} />
                <TextField label="Address" fullWidth required onChange={(e) => setAddress(e.target.value)} />
                <TextField label="Contact" fullWidth required onChange={(e) => setContact(e.target.value)} />
                <Button type="submit" variant="contained" color="primary">Create Organization</Button>
            </form>
        </Container>
    );
};

export default OrganizationManagement;
