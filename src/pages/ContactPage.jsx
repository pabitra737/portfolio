import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 2000);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Elements (Optional consistency with Hero) */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse animation-delay-2000"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl p-8"
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-text-light dark:text-white mb-2">Get in Touch</h1>
                    <p className="text-text-muted dark:text-gray-300">I'd love to hear from you. Send me a message!</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    <div className="relative group">
                        <FaUser className="absolute left-4 top-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full bg-white/5 dark:bg-black/20 border border-gray-300 dark:border-gray-600 rounded-xl py-3 pl-12 pr-4 text-text-light dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="relative group">
                        <FaEnvelope className="absolute left-4 top-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full bg-white/5 dark:bg-black/20 border border-gray-300 dark:border-gray-600 rounded-xl py-3 pl-12 pr-4 text-text-light dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Your Email"
                        />
                    </div>

                    <div className="relative group">
                        <FaCommentAlt className="absolute left-4 top-4 text-gray-400 group-focus-within:text-primary transition-colors mt-1" />
                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            className="w-full bg-white/5 dark:bg-black/20 border border-gray-300 dark:border-gray-600 rounded-xl py-3 pl-12 pr-4 text-text-light dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                            placeholder="Your Message..."
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === 'sending'}
                        className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all ${status === 'success'
                                ? 'bg-green-600 hover:bg-green-700'
                                : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                            }`}
                    >
                        {status === 'sending' ? (
                            'Sending...'
                        ) : status === 'success' ? (
                            'Message Sent!'
                        ) : (
                            <>
                                Send Message <FaPaperPlane />
                            </>
                        )}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactPage;
