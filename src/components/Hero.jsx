import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import heroProfile from '../assets/hero-profile.jpg';
import resume from '../assets/Pabitra-Sahoo-Resume.pdf';

const Hero = () => {
    return (
        <div
            name="home"
            id="home"
            className="min-h-screen w-full text-text-light dark:text-text-inverted relative overflow-hidden transition-colors duration-300 pt-20"
        >
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 dark:opacity-20 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 bg-primary-light/30 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-72 h-72 md:w-96 md:h-96 bg-secondary-light/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-72 h-72 md:w-96 md:h-96 bg-primary-dark/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 md:px-10 relative z-10 md:flex-row py-8 md:py-0 gap-10 md:gap-0">

                {/* Text Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 gap-6 text-center md:text-left order-2 md:order-1"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-text-light dark:text-gray-100">
                        I'm a <br />
                        <span className="text-primary dark:text-primary-light text-2xl sm:text-3xl md:text-5xl">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'Frontend Developer',
                                    2000,
                                    'Backend Developer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 max-w-md text-base md:text-lg leading-relaxed">
                        I build modern, interactive web applications with a focus on user experience. Let's create something simple, clean, and amazing.
                    </p>

                    <div className="flex gap-4 items-center">
                        <Link to="contact" smooth duration={500}>
                            <button className="group text-white w-fit px-6 py-3 flex items-center rounded-lg bg-primary hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg">
                                Get in Touch
                            </button>
                        </Link>
                        <a href={resume} download="Pabitra-Sahoo-Resume.pdf" className="group text-text-main dark:text-white w-fit px-6 py-3 flex items-center rounded-lg border border-gray-400 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300">
                            Resume <FaFileDownload className="ml-2 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2"
                >

                    <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-primary/20 dark:bg-primary-dark/40 rounded-full blur-xl animate-pulse"></div>
                        <img
                            src={heroProfile}
                            alt="Profile"
                            className="rounded-full w-full h-full object-cover border-4 border-white dark:border-secondary shadow-xl relative z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
