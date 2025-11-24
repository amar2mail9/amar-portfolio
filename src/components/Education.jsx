// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            school: "IGNOU (Indira Gandhi National Open University)",
            year: "July 2024 – Present",
            location: "New Delhi",
            desc: "Deepening knowledge in Computer Science fundamentals, Operating Systems, and Programming (C/Python).",
            current: true
        },
        {
            degree: "Diploma in Civil Engineering",
            school: "SBTE Bihar",
            year: "Aug 2020 – July 2023",
            location: "Bihar",
            desc: "Completed technical diploma with a focus on engineering principles.",
            current: false
        }
    ];

    return (
        <section id="education" className="py-20 relative">
            <h2 className="text-3xl font-bold text-white mb-16 flex items-center justify-center">
                <GraduationCap className="mr-3 text-cyan-400" size={32} />
                Education Journey
            </h2>

            <div className="max-w-3xl mx-auto px-4">
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-0 border-l-2 border-slate-800 md:border-none pb-12 last:pb-0"
                    >
                        {/* Timeline Dot (Mobile only) */}
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500 md:hidden"></div>

                        <div className="md:flex gap-10 items-start">
                            {/* Date (Desktop) */}
                            <div className="hidden md:block w-1/3 text-right pt-2">
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-mono ${item.current ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-500'}`}>
                                    {item.year}
                                </span>
                            </div>

                            {/* Content Card */}
                            <div className="md:w-2/3 relative">
                                {/* Timeline Dot (Desktop) */}
                                <div className={`hidden md:block absolute -left-[49px] top-3 w-5 h-5 rounded-full border-4 border-slate-950 ${item.current ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'bg-slate-700'}`}></div>

                                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                                    <h4 className="text-slate-300 font-medium mb-3">{item.school}</h4>

                                    {/* Mobile Date */}
                                    <div className="md:hidden flex items-center gap-2 text-sm text-cyan-400 mb-3 font-mono">
                                        <Calendar size={14} /> {item.year}
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.desc}</p>

                                    <div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider">
                                        <MapPin size={12} /> {item.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;