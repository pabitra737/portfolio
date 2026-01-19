import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaGitAlt, FaGithub, FaTools, FaBriefcase, FaGraduationCap, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SiBootstrap, SiJquery, SiSpringboot, SiPostman } from 'react-icons/si';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile-avatar.png';
import { VscVscode } from "react-icons/vsc";

const AboutPage = () => {

    const skills = {
        frontend: [
            { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
            { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
            { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-400" /> },
            { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
            { name: 'jQuery', icon: <SiJquery className="text-blue-400" /> },
        ],
        backend: [
            { name: 'Java', icon: <FaJava className="text-red-500" /> },
            { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
            { name: 'REST API', icon: <FaTools className="text-gray-500" /> },
        ],
        database: [
            { name: 'SQL', icon: <FaDatabase className="text-orange-400" /> },
        ],
        tools: [
            { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
            { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
            { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
            { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        ]
    };

    const education = [
        {
            id: 1,
            degree: "MCA (Pursuing)",
            institution: "Regional College of Management",
            location: "Bhubaneswar, Odisha, India",
            year: "2024–2026",
            link: "https://rcm.ac.in/"
        },
        {
            id: 2,
            degree: "B.Sc. in Zology",
            institution: "B.N.I.H.S Kachuadi",
            location: "Kachuadi, Balasore, Odisha",
            year: "2021–2024",
            link: "#"
        }
    ];

    return (
        <div className="w-full min-h-screen text-text-light dark:text-text-inverted py-20 transition-colors duration-300">
            <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col gap-16">

                {/* Header & Navigation */}
                {/* <div className="flex items-center gap-4">
                     <Link to="/" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:scale-110 transition-transform shadow-md">
                        <FaArrowLeft />
                     </Link>
                     <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-gray-100">About Me</h1>
                </div> */}

                {/* Intro Section */}
                <div className="flex flex-col items-center text-center gap-6">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Hi, I am Pabitra Sahoo
                    </h2>
                    <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 max-w-2xl leading-relaxed">
                        Welcome to my portfolio! I'm thrilled to have you here. I am a passionate developer dedicated to building impactful web experiences.
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-pink-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src={profileImg}
                            alt="Pabitra Sahoo"
                            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                        />
                    </div>
                </div>

                {/* About & Career Narrative - VERTICAL STACK */}
                <div className="flex flex-col gap-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-text-light dark:text-white border-b-2 border-primary w-fit pb-1">About</h3>
                        <p className="text-text-main dark:text-gray-300 leading-relaxed">
                            I am an enthusiastic web developer with a keen eye for detail. My journey in technology is driven by curiosity and a desire to solve real-world problems through code. I love exploring new technologies and constantly upgrading my skills to stay relevant in the fast-paced tech world.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-text-light dark:text-white border-b-2 border-primary w-fit pb-1">Career</h3>
                        <p className="text-text-main dark:text-gray-300 leading-relaxed">
                            As a budding Full Stack Developer, my goal is to architect scalable and efficient web applications. I aspire to work in a dynamic environment where I can contribute to innovative projects while growing as a professional. I am focused on mastering modern frameworks and backend architectures to deliver complete digital solutions.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="flex flex-col gap-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-text-light dark:text-white">Technical Skills</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(skills).map(([category, items], idx) => (
                            <div
                                key={category}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
                            >
                                <h4 className="text-xl font-semibold capitalize mb-4 text-primary dark:text-primary-light border-b border-gray-200 dark:border-gray-700 pb-2">{category}</h4>
                                <ul className="space-y-3">
                                    {items.map((skill, index) => (
                                        <li key={index} className="flex items-center gap-3 text-text-main dark:text-gray-300">
                                            <span className="text-xl">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section - LIST LAYOUT */}
                <div className="flex flex-col gap-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-text-light dark:text-white">Education</h3>

                    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
                        {education.map((edu, index) => (
                            <a
                                href={edu.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow gap-4"
                            >
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-primary dark:text-primary-light">
                                        <FaGraduationCap size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-bold text-text-light dark:text-white">{edu.institution}</h4>
                                        <p className="text-text-main dark:text-gray-300 font-medium">{edu.degree}</p>
                                        <p className="text-sm text-text-muted dark:text-gray-400">{edu.location}</p>
                                    </div>
                                </div>

                                <div className="w-full md:w-auto text-left md:text-right">
                                    <span className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-text-main dark:text-gray-300 rounded-full text-sm font-medium">
                                        {edu.year}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Work Experience Section */}
                <div className="flex flex-col gap-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-text-light dark:text-white">Work Experience</h3>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border-l-8 border-primary max-w-4xl mx-auto w-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                                <FaBriefcase size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-text-light dark:text-white">Gaining Practical Experience</h4>
                                <p className="text-text-muted dark:text-gray-400 mt-2 leading-relaxed">
                                    I have been actively involved in building real-world projects, including e-commerce platforms and portfolio websites, applying agile methodologies. My hands-on experience comes from rigorous self-directed learning, academic projects, and internships where I collaborated with teams to deliver responsive and user-centric web solutions. I am eager to bring this practical knowledge to a professional development team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
