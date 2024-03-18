import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Header.module.css';
import VerticalLine from "../../components/VerticalLine.jsx"; // You will create this CSS module file

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <img
                    src="/OrangeLogo.png" // Replace with your logo path
                    alt="Logo"
                    className={styles.logo}
                    onClick={() => navigate('/dashboard')} // Navigates back to the homepage or dashboard
                />
            </div>
            <div className={styles.centerSection}>
                <button className={styles.button} onClick={() => navigate('/dashboard')}>Dashboard</button>
                <button className={styles.button} onClick={() => navigate('/myjobs')}>My Jobs</button>
                <button className={styles.button} onClick={() => navigate('/messages')}>Messages</button>
                <button className={styles.button} onClick={() => navigate('/bookmarks')}>Bookmarks</button>

            </div>




            <div className={styles.rightSection}>
                <div className={styles.searchBox}>
                    <input type="text" placeholder="Search…"/>
                    <img src="/search.png" alt="Search" className={styles.searchIcon}/>
                </div>

                <div style={{marginLeft:20}}>
                    <VerticalLine height={"30px"} backgroundColor={"#575757"}/>
                </div>
                <img
                    src="/notification.png"
                    alt="Notifications"
                    className={styles.icon}
                    onClick={() => {/* handle notification click */
                    }}
                />

                <div style={{marginLeft:20}}>
                    <VerticalLine height={"30px"} backgroundColor={"#575757"}/>
                </div>

                <img
                    src="/help.png"
                    alt="Notifications"
                    className={styles.icon}
                    onClick={() => {/* handle notification click */
                    }}
                />

                <div style={{marginLeft:20}}>
                    <VerticalLine height={"30px"} backgroundColor={"#575757"}/>
                </div>
                <img
                    src="/profile.png"
                    alt="Profile"
                    className={styles.icon}
                    onClick={() => navigate('/profile')} // Navigate to the profile page when clicked
                />
            </div>
        </header>
    );
};

export default Header;
