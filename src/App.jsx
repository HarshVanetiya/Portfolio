import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
        setIsLoaded(true);
    }, []);

    return (
        <div className={`app ${isLoaded && "loaded"}`}>
            <Navbar />

            <Hero />
            <Projects />
            <Contact />
            <motion.footer
                className="footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p>&copy; 2025 hvanetiya</p>
                <p>hvanetiya@gmail.com | +91 7877172479</p>
            </motion.footer>
        </div>
    );
};

export default App;
