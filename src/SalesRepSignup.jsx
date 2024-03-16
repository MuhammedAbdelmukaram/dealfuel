// SalesRepSignup.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './SalesRepSignup.module.css'; // Ensure this is correctly linked

const SalesRepSignup = () => {
    // Define your motion variants
    const pageVariants = {
        initial: {
            opacity: 0,
            x: "100vw" // Starts off the screen to the right
        },
        in: {
            opacity: 1,
            x: 0 // Moves into view
        },
        out: {
            opacity: 0,
            x: -500 // Moves out to the left
        }
    };

    return (
        <motion.div
            className={styles.container}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: "tween", duration: 0.1 }}
        >
            <div className={styles.container}>

                <div className={styles.left}>
                    <form className={styles.signupForm}>
                        <h2>Sign up</h2>

                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name*</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="password">Password*</label>
                            <input type="password" id="password" name="password" placeholder="Create a password" required />
                            <small>Must be at least 8 characters.</small>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Get started</button>

                        <p className={styles.loginText}>
                            Already have an account? <a href="/login">Log in</a>
                        </p>
                    </form>
                </div>
                <div className={styles.right}>
                    {/* New content based on the provided design */}
                    <div className={styles.marketingContent}>
                        <h1>Start hiring sales reps efficiently.</h1>
                        <p>Sign up and start hiring your dream sales people.</p>
                        <p className={styles.smallText}>Join 200+ companies hiring with DealFuel.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


export default SalesRepSignup;
