// src/utils/scrollToSection.js

// Smoothly scrolls to a section by id. Reused by Navbar and Footer so the
// scroll behavior (and offset) only lives in one place.
export const scrollToSection = (e, id) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

// Single source of truth for id <-> label, shared by Navbar and Footer
// so they can never drift out of sync with each other.
export const navItems = [
    { id: "home", label: "HOME" },
    { id: "services", label: "PR SERVICES" },
    { id: "about", label: "ABOUT US" },
    { id: "contact", label: "CONTACT US" },
];