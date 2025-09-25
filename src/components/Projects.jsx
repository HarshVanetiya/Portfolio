import { motion } from "framer-motion";
import React from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

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
                {/* <motion.div
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
                    <h3>AI SaaS Platform</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis commodi, consequuntur provi
                    </p>
                    <div className="project-tech">
                        <span>Next.js</span>
                        <span>OpenAI</span>
                        <span>Tailwind</span>
                    </div>
                </motion.div>
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
                    <h3>AI SaaS Platform</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis commodi, consequuntur provi
                    </p>
                    <div className="project-tech">
                        <span>Next.js</span>
                        <span>OpenAI</span>
                        <span>Tailwind</span>
                    </div>
                </motion.div> */}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
