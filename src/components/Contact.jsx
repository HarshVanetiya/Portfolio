import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

const INITIALFORMDATA = {
    name: "",
    email: "",
    message: "",
};

const INITIALFORMSTATUS = {
    submitting: false,
    success: false,
    error: false,
    message: "",
};

const Contact = () => {
    const [formData, setFormData] = useState(INITIALFORMDATA);
    const [formStatus, setFormStatus] = useState(INITIALFORMSTATUS);

    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ ...INITIALFORMSTATUS, submitting: true });
        console.log(formData);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );

            setFormStatus({
                submitting: false,
                success: true,
                error: false,
                message: "Message sent successfully!",
            });

            setFormData(INITIALFORMDATA);
        } catch (error) {
            setFormStatus({
                submitting: false,
                success: false,
                error: true,
                message: "Failed to send message. Please try again.",
            });
        }
    };

    return (
        <motion.section
            id="contact"
            className="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
            >
                Get in Touch
            </motion.h2>

            <motion.div className="contact-content" variants={fadeInUp}>
                <motion.form className="contact-form" onSubmit={handelSubmit}>
                    <motion.input
                        type="text"
                        name="name"
                        placeholder="Your Name..."
                        required
                        whileFocus={{ scale: 1.02 }}
                        onChange={handelInputChange}
                        value={formData.name}
                    />
                    <motion.input
                        type="email"
                        name="email"
                        placeholder="Your Email..."
                        required
                        whileFocus={{ scale: 1.02 }}
                        onChange={handelInputChange}
                        value={formData.email}
                    />
                    <motion.textarea
                        name="message"
                        placeholder="Your Message..."
                        required
                        whileFocus={{ scale: 1.02 }}
                        onChange={handelInputChange}
                        value={formData.message}
                    />

                    <motion.button
                        className="submit-btn"
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={formStatus.submitting}
                    >
                        {formStatus.submitting ? "Sending..." : "Send Message"}
                    </motion.button>
                    {formStatus.message && (
                        <motion.div
                            className={`form-status ${
                                formStatus.success ? "success" : "error"
                            }`}
                        >
                            {formStatus.message}
                        </motion.div>
                    )}
                </motion.form>
            </motion.div>
        </motion.section>
    );
};

export default Contact;
