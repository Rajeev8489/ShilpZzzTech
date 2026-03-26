"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ChevronRight, Code2, Cpu, Zap, LayoutDashboard, Globe } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function Hero() {
    return (
        <section id="home" className="relative md:min-h-screen pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center">
            {/* Background Particles/Noise simulation via CSS in AnimatedBackground, handled globally */}

            <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism mb-6 text-sm font-medium text-secondary border-secondary/20">
                        <Zap className="w-4 h-4" />
                        <span>Next-Gen SaaS Solutions</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Empowering Business with <br />
                        <span className="text-gradient">AI Innovation</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-main/80 mb-10 leading-relaxed max-w-xl">
                        We build AI-powered software solutions that accelerate innovation, automate processes, and transform digital businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="gradient" size="lg" className="w-full sm:w-auto text-base group gap-2 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] transition-shadow">
                                <LayoutDashboard className="w-5 h-5" />
                                Explore Services
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base gap-2 bg-background/50 backdrop-blur-md">
                                <Globe className="w-5 h-5" />
                                Start Your Project
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Content - Visuals */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative lg:h-screen flex items-center justify-center lg:justify-end"
                >
                    {/* Interactive UI blocks that float on the right */}
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/4 right-0 lg:-right-10 z-20"
                    >
                        <GlassCard className="flex items-center justify-center p-2 bg-surface/80 backdrop-blur-xl border-secondary/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                            <Cpu className="w-6 h-6 text-secondary" />
                            <div className="ml-4">
                                <div className="text-sm text-text-main font-semibold">AI Processor Status</div>
                                <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Running optimally
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Floating UI Widget Left */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 left-0 lg:-left-20 z-20 hidden md:block"
                    >
                        {/*
                        <GlassCard className="flex items-center gap-4 p-4 pr-12 border-primary/20 bg-background/60 shadow-[0_0_20px_rgba(108,99,255,0.1)]">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                <Code2 className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <div className="text-xs text-text-main/60 font-medium">Deployment</div>
                                <div className="text-sm text-text-main font-bold">Vercel Edge Ready</div>
                            </div>
                        </GlassCard>
                         */}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
