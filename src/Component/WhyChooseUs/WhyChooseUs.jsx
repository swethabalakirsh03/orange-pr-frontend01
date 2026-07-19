import React from 'react';
import styles from './WhyChooseUs.module.scss';
import WhyChooseCard from './WhyChooseCard';

import mediaImg from '../../assets/Experts/media_img.svg';
import influencerImg from '../../assets/Experts/influencer_img.svg';
import eventsImg from '../../assets/Experts/event_img.svg';

const cardData = [
    {
        id: 1,
        number: '01',
        title: 'MARKET ENTRY EXPERTISE',
        description: 'We provide end-to-end PR and digital marketing solutions for businesses entering India.',
        image: mediaImg,
        bgColor: '#9fa8ab'
    },
    {
        id: 2,
        number: '02',
        title: 'STRONG MEDIA RELATIONSHIPS',
        description: 'Our network spans top Indian publications, ensuring maximum visibility for your brand.',
        image: influencerImg,
        bgColor: '#f38b71',
        isOffset: true,
        className: "secondCard"
    },
    {
        id: 3,
        number: '03',
        title: 'LOCALIZED STORYTELLING',
        description: 'We tailor messaging to resonate with Indian consumers, investors, and stakeholders.',
        image: eventsImg,
        bgColor: '#f7b486'
    }
];

const WhyChooseUs = () => {
    return (
        <section className={styles.container}>
            <div className={styles.headerBg}>
                <h2 className={styles.heading}>WHY CHOOSE ORANGE PR?</h2>
            </div>
            <div className={styles.cardsWrapper}>
                {cardData.map((card) => (
                    <WhyChooseCard
                        key={card.id}
                        number={card.number}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        bgColor={card.bgColor}
                        isOffset={card.isOffset}
                        className={card.className}
                    />
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
