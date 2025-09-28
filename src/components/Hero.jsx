import { motion } from "framer-motion";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

const Hero = () => {
    return (
        <motion.section
            id="home"
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div className="hero-badge">
                        <span>Hello, I'm</span>
                    </motion.div>
                    <div>
                        <motion.h1
                            className="glitch typewriter"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                        >
                            {[..."Harsh Vanetia"].map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>
                    <motion.h2 className="hero-subtitle" variants={fadeInUp}>
                        Full Stack Web Devloper
                    </motion.h2>
                    <motion.p className="hero-description" variants={fadeInUp}>
                        I'm a full-stack developer who loves building web
                        applications that work well and make people's lives
                        easier. I enjoy the whole journey—from figuring out what
                        users need to watching the final product come to life.
                        There's something satisfying about taking a messy
                        problem and crafting it into clean, functional code that
                        businesses can rely on.
                    </motion.p>
                    <motion.div
                        className="cta-buttons"
                        variants={staggerContainer}
                    >
                        <motion.a
                            href="#projects"
                            className="cta-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="cta-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                    <motion.div
                        className="social-links"
                        variants={staggerContainer}
                    >
                        <motion.a
                            href="https://github.com/HarshVanetiya"
                            target="_blank"
                            className="tooltip"
                        >
                            <i className="fab fa-github"></i>
                            <span className="tooltip-text">Github</span>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/harsh-vanetiya"
                            target="_blank"
                            className="tooltip"
                        >
                            <i className="fab fa-linkedin"></i>
                            <span className="tooltip-text">LinkedIn</span>
                        </motion.a>
                        <motion.a
                            href="https://drive.google.com/file/d/1TQRsB_4vfMBzKP9kh8inPPkQ3vhIDoys/view?usp=sharing"
                            target="_blank"
                            className="tooltip"
                        >
                            <i className="fas fa-file-alt"></i>
                            <span className="tooltip-text">Resume</span>
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="code-display">
                        <SyntaxHighlighter
                            language="javascript"
                            customStyle={{
                                margin: 0,
                                padding: "2rem",
                                height: "100%",
                                borderRadius: "20px",
                                background: "rgba(30, 41, 59, 0.8)",
                                backdropFilter: "blur(10px)",
                                marginBottom: 50,
                            }}
                            style={vscDarkPlus}
                        >{`let HarshVanetia = {
    currentRole: "Full Stack Web Developer",
    growthJourney:
        "Frontend intern → Full Stack Developer in 1 year",

    techStack: {
        frontend: ["React", "JavaScript", "HTML/CSS"],
        backend: ["Express.js", "Node.js"],
        databases: ["PostgreSQL with Prisma", "MongoDB with Mongoose"],
        cloud: ["AWS deployment", "CI/CD pipelines"],
        tools: ["Git", "Prettier", "Automated testing"],
        protocols: [
            "OCPP (EV charging communication)",
            "Webhooks",
            "REST APIs",
        ],
    },

    problemSolvingApproach: [
    "Root cause analysis specialist",
    "Generate multiple solution approaches", 
    ],

    adaptabilityProof: [
    "Quick learner: Mastered OCPP protocol recently",
    "Legacy expert: Enhanced 5-year-old vanilla JS code"
]};`}</SyntaxHighlighter>
                    </div>
                    <motion.div
                        className="floating-card"
                        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="card-content">
                            <span className="card-icon">
                                Currently working on EV CSMS
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
