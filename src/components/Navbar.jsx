import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Link configuration
    const links = [
        { id: 1, link: 'home', icon: <FaHome size={20} /> },
        { id: 2, link: 'about', icon: <FaUser size={20} /> },
        { id: 3, link: 'projects', icon: <FaBriefcase size={20} /> },
        { id: 4, link: 'contact', icon: <FaEnvelope size={20} /> },
    ];

    // Theme Logic
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (link) => {
        if (link === 'about') {
            // For about, always navigate to /about
            // We can let the RouterLink handle this or do it here.
            // But existing map structure handles render.
        } else {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    scroller.scrollTo(link, {
                        smooth: true,
                        duration: 500,
                        offset: 0
                    });
                }, 100);
            }
        }
    };

    return (
        <>
            {/* DESKTOP NAVBAR (Top) - Centered & Floating */}
            <motion.nav
                initial={{ y: -100, x: "-50%" }}
                animate={{ y: scrolled ? 0 : -100, x: "-50%" }}
                transition={{ duration: 0.5 }}
                className={`hidden md:flex fixed top-6 left-1/2 h-14 z-50 items-center justify-center px-8 rounded-full transition-all duration-300 ${scrolled
                    ? 'glass-nav shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="flex items-center gap-8">
                    <ul className="flex gap-8">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="relative px-2 py-1 cursor-pointer capitalize font-medium text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300 group"
                            >
                                {link === 'about' || link === 'projects' ? (
                                    <RouterLink
                                        to={`/${link}`}
                                        className={location.pathname === `/${link}` ? 'text-primary dark:text-primary-light font-bold' : ''}
                                    >
                                        {link}
                                    </RouterLink>
                                ) : (
                                    location.pathname === '/' ? (
                                        <ScrollLink
                                            to={link}
                                            smooth
                                            duration={500}
                                            spy={true}
                                            activeClass="text-primary dark:text-primary-light font-bold"
                                        >
                                            {link}
                                        </ScrollLink>
                                    ) : (
                                        <span onClick={() => handleNavClick(link)}>
                                            {link}
                                        </span>
                                    )
                                )}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700 mx-1"></div>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-text-main dark:text-yellow-400 hover:scale-110 transition-transform duration-200"
                    >
                        {darkMode ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE BOTTOM NAVIGATION */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: scrolled ? 0 : 100 }}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed bottom-4 left-4 right-4 h-14 glass-nav z-50 rounded-xl flex items-center justify-around px-2 shadow-2xl border border-white/20 dark:border-white/10"
            >
                {links.map(({ id, link, icon }) => (
                    <div
                        key={id}
                        className="p-2 text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer flex flex-col items-center justify-center relative"
                    >
                        {link === 'about' || link === 'projects' ? (
                            <RouterLink to={`/${link}`} className="flex flex-col items-center">
                                <span className="scale-75 mb-[-2px]">{icon}</span>
                                <span className="text-[9px] capitalize">{link}</span>
                            </RouterLink>
                        ) : (
                            location.pathname === '/' ? (
                                <ScrollLink
                                    to={link}
                                    smooth
                                    duration={500}
                                    spy={true}
                                    activeClass="active-nav-icon"
                                    className="flex flex-col items-center"
                                >
                                    <span className="scale-75 mb-[-2px]">{icon}</span>
                                    <span className="text-[9px] capitalize">{link}</span>
                                </ScrollLink>
                            ) : (
                                <div onClick={() => handleNavClick(link)} className="flex flex-col items-center">
                                    <span className="scale-75 mb-[-2px]">{icon}</span>
                                    <span className="text-[9px] capitalize">{link}</span>
                                </div>
                            )
                        )}
                    </div>
                ))}

                <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700 mx-1"></div>

                <button
                    onClick={toggleTheme}
                    className="p-1.5 text-text-main dark:text-yellow-400 hover:scale-110 transition-transform"
                >
                    {darkMode ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
                </button>
            </motion.div>
        </>
    );
};

export default Navbar;
