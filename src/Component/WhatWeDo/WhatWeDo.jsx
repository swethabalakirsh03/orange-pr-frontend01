import React, { useState, useRef } from 'react';
import styles from './WhatWeDo.module.scss';
import mediaImg from '../../assets/Experts/media_img.svg';
import influencerImg from '../../assets/Experts/influencer_img.svg';
import eventsImg from '../../assets/Experts/event_img.svg';

const initialServices = [
    {
        id: 0,
        title: 'Media',
        subtitle: 'Relations',
        description: "Orange PR takes charge of all media relations on behalf of our clients, enabling them to concentrate on their brand's daily requirements.",
        image: mediaImg
    },
    {
        id: 1,
        title: 'Influencer',
        subtitle: 'Management',
        description: "We connect your brand with top-tier creators to execute highly targeted campaigns that drive meaningful engagement and growth.",
        image: influencerImg
    },
    {
        id: 2,
        title: 'Events',
        subtitle: 'Production',
        description: "From concept to execution, we design experiential events that leave lasting impacts on your target audience.",
        image: eventsImg
    }
];

const WhatWeDo = () => {
    const [services, setServices] = useState(initialServices);
    const cardsContainerRef = useRef(null);

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setServices((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
    };

    const handleCardClick = (index) => {
        if (index === 0) {
            handleNext();
        } else {
            setServices((prev) => {
                return [...prev.slice(index), ...prev.slice(0, index)];
            });
        }

        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.contentLeft}>
                <h2 className={styles.heading}>
                    WHAT WE DO <br /> EXPERTS
                </h2>
                <h3 className={styles.subHeading}>We build brands.</h3>
                <p className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>

                <div className={styles.actionRow}>
                    <button className={styles.readMoreBtn}>READ MORE</button>
                    <div className={styles.pagination}>
                        {initialServices.map((service, i) => (
                            <React.Fragment key={service.id}>
                                <span className={service.id === services[0].id ? styles.activeNum : styles.inactiveNum}>
                                    0{i + 1}
                                </span>
                                {i < initialServices.length - 1 && <span className={styles.divider}>/</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.cardsRight} ref={cardsContainerRef}>
                {services.map((service, index) => {
                    const isActive = index === 0;
                    return (
                        <div
                            key={service.id}
                            className={`${styles.card} ${index === 2 ? styles.cardlast : styles.center} ${isActive ? styles.isActive : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <img src={service.image} alt={service.title} className={styles.cardBg} />

                            <div className={styles.cardOverlay}>
                                <span className={styles.tint} aria-hidden="true" />
                                <span className={styles.blur} aria-hidden="true" />

                                <div className={styles.cardBody}>
                                    <div className={styles.cardTextContent}>
                                        <h4 className={styles.cardTitle}>
                                            {service.title}
                                            {service.subtitle && <span className={styles.blockSpan}>{service.subtitle}</span>}
                                        </h4>

                                        {isActive && service.description && (
                                            <p className={styles.cardDesc}>{service.description}</p>
                                        )}
                                    </div>

                                    {isActive && (
                                        <button
                                            className={styles.circleArrowBtn}
                                            onClick={handleNext}
                                            aria-label="Next service"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WhatWeDo;