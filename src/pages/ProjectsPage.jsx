import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectsPage = () => {
    return (
        <div className="min-h-screen text-text-light dark:text-text-inverted py-20 px-6 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-light dark:text-white">
                        My Work in Action
                    </h1>
                    <p className="text-xl text-text-muted dark:text-gray-300 font-light max-w-2xl mx-auto">
                        <b>A collection of projects showcasing my skills, creativity, and hands-on development experience.</b>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col h-full"
                        >
                            {/* Project Image */}
                            <div className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-md border border-gray-100 dark:border-gray-800 relative">
                                {project.website ? (
                                    <a href={project.website} target="_blank" rel="noreferrer">
                                        <img
                                            src={project.img}
                                            alt={project.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                                {project.status === "Developing" && (
                                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/50 flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <span className="text-xs font-bold text-green-400 tracking-wider uppercase">Developing...</span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-text-light dark:text-white mb-2">
                                        {project.name}
                                    </h2>
                                    <p className="text-sm font-medium text-text-muted dark:text-gray-400">
                                        {project.duration || "Duration TBD"}
                                    </p>
                                </div>

                                <p className="text-text-main dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-sm font-medium text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors cursor-default">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-6 mt-auto">
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-text-light dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors font-semibold"
                                        >
                                            <FaGlobe size={18} /> <span>Website</span>
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-text-light dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors font-semibold"
                                        >
                                            <FaGithub size={18} /> <span>Source</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
