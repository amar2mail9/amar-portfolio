import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navItems = ['Home', 'Skills', 'Projects', 'Education', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 
            ${scrolled
                    ? 'bg-slate-950/70 backdrop-blur-lg border-b border-slate-800/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo - Matches Hero Gradient */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-cyan-500/50 transition duration-300">
                            <Code2 className="text-cyan-400" size={24} />
                        </div>
                    </div>
                    <span className="font-bold text-xl tracking-wide text-slate-200 group-hover:text-white transition-colors">
                        AMAR<span className="text-cyan-400">.DEV</span>
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="relative text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer group py-2"
                        >
                            {item}
                            {/* Animated Underline */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* Optional: 'Hire Me' button in Navbar for extra CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 text-sm font-bold text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    >
                        Let's Talk
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu - Glassmorphism Style */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item}
                                    to={item.toLowerCase()}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900/50 text-slate-400 hover:text-cyan-400 transition-all group border border-transparent hover:border-slate-800"
                                >
                                    <span className="font-medium">{item}</span>
                                    <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-cyan-400">→</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
export default Navbar;