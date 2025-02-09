import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import UserRegistration from './components/UserRegistration';
import OrganizationManagement from './components/OrganizationManagement';
import DonationCreation from './components/DonationCreation';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { Container } from '@mui/material';

const App = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<UserRegistration />} />
                    <Route path="/organizations" element={<OrganizationManagement />} />
                    <Route path="/donate" element={<DonationCreation />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
