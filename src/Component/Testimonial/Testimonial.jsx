import React, { useState } from 'react';
import styles from './Testimonial.module.scss';
import collage from '../../assets/Concept_pr/testiomonials_img.png';
import avatar1 from '../../assets/Concept_pr/test_01Img.svg';

const testimonials = [
  {
    id: 1,
    quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    name: 'James Andrews',
    role: 'CEO and Founder of the Company',
    avatar: avatar1
  },
  {
    id: 2,
    quote: 'Orange PR helped us shape a narrative that resonated with our audience and delivered measurable results across media channels.',
    name: 'Mia Thompson',
    role: 'Marketing Head at GrowthLab',
    avatar: avatar1
  },
  {
    id: 3,
    quote: 'The team made our launch effortless and consistently exceeded expectations with creative strategy and flawless execution.',
    name: 'Daniel Parker',
    role: 'Founder, SparkWorks',
    avatar: avatar1
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.inner}>
        <div className={styles.topImages}>
          <img src={collage} alt="Testimonials collage" className={styles.collage} />
        </div>

        <h2 className={styles.heading}>TESTIOMONIALS</h2>

        <div className={styles.sliderContent}>
          <div className={styles.imageWrap}>
            <img src={current.avatar} alt={current.name} className={styles.avatar} />
          </div>

          <div className={styles.content}>
            <p className={styles.quote}>{current.quote}</p>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{current.name}</span>
              <span className={styles.authorRole}>{current.role}</span>
            </div>
          </div>
        </div>

        <div className={styles.cursorRow}>
          <button type="button" onClick={handlePrev} className={styles.cursorButton} aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          <div className={styles.pageIndicator}>
            {testimonials.map((_, i) => (
              <React.Fragment key={i}>
                <span className={i === activeIndex ? styles.activeNum : styles.inactiveNum}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {i < testimonials.length - 1 && <span className={styles.pageDivider}>/</span>}
              </React.Fragment>
            ))}
          </div>

          <button type="button" onClick={handleNext} className={styles.cursorButton} aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
