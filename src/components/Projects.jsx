import { motion } from "framer-motion";
import React from "react";
// Make sure to import the new CSS file
import "./Timeline.css";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

// Data for your work experience timeline
const experiences = [
    {
        title: "EV Charging Station Management System (CSMS)",
        description:
            "Architected a full-stack EV CSMS with an OCPP server, payment integration via Razorpay, a partner subscription model, and deployed on AWS with a CI/CD pipeline.",
    },
    {
        title: "Secure Login Automation (Chrome Extension)",
        description:
            "Independently engineered a secure Chrome Extension for a client to grant employees portal access without revealing credentials. Delivered solo in 4 days to high praise.",
    },
    {
        title: "Gmail Automation Tool (Chrome Extension)",
        description:
            "Developed a complex extension that injected a custom UI into the Gmail interface for automated replies, meeting scheduling, and managing contracts/billing.",
    },
    {
        title: "Advanced Web Scraper (Chrome Extension)",
        description:
            "Created a specialized web scraping extension to extract data from sites requiring authentication, serving as a critical data pipeline for an AI-powered web application.",
    },
    {
        title: "Email Extractor Tool (Chrome Extension)",
        description:
            "Built a Chrome Extension to scrape and extract emails from web pages, featuring both single-page and bulk extraction capabilities using background scripts.",
    },
    {
        title: "Legacy System Maintenance",
        description:
            "Analyzed, debugged, and successfully resolved critical issues in a legacy client project written in Vanilla.js, improving stability and earning positive client feedback.",
    },
];

const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                My Projects
            </motion.h2>

            <motion.div
                className="project-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{
                            backgroundImage: "url('/projects/cms.png')",
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                    />
                    <h3>EV Charging Station Management System (CSMS)</h3>
                    <p>
                        Architected and developed a full-stack EV CSMS,
                        including a backend server using Node.js and an OCPP
                        server to establish real-time, bidirectional
                        communication with EV chargers. Designed and implemented
                        a PostgreSQL database schema to manage charger status,
                        user data, and partner information, feeding into an
                        analytics dashboard built with React. Engineered an
                        "app-less" EV charging solution by integrating
                        Razorpay's API and webhooks, enabling seamless payments
                        and session management via QR codes. Implemented a
                        subscription-based model for partners and a secure
                        wallet system for end-users. Established a CI/CD
                        pipeline for the application, automating deployment to
                        an AWS EC2 instance.
                    </p>
                    <div className="project-tech">
                        <span>Node</span>
                        <span>React</span>
                        <span>OCPP</span>
                        <span>Postgre</span>
                        <span>AWS</span>
                        <span>RazorPay SDK</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* --- WORK EXPERIENCE TIMELINE --- */}
            <motion.h2
                className="experience-heading"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                Work Experience
            </motion.h2>

            <motion.div
                className="timeline"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        variants={fadeInUp}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>{exp.title}</h3>
                            <p>{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
