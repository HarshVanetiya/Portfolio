import React, { useState } from "react";
import { motion } from "framer-motion";

// Framer Motion Variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

const Navbar = () => {
    // State to control the mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                className="logo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Portfolio
            </motion.div>

            {/* Mobile Menu Toggle Button */}
            <div className="menu-toggle" onClick={toggleMenu}>
                {/* Use a simple character or an icon component here */}
                {isOpen ? "✕" : "☰"}
            </div>

            <motion.ul
                // Apply the 'open' class conditionally for mobile styling
                className={`nav-links ${isOpen ? "open" : ""}`}
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                {/* Home Link */}
                <motion.li
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    // Close menu after clicking a link on mobile
                    onClick={() => setIsOpen(false)}
                >
                    <a href="#home">Home</a>
                </motion.li>

                {/* Projects Link */}
                <motion.li
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                >
                    <a href="#projects">Projects</a>
                </motion.li>

                {/* Contact Link */}
                <motion.li
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                >
                    <a href="#contact">Contact</a>
                </motion.li>
            </motion.ul>
        </motion.nav>
    );
};

export default Navbar;
