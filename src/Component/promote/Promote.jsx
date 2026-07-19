import React from 'react';
import styles from './Promote.module.scss';

const Promote = () => {
    return (
        <div className={styles.promote}>
            <p className={styles.text}>
                Orange PR is Dubai&apos;s leading communication company, specializing
                in cultural, lifestyle, fashion and art. Our agency was founded on a
                culture of smart strategic thinking, creativity, and innovation that
                delivers successful solutions to our local, national, and
                international customer base. Our ability to create and execute
                dynamic, forward-thinking PR campaigns quickly, while maintaining
                quality, increasing visibility, and achieving the targeted objectives
                or aims, is the key to our success. By offering a full turn-key
                solution, companies partner with us because of our unique approach,
                which allows us to build a solid connection with you and your brand.
                Therefore plan, execute, and evaluate effective cross-media and
                cross-cultural campaigns.
            </p>

            <button type="button" className={styles.button}>
                Read More
            </button>
        </div>
    );
};

export default Promote;