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
                    <h3>Ev CMS</h3>
                    <p>
                        Communicate with ev chargers via OCPP and provide app
                        less solution for ev charging station with overall
                        analytics and business report.
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
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Projects;
