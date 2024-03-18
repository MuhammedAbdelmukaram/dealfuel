import React from 'react';
import Header from "../../sections/common/Header.jsx";
import styles from './Messages.module.css';
const Messages = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.comingSoonContainer}>
                <p className={styles.comingSoonText}>Coming soon</p>
            </div>
        </div>
    );
};

export default Messages;