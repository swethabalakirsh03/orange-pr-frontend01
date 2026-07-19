import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import dotsMenuIcon from "../../assets/Homepage/dots_menu_icon.svg";
import { scrollToSection, navItems } from "../../Component/utils/scrollToSection";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState("home");

    const handleNavClick = (e, id) => {
        scrollToSection(e, id);
        setActiveId(id);
        setMenuOpen(false);
    };

    // Scroll-spy: watches every section a nav link points to, and marks
    // whichever one currently sits in a thin horizontal band near the
    // top of the viewport as active. This is what keeps "HOME" active
    // when you're at the top, "PR SERVICES" active once you've scrolled
    // past it, and so on — independent of whether you clicked or just
    // scrolled by hand.
    useEffect(() => {
        const sections = navItems
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                // Shrinks the "visible" area to a band roughly 40%-45%
                // down the viewport, so a section only counts as active
                // once it's genuinely the one on screen, not the moment
                // a single pixel of it appears at the very bottom.
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <h1>ORANGE PR</h1>
            </div>

            <div className={styles.navGroup}>
                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                    <ul className={styles.navLinks}>
                        {navItems.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={activeId === id ? styles.activeLink : ""}
                                    onClick={(e) => handleNavClick(e, id)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className={`${styles.menuBtn} btn-premium`}
                    aria-label="Menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <img src={dotsMenuIcon} className={styles.menuIcon} alt="Menu Icon" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
