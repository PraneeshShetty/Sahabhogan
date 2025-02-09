import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/login', { email, password });
            alert('Admin logged in successfully: ' + response.data.message);
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Admin Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Email" type="email" fullWidth required onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" fullWidth required onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" variant="contained" color="primary">Login</Button>
            </form>
        </Container>
    );
};

export default AdminLogin;
