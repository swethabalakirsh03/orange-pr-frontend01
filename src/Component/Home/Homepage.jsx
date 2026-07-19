import { useState, useEffect } from "react";
import styles from "./Homepage.module.scss";
import Navbar from "./Navbar";
import miniVg from "../../assets/Homepage/mini_vg.svg";
import logo1 from "../../assets/Homepage/home_page.svg";

const slides = [
    {
        heading: { fresh: "FRESH", juicy: "JUICY", bright: "BRIGHT" },
        subtext: "Streamlining Media Relations for Brands. Orange PR manages media relations, freeing clients to focus on daily operations, while ensuring campaign initiatives are constantly monitored and updated for success.",
        image: logo1
    },
    {
        heading: { fresh: "BOLD", juicy: "DARING", bright: "UNIQUE" },
        subtext: "Empowering visionary companies with disruptive communication strategies. We construct powerful narratives that capture attention, engage audiences, and build lasting brand authority.",
        image: logo1
    },
    {
        heading: { fresh: "SMART", juicy: "SHARP", bright: "CREATIVE" },
        subtext: "Bridging the gap between brands and their audiences. Our analytical approach to public relations delivers measurable growth, media placement, and brand sentiment optimization.",
        image: logo1
    },
    {
        heading: { fresh: "FAST", juicy: "CLEAR", bright: "IMPACT" },
        subtext: "Navigating the digital landscape with precision. We design campaigns that resonate across platforms, ensuring your message reaches the right audience at the right time for maximum impact.",
        image: logo1
    }
];

const Homepage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const setSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <main className={styles.homepage}>
            <section className={styles.hero}>
                <Navbar />

                <div className={styles.heroLogo} key={`logo-${currentSlide}`}>
                    <img
                        src={slides[currentSlide].image}
                        className="slide-enter-active"
                        alt="Branding graphic"
                    />
                </div>

                <div className={styles.heroInner}>
                    <div className={styles.heroMain}>
                        <div className={styles.heroText} key={`text-${currentSlide}`}>
                            <div className={`${styles.heading} slide-enter-active`}>
                                <span className={styles.fresh}>{slides[currentSlide].heading.fresh}</span>
                                <span className={styles.juicy}>{slides[currentSlide].heading.juicy}</span>
                                <span className={styles.bright}>{slides[currentSlide].heading.bright}</span>
                            </div>

                            <p className={`${styles.subtext} slide-enter-active`}>
                                {slides[currentSlide].subtext}
                            </p>
                        </div>

                        <div className={styles.videoCard}>
                            <img
                                src={miniVg}
                                alt="On air segment"
                            />

                            <span className={styles.onAir}>ON AIR</span>

                            <button className={`${styles.playBtn} btn-premium`} aria-label="Play video">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={styles.heroFooter}>
                        <div className={styles.divider} />

                        <div className={styles.footerRow}>
                            <button className={`${styles.exploreBtn} btn-premium`}>EXPLORE</button>

                            <div className={styles.carousel}>
                                <button
                                    className={styles.carouselBtn}
                                    onClick={prevSlide}
                                    aria-label="Previous slide"
                                >
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="20" y1="12" x2="4" y2="12"></line>
                                        <polyline points="10 18 4 12 10 6"></polyline>
                                    </svg>
                                </button>

                                <div className={styles.dots}>
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSlide(index)}
                                            className={`${styles.dot} ${currentSlide === index ? styles.active : ""}`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    className={styles.carouselBtn}
                                    onClick={nextSlide}
                                    aria-label="Next slide"
                                >
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="4" y1="12" x2="20" y2="12"></line>
                                        <polyline points="14 6 20 12 14 18"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Homepage;