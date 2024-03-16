// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Homepage.module.css'; // Adjust the path as needed

const HomePage = () => {
    const navigate = useNavigate(); // Hook to enable navigation

    return (
        <div className={styles.homePage}>
            <div
                className={`${styles.half} ${styles.left}`}
                onClick={() => navigate('/salesrep/signup')}
            >
                <img src="/salesman.png" alt="Salesman" className={styles.image} /> {/* Assuming the image is named salesman.png and located in the public folder */}
                <p className={styles['bold-and-large']}>I'm a sales rep</p>
            </div>
            <div
                className={`${styles.half} ${styles.right}`}
                onClick={() => navigate('/company/signup')}
            >
                <img src="/company.png" alt="Company" className={styles.image} /> {/* Assuming the image is named company.png and located in the public folder */}
                <p className={styles['bold-and-large']}>I'm looking to hire</p>
            </div>
        </div>
    );
}

export default HomePage;
