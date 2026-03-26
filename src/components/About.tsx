"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { CheckCircle2, Network } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About ShilpzzZ Technologies</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Your trusted partner in <br />
                            <span className="text-gradient">digital transformation.</span>
                        </h3>

                        <p className="text-lg text-text-main/70 mb-8 leading-relaxed">
                            We don&apos;t just build software; we architect the future. Our team of world-class engineers and visionary designers craft bespoke, AI-powered solutions that empower your business to scale effortlessly, secure confidently, and innovate continuously.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {["Secure & Reliable Infrastructure", "Scalable Enterprise Solutions", "On-Time Delivery & Rapid Prototyping"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/90">
                                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Soft background glow */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

                        <GlassCard className="relative z-10 p-2 border-white/5 bg-[#0B0F19]/50 overflow-hidden h-[500px] flex items-center justify-center">
                            {/* Abstract AI network representation */}
                            <div className="absolute inset-0 border border-white/5 rounded-xl flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="w-[120%] h-[120%] border border-dashed border-primary/20 rounded-full flex items-center justify-center"
                                />
                                <motion.div
                                    animate={{ rotate: [0, -90, -180, -270, -360] }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[80%] h-[80%] border border-dashed border-secondary/20 rounded-full"
                                />

                                {/* Central Node */}
                                <div className="relative z-20 w-32 h-32 rounded-full glassmorphism flex items-center justify-center shadow-[0_0_50px_rgba(108,99,255,0.3)]">
                                    <Network className="w-12 h-12 text-white/80" />
                                </div>

                                {/* Connecting Nodes */}
                                {[...Array(6)].map((_, i) => {
                                    const nodePositions = [
                                        { top: "50%", left: "90%" },
                                        { top: "84.64%", left: "70%" },
                                        { top: "84.64%", left: "30%" },
                                        { top: "50%", left: "10%" },
                                        { top: "15.36%", left: "30%" },
                                        { top: "15.36%", left: "70%" },
                                    ];
                                    return (
                                        <motion.div
                                            key={i}
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                            className="absolute w-4 h-4 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,217,255,0.8)]"
                                            style={{
                                                top: nodePositions[i].top,
                                                left: nodePositions[i].left,
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </GlassCard>

                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 z-20 glassmorphism px-6 py-4 rounded-xl flex items-center gap-4 bg-white/5 border-primary/30"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">10+</div>
                            <div>
                                <div className="text-sm font-bold text-white">Years of</div>
                                <div className="text-xs text-text-main/60">Combined Expertise</div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
