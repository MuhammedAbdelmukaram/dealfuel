import React from 'react';
import styles from './Dashboard.module.css';
import Header from "../../sections/common/Header.jsx";
import Filters from "../../sections/Filters/Filters.jsx";
import ProfileBoxes from "../../sections/ProfileBoxes/ProfileBoxes.jsx";


const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Header/>
            <div className={styles.mainContent}>
                <Filters />
                <ProfileBoxes />
            </div>
        </div>
    );
};

export default Dashboard;
