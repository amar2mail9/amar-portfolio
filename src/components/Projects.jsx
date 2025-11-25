import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers, Zap } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "Kraviona",
            category: "Backend",
            description: "High-performance backend for a digital agency. Architected RESTful APIs, JWT authentication, and automated email services.",
            tech: ["Node.js", "Express", "MongoDB", "JWT"],
            links: { live: "https://kraviona.vercel.app", github: "https://github.com/amar2mail9" },
            featured: true
        },
        {
            title: "TaskMaster",
            category: "Frontend",
            description: "A drag-and-drop productivity application for managing daily tasks with local storage persistence.",
            tech: ["React", "Beautiful DnD", "Tailwind", "Vite"],
            links: { live: "#", github: "https://github.com/amar2mail9" },
            featured: false
        },
        {
            title: "ChatBuzz",
            category: "Full Stack",
            description: "Real-time chat application featuring live notifications, room management, and message history.",
            tech: ["React", "Socket.io", "Node.js", "Redis"],
            links: { live: "#", github: "https://github.com/amar2mail9" },
            featured: false
        },
        {
            title: "Portfolio v1",
            category: "Frontend",
            description: "My first portfolio website built with simple HTML/CSS and vanilla JavaScript.",
            tech: ["HTML", "CSS", "JavaScript"],
            links: { live: "#", github: "https://github.com/amar2mail9" },
            featured: false
        }
    ];

    const categories = ["All", "Frontend", "Backend", "Full Stack"];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                            <span className="w-12 h-1 bg-cyan-500 mr-4 rounded-full"></span> Featured Projects
                        </h2>
                        <p className="text-slate-400 max-w-xl">
                            A selection of projects that demonstrate my technical expertise and problem-solving abilities.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex gap-2 mt-6 md:mt-0 bg-slate-900/50 p-1 rounded-lg border border-slate-800">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                                className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                            >
                                {/* Card Header / Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden group-hover:from-slate-800 group-hover:to-cyan-900/20 transition-colors">
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]"></div>
                                    <Layers className="text-slate-700 group-hover:text-cyan-500/50 transition-colors duration-500" size={64} />

                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-slate-950/50 backdrop-blur-md border border-slate-700 rounded-full text-xs font-mono text-cyan-400">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                        >
                                            <Github size={16} /> Code
                                        </a>
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
export default Projects;