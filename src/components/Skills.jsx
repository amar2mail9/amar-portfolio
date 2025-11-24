import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        { title: "Frontend", icon: <Layout />, skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"] },
        { title: "Backend", icon: <Server />, skills: ["Node.js", "Express.js", "REST APIs", "Python"] },
        { title: "Database", icon: <Database />, skills: ["MongoDB", "Mongoose",] },
        { title: "DevOps & Tools", icon: <Wrench />, skills: ["Git", "GitHub", "VS Code", "Postman"] }
    ];

    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                <span className="w-12 h-1 bg-cyan-500 mr-4 rounded-full"></span> Tech Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700/50">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
export default Skills;