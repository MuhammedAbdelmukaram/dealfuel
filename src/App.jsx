import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './HomePage';
import SalesRepSignup from './SalesRepSignup';
import CompanySignup from './CompanySignup'; // Assuming you have this component as well

const App = () => {
    const location = useLocation(); // This is used by AnimatePresence to detect location changes

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/salesrep/signup" element={<SalesRepSignup />} />
                <Route path="/company/signup" element={<CompanySignup />} />
                {/* Additional routes */}
            </Routes>
        </AnimatePresence>
    );
}

export default App;
