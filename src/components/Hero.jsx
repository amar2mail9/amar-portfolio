import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">

            {/* Glowing Background Blob */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="max-w-4xl"
            >
                <span className="text-cyan-400 font-mono mb-4 block tracking-widest">HI, MY NAME IS</span>

                <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tight">
                    Amar Kumar.
                </h1>

                <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
                    I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">modern web apps.</span>
                </h2>

                <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
                    I am a <b>MERN Stack Developer</b> focused on creating clean, scalable, and user-friendly digital experiences. Currently building advanced e-commerce logic at <b>Kraviona</b>.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                    <Link to="projects" smooth={true} offset={-100}>
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all flex items-center gap-2">
                            Check out my work <ArrowRight size={20} />
                        </button>
                    </Link>

                    <div className="flex gap-4">
                        <a href="https://github.com/amar2mail9" target="_blank" className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all"><Github size={20} /></a>
                        <a href="https://linkedin.com/in/amarkumar96085" target="_blank" className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all"><Linkedin size={20} /></a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
export default Hero;