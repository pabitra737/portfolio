import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        <div name="contact" id="contact" className="w-full min-h-screen text-text-light dark:text-text-inverted p-4 py-20 transition-colors duration-300">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8 text-center md:text-left">
                    <p className="text-4xl font-bold inline border-b-4 border-primary dark:text-gray-100">Contact</p>
                    <p className="py-6 text-text-muted dark:text-gray-400">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2 gap-6 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-text-main dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-text-light dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-text-main dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-text-light dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-text-main dark:text-gray-300">Message</label>
                            <textarea
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-text-light dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full transition-all duration-300 shadow-md ${status === 'success' ? 'bg-green-600' : 'bg-primary hover:bg-primary-dark'}`}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : "Send Message"}
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
