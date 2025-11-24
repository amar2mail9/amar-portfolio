import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                <span className="w-12 h-1 bg-cyan-500 mr-4 rounded-full"></span> Featured Projects
            </h2>

            {/* Main Project Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 overflow-hidden group"
            >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-0"></div>

                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-mono font-bold border border-cyan-500/20">
                            LATEST WORK
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Kraviona</h3>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            A high-performance backend for a digital agency and e-commerce platform. I architected the <b>RESTful API</b> ecosystem handling user authentication (JWT), dynamic product management, and automated email services via NodeMailer.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'].map(tag => (
                                <span key={tag} className="text-slate-300 font-mono text-sm">{tag}</span>
                            ))}
                        </div>

                        <div className="flex gap-6 pt-4">
                            <a href="https://kraviona.vercel.app" target="_blank" className="flex items-center gap-2 text-white font-bold hover:text-cyan-400 transition-colors">
                                <ExternalLink size={20} /> Live Demo
                            </a>
                            <a href="https://github.com/amar2mail9" target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                                <Github size={20} /> View Code
                            </a>
                        </div>
                    </div>

                    {/* Abstract Visual Representation */}
                    <div className="bg-slate-950/50 rounded-xl border border-slate-700/50 flex items-center justify-center min-h-[300px] group-hover:border-cyan-500/30 transition-colors">
                        <Layers size={80} className="text-slate-600 group-hover:text-cyan-400 transition-all duration-500" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
export default Projects;