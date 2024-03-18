import React, { useRef, useState } from 'react';
import Header from "../../sections/common/Header.jsx";
import styles from './Profile.module.css'; // Make sure you have this CSS file

const Profile = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={styles.profileContainer}>
            <Header/>
            <div className={styles.introSection}>
                <h1>Hi, my name is Devantae! 👋</h1>
                <div className={styles.videoPreview} onClick={togglePlay}>
                    <video ref={videoRef} src="/StratFlowVideo.mp4" type="video/mp4" alt="Devantae's Introduction" className={styles.videoElement} />
                    {!isPlaying && <button className={styles.playButton}>▶</button>}
                </div>
                <div className={styles.actionButtons}>
                    <button className={styles.bookCallButton}>Book a call</button>
                    <button className={styles.viewSalesButton}>View sales example</button>
                </div>
            </div>
            <div className={styles.statsSection}>
                <div className={styles.stat}>
                    <h2>8+</h2>
                    <p>Years in sales</p>
                </div>
                <div className={styles.stat}>
                    <h2>$10m+</h2>
                    <p>Worth of deals closed</p>
                </div>
                <div className={styles.stat}>
                    <h2>20+</h2>
                    <p>Companies Ive closed for</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
