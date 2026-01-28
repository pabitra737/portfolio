import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Contact = () => {
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
        <div name="contact" id="contact" className="w-full min-h-screen text-text-light dark:text-text-inverted p-4 py-20 transition-colors duration-300 relative overflow-hidden">

            <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">

                <div className="pb-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold inline dark:text-white"
                    >
                        Your Perspective
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="py-6 text-xl text-text-muted dark:text-gray-200 max-w-2xl mx-auto"
                    >
                        I’d love to hear from you - Drop a note below to share your perspective on my journey.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Side - Lottie Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center items-center w-full h-full min-h-[300px]"
                    >
                        <DotLottieReact
                            src="https://lottie.host/56795c6c-6744-424a-b52b-7f551b8c088c/9QG7mB8Y2W.lottie"
                            loop
                            autoplay
                            className="w-full max-w-md"
                        />
                        {/* Fallback comment: If the above URL fails, try: https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json */}
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 hover:shadow-cyan-500/20 transition-all duration-300">

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-text-main dark:text-gray-300 ml-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 text-text-light dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-400 dark:placeholder-gray-500"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-text-main dark:text-gray-300 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 text-text-light dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-400 dark:placeholder-gray-500"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-text-main dark:text-gray-300 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 text-text-light dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center w-full transition-all duration-300 shadow-lg ${status === 'success' ? 'bg-green-600 shadow-green-500/30' : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-cyan-500/30'}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : status === 'success' ? 'Message Sent!' : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
