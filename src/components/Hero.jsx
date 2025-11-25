import React from 'react';
import { ArrowRight, Github, Linkedin, Code2, Database, Server, Globe, Cpu, MousePointer2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        // Changed bg-slate-950 to bg-transparent
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-32 lg:pt-0">

            {/* --- BACKGROUND ELEMENTS REMOVED --- */}
            {/* If you want them back later, just paste the divs here */}

            {/* --- MAIN CONTENT --- */}
            <div className="relative z-10 max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* LEFT COLUMN: TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md text-cyan-400 text-sm font-mono mb-8 hover:bg-slate-800/50 transition-colors cursor-default shadow-lg"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                        </span>
                        Available for freelance & hire
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                        Designing the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                            Future of Web
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-slate-400 text-lg sm:text-xl max-w-lg leading-relaxed mb-10">
                        I'm <span className="text-white font-semibold">Amar Kumar</span>, a Full Stack Developer passionate about building robust, scalable, and pixel-perfect digital solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link to="projects" smooth={true} offset={-100} className="group relative">
                            {/* Button Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                            >
                                View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <div className="flex items-center justify-center gap-4">
                            <SocialButton href="https://github.com/amar2mail9" icon={<Github size={20} />} />
                            <SocialButton href="https://linkedin.com/in/amarkumar96085" icon={<Linkedin size={20} />} />
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: VISUAL ANIMATION */}
                <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-1000">

                    {/* Central Core */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative z-20 w-24 h-24 bg-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.15)]"
                    >
                        <Terminal size={40} className="text-cyan-400" />
                        <div className="absolute inset-0 bg-cyan-500/20 blur-xl -z-10 animate-pulse"></div>
                    </motion.div>

                    {/* Orbits */}
                    <OrbitRing size={300} duration={25} clockwise={true}>
                        <OrbitIcon icon={<Code2 size={20} />} color="text-blue-400" bg="bg-blue-500/10" border="border-blue-500/20" />
                        <OrbitIcon icon={<Database size={20} />} color="text-purple-400" bg="bg-purple-500/10" border="border-purple-500/20" delay={12.5} />
                    </OrbitRing>
                    <OrbitRing size={450} duration={35} clockwise={false}>
                        <OrbitIcon icon={<Server size={20} />} color="text-emerald-400" bg="bg-emerald-500/10" border="border-emerald-500/20" />
                        <OrbitIcon icon={<Cpu size={20} />} color="text-amber-400" bg="bg-amber-500/10" border="border-amber-500/20" delay={17.5} />
                    </OrbitRing>

                    {/* Floating Glass Cards */}
                    <FloatingCard
                        icon={<Globe size={20} />}
                        title="Projects"
                        value="10+"
                        color="text-cyan-400"
                        bg="bg-cyan-500/20"
                        position="top-10 right-0"
                        delay={0}
                    />
                    <FloatingCard
                        icon={<Code2 size={20} />}
                        title="Stack"
                        value="MERN"
                        color="text-pink-400"
                        bg="bg-pink-500/20"
                        position="bottom-20 left-0"
                        delay={1}
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <MousePointer2 size={20} />
            </motion.div>
        </section>
    );
};

// --- Helper Components ---

const SocialButton = ({ href, icon }) => (
    <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-slate-900/50 text-slate-300 rounded-full border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-900 transition-all backdrop-blur-sm shadow-sm"
    >
        {icon}
    </motion.a>
);

const OrbitRing = ({ size, duration, clockwise, children }) => (
    <motion.div
        style={{ width: size, height: size }}
        animate={{ rotate: clockwise ? 360 : -360 }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="absolute border border-slate-800/60 rounded-full flex items-center justify-center"
    >
        {children}
    </motion.div>
);

const OrbitIcon = ({ icon, color, bg, border, delay = 0 }) => (
    <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 ${bg} ${color} rounded-xl border ${border} backdrop-blur-md shadow-lg`}
        style={{ animationDelay: `${delay}s` }}
    >
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
            {icon}
        </motion.div>
    </div>
);

const FloatingCard = ({ icon, title, value, color, bg, position, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{
            opacity: { delay: 0.5, duration: 0.5 },
            y: { delay: delay, duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`absolute ${position} bg-slate-900/60 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/50 shadow-2xl z-30 min-w-[160px]`}
    >
        <div className="flex items-center gap-4">
            <div className={`p-3 ${bg} rounded-xl ${color}`}>
                {icon}
            </div>
            <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{title}</p>
                <p className="text-xl font-bold text-white">{value}</p>
            </div>
        </div>
    </motion.div>
);

export default Hero;