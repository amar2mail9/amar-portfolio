import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ['Home', 'Skills', 'Projects', 'Contact'];

    return (
        <nav className="fixed w-full top-5 z-50 px-4">
            <div className="max-w-5xl mx-auto bg-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-full px-6 py-3 shadow-2xl flex justify-between items-center">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 font-bold text-xl text-white tracking-wider"
                >
                    <Code2 className="text-cyan-400" />
                    <span>AMAR<span className="text-cyan-400">.DEV</span></span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
                    {navItems.map((item, index) => (
                        <Link
                            key={item} to={item.toLowerCase()} spy={true} smooth={true} offset={-100} duration={500}
                            className="hover:text-cyan-400 cursor-pointer transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Box */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-20 left-4 right-4 bg-slate-900 border border-slate-700 rounded-2xl p-4 flex flex-col space-y-4 shadow-xl md:hidden"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item} to={item.toLowerCase()} spy={true} smooth={true} offset={-100}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-300 hover:text-cyan-400 font-medium py-2 px-4 hover:bg-slate-800 rounded-lg"
                        >
                            {item}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};
export default Navbar;