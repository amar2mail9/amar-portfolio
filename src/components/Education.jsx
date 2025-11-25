// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            school: "IGNOU (Indira Gandhi National Open University)",
            year: "2024 – Present",
            location: "New Delhi",
            desc: "Focusing on Advanced Algorithms, Web Technologies, and Software Engineering principles.",
            current: true
        },
        {
            degree: "Diploma in Civil Engineering",
            school: "SBTE Bihar",
            year: "2020 – 2023",
            location: "Bihar",
            desc: "Graduated with First Class Distinction. Developed strong analytical and project management skills.",
            current: false
        }
    ];

    return (
        <section id="education" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <GraduationCap className="text-cyan-400" size={32} />
                        Education Journey
                    </h2>
                    <p className="text-slate-400">My academic path and qualifications.</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-slate-800 rounded-full"></div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-1/2 w-1 bg-gradient-to-b from-cyan-500 to-transparent rounded-full opacity-50"></div>

                    <div className="space-y-12">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full ring-4 ring-slate-900 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

                                {/* Date (Opposite side on desktop) */}
                                <div className="hidden md:block w-1/2 text-center md:text-right px-4">
                                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-mono font-bold ${index % 2 === 0 ? 'text-left md:text-left' : 'text-right'} ${item.current ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-500 bg-slate-900 border border-slate-800'}`}>
                                        {item.year}
                                    </span>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                                    <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all hover:-translate-y-1 shadow-lg relative group">
                                        {/* Mobile Date */}
                                        <div className="md:hidden mb-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold ${item.current ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-500 bg-slate-950'}`}>
                                                {item.year}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{item.degree}</h3>
                                        <h4 className="text-slate-300 font-medium mb-4 flex items-center gap-2">
                                            <Award size={16} className="text-cyan-500" /> {item.school}
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>

                                        <div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider font-bold">
                                            <MapPin size={12} /> {item.location}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Education;