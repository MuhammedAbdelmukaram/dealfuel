import React from 'react';
import Header from "../../sections/common/Header.jsx";
import styles from "../Messages/Messages.module.css";

const Bookmarks = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.comingSoonContainer}>
                <p className={styles.comingSoonText}>I said Coming soon my G </p>
            </div>
        </div>
    );
};

export default Bookmarks;