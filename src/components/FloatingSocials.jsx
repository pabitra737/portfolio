import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaShareAlt } from 'react-icons/fa';

const FloatingSocials = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socials = [
        { id: 1, icon: <FaGithub />, href: "https://github.com", color: "bg-gray-800" },
        { id: 2, icon: <FaLinkedin />, href: "https://linkedin.com", color: "bg-blue-700" },
        { id: 3, icon: <FaWhatsapp />, href: "https://whatsapp.com", color: "bg-green-500" },
        { id: 4, icon: <FaInstagram />, href: "https://instagram.com", color: "bg-pink-600" },
    ];

    return (
        <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 flex flex-col items-center gap-4">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col gap-4 mb-2">
                        {socials.map((social, index) => (
                            <motion.a
                                key={social.id}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 50, scale: 0 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0 }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1 }}
                                className={`w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg ${social.color}`}
                            >
                                <span className="text-xl">{social.icon}</span>
                            </motion.a>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-cyan-500/50 flex items-center justify-center text-2xl z-50"
            >
                {isOpen ? <span className="text-3xl">+</span> : <FaShareAlt />}
            </motion.button>
        </div>
    );
};

export default FloatingSocials;
