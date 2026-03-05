"use client";

import { motion } from "framer-motion";

const techCategories = [
    {
        title: "Frontend",
        skills: ["React", "Angular", "Vue.js", "TypeScript", "Next.js"]
    },
    {
        title: "Backend",
        skills: [".NET Core", "Node.js", "Python", "C#"]
    },
    {
        title: "Database",
        skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins"]
    }
];

export function TechStack() {
    return (
        <section id="tech" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-gradient">Technologies We Master</h2>
                    <p className="text-lg text-text-main/70">
                        A robust, modern technology stack ensures the solutions we provide are highly performant, scalable, and secure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-8 rounded-2xl glassmorphism bg-white/[0.02] hover:bg-white/[0.04] transition-colors border-white/5"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-4 py-2 rounded-lg bg-[#121826] border border-white/10 text-sm font-medium text-text-main/90 shadow-sm hover:border-secondary/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)] hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
