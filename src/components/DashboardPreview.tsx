"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { CheckCircle, BarChart3, Users, Zap, LayoutDashboard } from "lucide-react";

export function DashboardPreview() {
    return (
        <section id="demo" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary mb-6 text-sm font-semibold tracking-wide"
                    >
                        SaaS EXPERIENCE
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-text-main mb-6"
                    >
                        Built for <span className="text-gradient">Scale</span> & Velocity
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-main/70 max-w-2xl mx-auto"
                    >
                        Get a glimpse into the premium, high-performance dashboards we architect. We design interfaces that your users will fall in love with.
                    </motion.p>
                </div>

                {/* Dashboard UI Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto max-w-5xl"
                >
                    {/* Background Gradients */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/30 blur-[120px] rounded-full pointer-events-none" />

                    {/* Main Application Window mock */}
                    <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/20 glassmorphism overflow-hidden shadow-2xl flex flex-col h-150">

                        {/* Fake Browser/App Header */}
                        <div className="h-12 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-surface/50 flex items-center px-4 gap-4">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80" />
                                <span className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80" />
                            </div>
                            <div className="h-6 flex-1 max-w-sm mx-auto bg-white dark:bg-background/50 rounded-md border border-black/10 dark:border-white/5 flex items-center justify-center">
                                <span className="text-xs text-text-main/60 dark:text-text-main/40">app.shilpzzz.tech</span>
                            </div>
                        </div>

                        {/* App Body grid */}
                        <div className="flex-1 p-6 grid grid-cols-12 gap-6 overflow-hidden">

                            {/* Sidebar Mock */}
                            <div className="hidden md:flex col-span-3 flex-col gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`h-10 rounded-lg flex items-center px-3 ${i === 0 ? 'bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30' : 'bg-black/5 dark:bg-surface/30'}`}>
                                        <div className={`w-5 h-5 rounded ${i === 0 ? 'bg-primary/50' : 'bg-black/10 dark:bg-white/10'} mr-3`} />
                                        <div className={`h-2 rounded w-24 ${i === 0 ? 'bg-primary/70' : 'bg-black/20 dark:bg-white/20'}`} />
                                    </div>
                                ))}
                            </div>

                            {/* Main Content Area */}
                            <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
                                {/* Top Stats */}
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { title: "Total Users", val: "124,592", icon: Users, color: "text-blue-500 dark:text-blue-400" },
                                        { title: "Server Load", val: "14%", icon: Zap, color: "text-amber-500 dark:text-amber-400" },
                                        { title: "Active Tasks", val: "1,402", icon: LayoutDashboard, color: "text-primary" }
                                    ].map((stat, i) => (
                                        <GlassCard key={i} className="p-4 flex flex-col gap-2 bg-black/5 border-black/5 dark:bg-surface/80 dark:border-white/10">
                                            <div className="flex justify-between items-center">
                                                <div className="h-2 w-16 bg-black/10 dark:bg-white/20 rounded" />
                                                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                            </div>
                                            <div className="text-2xl font-bold text-text-main mt-2">{stat.val}</div>
                                            <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded overflow-hidden mt-1">
                                                <div className="h-full bg-green-500 dark:bg-green-400 w-3/4" />
                                            </div>
                                        </GlassCard>
                                    ))}
                                </div>

                                {/* Main Chart Area mock */}
                                <GlassCard className="flex-1 bg-black/5 border-black/5 dark:bg-surface/80 dark:border-white/10 p-6 flex flex-col">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-4 w-32 bg-black/10 dark:bg-white/20 rounded" />
                                        <div className="flex gap-2">
                                            <div className="h-6 w-16 bg-black/10 dark:bg-white/10 rounded" />
                                            <div className="h-6 w-16 bg-primary/20 rounded" />
                                        </div>
                                    </div>

                                    {/* Animated Chart Bars */}
                                    <div className="flex-1 flex items-end justify-between gap-2 pb-4 border-b border-black/10 dark:border-white/10">
                                        {[40, 70, 45, 90, 65, 85, 40, 60, 100, 75, 50, 80].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                                                className="w-full bg-linear-to-t from-primary/20 to-secondary/80 rounded-t-sm"
                                            />
                                        ))}
                                    </div>

                                    {/* Recent Activity List */}
                                    <div className="mt-6 flex flex-col gap-3">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                                                    <div className="flex flex-col gap-1">
                                                        <div className="h-2.5 w-40 bg-black/20 dark:bg-white/30 rounded" />
                                                        <div className="h-1.5 w-24 bg-black/10 dark:bg-white/10 rounded" />
                                                    </div>
                                                </div>
                                                <div className="h-2 w-12 bg-black/20 dark:bg-white/20 rounded" />
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>

                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
