"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ChevronRight, Code2, Cpu, Zap } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const codeSnippet = `const aiModel = new ShilpzzzAI({
  optimization: "maximum",
  performance: "unmatched",
  growth: true
});

await aiModel.accelerate();`;

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
                        We build AI-powered cutting-edge software solutions that drive innovation and accelerate business growth. Experience the future of technology today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="gradient" size="lg" className="w-full sm:w-auto text-base group gap-2">
                            Explore Services
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                            Get In Touch
                        </Button>
                    </div>
                </motion.div>

                {/* Right Content - Visuals */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
                >
                    {/* Decorative code snippet widget */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 lg:-left-12 z-20 w-80 shadow-2xl"
                    >
                        <GlassCard className="!p-0 overflow-hidden border-primary/30 bg-[#0B0F19]/80 backdrop-blur-xl">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="text-xs text-text-main/50 ml-2 font-mono">ai-core.ts</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="text-sm font-mono text-secondary">
                                    <code>{codeSnippet}</code>
                                </pre>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* AI CPU Node representation */}
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-10 right-0 z-20"
                    >
                        <GlassCard className="flex items-center justify-center p-6 bg-[#0B0F19]/80 backdrop-blur-xl border-secondary/30 shadow-[0_0_30px_rgba(0,217,255,0.2)]">
                            <Cpu className="w-12 h-12 text-secondary" />
                            <div className="ml-4">
                                <div className="text-sm text-text-main font-semibold">AI Processor Status</div>
                                <div className="text-xs text-green-400 mt-1 flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    Running optimally
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Central floating abstract graphic (could be an image or CSS art) */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 z-10 rounded-full border border-primary/20 flex items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-secondary/20 before:scale-110 before:rotate-45 after:absolute after:inset-0 after:rounded-full after:border after:border-primary/40 after:scale-125">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-10%] rounded-full border border-dashed border-secondary/30"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-30%] rounded-full border border-dashed border-primary/20"
                        />
                        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary blur-xl opacity-60 animate-pulse" />
                        <Code2 className="absolute w-16 h-16 text-white/50 backdrop-blur-sm" />
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
