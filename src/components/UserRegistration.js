import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const UserRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('donor');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', { name, email, password, role });
            alert('User registered successfully: ' + response.data._id);
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>User Registration</Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" fullWidth required onChange={(e) => setName(e.target.value)} />
                <TextField label="Email" type="email" fullWidth required onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" fullWidth required autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
                <TextField label="Role" select fullWidth value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="donor">Donor</option>
                    <option value="organization">Organization</option>
                </TextField>
                <Button type="submit" variant="contained" color="primary">Register</Button>
            </form>
        </Container>
    );
};

export default UserRegistration;
