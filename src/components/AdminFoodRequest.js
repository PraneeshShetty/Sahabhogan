import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const AdminFoodRequest = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [organization, setOrganization] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/food-requests', { item, quantity, organization });
            alert('Food request posted successfully: ' + response.data._id);
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Post Food Request</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Item" fullWidth required onChange={(e) => setItem(e.target.value)} />
                <TextField label="Quantity" type="number" fullWidth required onChange={(e) => setQuantity(e.target.value)} />
                <TextField label="Organization ID" fullWidth required onChange={(e) => setOrganization(e.target.value)} />
                <Button type="submit" variant="contained" color="primary">Post Request</Button>
            </form>
        </Container>
    );
};

export default AdminFoodRequest;
