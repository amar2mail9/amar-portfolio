import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Wrench, Code, Terminal, Cpu, Globe } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Layout size={32} />,
            skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "TypeScript"],
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "Backend",
            icon: <Server size={32} />,
            skills: ["Node.js", "Express.js", "REST APIs", "Python", "GraphQL", "Socket.io"],
            color: "from-violet-500 to-purple-500"
        },
        {
            title: "Database",
            icon: <Database size={32} />,
            skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Firebase"],
            color: "from-emerald-500 to-green-500"
        },
        {
            title: "DevOps & Tools",
            icon: <Wrench size={32} />,
            skills: ["Git", "GitHub", "Docker", "AWS", "VS Code", "Postman"],
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-900 -z-20"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                        <span className="w-12 h-1 bg-cyan-500 mr-4 rounded-full"></span> Technical Proficiency
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        A comprehensive overview of the technologies and tools I use to build scalable digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-all group relative overflow-hidden"
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                            <div className="flex items-start gap-6">
                                <div className={`p-4 rounded-xl bg-slate-900 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    {cat.icon}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{cat.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-slate-900/80 text-slate-300 text-sm rounded-lg border border-slate-700/50 hover:text-white hover:border-cyan-500/30 transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;