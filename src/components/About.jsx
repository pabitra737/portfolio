import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/about-3d.png';

const About = () => {
    return (
        <div name="about" id="about" className="w-full min-h-screen text-text-light dark:text-text-inverted py-20 flex items-center">
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side - 3D Design Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <img src={aboutImg} alt="About Me 3D" className="w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                </motion.div>

                {/* Right Side - About Summary */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-gray-100">About <span className="text-primary">Me</span></h2>
                    <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                        I'm a passionate developer who loves creating beautiful and functional web experiences.
                        With a strong foundation in modern web technologies, I turn ideas into reality through clean code and creative design.
                    </p>

                    <div className="mt-4">
                        <Link to="/about">
                            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300 shadow-lg hover:shadow-cyan-500/50">
                                Read More
                                <span className="group-hover:translate-x-1 duration-300 ml-2">→</span>
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default About;
