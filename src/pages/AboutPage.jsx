import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaGitAlt, FaGithub, FaTools, FaBriefcase, FaGraduationCap, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SiBootstrap, SiJquery, SiSpringboot, SiPostman } from 'react-icons/si';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile-avatar.png';
import rcmImg from '../assets/rcm.png';
import fmImg from '../assets/fm.png';
import nirmalyaImg from '../assets/nirmalya.png';
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
            link: "https://rcm.ac.in/",
            logo: rcmImg
        },
        {
            id: 2,
            degree: "B.Sc. in Zology",
            institution: "F.M. University",
            location: "Balasore, Odisha",
            year: "2021–2024",
            link: "https://fmuniversity.in/",
            logo: fmImg
        }
    ];

    const workExperience = [
        {
            id: 1,
            role: "Full Stack Development Intern",
            company: "Nirmalya Labs",
            location: "Bhubaneswar, Odisha",
            date: "Jun 2025 - Sep 2025",
            description: "Worked on a Healthcare ERP system by building responsive and interactive frontend components using HTML, CSS, and jQuery. Developed dynamic forms, dashboards, and data handling features to enhance user experience and support efficient healthcare operations.",
            logo: nirmalyaImg
        },
        {
            id: 2,
            role: "Freelance Web Developer",
            company: "Self Employed",
            location: "Remote",
            date: "Dec 2025 - Present",
            description: "Developed dynamic and responsive websites for various clients using React and Tailwind CSS. Focused on creating user-friendly interfaces and optimizing performance.",
            logo: profileImg
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
                        Hola, soy Pabitra Sahoo
                    </h2>
                    <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 max-w-2xl leading-relaxed">
                        You’ve landed in my creative nook. Grab a virtual coffee and take a look around. I'm thrilled to have you.
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
                        <p className="text-lg text-text-main dark:text-gray-300 leading-relaxed">
                            As a Full Stack Developer, I build complete and scalable applications with clean frontend design and strong backend logic. I focus on writing simple, maintainable code that is fast, secure, and reliable.

                            I enjoy solving problems by understanding user needs and turning complex ideas into easy solutions. I follow best practices, maintain code quality, and keep improving systems over time.

                            I believe in continuous learning and adapting to new technologies to create useful and reliable software.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-text-light dark:text-white border-b-2 border-primary w-fit pb-1">Career</h3>
                        <p className="text-lg text-text-main dark:text-gray-300 leading-relaxed">
                            I began my academic journey as a Zoology student, exploring biology and life sciences. Over time, I discovered a strong passion for technology and software development. Transitioning from Zoology to Computer Science was a significant challenge, but it taught me to be adaptable, resilient, and committed to learning.
                        </p>
                        <p className="text-lg text-text-main dark:text-gray-300 leading-relaxed">
                            Recentlty, I completed a Full Stack Development Internship at <strong><a href="https://www.nerp.in/" rel="noopener noreferrer">Nirmalya Labs</a></strong>, where I worked on a large-scale Healthcare ERP system. I used Java and Spring Boot on the backend and helped connect it smoothly with the frontend. In this internship, I learned how to maintain real-world large-scale code, follow best practices, and handle complex projects from start to finish. This experience taught me everything about building, managing, and improving professional software systems.
                        </p>
                        <p className="text-lg text-text-main dark:text-gray-300 leading-relaxed">
                            Through this journey, I have grown as a skilled developer who values learning, problem-solving, and building software that works efficiently and meets user needs.
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
                                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center shrink-0 overflow-hidden text-primary dark:text-primary-light">
                                        {edu.logo ? (
                                            <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                                        ) : (
                                            <FaGraduationCap size={24} />
                                        )}
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

                {/* Work Experience Section - Timeline Style */}
                <div className="flex flex-col gap-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-text-light dark:text-white">Work Experience</h3>

                    <div className="relative max-w-5xl mx-auto w-full px-4">
                        <div className="flex flex-col">
                            {workExperience.map((work, index) => (
                                <div key={work.id} className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ${index !== workExperience.length - 1 ? 'pb-12' : ''}`}>

                                    {/* Vertical Line Segment */}
                                    <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 ${index === 0 ? 'top-8' : 'top-0'} bottom-0 -z-10`}></div>

                                    {/* Timeline Dot & Logo */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 border-4 border-primary rounded-full shadow-lg z-10 overflow-hidden top-0">
                                        <img src={work.logo} alt={work.company} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Spacer for proper alignment */}
                                    <div className="w-full md:w-1/2"></div>

                                    {/* Content Card */}
                                    <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                        <div className={`relative p-4 rounded-2xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 ${index % 2 === 0 ? 'md:ml-auto md:mr-12' : 'md:ml-12 md:mr-auto'}`}>

                                            <div className="flex flex-col gap-2">
                                                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-primary bg-primary/10 rounded-full w-fit">
                                                    {work.date}
                                                </span>
                                                <h4 className="text-xl font-bold text-text-light dark:text-white group-hover:text-primary transition-colors">
                                                    {work.role}
                                                </h4>
                                                <div className="flex items-center gap-2 text-sm font-medium text-text-main dark:text-gray-300">
                                                    <span>{work.company}</span>
                                                    <span>•</span>
                                                    <span>{work.location}</span>
                                                </div>
                                                <p className="text-text-muted dark:text-gray-400 mt-2 text-sm leading-relaxed">
                                                    {work.description}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
