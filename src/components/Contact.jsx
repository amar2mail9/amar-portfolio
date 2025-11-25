// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-cyan-400 font-mono mb-6 tracking-widest">WHAT'S NEXT?</h2>
                        <h3 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                            Let's work <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">together.</span>
                        </h3>
                        <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <a
                            href="mailto:amar47kumar47@gmail.com"
                            className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-white/10 hover:shadow-cyan-400/20"
                        >
                            Say Hello <Mail size={20} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid gap-6"
                    >
                        <a href="mailto:amar47kumar47@gmail.com" className="group bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all flex items-center gap-6">
                            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-sm font-mono mb-1">Email</h4>
                                <p className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">amar47kumar47@gmail.com</p>
                            </div>
                        </a>

                        <a href="tel:+919608553167" className="group bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all flex items-center gap-6">
                            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-sm font-mono mb-1">Phone</h4>
                                <p className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">+91 9608553167</p>
                            </div>
                        </a>

                        <div className="group bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-6">
                            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-sm font-mono mb-1">Location</h4>
                                <p className="text-white font-bold text-lg">East Delhi, India</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-6">
                        {[
                            { icon: <Github size={20} />, href: "https://github.com/amar2mail9" },
                            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/amarkumar96085" },
                            { icon: <Twitter size={20} />, href: "#" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Amar Kumar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Contact;