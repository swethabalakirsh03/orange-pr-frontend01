import React, { useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log("Newsletter signup:", email);
    };

    return (
        <section className={styles.newsletterSection}>
            <div className={styles.inner}>
                <div className={styles.textContent}>
                    <h2 className={styles.heading}>Newsletter</h2>
                    <p className={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                </div>
                <form className={styles.formContent} onSubmit={handleSubmit}>
                    <div className={styles.inputWrapper}>
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
