
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './CompanySignup.module.css'; // Ensure this is correctly linked
import { motion } from 'framer-motion';
const CompanySignup = () => {
    const navigate = useNavigate();
    const [contentIndex, setContentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [resetProgressBar, setResetProgressBar] = useState(false);


    const marketingContents = [
        {
            title: "Start hiring sales reps efficiently.",
            text: "Sign up and start hiring your dream sales people.",
            smallText: "200+ companies hiring via DealFuel."
        },
        {
            title: "Build Your Dream Sales Team",
            text: "Join now and connect with top sales talent.",
            smallText: "Fast, effective, and stress-free hiring."
        }
    ];

    useEffect(() => {
        setResetProgressBar(false); // Start the animation by setting it to false
        const timer = setTimeout(() => {
            setContentIndex((prevIndex) => (prevIndex + 1) % marketingContents.length);
            setResetProgressBar(true); // Reset the progress bar after 5 seconds
        }, 5000);

        return () => clearTimeout(timer);
    }, [contentIndex]);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    };

    const textVariants = {
        initial: {
            opacity: 0,
            x: 1000 // Enter from the right
        },
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 0 // Exit to the left
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <form className={styles.signupForm} onSubmit={handleSubmit}>
                    <h2>Register Your Business</h2>

                    <div className={styles.formGroup}>
                        <label htmlFor="name">Company Name*</label>
                        <input type="text" id="name" name="name" placeholder="Enter company name" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" name="email" placeholder="Enter email" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password*</label>
                        <input type="password" id="password" name="password" placeholder="Create a password" required />
                    </div>

                    <button type="submit" className={styles.submitBtn}>Get started</button>

                    <p className={styles.loginText}>
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </form>
            </div>
            <div className={styles.right}>
                <motion.div
                    key={contentIndex}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={textVariants}
                    transition={{ type: "tween", duration: 0.5 }}
                >
                    <div className={styles.marketingContent}>
                        <h1>{marketingContents[contentIndex].title}</h1>
                        <p>{marketingContents[contentIndex].text}</p>
                        <p className={styles.smallText}>{marketingContents[contentIndex].smallText}</p>
                    </div>
                </motion.div>
                <div className={styles.progressBarContainer}>
                    <div key={resetProgressBar} className={resetProgressBar ? styles.progressBarReset : styles.progressBarStart}></div>
                </div>

            </div>
        </div>
    );
};

export default CompanySignup;