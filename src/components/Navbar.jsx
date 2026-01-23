import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Link configuration
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'projects' },
        { id: 4, link: 'contact' },
    ];

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
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(link);
                if (element) {
                    scroller.scrollTo(link, {
                        smooth: true,
                        duration: 500,
                        offset: 0
                    });
                }
            }, 100);
        } else {
            scroller.scrollTo(link, {
                smooth: true,
                duration: 500,
                offset: 0
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: scrolled ? 0 : -100, x: "-50%" }}
            transition={{ duration: 0.5 }}
            className={`hidden md:flex fixed top-6 left-1/2 h-14 z-50 items-center justify-center px-8 rounded-full transition-all duration-300 ${scrolled
                ? 'glass-nav shadow-lg bg-black/20 backdrop-blur-md'
                : 'bg-transparent'
                }`}
        >
            <ul className="flex gap-8">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="relative px-2 py-1 cursor-pointer capitalize font-medium text-gray-300 hover:text-primary-light transition-colors duration-300 group"
                    >
                        {link === 'about' || link === 'projects' || link === 'contact' ? (
                            <RouterLink
                                to={`/${link}`}
                                className={location.pathname === `/${link}` ? 'text-primary-light font-bold' : ''}
                            >
                                {link}
                            </RouterLink>
                        ) : (
                            location.pathname === '/' ? (
                                <ScrollLink
                                    to={link}
                                    smooth
                                    duration={500}
                                    spy={false}
                                    className={link === 'home' ? 'text-primary-light font-bold' : ''}
                                >
                                    {link}
                                </ScrollLink>
                            ) : (
                                <span onClick={() => handleNavClick(link)}>
                                    {link}
                                </span>
                            )
                        )}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
