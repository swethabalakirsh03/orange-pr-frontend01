import React from 'react';
import styles from './WhyChooseCard.module.scss';

const WhyChooseCard = ({ number, title, description, image, bgColor, isOffset }) => {
    return (
        <div className={`${styles.card} ${isOffset ? styles.offsetCard : ''}`} style={{ backgroundColor: bgColor }}>
            <div className={styles.topRow}>
                <span className={styles.number}>{number}</span>
                <img src={image} alt={title} className={styles.thumbnail} />
            </div>
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default WhyChooseCard;
