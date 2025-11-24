// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="py-20 mt-20 border-t border-slate-800/50 bg-slate-950/50">
            <div className="max-w-4xl mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-cyan-400 font-mono mb-4">WHAT'S NEXT?</h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        I am currently open for full-time roles or freelance projects. If you need a MERN stack developer to build your next big idea, get in touch!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Email Card */}
                    <a href="mailto:amar47kumar47@gmail.com" className="group bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all text-center">
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">Email Me</h3>
                        <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">amar47kumar47@gmail.com</p>
                    </a>

                    {/* Phone Card */}
                    <a href="tel:+919608553167" className="group bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all text-center">
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">Call Me</h3>
                        <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">+91 9608553167</p>
                    </a>
                </div>

                {/* Footer Details */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 mb-4 md:mb-0">
                        <MapPin size={16} /> East Delhi, India (110096)
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/amar2mail9" target="_blank" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="https://linkedin.com/in/amarkumar96085" target="_blank" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </div>

                    <p className="text-slate-600 text-sm mt-4 md:mt-0">© 2025 Amar Kumar</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;