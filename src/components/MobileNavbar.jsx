import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiUser, FiCode, FiMail } from 'react-icons/fi';

const MobileNavbar = () => {
    const location = useLocation();

    const links = [
        { id: 1, link: 'home', icon: <FiHome size={24} />, label: 'Home', isPage: true, path: '/' },
        { id: 2, link: 'about', icon: <FiUser size={24} />, label: 'About', isPage: true, path: '/about' },
        { id: 3, link: 'projects', icon: <FiCode size={24} />, label: 'Projects', isPage: true, path: '/projects' },
        { id: 4, link: 'contact', icon: <FiMail size={24} />, label: 'Contact', isPage: true, path: '/contact' },
    ];

    const isActive = (item) => {
        return location.pathname === item.path;
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
                style={{ translateX: "-50%" }}
            >
                <div className="flex items-center justify-around bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl px-6 py-3 w-[90vw] max-w-[350px]">
                    {links.map((item) => {
                        // Check if we are on the home page
                        const isHome = location.pathname === '/';

                        // Active state logic for non-home pages
                        const active = isActive(item);

                        if (isHome) {
                            // On Home page: Use ScrollLink for scroll spy behavior
                            return (
                                <ScrollLink
                                    key={item.id}
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    activeClass="!text-primary-light font-bold"
                                    className="flex flex-col items-center gap-1 cursor-pointer transition-colors text-gray-400 hover:text-primary-light"
                                >
                                    {item.icon}
                                    <span className="text-[10px] font-medium">{item.label}</span>
                                </ScrollLink>
                            );
                        } else {
                            // On other pages: Standard RouterLink
                            return (
                                <RouterLink
                                    key={item.id}
                                    to={item.path}
                                    className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${active ? 'text-primary-light' : 'text-gray-400 hover:text-primary-light'}`}
                                >
                                    {item.icon}
                                    <span className="text-[10px] font-medium">{item.label}</span>
                                </RouterLink>
                            );
                        }
                    })}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default MobileNavbar;
