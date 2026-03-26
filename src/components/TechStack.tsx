"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    },
    {
        title: "AI / ML",
        skills: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face"]
    }
];

export function TechStack() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="tech" className="py-24 relative overflow-hidden bg-background">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-main">
                        Technologies We <span className="text-gradient">Master</span>
                    </h2>
                    <p className="text-lg text-text-main/70">
                        A robust, modern technology stack ensures the solutions we provide are highly performant, scalable, and secure.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    {/* Tabs Header */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-white/80 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full w-fit mx-auto shadow-sm">
                        {techCategories.map((category, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors
                                    ${activeTab === idx ? "text-primary dark:text-text-main" : "text-text-main/60 hover:text-text-main hover:bg-black/5 dark:hover:bg-white/5"}
                                `}
                            >
                                {activeTab === idx && (
                                    <motion.div
                                        layoutId="techTab"
                                        className="absolute inset-0 bg-white/90 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-full shadow-sm dark:shadow-[0_0_15px_rgba(108,99,255,0.2)]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full max-w-4xl min-h-75 flex items-center justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                            >
                                {techCategories[activeTab].skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: sIdx * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="relative group flex items-center justify-center px-6 py-4 rounded-full bg-white dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md cursor-default transition-all"
                                    >
                                        <span className="font-semibold text-text-main/80 group-hover:text-primary transition-colors text-center text-sm md:text-base">
                                            {skill}
                                        </span>
                                        {/* Hover Tooltip equivalent styling */}
                                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-text-main text-background text-xs font-bold px-3 py-1.5 rounded-md pointer-events-none shadow-lg">
                                            Expertise
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-text-main rotate-45" />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
