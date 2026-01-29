import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <div name="projects" id="projects" className="w-full min-h-screen text-text-light dark:text-text-inverted py-20 relative px-4 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-12 text-center">
                    <h2 className="text-6xl font-bold inline dark:text-gray-100">Some of My Projects</h2>
                    <p className="py-6 text-xl text-text-muted dark:text-gray-200">I've worked on a variety of projects. Here are a few of my favorites. You can find more on my projects page.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700"
                        >
                            {/* Project Image */}
                            <div className="w-full h-48 rounded-xl overflow-hidden mb-4 shadow-sm border border-gray-100 dark:border-gray-800 relative">
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
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                {project.status === "Developing" && (
                                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/50 flex items-center gap-2 pointer-events-none">
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
                                    <h3 className="text-xl font-bold text-text-light dark:text-white mb-1">{project.name}</h3>
                                    <p className="text-sm font-medium text-text-muted dark:text-gray-400">
                                        {project.duration || "Duration TBD"}
                                    </p>
                                </div>

                                <p className="text-sm text-text-main dark:text-gray-300 leading-relaxed mb-4 flex-grow line-clamp-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-text-main dark:text-gray-300">
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
                                            className="flex items-center gap-2 text-text-light dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors font-semibold text-sm"
                                        >
                                            <FaGlobe size={16} /> <span>Website</span>
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-text-light dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors font-semibold text-sm"
                                        >
                                            <FaGithub size={16} /> <span>Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
