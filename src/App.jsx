import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './pages/Homepage/Homepage.jsx';
import SalesRepSignup from './pages/SalesRepSignup/SalesRepSignup.jsx';
import CompanySignup from './pages/CompanySignup/CompanySignup.jsx';
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen.jsx";
import Profile from "./pages/Profile/Profile.jsx"; // Assuming you have this component as well

const App = () => {
    const location = useLocation(); // This is used by AnimatePresence to detect location changes

    return (
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Homepage />} />
                <Route path="/salesrep/signup" element={<SalesRepSignup />} />
                <Route path="/company/signup" element={<CompanySignup />} />
                <Route path="/loader" element={<LoadingScreen />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}

                {/* Additional routes */}
            </Routes>
        </AnimatePresence>
    );
}

export default App;
